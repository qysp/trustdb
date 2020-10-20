const { promises: fs, existsSync } = require('fs');
const interval = require('interval-promise');

const Collection = require('./collection');
const EventEmitter = require('./events');
const { isPlainObject, mkdirp, hasOwnProperty } = require('./helpers');

const DEFAULT_SETTINGS = {
  filepath: null,
  autosave: false,
  autosaveInterval: 4000,
  restoreSettings: false,
  overwriteExisting: false,
};

/**
 * @extends EventEmitter
 * @borrows TrustDB#saveDatabase as TrustDB#save
 */
class TrustDB extends EventEmitter {
  /**
   * Creates a TrustDB instance.
   */
  constructor() {
    super({
      autosave: [],
    });
    this._connected = false;
    this._filepath= null;
    this._created = null;
    this._collections = [];
    this._settings = {};
    this._autosave = false;
    this._autosaveInterval = 4000;
  }

  /**
   * Create a connection to a new database. If the file already exists, it will
   * be loaded and the collections (and optionally the settings, too) will be
   * applied to this instance, unless the setting `overwriteExisting` is set to true.
   *
   * @param {object} [settings={}] Optional settings related to the database.
   * @param {string} [settings.filepath] Filepath for the database.
   * @param {boolean} [settings.autosave] Whether the database should be automatically saved.
   * @param {number} [settings.autosaveInterval] Interval for the autosave in milliseconds.
   * @param {boolean} [settings.restoreSettings] Whether it should restore settings from the loaded database, if it exists.
   * @param {boolean} [settings.overwriteExisting] Whether the existing database (same filepath) should be overwritten.
   * @returns {Promise<void>} A Promise that resolves after everything is configured and set up.
   */
  async connect(settings = DEFAULT_SETTINGS) {
    if (!isPlainObject(settings)) {
      throw new Error('Expected parameter `settings` to be a plain object');
    }

    if (typeof settings.filepath === 'string' && settings.filepath.length !== 0) {
      this._filepath = settings.filepath;
    }
    this._created = new Date().toISOString();

    if (settings.overwriteExisting !== true &&
        this.filepath !== null &&
        existsSync(this.filepath)) {
      await this._restoreDatabase(settings.restoreSettings);
    }

    this.configureSettings(Object.assign(this._settings, settings));
    this._connected = true;
  }

  /**
   * Close the database connection.
   *
   * Disables autosave, removes the event listeners for the database
   * and its collections, clears all documents and collections.
   *
   * @param {boolean} [save=true] Whether to save the database before disconnecting.
   */
  async disconnect(save = true) {
    if (this.connected === false) {
      throw new Error('Database connection is not established');
    }
    if (save === true) {
      await this.saveDatabase();
    }

    this.autosave = false;

    this.collections.forEach((collection) => {
      Object.entries(collection._events).forEach(([name, listeners]) => {
        listeners.forEach((listener) => collection.removeListener(name, listener));
      });
      collection.documents.length = 0;
    });

    this.clear();

    Object.entries(this._events).forEach(([name, listeners]) => {
      listeners.forEach((listener) => this.removeListener(name, listener));
    });

    this._connected = false;
  }

