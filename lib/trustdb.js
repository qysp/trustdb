const fs = require('fs');
const { promisify } = require('util');

const Collection = require('./collection');
const EventEmitter = require('./events');
const { isPlainObject, mkdirp } = require('./helpers');

// Promisify asynchronous functions
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const copyFile = promisify(fs.copyFile);
const unlink = promisify(fs.unlink);
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
    this._events = {
      'autosave': [],
    };
  }

  /**
   * Create a connection to a new database. If the file in the `filepath` already exists,
   * it will be loaded and the collections (and optionally the settings, too)
   * will be applied to this instance, unless the setting `overwriteExisting` is set to true.
   * 
   * @param {string} filepath database filepath
   * @param {object} [settings={}] database related optional settings
   * @param {boolean} [settings.autosave] whether the database should be automatically saved
   * @param {number} [settings.autosaveInterval] interval for the autosave in milliseconds
   * @param {boolean} [settings.restoreSettings] restore settings from the loaded database (new settings will overwrite loaded settings!)
   * @param {boolean} [settings.overwriteExisting] overwrite existing database with the same filepath
   * @returns {Promise<void | Error>} a Promise that resolves after everything is configured
   */
  connect(filepath, settings = {}) {
    return new Promise(async (resolve, reject) => {
      if (typeof filepath !== 'string' || filepath === '') {
        reject(new Error('Parameter `filepath` must be a string and at least one character long'));
      }

      this.filepath = filepath;
      this.created = new Date().toISOString();
      this._collections = [];

      this.settings = {};
      this._autosave = false;
      this._autosaveInterval = 4000;
      this.autosaveHandler;

      if (settings.overwriteExisting !== true) {
        await this._restoreDatabase(settings).catch(reject);
      }

      this.configureSettings(this.settings);
      resolve();
    });
  }

  /**
   * Create a collection with the given name. Returns an existing collection
   * in case a collection with the same name already eixists in this database.
   * 
   * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
   * 
   * @param {string} name name of the collection
   * @returns {Promise<Collection | Error>} a Promise with the created collection or exisiting collection with the same name
   */
  createCollection(name) {
    return new Promise((resolve, reject) => {
      if (typeof name !== 'string' || name === '') {
        reject(new TypeError('Parameter `name` must be a string and at least one character long'));
      }

      let collection = this._collections.find(c => c.name === name);
      if (collection === undefined) {
        collection = new Collection(name);
        this._collections.push(collection);
      }

      resolve(collection);
    });
  }

  /**
   * IMPORTANT: This function does **not** create a new collection. Use {@link TrustDB#createCollection} to create a new collection.
   * 
   * Add a collection to the database. Returns an existing collection
   * in case a collection with the same name already eixists in this database.
   * 
   * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
   * 
   * @param {Collection} collection collection instance to add
   * @returns {Promise<Collection | Error>} a Promise with the added collection or exisiting collection with the same name
   */
  addCollection(collection) {
    return new Promise((resolve, reject) => {
      if (!(collection instanceof Collection)) {
        reject(new TypeError('Parameter `collection` must be an instance of Collection'));
      }

      let foundCollection = this._collections.find(c => c.name === collection.name);

      if (foundCollection === undefined) {
        this._collections.push(collection);
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

      if (typeof name !== 'string' || name === '') {
        reject(new TypeError('Parameter `name` must be a string and at least one character long'));
      }

      const idx = this._collections.findIndex(c => c.name === name);

      if (idx === -1) {
        reject(new Error('No collection with that name was found'));
      }

      const removed = this._collections.splice(idx, 1);

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
      if (typeof name !== 'string' || name === '') {
        reject(new TypeError('Parameter `name` must be a string and at least one character long'));
      }

      const collection = this._collections.find(c => c.name === name);

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
   * @returns {Promise<void | Error>} a Promise which resolves after saving the database
   */
  saveDatabase() {
    return new Promise((resolve, reject) => {
      const exportedDb = this._exportDatabase();

      mkdirp(this.filepath)
        .then(() => writeFile(this.filepath, exportedDb))
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Delete the database from the filesystem if it exists.
   * 
   * @returns {Promise<void | Error>} a Promise which resolves after the deletion
   */
  deleteDatabase() {
    return new Promise((resolve, reject) => {
      stat(this.filepath)
        .then(stats => {
          if (!stats.isFile()) {
            reject(new Error('Database requested to delete is not a file'));
          }
        })
        .then(() => unlink(this.filepath))
        .then(resolve)
        .catch(err => {
          if (err.code !== 'ENOENT') {
            reject(err);
          }
          resolve();
        });
    });
  }

  /**
   * Move the database to the new filepath if it exists on the filesystem.
   * 
   * @param {string} filepath new path for the database
   * @returns {Promise<void | Error>} a Promise which resolves after moving the database
   */
  moveDatabase(filepath) {
    return new Promise(async (resolve, reject) => {
      if (typeof filepath !== 'string' || filepath === '') {
        reject(new TypeError('Parameter `filepath` must be a string and at least one character long'));
      }
      if (this.filepath === filepath) {
        resolve();
      }

      stat(this.filepath)
        .then(stats => {
          if (!stats.isFile()) {
            reject(new Error('Database requested to delete is not a file'));
          }
        })
        .catch(err => {
          if (err.code !== 'ENOENT') {
            reject(err);
          }
          // File does not exist so just change the filepath.
          this.filepath = filepath;
          resolve();
        });

      mkdirp(filepath)
        .then(() => copyFile(this.filepath, filepath))
        .then(() => unlink(this.filepath))
        .then(() => {
          this.filepath = filepath;
          resolve();
        })
        .catch(reject);
    });
  }

  /**
   * Clear the database by deleting all its collections.
   */
  clear() {
    this._collections.length = 0;
  }

  /**
   * (Re-)Configure the settings and overwrite the default values.
   * 
   * @param {object} [settings={}] database settings
   * @param {boolean} [settings.autosave] whether the database should be automatically saved
   * @param {number} [settings.autosaveInterval] interval for the autosave to trigger
   */
  configureSettings(settings = {}) {
    if (!isPlainObject(settings)) {
      // Keep default configurations.
      return;
    }

    if (settings.hasOwnProperty('autosave') && typeof settings.autosave === 'boolean') {
      // Actually turn off autosave.
      if (this._autosave && !settings.autosave) {
        this._disableAutosave();
      }
      this._autosave = settings.autosave;
    }

    if (settings.hasOwnProperty('autosaveInterval') && typeof settings.autosaveInterval === 'number') {
      this._autosaveInterval = settings.autosaveInterval;
    }

    if (this._autosave) {
      // In case the settings were reconfigured.
      if (this.autosaveHandler !== undefined) {
        this._disableAutosave();
      }
      this._enableAutosave();
    }
  }

  // ---------------------------------- Getter and Setter ----------------------------------

  /**
   * Get all collections of the database.
   * 
   * @returns {object[]} all collections of the database
   */
  get collections() {
    return this._collections;
  }

  /**
   * Get the amount of collections of the database.
   * 
   * @returns {number} amount of collections of the database
   */
  get size() {
    return this._collections.length;
  }

  /**
   * Get the amount of documents of all collections.
   * 
   * @returns {number} amount of documents of all collections
   */
  get totalSize() {
    return this._collections
      .map(c => c.size)
      .reduce((acc, curr) => acc + curr);
  }

  /**
   * Get the current state of autosave.
   * 
   * @returns {boolean} whether autosave is enabled or disabled
   */
  get autosave() {
    return this._autosave;
  }

  /**
   * Get the current autosave interval.
   * 
   * @returns {number} autosave interval in ms
   */
  get autosaveInterval() {
    return this._autosaveInterval;
  }

  /**
   * Enable or disable autosave.
   * 
   * @param {boolean} value whether to enable or disable autosave
   */
  set autosave(value) {
    this.configureSettings({ autosave: value});
  }

  /**
   * Set a new autosave interval.
   * 
   * @param {number} value the new interval in milliseconds
   */
  set autosaveInterval(value) {
    this.configureSettings({ autosaveInterval: value});
  }

  // ---------------------------------- Internal functions ----------------------------------

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
      collections: this._collections.map(c => c._export()),
      settings: {
        autosave: this._autosave,
        autosaveInterval: this._autosaveInterval,
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
   * Load a database from a file and parse its content.
   * 
   * @returns {Promise<object | Error>} a Promise with the parsed database
   */
  _loadDatabase() {
    return new Promise((resolve, reject) => {
      stat(this.filepath)
        .then(stats => {
          if (!stats.isFile()) {
            reject(new Error('Database requested to delete is not a file'));
          }
        })
        .then(() => readFile(this.filepath, { encoding: 'utf-8' }))
        .then(content => resolve(JSON.parse(content)))
        .catch(reject);
    });
  }

  /**
   * Internal function.
   * 
   * Apply the collections and other data of a database object.
   * 
   * @param {object} db parsed JSON database
   * @param {boolean} restoreSettings whether to restore the 'old' settings
   */
  _applyDatabase(db, restoreSettings) {
    if (db.hasOwnProperty('metadata') &&
        db.metadata.hasOwnProperty('created')) {
      this.created = db.metadata.created;
    }

    // TODO: type checks
    if (Array.isArray(db.collections)) {
      this._collections.concat(
        db.collections.map(collection => {
          const c = new Collection(collection.name);
          c.documents.concat(collection.documents);
          c.timestamp = collection.timestamp;
          return c;
        })
      );
    }

    if (restoreSettings === true) {
      Object.assign(this.settings, db.settings);
    }
  }

  /**
   * Internal function.
   * 
   * Try to restore a database if it exists.
   * 
   * @param {object} settings user settings
   */
  _restoreDatabase(settings) {
    return new Promise((resolve, reject) => {
      this._loadDatabase()
        .then(db => {
          this._applyDatabase(db, settings.restoreSettings);
          resolve();
        })
        .catch(err => {
          // File exists but an error occured.
          if (err.code !== 'ENOENT') {
            reject(err);
          }
          resolve();
        })
        .finally(() => {
          Object.assign(this.settings, settings);
        });
    });
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
    }, this._autosaveInterval);
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