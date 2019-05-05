const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const Collection = require('./collection');
const EventEmitter = require('./events');

// Promisify asynchronous functions
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const unlink = promisify(fs.unlink);
const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);

/**
 * Creates an TrustDB instance.
 * 
 * @extends EventEmitter
 * @borrows TrustDB#saveDatabase as TrustDB#save
 */
class TrustDB extends EventEmitter {
  constructor() {
    super();
    this.events = {
      'autosave': [],
    };
  }

  /**
   * Create a connection to a new database. If the file in the `filepath` already exists,
   * it will be loaded and the collections (and optionally the settings)
   * will be applied to this instance, unless the setting `overwriteExisting` is set to true.
   * 
   * @param {string} filepath database filepath
   * @param {object} [settings={}] some database related settings
   * @param {boolean} [settings.autosave] whether the database should be automatically saved
   * @param {number} [settings.autosaveInterval] interval for the autosave to trigger
   * @param {boolean} [settings.restoreSettings] restores settings from the loaded database (new settings will overwrite loaded settings!)
   * @param {boolean} [settings.overwriteExisting] does not load an existing database with the same name and instead overwrites it
   * @returns {Promise<void | NodeJS.ErrnoException>} a Promise that resolves after everything is configured
   */
  connect(filepath, settings = {}) {
    return new Promise(async (resolve, reject) => {
      this.filepath = filepath || join(__dirname, 'TrustDB.json');
      this.created = new Date().toISOString();
      this.collections = [];
      this.oldSettings = {};
    
      this.autosave = false;
      this.autosaveInterval = 4000;
      this.autosaveHandler;
      this.restoreSettings = false;
      this.overwriteExisting = false;

      if (!settings.overwriteExisting) {
        await this.loadDatabase()
          .then(db => {
            this._applyDatabase(db);
            if (settings.restoreSettings === true) {
              // Order matters - overwrite oldSettings with new settings.
              settings = Object.assign({}, this.oldSettings, settings);
            }
          })
          .catch(err => {
            // File exists but an error occured.
            if (err.code !== 'ENOENT') {
              reject(err);
            }
          });
      }

      this.configureSettings(settings);
      resolve();
    });
  }

  /**
   * Create a collection with the given name. Returns an existing collection
   * in case a collection with the same name already eixists in this database.
   * 
   * Use `deleteCollection` before creating or adding a collection with the same name.
   * 
   * @param {string} name name of the collection
   * @returns {Promise<Collection | Error>} a Promise with the created collection or exisiting collection with the same name
   */
  createCollection(name) {
    return new Promise((resolve, reject) => {
      if (typeof name !== 'string') {
        reject(new TypeError('Collection name has to be a string'));
      }
      if (name === '') {
        reject(new Error('Collection name must be at least one character long'));
      }

      let collection = this.collections.find(c => c.name === name);
      if (collection === undefined) {
        collection = new Collection(name);
        this.collections.push(collection);
      }

      resolve(collection);
    });
  }

  /**
   * IMPORTANT: This function does **not** create a new collection. Use `createCollection` to create a new collection.
   * 
   * Add a collection to the database. Returns an existing collection
   * in case a collection with the same name already eixists in this database.
   * 
   * Use `deleteCollection` before creating or adding a collection with the same name.
   * 
   * @param {Collection} collection collection to add
   * @returns {Promise<Collection | Error>} a Promise with the added collection or exisiting collection with the same name
   */
  addCollection(collection) {
    return new Promise((resolve, reject) => {
      if (!(collection instanceof Collection)) {
        reject(new TypeError('Parameter `collection` has to be an instance of Collection'));
      }

      let foundCollection = this.collections.find(c => c.name === collection.name);

      if (foundCollection === undefined) {
        this.collections.push(collection);
      } else {
        collection = foundCollection;
      }

      resolve(collection);
    });
  }

  /**
   * Delete a collection with the given name or a Collection instance.
   * 
   * @param {Collection | string} collection name of the collection or a Collection instance
   * @returns {Promise<Collection | Error>} a Promise with the deleted collection
   */
  deleteCollection(collection) {
    return new Promise((resolve, reject) => {
      const name = collection instanceof Collection
        ? collection.name
        : collection;

      if (typeof name !== 'string') {
        reject(new TypeError('Collection name has to be a string'));
      }
      if (name === '') {
        reject(new Error('Collection name must be at least one character long'));
      }

      const idx = this.collections.findIndex(c => c.name === name);

      if (idx === -1) {
        reject(new Error('No collection with that name was found'));
      }

      const removed = this.collections.splice(idx, 1);

      resolve(...removed);
    });
  }

  /**
   * Retrieve a collection by name.
   * 
   * @param {string} name name of the collection
   * @returns {Promise<Collection | Error>} a Promise with the matching collection
   */
  getCollection(name) {
    return new Promise((resolve, reject) => {
      if (typeof name !== 'string') {
        reject(new TypeError('Collection name has to be a string'));
      }
      if (name === '') {
        reject(new Error('Collection name must be at least one character long'));
      }

      const collection = this.collections.find(c => c.name === name);

      if (collection === undefined) {
        reject(new Error('No collection with that name was found'));
      }

      resolve(collection);
    });
  }

