import { EventEmitter } from './events';
import { Schema } from './schema';
import Result from './result';
import { PlainObject, QueryObject } from './types';
declare type FilterFunction = (document: PlainObject) => boolean;
declare type UpdateFunction = (document: PlainObject) => void;
/**
 * @extends EventEmitter
 * @borrows Collection#find as Collection#where
 */
export default class Collection extends EventEmitter {
    readonly name: string;
    readonly documents: PlainObject[];
    created: string;
    private schema;
    constructor(name: string);
    /**
     * Insert new documents into the collection.
     */
    insert(...documents: PlainObject[] | [PlainObject] | [PlainObject[]]): string[];
    /**
     * Insert a single document into the collection.
     * @fires Collection#insert After successfully inserting a document if `emitEvent` is *true*.
     */
    insertOne(document: PlainObject): string;
    /**
    * Find all documents in the collection that match the query or pass the filter function.
    * @fires Collection#find After successfully filtering documents.
    * @example
    * // Find all documents where the value of the property price is greater than or equal to 50.
    * collection.find({ price: { greaterThanOrEqual: 50 } });
    * @example
    * // Same result but using a function.
    * collection.find((doc) => doc.price >= 50);
    */
    find(filter: QueryObject | FilterFunction, resultInstance?: boolean): PlainObject[] | Result;
    /**
     * Find the first document in the collection that matches the query or passes the filter function.
     * @fires Collection#find After successfully filtering documents.
     * @example
     * // Find the first document where the value of the roperty price is greater than or equal to 50.
     * collection.findOne({ price: { greaterThanOrEqual: 50 } });
     * @example
     * // Same result but using a function.
     * collection.findOne((doc) => doc.price >= 50);
     */
    findOne(filter: QueryObject | FilterFunction): PlainObject | undefined;
    /**
     * Find the document with the matching ID.
     * @example
     * collection.findById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
     */
    findById(id: string): PlainObject | undefined;
    /**
     * Remove all documents matching the given document from the collection.
     * @fires Collection#remove After successfully removing the document(-s).
     * @example
     * // Remove the first matching document.
     * collection.removeExact({ price: 50 }, true);
     * @example
     * // Remove all matching documents.
     * collection.removeExact({ price: 50 });
     */
    removeExact(document: PlainObject, first?: boolean): PlainObject | PlainObject[];
    /**
     * Remove all documents in the collection that match the query or passes the filter function.
     * @fires Collection#remove After successfully removing the documents.
     * @example
     * // Remove all documents where the value of the
     * // property price is greater than or equal to 50.
     * collection.remove({ price: { greaterThanOrEqual: 50 } });
     * @example
     * // Same result but using a function.
     * collection.remove((doc) => doc.price >= 50);
     */
    remove(filter: QueryObject | FilterFunction): PlainObject[];
    /**
     * Remove the first document in the collection that matches the query or passes the filter function.
     * @fires Collection#remove After successfully removing the document.
     * @example
     * // Remove the first document where the value of the
     * // property price is greater than or equal to 50.
     * collection.removeOne({ price: { greaterThanOrEqual: 50 } });
     * // or
     * collection.removeOne((doc) => doc.price >= 50);
     */
    removeOne(filter: QueryObject | FilterFunction): PlainObject | undefined;
    /**
     * Remove the document with the matching ID.
     *
     * @param {string} id ID of the document to remove.
     * @fires Collection#remove After successfully removing the document.
     * @returns {object} Removed document.
     * @example
     * collection.removeById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
     */
    removeById(id: string): PlainObject | undefined;
    /**
     * Update all documents in the collection that match the query or pass the custom filter function.
     * @fires Collection#update After successfully updating the documents.
     * @example
     * // Update all documents where the value of the property price is greater than or equal to 50 and set it to 49.99.
     * collection.update(
     *   (doc) => doc.price >= 50,
     *   { price: 49.99 }
     * );
     */
    update(filter: QueryObject | FilterFunction, updater: PlainObject | UpdateFunction): PlainObject[];
    /**
     * Update the document with the matching ID.
     * @fires Collection#update After successfully updating the document.
     * @example
     * collection.updateById(
     *  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
     *  { price: 49.99 }
     * );
     */
    updateById(id: string, updater: PlainObject | UpdateFunction): PlainObject | undefined;
    /**
     * Register a schema to validate documents inserted into the collection.
     */
    registerSchema(schema: Schema | PlainObject): Schema | undefined;
    /**
     * Unregister the schema which ultimately stops the
     * collection from validating any further documents.
     */
    unregisterSchema(): Schema | undefined;
    /**
     * Clean the collection from invalid documents using
     * the passed in or registered schema.
     */
    cleanWithSchema(schema?: Schema | undefined): PlainObject[];
    /**
     * Clear the collection by deleting all of its documents.
     */
    clear(): PlainObject[];
    /**
     * Get the registered schema of the collection.
     */
    get registeredSchema(): Schema | undefined;
    /**
     * Get whether the collection has a schema registered.
     */
    get hasSchema(): boolean;
    /**
     * Get the first document of the collection.
     */
    get firstDocument(): PlainObject;
    /**
     * Get the last document of the collection.
     */
    get lastDocument(): PlainObject;
    /**
     * Get the amount of documents of the collection.
     */
    get size(): number;
    private maybeInsert;
    private maybeUpdate;
    private checkDocument;
    /**
     * Return the necessary properties for the export.
     */
    export(): {
        schema?: Record<string | number, string | number | boolean | {} | (string | number | boolean | {})[]>;
        name: string;
        documents: Record<string | number, string | number | boolean | {} | (string | number | boolean | {})[]>[];
        created: string;
    };
}
export default interface Collection {
    where: typeof Collection.prototype.find;
}
export {};