  /**
   * Create a collection with the given name. Returns an existing collection
   * in case a collection with the same name already eixists in this database.
   *
   * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
   *
   * @param {string} name Name of the collection.
   * @returns {Collection} Newly created collection or exisiting collection with the same name.
   */
  createCollection(name) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new TypeError('Expected parameter `name` to be a string and at least one character long');
    }

    let collection = this._collections.find((c) => c.name === name);
    if (collection === undefined) {
      collection = new Collection(name);
      this._collections.push(collection);
    }

    return collection;
  }

  /**
   * IMPORTANT: This function does **not** create a new collection.
   * Use {@link TrustDB#createCollection} to create a new collection.
   *
   * Add a collection to the database. Returns an existing collection
   * in case a collection with the same name already eixists in this database.
   *
   * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
   *
   * @param {Collection} collection Collection instance to add.
   * @returns {Collection} Added collection or exisiting collection with the same name.
   */
  addCollection(collection) {
    if (!(collection instanceof Collection)) {
      throw new TypeError('Expected parameter `collection` to be an instance of Collection');
    }

    let foundCollection = this._collections.find((c) => c.name === collection.name);

    if (foundCollection === undefined) {
      this._collections.push(collection);
    } else {
      collection = foundCollection;
    }

    return collection;
  }

  /**
   * Delete a collection with the given name or using a Collection instance.
   *
   * @param {Collection | string} collection Name of the collection or a Collection instance.
   * @returns {Collection} Deleted collection.
   */
  deleteCollection(collection) {
    const name = collection instanceof Collection ? collection.name : collection;

    if (typeof name !== 'string' || name.length === 0) {
      throw new TypeError('Expected parameter `name` to be a string and at least one character long');
    }

    const idx = this._collections.findIndex((c) => c.name === name);

    let removed;
    if (idx !== -1) {
      removed = this._collections.splice(idx, 1)[0];
    }

    return removed;
  }

  /**
   * Retrieve a collection by name.
   *
   * @param {string} name Name of the collection.
   * @returns {Collection} Matching collection.
   */
  getCollection(name) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new TypeError('Expected parameter `name` to be a string and at least one character long');
    }

    return this._collections.find((c) => c.name === name);
  }

  /**
   * Save the database with its collections,
   * settings and metadata to the specified filepath.
   *
   * @returns {Promise<void>} A Promise which resolves after saving the database.
   */
  async saveDatabase() {
    if (this.filepath === null) {
      throw new Error('Cannot save database without filepath');
    }
    const db = this._exportDatabase();
    try {
      await mkdirp(this.filepath);
      await fs.writeFile(this.filepath, db);
    } catch (error) {
      throw new Error('Failed to save database');
    }
  }

  /**
   * Delete the database from the filesystem, if it exists.
   *
   * @returns {Promise<void>} A Promise which resolves after deleting the database.
   */
  async deleteDatabase() {
    if (this.filepath === null) {
      throw new Error('Cannot delete database without filepath');
    }
    try {
      await fs.unlink(this.filepath);
    } catch (error) {
      throw new Error('Failed to delete database');
    }
  }

  /**
   * Move the database to the new path on the filesystem.
   *
   * @param {string} filepath New path for the database file.
   * @returns {Promise<void>} A Promise which resolves after moving the database.
   */
  async moveDatabase(filepath) {
    if (typeof filepath !== 'string' || filepath.length === 0) {
      throw new TypeError('Expected parameter `filepath` to be a string and at least one character long');
    }
    if (this.filepath === filepath) {
      return;
    }

    if (this.filepath === null) {
      this._filepath = filepath;
      return;
    }

    const stats = await fs.stat(this.filepath).catch((err) => {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    });

    if (stats === undefined) {
      // File does not exist so just change the filepath.
      this._filepath = filepath;
      return;
    }

    if (!stats.isFile()) {
      throw new Error('Database requested to move is not a file');
    }

    try {
      await mkdirp(filepath);
      await fs.copyFile(this.filepath, filepath);
      await fs.unlink(this.filepath);
      this._filepath = filepath;
    } catch (error) {
      throw new Error('Failed to move database');
    }
  }

  /**
   * (Re-)configure the settings.
   *
   * @param {object} [settings={}] Optional settings related to the database.
   * @param {string} [settings.filepath] Filepath for the database. Only applies if there is no filepath set.
   * @param {boolean} [settings.autosave] Whether the database should be automatically saved.
   * @param {number} [settings.autosaveInterval] Interval for the autosave in milliseconds.
   */
  configureSettings(settings = {}) {
    if (!isPlainObject(settings)) {
      // Keep default configurations.
      return;
    }

    if (hasOwnProperty(settings, 'filepath') &&
        typeof settings.autosave === 'string' &&
        this._filepath === null) {
      this._filepath = settings.filepath;
    }

    if (hasOwnProperty(settings, 'autosave') &&
        typeof settings.autosave === 'boolean') {
      this._autosave = settings.autosave;
    }

    if (hasOwnProperty(settings, 'autosaveInterval') &&
        typeof settings.autosaveInterval === 'number') {
      this._autosaveInterval = settings.autosaveInterval;
    }

    if (this._autosave) {
      this._enableAutosave();
    }
  }

  /**
   * Clear the database by deleting all of its collections.
   *
   * @returns {Collection[]} All of the removed collections.
   */
  clear() {
    return this._collections.splice(0, this.size);
  }

  // ---------------------------------- Getter and Setter ----------------------------------

  /**
   * Get the database connection state.
   *
   * @returns {boolean} Wether the database connection is established.
   */
  get connected() {
    return this._connected;
  }

  /**
   * Get the filepath of the database.
   *
   * @returns {string} Filepath of the database.
   */
  get filepath() {
    return this._filepath;
  }

  /**
   * Get the date and time of creation of the database.
   *
   * @returns {string} Date and time of creation.
   */
  get created() {
    return this._created;
  }

  /**
   * Get all collections of the database.
   *
   * @returns {Collection[]} All collections of the database.
   */
  get collections() {
    return this._collections;
  }

  /**
   * Get the amount of collections of the database.
   *
   * @returns {number} Amount of collections of the database.
   */
  get size() {
    return this._collections.length;
  }

  /**
   * Get the amount of documents of all collections.
   *
   * @returns {number} Amount of documents of all collections.
   */
  get totalSize() {
    return this._collections.reduce((acc, { size }) => acc + size, 0);
  }

  /**
   * Get all database related settings.
   *
   * @returns {object} Settings related to the database.
   */
  get settings() {
    return this._settings;
  }

  /**
   * Get the current state of autosave.
   *
   * @returns {boolean} Whether autosave is enabled.
   */
  get autosave() {
    return this._autosave;
  }

  /**
   * Get the current autosave interval.
   *
   * @returns {number} Autosave interval in milliseconds.
   */
  get autosaveInterval() {
    return this._autosaveInterval;
  }

  /**
   * Enable or disable autosave.
   *
   * @param {boolean} value Whether to enable or disable autosave.
   */
  set autosave(value) {
    this.configureSettings({ autosave: value });
  }

  /**
   * Set a new autosave interval.
   *
   * @param {number} value New interval in milliseconds.
   */
  set autosaveInterval(value) {
    this.configureSettings({ autosaveInterval: value });
  }

  // ---------------------------------- Internal functions ----------------------------------

  /**
   * Turn the database into a JSON string.
   *
   * @private
   * @returns {string} Stringified version of the database.
   */
  _exportDatabase() {
    return JSON.stringify({
      collections: this.collections.map((c) => c._export()),
      settings: {
        filepath: this.filepath,
        autosave: this.autosave,
        autosaveInterval: this.autosaveInterval,
      },
      metadata: {
        created: this.created,
        saved: new Date().toISOString(),
      },
    });
  }

  /**
   * Load a database from a file and parse its content.
   *
   * @private
   * @returns {Promise<object>} A Promise which resolves with the parsed database.
   */
  async _loadDatabase() {
    if (this.filepath === null) {
      throw new Error('Cannot load database without filepath');
    }
    try {
      const content = await fs.readFile(this.filepath, { encoding: 'utf-8' });
      return JSON.parse(content);
    } catch (error) {
      throw new Error('Failed to load database');
    }
  }

  /**
   * Apply the collections and other data of a database object.
   *
   * @private
   * @param {object} db Database object.
   */
  _applyDatabase(db) {
    if (hasOwnProperty(db, 'metadata') && hasOwnProperty(db.metadata, 'created')) {
      this._created = db.metadata.created;
    }
    this._collections = db.collections.map((c) => {
      const collection = new Collection(c.name);
      if (c.documents.every(isPlainObject)) {
        collection._documents = c.documents;
      }
      if (hasOwnProperty(c, 'schema')) {
        collection.registerSchema(c.schema);
      }
      collection._created = c.created;
      return collection;
    });
}

  /**
   * Try to restore a database if it exists.
   *
   * @private
   * @param {boolean} restoreSettings Whether 
   * @returns {Promise<void>} A Promise that resolves after restoring the database.
   */
  async _restoreDatabase(restoreSettings) {
    let settings = {};
    try {
      const db = await this._loadDatabase();
      this._applyDatabase(db);
      if (restoreSettings && isPlainObject(db.settings)) {
        settings = db.settings;
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    this._settings = settings;
  }

  /**
   * Enables autosaving for the database.
   *
   * @private
   * @fires TrustDB#autosave After autosaving.
   */
  _enableAutosave() {
    interval(async (_, stop) => {
      if (this._autosave === false) {
        return stop();
      }
      const result = await this.saveDatabase().catch((err) => err);
      this.emit('autosave', result);
    }, this._autosaveInterval, { stopOnError: false });
  }
}

// Aliases
TrustDB.prototype.save = TrustDB.prototype.saveDatabase;

module.exports = TrustDB;