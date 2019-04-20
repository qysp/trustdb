const fs = require('fs');
const { promisify } = require('util');

const Collection = require('./collection');
const EzeventEmitter = require('./ezevents');

const writeFileAsync = promisify(fs.writeFile);
const renameAsync = promisify(fs.rename);
const unlinkAsync = promisify(fs.unlink);
const statAsync = promisify(fs.stat);

/**
 * Creates an Ezstore instance.
 * 
 * @constructor
 * @implements EzeventEmitter
 * @param {string} filename database filename
 * @param {object} [options] 
 * @param {boolean} [options.autosave=false] 
 * @param {number} [options.autosaveInterval=4000] 
 * @borrows Ezstore#saveDatabase as Ezstore#save
 * @borrows Ezstore#deleteDatabase as Ezstore#delete
 */
class Ezstore extends EzeventEmitter {
  constructor(filename, options) {
    super();

    this.filename = filename || 'ezstore.json';
    this.created = new Date().toISOString();
  
    this.collections = [];
  
    this.autosave = false;
    this.autosaveInterval = 4000;
  
    this.configureOptions(options);
  }

  /**
   * Create a collection with the given `name`. Returns an existing collection
   * in case a collection with `name` already eixists in this database.
   * 
   * Use `deleteCollection` before creating a collection with the same name.
   * 
   * @param {string} name name of the collection
   * @returns {Promise<Collection | Error>} a Promise with the created collection or exisiting collection with `name`
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
      // TODO: does it have to be though?
      if (name === '') {
        reject(new Error('Collection name must be at least one character long'));
      }

      const idx = this.collections.findIndex(c => c.name === name);
      if (idx === -1) {
        reject(new Error('No collection with that name was found'))
      }

      const removed = this.collections.splice(idx, 1);

      resolve(removed[0]);
    });
  }

  /**
   * Save the database with its collections,
   * options and metadata to the specified file.
   * 
   * @returns {Promise<void | Error>} a Promise which resolves nothing and rejects the error
   */
  saveDatabase() {
    return new Promise((resolve, reject) => {
      const exportedDb = this._exportDatabase();
      const tmpFilename = `${this.filename}~`;

      writeFileAsync(tmpFilename, exportedDb)
        .then(() => {
          renameAsync(tmpFilename, this.filename)
            .then(resolve)
            .catch(reject)
        })
        .catch(reject);
    });
  }
  save = this.saveDatabase;

  /**
   * Delete a database including the locally stored file (if exisiting).
   * 
   * @returns {Promise<void | Error>} a Promise which resolves nothing and rejects the error
   */
  deleteDatabase() {
    return new Promise((resolve, reject) => {
      const isFile = statAsync(this.filename)
        .then(stats => stats.isFile())
        .catch(reject);

      if (!isFile) {
        reject(new Error('Database to delete is not a file.'))
      }

      unlinkAsync(this.filename)
        .then(resolve)
        .catch(reject);
    });
  }
  delete = this.deleteDatabase;

  /**
   * Set the options and overwrite the default values.
   * 
   * @param {object} [options] database options
   * @param {boolean} [options.autosave=false] 
   * @param {number} [options.autosaveInterval=3000] 
   */
  configureOptions(options) {
    if (typeof options !== 'object' || Array.isArray(options)) {
      // Keep default configurations
      return;
    }

    if (options.hasOwnProperty('autosave')) {
      this.autosave = options.autosave;
    }

    if (options.hasOwnProperty('autosaveInterval')) {
      this.autosaveInterval = options.autosaveInterval;
    }

    if (this.autosave === true) {
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
      options: {
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

    this.autosaveHandler = setInterval(() => {
      this.saveDatabase();
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

module.exports = Ezstore;