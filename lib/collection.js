const EventEmitter = require('./events');
const Result = require('./result');
const checks = require('./checks');
const { isPlainObject } = require('./helpers');

/**
 * Creates a Collection instance.
 * 
 * @extends EventEmitter
 */
class Collection extends EventEmitter {
  /**
   * @param {string} name name of the collection
   */
  constructor(name) {
    super();
    this._events = {
      'insert': [],
      'remove': [],
      'find': [],
      'update': [],
    };

    this._name = name;
    this._documents = [];
  }

  /**
   * Insert new documents into the collection.
   * 
   * @param {...object} docs (one or) multiple documents, each as an individual parameter or an array of documents
   * @fires Collection#insert after successfully inserting a document
   * @returns {Promise<void | Error>} a Promise which resolves after successful insertion
   */
  insert(...docs) {
    return new Promise(async (resolve, reject) => {
      if (docs.length === 0) {
        reject(new Error('Document(-s) to insert cannot be empty'));
      }

      if (docs.length === 1 && Array.isArray(docs[0])) {
        docs = [].concat(...docs);
      }

      for (const doc of docs) {
        await this.insertOne(doc, false).catch(reject);
      }

      await this.emit('insert', docs, this._documents);

      resolve();
    });
  }

  /**
   * Insert a single document into the collection.
   * 
   * @param {object} doc document to insert
   * @param {boolean} [emitEvent=true] whether to emit the *insert* event
   * @fires Collection#insert after successfully inserting a document if `emitEvent` is `true`
   * @returns {Promise<void | Error>} a Promise which resolves after successful insertion
   */
  insertOne(doc, emitEvent = true) {
    return new Promise(async (resolve, reject) => {
      if (!isPlainObject(doc)) {
        reject(new TypeError('Document must be a plain object'));
      }

      this._documents.push(doc);

      if (emitEvent === true) {
        await this.emit('insert', [doc], this._documents);
      }

      resolve();
    });
  }

