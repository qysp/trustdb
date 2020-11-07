import { v4 as uuidv4 } from 'uuid';
import { EventEmitter } from './events';
import { Schema } from './schema';
import Result from './result';
import { applyQuery } from './checks';
import { isObject, clone, flatten } from './util';
import { isDeepStrictEqual } from 'util';
import { PlainObject, QueryObject } from './types';

type FilterFunction = (document: PlainObject) => boolean;
type UpdateFunction = (document: PlainObject) => void;

/**
 * @extends EventEmitter
 * @borrows Collection#find as Collection#where
 */
export default class Collection extends EventEmitter {
  public readonly name: string
  public readonly documents: PlainObject[] = [];
  public created: string;

  private schema: Schema | undefined;

  /**
   * Creates a Collection instance.
   */
  constructor(name: string) {
    super({
      insert: [],
      find: [],
      remove: [],
      update: [],
    });
    this.name = name;
    this.created = new Date().toISOString();
  }

  /**
   * Insert new documents into the collection.
   */
  insert(...documents: PlainObject[] | [PlainObject] | [PlainObject[]]): string[] {
    if (documents.length === 0) {
      return [];
    }

    const flattenedDocuments = flatten(documents as PlainObject[]);

    const ids = [];
    for (const doc of flattenedDocuments) {
      ids.push(this.maybeInsert(doc));
    }

    this.emit('insert', flattenedDocuments, this.documents);

    return ids;
  }

  /**
   * Insert a single document into the collection.
   * @fires Collection#insert After successfully inserting a document if `emitEvent` is *true*.
   */
  insertOne(document: PlainObject): string {
    const id = this.maybeInsert(document)
    this.emit('insert', [document], this.documents);
    return id;
  }

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
  find(filter: QueryObject | FilterFunction, resultInstance: boolean = false): PlainObject[] | Result {
    const filteredDocs = this.documents.filter((doc) => {
      return this.checkDocument(doc, filter);
    });

    const result = resultInstance
      ? new Result(filteredDocs)
      : filteredDocs;

    this.emit('find', filteredDocs, this.documents);
    return result;
}

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
  findOne(filter: QueryObject | FilterFunction): PlainObject | undefined {
    const result = this.documents.find((doc) => {
      return this.checkDocument(doc, filter);
    });
    if (result !== undefined) {
      this.emit('find', [result], this.documents);
    }
    return result;
  }

  /**
   * Find the document with the matching ID.
   * @example
   * collection.findById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
   */
  findById(id: string): PlainObject | undefined {
    const result = this.documents.find((doc) => doc.__id === id);
    if (result !== undefined) {
      this.emit('find', [result], this.documents);
    }
    return result;
  }

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
  removeExact(document: PlainObject, first: boolean = false): PlainObject | PlainObject[] {
    const removed: PlainObject[] = [];
    const indices: number[] = [];

    this.documents.forEach((doc, idx) => {
      // Shallow clone to remove the __id field for a deep strict equal check.
      const clonedDoc = { ...doc };
      delete clonedDoc.__id;
      const match = isDeepStrictEqual(clonedDoc, document);
      if (match) {
        indices.push(idx);
      }
    });

    if (indices.length > 0) {
      if (first) {
        removed.push(...this.documents.splice(indices[0], 1));
      } else {
        indices.reverse().forEach((idx) => {
          removed.push(...this.documents.splice(idx, 1));
        });
      }
      this.emit('remove', removed, this.documents);
    }

    return first ? removed[0] : removed;
  }

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
  remove(filter: QueryObject | FilterFunction): PlainObject[] {
    const removed: PlainObject[] = [];
    const indices: number[] = [];

    this.documents.forEach((doc, idx) => {
      if (this.checkDocument(doc, filter)) {
        indices.push(idx);
      }
    });

    if (indices.length > 0) {
      // Reverse the array, so the actual indices of
      // the documents won't change upon removing documents.
      indices.reverse().forEach((idx) => {
        removed.push(...this.documents.splice(idx, 1));
      });
      this.emit('remove', removed, this.documents);
    }

    return removed;
  }

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
  removeOne(filter: QueryObject | FilterFunction): PlainObject | undefined {
    const idx = this.documents.findIndex((doc) => this.checkDocument(doc, filter));

    if (idx === -1) {
      return;
    }

    const removed = this.documents.splice(idx, 1)[0];
    this.emit('remove', [removed], this.documents);
    return removed;
  }

