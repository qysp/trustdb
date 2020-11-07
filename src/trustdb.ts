import { promises as fs, existsSync } from 'fs';
import interval from 'interval-promise';
import { deserialize, serialize } from 'v8';

import Collection from './collection';
import { EventEmitter } from './events';
import { PlainObject } from './types';
import { isObject, mkdirp, has } from './util';

interface Metadata {
  created: string;
  saved: string;
}

interface SerializedCollection {
  schema?: PlainObject;
  name: string;
  created: string;
  documents: PlainObject[];
}

interface Database {
  collections: Array<SerializedCollection>;
  settings: Omit<Settings, 'restoreSettings' | 'overwriteExisting'>;
  metadata: Metadata;
}

interface Settings {
  filepath: string;
  autosave: number;
  restoreSettings: boolean;
  overwriteExisting: boolean;
}

/**
 * @extends EventEmitter
 * @borrows TrustDB#saveDatabase as TrustDB#save
 */
export class TrustDB extends EventEmitter {
  private connected: boolean = false;
  private filepath: string | undefined;
  private created: string | undefined;
  private colls: Collection[] = [];
  private autosave: number = 0;
  private autosavePaused: boolean = true;

  /**
   * Create a connection to a new database. If the file already exists, it will
   * be loaded and the collections (and optionally the settings, too) will be
   * applied to this instance, unless the setting `overwriteExisting` is set to true.
   */
  async connect(settings?: Partial<Settings>): Promise<void> {
    this.created = new Date().toISOString();
    if (settings?.filepath !== undefined) {
      this.filepath = settings.filepath;
      if (!settings.overwriteExisting && existsSync(this.filepath)) {
        const restoredSettings = await this.restoreDatabase(settings.restoreSettings ?? false);
        Object.assign(settings, restoredSettings);
      }
    }
    this.configureSettings(settings);
    this.connected = true;
  }

  /**
   * Close the database connection.
   *
   * Disables autosave, removes the event listeners for the database
   * and its collections, clears all documents and collections.
   */
  async disconnect(save: boolean = true): Promise<void> {
    if (this.connected === false) {
      return;
    }
    if (save === true) {
      await this.saveDatabase();
    }

    this.autosave = 0;

    this.colls.forEach((collection) => {
      Object.entries(collection.events).forEach(([name, listeners]) => {
        listeners.forEach((listener) => collection.removeListener(name, listener));
      });
      collection.documents.length = 0;
    });

    this.clear();

    Object.entries(this.events).forEach(([name, listeners]) => {
      listeners.forEach((listener) => this.removeListener(name, listener));
    });

    this.connected = false;
  }

