import Collection from './collection';
import { EventEmitter } from './events';
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
export declare class TrustDB extends EventEmitter {
    private connected;
    private filepath;
    private created;
    private colls;
    private autosave;
    private autosavePaused;
    /**
     * Create a connection to a new database. If the file already exists, it will
     * be loaded and the collections (and optionally the settings, too) will be
     * applied to this instance, unless the setting `overwriteExisting` is set to true.
     */
    connect(settings?: Partial<Settings>): Promise<void>;
    /**
     * Close the database connection.
     *
     * Disables autosave, removes the event listeners for the database
     * and its collections, clears all documents and collections.
     */
    disconnect(save?: boolean): Promise<void>;
    /**
     * Create a collection with the given name. Returns an existing collection
     * in case a collection with the same name already eixists in this database.
     *
     * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
     */
    createCollection(name: string): Collection;
    /**
     * IMPORTANT: This function does **not** create a new collection.
     * Use {@link TrustDB#createCollection} to create a new collection.
     *
     * Add a collection to the database. Returns an existing collection
     * in case a collection with the same name already eixists in this database.
     *
     * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
     */
    addCollection(collection: Collection): Collection;
    /**
     * Delete a collection with the given name or using a Collection instance.
     */
    deleteCollection(collection: Collection | string): Collection | undefined;
    /**
     * Retrieve a collection by name.
     */
    getCollection(name: string): Collection | undefined;
    /**
     * Save the database with its collections,
     * settings and metadata to the specified filepath.
     */
    saveDatabase(): Promise<void>;
    /**
     * Delete the database from the filesystem, if it exists.
     */
    deleteDatabase(): Promise<void>;
    /**
     * Move the database to the new path on the filesystem.
     */
    moveDatabase(filepath: string): Promise<void>;
    /**
     * (Re-)configure the settings.
     */
    configureSettings(settings?: Partial<Pick<Settings, 'filepath' | 'autosave'>>): void;
    /**
     * Clear the database by deleting all of its collections.
     */
    clear(): Collection[];
    /**
     * Get the database connection state.
     */
    get isConnected(): boolean;
    /**
     * Get the filepath of the database.
     */
    get path(): string | undefined;
    /**
     * Get all collections of the database.
     */
    get collections(): Collection[];
    /**
     * Get the amount of collections of the database.
     */
    get size(): number;
    /**
     * Get the amount of documents of all collections.
     */
    get totalSize(): number;
    /**
     * Get the current interval of autosave.
     * Values lower than or equal to `0` indicates it's turned off.
     */
    get autosaveInterval(): number;
    /**
     * Turn the database into a JSON string.
     */
    private export;
    /**
     * Load a database from a file and parse its content.
     */
    private loadDatabase;
    /**
     * Apply the collections and other data of a database object.
     */
    private applyDatabase;
    /**
     * Try to restore a database if it exists.
     */
    private restoreDatabase;
    /**
     * Enables autosaving for the database.
     */
    private enableAutosave;
}
export interface TrustDB {
    save: typeof TrustDB.prototype.saveDatabase;
}
export {};