  /**
   * Save the database with its collections,
   * settings and metadata to the specified file.
   * 
   * @returns {Promise<void | NodeJS.ErrnoException>} a Promise which resolves nothing and rejects the error
   */
  saveDatabase() {
    return new Promise(async (resolve, reject) => {
      const exportedDb = this._exportDatabase();
      const filepathParts = this.filepath.split('/');

      if (filepathParts.length > 1) {
        const path = filepathParts
          .slice(0, filepathParts.length-1)
          .join('/');
        await mkdir(path, { recursive: true });
      }
      writeFile(this.filepath, exportedDb)
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Delete a database including the locally stored file (if it exists).
   * 
   * @returns {Promise<void | NodeJS.ErrnoException>} a Promise which resolves nothing and rejects the error
   */
  deleteDatabase() {
    return new Promise((resolve, reject) => {
      const isFile = stat(this.filepath)
        .then(stats => stats.isFile())
        .catch(err => {
          if (err.code !== 'ENOENT') {
            reject(err);
          }
          resolve();
        });

      if (!isFile) {
        reject(new Error('Database to delete is not a file.'));
      }

      unlink(this.filepath)
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Load a database from a file and parse its content.
   * 
   * @returns {Promise<object | NodeJS.ErrnoException>} a Promise with the parsed database
   */
  loadDatabase() {
    return new Promise((resolve, reject) => {
      const isFile = stat(this.filepath)
        .then(stats => stats.isFile())
        .catch(reject);

      if (!isFile) {
        reject(new Error('Database to load is not a file.'));
      }

      readFile(this.filepath, 'utf-8')
        .then(content => resolve(JSON.parse(content)))
        .catch(reject);
    });
  }

  /**
   * Clear the database by deleting all its collections.
   */
  clear() {
    this.collections.length = 0;
  }

  /**
   * (Re-)Configure the settings and overwrite the default values.
   * 
   * @param {object} [settings={}] database settings
   * @param {boolean} [settings.autosave] whether the database should be automatically saved
   * @param {number} [settings.autosaveInterval] interval for the autosave to trigger
   */
  configureSettings(settings = {}) {
    if (typeof settings !== 'object' || Array.isArray(settings)) {
      // Keep default configurations.
      return;
    }

    if (settings.hasOwnProperty('autosave') && typeof settings.autosave === 'boolean') {
      // Actually turn off autosave.
      if (this.autosave === true && settings.autosave === false) {
        this._disableAutosave();
      }
      this.autosave = settings.autosave;
    }

    if (settings.hasOwnProperty('autosaveInterval') && typeof settings.autosaveInterval === 'number') {
      this.autosaveInterval = settings.autosaveInterval;
    }

    // Doesn't serve any purpose at this point except
    // giving the information that old settings were restored.
    if (settings.hasOwnProperty('restoreSettings') && typeof settings.restoreSettings === 'boolean') {
      this.restoreSettings = settings.restoreSettings;
    }

    // Doesn't serve any purpose at this point except giving the information
    // that an existing database could have possibly been overwritten.
    if (settings.hasOwnProperty('overwriteExisting') && typeof settings.overwriteExisting === 'boolean') {
      this.overwriteExisting = settings.overwriteExisting;
    }

    if (this.autosave === true) {
      // In case the settings were reconfigured
      if (this.autosaveHandler !== undefined) {
        this._disableAutosave();
      }
      this._enableAutosave();
    }
  }

  /**
   * Internal function.
   * 
   * Turn the database into a JSON string.
   * 
   * @returns {string} database as JSON string
   */
  _exportDatabase() {
    return JSON.stringify({
      filepath: this.filepath,
      collections: this.collections.map(c => c._export()),
      settings: {
        autosave: this.autosave,
        autosaveInterval: this.autosaveInterval,
        restoreSettings: this.restoreSettings,
      },
      metadata: {
        created: this.created,
        saved: new Date().toISOString(),
      },
    });
  }

  /**
   * Internal function.
   * 
   * Apply the collections and other data of a database object.
   * 
   * @param {object} db parsed JSON database
   */
  _applyDatabase(db) {
    if (db.hasOwnProperty('metadata') &&
        db.metadata.hasOwnProperty('created')) {
      this.created = db.metadata.created;
    }

    if (Array.isArray(db.collections)) {
      this.collections = db.collections
        .map(collection => {
          const c = new Collection(collection.name);
          c.documents.push(...collection.documents);
          c.timestamp = collection.timestamp;
          return c;
        });
    }

    Object.assign(this.oldSettings, db.settings);
  }

  /**
   * Internal function.
   * 
   * Enables the autosave handler.
   * 
   * @fires TrustDB#autosave
   */
  _enableAutosave() {
    if (this.autosaveHandler !== undefined) {
      return;
    }

    this.autosaveHandler = setInterval(async () => {
      const result = await this.saveDatabase()
        .catch(err => err);
      await this.emit('autosave', result);
    }, this.autosaveInterval);
  }

  /**
   * Internal function.
   * 
   * Disables the autosave handler.
   */
  _disableAutosave() {
    if (this.autosaveHandler !== undefined) {
      clearInterval(this.autosaveHandler);
      this.autosaveHandler = undefined;
    }
  }
}

// Aliases
TrustDB.prototype.save = TrustDB.prototype.saveDatabase;

module.exports = TrustDB;