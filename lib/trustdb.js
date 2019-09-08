const fs = require('fs');
const { promisify } = require('util');

const Collection = require('./collection');
const EventEmitter = require('./events');
const { isPlainObject, mkdirp, hasOwnProperty } = require('./helpers');

// Promisify asynchronous functions
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const copyFile = promisify(fs.copyFile);
const unlink = promisify(fs.unlink);
const stat = promisify(fs.stat);

/**
 * @extends EventEmitter
 * @borrows TrustDB#saveDatabase as TrustDB#save
 */
class TrustDB extends EventEmitter {
  /**
   * Creates a TrustDB instance.
   */
  constructor() {
    super();
    this._events = {
      autosave: [],
    };
  }

  /**
   * Create a connection to a new database. If the file already exists, it will
   * be loaded and the collections (and optionally the settings, too) will be
   * applied to this instance, unless the setting `overwriteExisting` is set to true.
   *
   * @param {string} filepath Filepath for the database.
   * @param {object} [settings={}] Optional settings related to the database.
   * @param {boolean} [settings.autosave] Whether the database should be automatically saved.
   * @param {number} [settings.autosaveInterval] Interval for the autosave in milliseconds.
   * @param {boolean} [settings.restoreSettings] Whether it should restore settings from the loaded database, if it exists.
   * @param {boolean} [settings.overwriteExisting] Whether the existing database (same filepath) should be overwritten.
   * @returns {Promise<void>} A Promise that resolves after everything is configured and set up.
   */
  async connect(filepath, settings = {}) {
    if (typeof filepath !== 'string' || filepath.length === 0) {
      throw new Error('Expected arameter `filepath` to be a string and at least one character long');
    }
    if (!isPlainObject(settings)) {
      throw new Error('Expected parameter `settings` to be a plain object');
    }

    this._filepath = filepath;
    this._created = new Date().toISOString();
    this._collections = [];

    this._settings = {};
    this._autosave = false;
    this._autosaveInterval = 4000;
    this._autosaveHandler;

    let restoredSettings;
    if (settings.overwriteExisting !== true) {
      restoredSettings = await this._restoreDatabase();
    }

    if (settings.restoreSettings && isPlainObject(restoredSettings)) {
      this._settings = {
        ...restoredSettings,
        ...settings,
      };
    }

    this.configureSettings(this.settings);
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
    const exportedDb = this._exportDatabase();
    await mkdirp(this.filepath);
    await writeFile(this.filepath, exportedDb);
  }

  /**
   * Delete the database from the filesystem, if it exists.
   *
   * @returns {Promise<void>} A Promise which resolves after deleting the database.
   */
  async deleteDatabase() {
    const stats = await stat(this.filepath);
    if (!stats.isFile()) {
      throw new Error('Database requested to delete is not a file');
    }
    await unlink(this.filepath);
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

    const stats = await stat(this.filepath).catch((err) => {
      if (err.code !== 'ENOENT') {
        throw err;
      }
      // File does not exist so just change the filepath.
      this._filepath = filepath;
    });

    if (!stats.isFile()) {
      throw new Error('Database requested to move is not a file');
    }

    await mkdirp(filepath);
    await copyFile(this.filepath, filepath);
    await unlink(this.filepath);
    this._filepath = filepath;
  }

  /**
   * Clear the database by deleting all of its collections.
   */
  clear() {
    this._collections.length = 0;
  }

  /**
   * (Re-)Configure the settings.
   *
   * @param {object} [settings={}] Optional settings related to the database.
   * @param {boolean} [settings.autosave] Whether the database should be automatically saved.
   * @param {number} [settings.autosaveInterval] Interval for the autosave in milliseconds.
   */
  configureSettings(settings = {}) {
    if (!isPlainObject(settings)) {
      // Keep default configurations.
      return;
    }

    if (hasOwnProperty(settings, 'autosave') && typeof settings.autosave === 'boolean') {
      // Actually turn off autosave.
      if (this._autosave && !settings.autosave) {
        this._disableAutosave();
      }
      this._autosave = settings.autosave;
    }

    if (hasOwnProperty(settings, 'autosaveInterval') && typeof settings.autosaveInterval === 'number') {
      this._autosaveInterval = settings.autosaveInterval;
    }

    if (this._autosave) {
      // In case the settings were reconfigured.
      if (this._autosaveHandler !== undefined) {
        this._disableAutosave();
      }
      this._enableAutosave();
    }
  }

  // ---------------------------------- Getter and Setter ----------------------------------

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
   * @returns {object[]} All collections of the database.
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
    return this._collections
      .map((c) => c.size)
      .reduce((acc, curr) => acc + curr);
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
    this.configureSettings({ autosave: value});
  }

  /**
   * Set a new autosave interval.
   *
   * @param {number} value New interval in milliseconds.
   */
  set autosaveInterval(value) {
    this.configureSettings({ autosaveInterval: value});
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
      filepath: this.filepath,
      collections: this.collections.map((c) => c._export()),
      settings: {
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
    const stats = await stat(this.filepath);
    if (!stats.isFile()) {
      throw new Error('Database requested to load is not a file');
    }
    const content = await readFile(this.filepath, { encoding: 'utf-8' });
    return JSON.parse(content);
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

    if (Array.isArray(db.collections)) {
      this._collections = db.collections.map((c) => {
        const collection = new Collection(c.name);
        if (c.documents.every(isPlainObject)) {
          collection._documents = c.documents;
        }
        collection._created = c.created;
        return collection;
      });
    }
  }

  /**
   * Try to restore a database if it exists.
   *
   * @private
   * @returns {object} Settings of the restored database.
   */
  async _restoreDatabase() {
    const db = await this._loadDatabase();
    this._applyDatabase(db);
    return db.settings;
  }

  /**
   * Enables the autosave handler.
   *
   * @private
   * @fires TrustDB#autosave After autosaving.
   */
  _enableAutosave() {
    if (this._autosaveHandler !== undefined) {
      return;
    }

    this._autosaveHandler = setInterval(async () => {
      const result = await this.saveDatabase().catch((err) => err);
      this.emit('autosave', result);
    }, this._autosaveInterval);
  }

  /**
   * Disables the autosave handler.
   *
   * @private
   */
  _disableAutosave() {
    if (this._autosaveHandler !== undefined) {
      clearInterval(this._autosaveHandler);
      this._autosaveHandler = undefined;
    }
  }
}

// Aliases
TrustDB.prototype.save = TrustDB.prototype.saveDatabase;

module.exports = TrustDB;