  /**
   * Create a collection with the given name. Returns an existing collection
   * in case a collection with the same name already eixists in this database.
   *
   * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
   */
  createCollection(name: string): Collection {
    let collection = this.colls.find((c) => c.name === name);
    if (collection === undefined) {
      collection = new Collection(name);
      this.colls.push(collection);
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
   */
  addCollection(collection: Collection): Collection {
    let foundCollection = this.colls.find((c) => c.name === collection.name);

    if (foundCollection === undefined) {
      this.colls.push(collection);
    } else {
      collection = foundCollection;
    }

    return collection;
  }

  /**
   * Delete a collection with the given name or using a Collection instance.
   */
  deleteCollection(collection: Collection | string): Collection | undefined {
    const name = collection instanceof Collection ? collection.name : collection;
    const idx = this.colls.findIndex((c) => c.name === name);

    if (idx !== -1) {
      return this.colls.splice(idx, 1)[0];
    }
  }

  /**
   * Retrieve a collection by name.
   */
  getCollection(name: string): Collection | undefined {
    return this.colls.find((c) => c.name === name);
  }

  /**
   * Save the database with its collections,
   * settings and metadata to the specified filepath.
   */
  async saveDatabase(): Promise<void> {
    if (this.filepath === undefined) {
      throw new Error('Cannot save database without filepath');
    }
    const db = this.export();
    try {
      await mkdirp(this.filepath);
      await fs.writeFile(this.filepath, serialize(db));
    } catch (error) {
      throw new Error('Failed to save database');
    }
  }

  /**
   * Delete the database from the filesystem, if it exists.
   */
  async deleteDatabase(): Promise<void> {
    if (this.filepath === undefined) {
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
   */
  async moveDatabase(filepath: string): Promise<void> {
    if (this.filepath === filepath) {
      return;
    }

    if (this.filepath === undefined) {
      this.filepath = filepath;
      return;
    }

    const stats = await fs.stat(this.filepath).catch((err) => {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    });

    if (stats === undefined) {
      // File does not exist so just change the filepath.
      this.filepath = filepath;
      return;
    }

    if (!stats.isFile()) {
      throw new Error('Database requested to move is not a file');
    }

    try {
      await mkdirp(filepath);
      await fs.copyFile(this.filepath, filepath);
      await fs.unlink(this.filepath);
      this.filepath = filepath;
    } catch (error) {
      throw new Error('Failed to move database');
    }
  }

  /**
   * (Re-)configure the settings.
   */
  configureSettings(settings: Partial<Pick<Settings, 'filepath' | 'autosave'>> = {}) {
    if (settings.filepath !== undefined && settings.filepath !== this.filepath) {
      this.filepath = settings.filepath;
    }

    if (settings.autosave !== undefined && settings.autosave !== this.autosave) {
      this.autosave = settings.autosave;
    }

    if (this.autosave > 0) {
      this.enableAutosave();
    }
  }

  /**
   * Clear the database by deleting all of its collections.
   */
  clear(): Collection[] {
    return this.colls.splice(0, this.size);
  }

  /**
   * Get the database connection state.
   */
  get isConnected(): boolean {
    return this.connected;
  }

  /**
   * Get the filepath of the database.
   */
  get path(): string | undefined {
    return this.filepath;
  }

  /**
   * Get all collections of the database.
   */
  get collections(): Collection[] {
    return this.colls;
  }

  /**
   * Get the amount of collections of the database.
   */
  get size(): number {
    return this.colls.length;
  }

  /**
   * Get the amount of documents of all collections.
   */
  get totalSize(): number {
    return this.colls.reduce((acc, { size }) => acc + size, 0);
  }

  /**
   * Get the current interval of autosave.
   * Values lower than or equal to `0` indicates it's turned off.
   */
  get autosaveInterval(): number {
    return this.autosave;
  }

  /**
   * Turn the database into a JSON string.
   */
  private export(): Database {
    return {
      collections: this.colls.map((c) => c.export()),
      settings: {
        filepath: this.filepath!,
        autosave: this.autosave,
      },
      metadata: {
        created: this.created!,
        saved: new Date().toISOString(),
      },
    };
  }

  /**
   * Load a database from a file and parse its content.
   */
  private async loadDatabase(): Promise<Database> {
    if (this.filepath === undefined) {
      throw new Error('Cannot load database without filepath');
    }
    try {
      const buf = await fs.readFile(this.filepath);
      return deserialize(buf);
    } catch (error) {
      throw new Error('Failed to load database');
    }
  }

  /**
   * Apply the collections and other data of a database object.
   */
  private applyDatabase(db: Partial<Database>) {
    if (has(db, 'metadata') && isObject<Metadata>(db.metadata) && has(db.metadata, 'created')) {
      this.created = db.metadata.created;
    }
    if (has(db, 'collections') && Array.isArray(db.collections)) {
      this.colls = (db.collections).map((c) => {
        const collection = new Collection(c.name);
        if (c.documents.every(isObject)) {
          collection.insert(c.documents);
        }
        if (has(c, 'schema') && c.schema !== undefined) {
          collection.registerSchema(c.schema);
        }
        collection.created = c.created;
        return collection;
      });
    }
}

  /**
   * Try to restore a database if it exists.
   */
  private async restoreDatabase(restoreSettings: boolean): Promise<Partial<Settings>> {
    let settings: Partial<Settings> = {};
    try {
      const db = await this.loadDatabase();
      this.applyDatabase(db);
      if (restoreSettings && isObject(db.settings)) {
        settings = db.settings;
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    return settings;
  }

  /**
   * Enables autosaving for the database.
   */
  private enableAutosave() {
    if (!this.autosavePaused) {
      return;
    }
    this.autosavePaused = false;
    interval(async (_, stop) => {
      if (this.autosave <= 0) {
        this.autosavePaused = true;
        return stop();
      }
      const result = await this.saveDatabase().catch((err) => err);
      this.emit('autosave', result);
    }, this.autosave, { stopOnError: false });
  }
}

export interface TrustDB {
  save: typeof TrustDB.prototype.saveDatabase;
}

// Aliases
TrustDB.prototype.save = TrustDB.prototype.saveDatabase;
