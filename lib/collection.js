const EventEmitter = require('./events');
const checks = require('./checks');

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
    this.events = {
      'insert': [],
      'remove': [],
      'find': [],
      'update': [],
    };

    this.name = name;
    this.documents = [];
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

      await this.emit('insert', docs, this.documents);

      resolve();
    });
  }

  /**
   * Insert a single document into the collection.
   * 
   * @param {object} doc document to insert
   * @param {boolean} [emitEvent=true] whether to emit the *insert* event, default true
   * @fires Collection#insert after successfully inserting a document if `emitEvent` is `true`
   * @returns {Promise<void | Error>} a Promise which resolves after successful insertion
   */
  insertOne(doc, emitEvent = true) {
    return new Promise(async (resolve, reject) => {
      if (!checks.isPlainObject(doc)) {
        reject(new TypeError('Document must be a plain object'));
      }

      this.documents.push(doc);

      if (emitEvent === true) {
        await this.emit('insert', [doc], this.documents);
      }

      resolve();
    });
  }

   /**
   * Find all documents in the collection that match the query/queries.
   * 
   * @param {object | function} [filter] query object or filter function which will be applied on each document
   * @fires Collection#find after successfully filtering documents
   * @returns {Promise<object[] | Error>} a Promise with the matching documents
   * @example
   * // Find all documents where the value of the
   * // property price is greater than or equal to 50.
   * await collection.find({ price: { greaterThanOrEqual: 50 } });
   * // or
   * await collection.find(doc => doc.price >= 50);
   */
  find(filter) {
    return new Promise(async (resolve, reject) => {
      if (!checks.isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      if (checks.isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const results = this.documents.filter(doc => {
        return typeof filter === 'function'
          ? filter(doc)
          : checks.applyQuery(filter, doc);
      });

      await this.emit('find', filter, results, this.documents);
      resolve(results);
    });
  }

  /**
   * Find the first document in the collection that matches the query/queries.
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
      if (!checks.isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      if (checks.isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const result = this.documents.find(doc => {
        return typeof filter === 'function'
          ? filter(doc)
          : checks.applyQuery(filter, doc);
      });

      await this.emit('find', filter, [result], this.documents);
      resolve(result);
    });
  }

  /**
   * Remove a document from the collection.
   * 
   * @param {object} doc document to remove
   * @fires Collection#remove after successfully removing a document
   * @returns {Promise<object | Error>} a Promise with the removed document
   */
  removeExact(doc) {
    return new Promise(async (resolve, reject) => {
      if (!checks.isPlainObject(doc)) {
        reject(new TypeError('Document must be a plain object'));
      }

      const idx = this.documents.findIndex(d => checks.deepStrictEqual(d, doc));

      if (idx === -1) {
        reject(new Error('No matching document was found'));
      }

      const removed = this.documents.splice(idx, 1);

      await this.emit('remove', removed, this.documents);
      resolve(...removed);
    });
  }

  /**
   * Remove all documents in the collection that match the query/queries.
   * 
   * @param {object | filter} filter query object or filter function which will be applied on each document
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
      if (!checks.isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      if (checks.isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const removed = [];
      const indices = [];

      this.documents.forEach((doc, idx) => {
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
        removed.push(...this.documents.splice(idx, 1));
      });

      await this.emit('remove', removed, this.documents);
      resolve(removed);
    });
  }

  /**
   * Update all documents in the collection that pass the custom filter function.
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
   * // or
   * await collection.update(
    *   { price: { greaterThanOrEqual: 50 } },
    *   doc => doc.price = 49.99
    * );
   */
  update(filter, updater) {
    return new Promise(async (resolve, reject) => {
      if (!checks.isPlainObject(filter) && typeof filter !== 'function') {
        reject(new TypeError('Filter/Query must be a plain object or function'));
      }
      // TODO: find better name than "updater"
      if (!checks.isPlainObject(updater) && typeof updater !== 'function') {
        reject(new TypeError('Updater must be a plain object or function'));
      }
      if (checks.isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
        reject(new Error('At least one or more unknown query functions'));
      }

      const updated = [];

      this.documents.forEach((doc, idx) => {
        const match = typeof filter === 'function'
          ? filter(doc)
          : checks.applyQuery(filter, doc);

        if (!match) {
          return;
        }

        typeof updater === 'function'
          ? updater(doc)
          : Object.assign(doc, updater);

        this.documents.splice(idx, 1, doc);
        updated.push(doc);
      });

      await this.emit('update', updated, this.documents);
      resolve(updated);
    });
  }

  /**
   * Get all documents of the collection.
   * 
   * @returns {object[]} all documents of the collection
   */
  all() {
    return this.documents;
  }

  /**
   * Get the first document of the collection.
   * 
   * @returns {object} first document of the collection
   */
  first() {
    return this.documents[0];
  }

  /**
   * Get the last document of the collection.
   * 
   * @returns {object} last document of the collection
   */
  last() {
    return this.documents[this.documents.length-1];
  }

  /**
   * Get the amount of documents of the collection.
   * 
   * @returns {number} amount of documents of the collection
   */
  size() {
    return this.documents.length;
  }

  /**
   * Clear the collection by deleting all its documents.
   */
  clear() {
    this.documents.length = 0;
  }

  /**
   * Internal function.
   * 
   * Return the important properties for the export.
   */
  _export() {
    return {
      name: this.name,
      documents: this.documents,
    };
  }
}

module.exports = Collection;