   /**
   * Find all documents in the collection that match the query or passes the filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @param {boolean} resultInstance whether the matching documents should be returned as a Result instance (for sorting)
   * @fires Collection#find after successfully filtering documents
   * @returns {Promise<object[] | Result | Error>} a Promise with the matching documents
   * @example
   * // Find all documents where the value of the
   * // property price is greater than or equal to 50.
   * await collection.find({ price: { greaterThanOrEqual: 50 } });
   * // or
   * await collection.find(doc => doc.price >= 50);
   */
  find(filter, resultInstance = false) {
    return new Promise(async (resolve, reject) => {
      if (!isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const filteredDocs = this._documents.filter(doc => {
        return typeof filter === 'function'
          ? filter(doc)
          : checks.applyQuery(filter, doc);
      });

      const result = resultInstance === true
        ? new Result(filteredDocs)
        : filteredDocs;

      await this.emit('find', filter, filteredDocs, this._documents);
      resolve(result);
    });
  }

  /**
   * Find the first document in the collection that matches the query or passes the filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @fires Collection#find after successfully filtering documents
   * @returns {Promise<object | Error>} a Promise with the matching document
   * @example
   * // Find the first document where the value of the
   * // property price is greater than or equal to 50.
   * await collection.findOne({ price: { greaterThanOrEqual: 50 } });
   * // or
   * await collection.findOne(doc => doc.price >= 50);
   */
  findOne(filter) {
    return new Promise(async (resolve, reject) => {
      if (!isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const result = this._documents.find(doc => {
        return typeof filter === 'function'
          ? filter(doc)
          : checks.applyQuery(filter, doc);
      });

      await this.emit('find', filter, [result], this._documents);
      resolve(result);
    });
  }

  /**
   * Remove all documents matching the given document from the collection.
   * 
   * @param {object} doc document/-s to remove
   * @param {boolean} [first=false] whether to remove only the first matching document
   * @fires Collection#remove after successfully removing the document/-s
   * @returns {Promise<object | object[] | Error>} a Promise with the removed document/-s
   */
  removeExact(doc, first = false) {
    return new Promise(async (resolve, reject) => {
      if (!isPlainObject(doc)) {
        reject(new TypeError('Document must be a plain object'));
      }

      const removed = [];
      const indices = [];

      this._documents.forEach((d, idx) => {
        const match = checks.deepStrictEqual(d, doc);
        if (match) {
          indices.push(idx);
        }
      });

      if (first === true) {
        removed.push(...this._documents.splice(indices[0], 1));
      } else {
        indices.reverse().forEach(idx => {
          removed.push(...this._documents.splice(idx, 1));
        });
      }

      await this.emit('remove', removed, this._documents);
      resolve(first === true ? removed[0] : removed);
    });
  }

  /**
   * Remove all documents in the collection that match the query or passes the filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @fires Collection#remove after successfully removing the documents
   * @returns {Promise<object[] | Error>} a Promise with the removed documents
   * @example
   * // Remove all documents where the value of the
   * // property price is greater than or equal to 50.
   * await collection.remove({ price: { greaterThanOrEqual: 50 } });
   * // or
   * await collection.remove(doc => doc.price >= 50);
   */
  remove(filter) {
    return new Promise(async (resolve, reject) => {
      if (!isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const removed = [];
      const indices = [];

      this._documents.forEach((doc, idx) => {
        const match = typeof filter === 'function'
          ? filter(doc)
          : checks.applyQuery(filter, doc);

        if (match) {
          indices.push(idx);
        }
      });

      // Reverse the array, so the actual indices of
      // the documents won't change upon removing documents.
      indices.reverse().forEach(idx => {
        removed.push(...this._documents.splice(idx, 1));
      });

      await this.emit('remove', removed, this._documents);
      resolve(removed);
    });
  }

  /**
   * Remove the first document in the collection that matches the query or passes the filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @fires Collection#remove after successfully removing the document
   * @returns {Promise<object[] | Error>} a Promise with the removed document
   * @example
   * // Remove the first document where the value of the
   * // property price is greater than or equal to 50.
   * await collection.removeOne({ price: { greaterThanOrEqual: 50 } });
   * // or
   * await collection.removeOne(doc => doc.price >= 50);
   */
  removeOne(filter) {
    return new Promise(async (resolve, reject) => {
      if (!isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const idx = this._documents.findIndex(doc => {
        return typeof filter === 'function'
          ? filter(doc)
          : checks.applyQuery(filter, doc);
      });

      if (idx === -1) {
        reject(new Error('No matching document was found'));
      }

      const removed = this._documents.splice(idx, 1);

      await this.emit('remove', removed, this._documents);
      resolve(...removed);
    });
  }

  /**
   * Update all documents in the collection that match the query or pass the custom filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @param {object | function} updater object or update function which will be applied on each filtered document
   * @fires Collection#update after successfully updating the documents
   * @returns {Promise<object[] | Error>} a Promise with the updated documents
   * @example
   * // Update all documents where the value of the property
   * // price is greater than or equal to 50 and set it to 49.99.
   * await collection.update(
   *   doc => doc.price >= 50,
   *   { price: 49.99 }
   * );
   */
  update(filter, updater) {
    return new Promise(async (resolve, reject) => {
      if (!isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      // TODO: find better name than "updater"
      if (!isPlainObject(updater) && typeof updater !== 'function') {
        reject(new TypeError('Updater must be a plain object or function'));
      }
      if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const updated = [];

      this._documents.forEach((doc, idx) => {
        const match = typeof filter === 'function'
          ? filter(doc)
          : checks.applyQuery(filter, doc);

        if (!match) {
          return;
        }

        typeof updater === 'function'
          ? updater(doc)
          : Object.assign(doc, updater);

        this._documents.splice(idx, 1, doc);
        updated.push(doc);
      });

      await this.emit('update', updated, this._documents);
      resolve(updated);
    });
  }

  /**
   * Clear the collection by deleting all its documents.
   */
  clear() {
    this._documents.length = 0;
  }

  /**
   * Get all documents of the collection.
   * 
   * @returns {object[]} all documents of the collection
   */
  get documents() {
    return this._documents;
  }

  /**
   * Get the name of the collection.
   * 
   * @returns {string} name of the collection
   */
  get name() {
    return this._name;
  }

  /**
   * Get the first document of the collection.
   * 
   * @returns {object} first document of the collection
   */
  get firstDocument() {
    return this._documents[0];
  }

  /**
   * Get the last document of the collection.
   * 
   * @returns {object} last document of the collection
   */
  get lastDocument() {
    return this._documents[this._documents.length-1];
  }

  /**
   * Get the amount of documents of the collection.
   * 
   * @returns {number} amount of documents of the collection
   */
  get size() {
    return this._documents.length;
  }

  /**
   * Internal function.
   * 
   * Return the important properties for the export.
   */
  _export() {
    return {
      name: this._name,
      documents: this._documents,
    };
  }
}

module.exports = Collection;