  /**
   * Remove the document with the matching ID.
   *
   * @param {string} id ID of the document to remove.
   * @fires Collection#remove After successfully removing the document.
   * @returns {object} Removed document.
   * @example
   * collection.removeById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
   */
  removeById(id: string): PlainObject | undefined {
    const idx = this.documents.findIndex((doc) => doc.__id === id);

    if (idx === -1) {
      return;
    }

    const removed = this.documents.splice(idx, 1)[0];
    this.emit('remove', [removed], this.documents);
    return removed;
  }

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
  update(filter: QueryObject | FilterFunction, updater: PlainObject | UpdateFunction): PlainObject[] {
    const updated: PlainObject[] = [];

    this.documents.forEach((doc) => {
      if (!this.checkDocument(doc, filter)) {
        return;
      }

      this.maybeUpdate(doc, updater);
      updated.push(doc);
    });

    if (updated.length > 0) {
      this.emit('update', updated, this.documents);
    }
    return updated;
  }


  /**
   * Update the document with the matching ID.
   * @fires Collection#update After successfully updating the document.
   * @example
   * collection.updateById(
   *  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
   *  { price: 49.99 }
   * );
   */
  updateById(id: string, updater: PlainObject | UpdateFunction): PlainObject | undefined {
    const doc = this.documents.find((doc) => doc.__id === id);

    if (doc === undefined) {
      return;
    }

    this.maybeUpdate(doc, updater);
    this.emit('update', [doc], this.documents);
    return doc;
  }

  /**
   * Register a schema to validate documents inserted into the collection.
   */
  registerSchema(schema: Schema | PlainObject): Schema | undefined {
    if (schema instanceof Schema) {
      this.schema = schema;
    } else if (isObject(schema)) {
      this.schema = new Schema(schema);
    }
    return this.schema;
  }

  /**
   * Unregister the schema which ultimately stops the
   * collection from validating any further documents.
   */
  unregisterSchema(): Schema | undefined {
    const schema = this.schema;
    this.schema = undefined;
    return schema;
  }

  /**
   * Clean the collection from invalid documents using
   * the passed in or registered schema.
   */
  cleanWithSchema(schema = this.schema): PlainObject[] {
    if (!(schema instanceof Schema)) {
      return [];
    }
    return this.remove((document) => !schema.validate(document));
  }

  /**
   * Clear the collection by deleting all of its documents.
   */
  clear(): PlainObject[] {
    return this.documents.splice(0, this.size);
  }

  /**
   * Get the registered schema of the collection.
   */
  get registeredSchema(): Schema | undefined {
    return this.schema;
  }

  /**
   * Get whether the collection has a schema registered.
   */
  get hasSchema(): boolean {
    return this.schema instanceof Schema;
  }

  /**
   * Get the first document of the collection.
   */
  get firstDocument(): PlainObject {
    return this.documents[0];
  }

  /**
   * Get the last document of the collection.
   */
  get lastDocument(): PlainObject {
    return this.documents[this.documents.length-1];
  }

  /**
   * Get the amount of documents of the collection.
   */
  get size(): number {
    return this.documents.length;
  }

  private maybeInsert(doc: PlainObject) {
    if (this.schema instanceof Schema) {
      const isValid = this.schema.validate(doc);
      if (!isValid) {
        throw new Error('Failed to validate document');
      }
    }

    const id = uuidv4();
    this.documents.push({
      ...clone(doc),
      __id: id,
    });
    return id;
  }

  private maybeUpdate(doc: PlainObject, updater: PlainObject | UpdateFunction): void {
    const clonedDocument = clone(doc);
    if (typeof updater === 'function') {
      updater(clonedDocument);
    } else {
      Object.assign(clonedDocument, updater);
    }
    if (this.hasSchema) {
      const isValid = this.schema!.validate(clonedDocument);
      if (!isValid) {
        throw new Error('Failed to validate document');
      }
    }
    Object.assign(doc, clonedDocument);
  }

  private checkDocument(doc: PlainObject, filter: QueryObject | FilterFunction): boolean {
    return typeof filter === 'function'
      ? filter(doc)
      : applyQuery(filter, doc);
  }

  /**
   * Return the necessary properties for the export.
   */
  export() {
    return {
      name: this.name,
      documents: this.documents,
      created: this.created,
      ...(this.schema instanceof Schema && {
        schema: this.schema.export(),
      }),
    };
  }
}

export default interface Collection {
  where: typeof Collection.prototype.find;
}

Collection.prototype.where = Collection.prototype.find;
