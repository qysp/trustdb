const fs = require('fs');
const { promisify } = require('util');

const Collection = require('./collection');
const EzeventEmitter = require('./ezevents');

// Promisify async functions
const writeFile = promisify(fs.writeFile);
const rename = promisify(fs.rename);
const unlink = promisify(fs.unlink);
const stat = promisify(fs.stat);

/**
 * Creates an Ezstore instance.
 * 
 * @extends EzeventEmitter
 * @borrows Ezstore#saveDatabase as Ezstore#save
 */
class Ezstore extends EzeventEmitter {
  /**
   * @param {string} filename database filename
   * @param {object} [settings] 
   * @param {boolean} [settings.autosave=false] 
   * @param {number} [settings.autosaveInterval=4000] 
   */
  constructor(filename, settings) {
    super();
    this.events = {
      'autosaved': [],
    };

    this.filename = filename || 'ezstore.json';
    this.created = new Date().toISOString();
  
    this.collections = [];
  
    this.autosave = false;
    this.autosaveInterval = 4000;

    this.autosaveHandler;
  
    this.configureSettings(settings);
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
      // TODO: does it have to be though?
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

      let foundCollection = this.collections
        .find(c => c.name === collection.name);

      if (foundCollection === undefined) {
        this.collections.push(collection);
      } else {
        collection = foundCollection;
      }

      resolve(collection);
    });
  }

  /**
   * Delete a collection with the given `name`.
   * Rejects with an error if the collection cannot be found.
   * 
   * @param {string} name name of the collection
   * @returns {Promise<Collection | Error>} a Promise with the deleted collection
   */
  deleteCollection(name) {
    return new Promise((resolve, reject) => {
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

      resolve(removed[0]);
    });
  }

  /**
   * Save the database with its collections,
   * settings and metadata to the specified file.
   * 
   * @returns {Promise<void | NodeJS.ErrnoException>} a Promise which resolves nothing and rejects the error
   */
  saveDatabase() {
    return new Promise((resolve, reject) => {
      const exportedDb = this._exportDatabase();
      const tmpFilename = `${this.filename}~`;

      writeFile(tmpFilename, exportedDb)
        .then(() => {
          rename(tmpFilename, this.filename)
            .then(resolve)
            .catch(reject);
        })
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
      const isFile = stat(this.filename)
        .then(stats => stats.isFile())
        .catch(err => {
          // file has not been saved
          if (err.code !== 'ENOENT') {
            reject(err);
          }
          resolve();
        });

      if (!isFile) {
        reject(new Error('Database to delete is not a file.'));
      }

      unlink(this.filename)
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Configure the settings and overwrite the default values.
   * 
   * @param {object} [settings] database settings
   * @param {boolean} [settings.autosave=false] 
   * @param {number} [settings.autosaveInterval=4000] 
   * @param {boolean} [initial=false] 
   */
  configureSettings(settings) {
    if (typeof settings !== 'object' || Array.isArray(settings)) {
      // Keep default configurations
      return;
    }

    if (settings.hasOwnProperty('autosave') &&
        typeof settings.autosave === 'boolean') {
      this.autosave = settings.autosave;
    }

    if (settings.hasOwnProperty('autosaveInterval') &&
        typeof settings.autosaveInterval === 'number') {
      this.autosaveInterval = settings.autosaveInterval;
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
      filename: this.filename,
      collections: this.collections,
      settings: {
        autosave: this.autosave,
        autosaveInterval: this.autosaveInterval,
      },
      metadata: {
        created: this.created,
      },
    });
  }

  /**
   * Internal function.
   * 
   * Enables the autosave handler.
   */
  _enableAutosave() {
    if (this.autosaveHandler !== undefined) {
      return;
    }

    this.autosaveHandler = setInterval(async () => {
      const result = await this.saveDatabase()
        .catch(err => err);
      this.emit('autosaved', result);
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
Ezstore.prototype.save = Ezstore.prototype.saveDatabase;

module.exports = Ezstore;