const EzeventEmitter = require('./ezevents');
const checks = require('./checks');

/**
 * Creates a Collection instance.
 * 
 * @extends EzeventEmitter
 */
class Collection extends EzeventEmitter {
  /**
   * @param {string} name name of the collection
   */
  constructor(name) {
    super();
    this.events = {
      'insert': [],
      'remove': [],
    };

    this.name = name;
    this.documents = [];
  }

  /**
   * Insert new documents into the collection.
   * 
   * @param {...object} docs (one or) multiple documents, each as an individual parameter or an array of documents
   * @fires Collection#insert after successfully inserting a document
   * @returns {Promise<number | Error>} number of documents in the collection
   */
  insert(...docs) {
    return new Promise(async (resolve, reject) => {
      if (docs.length === 0) {
        reject(new Error('Document(-s) to insert cannot be empty'));
      }

      if (docs.length === 1 && Array.isArray(docs[0])) {
        // (QoL feature) in case an array gets passed as the `docs` argument
        docs = [].concat(...docs); // Node 11+ this could become `docs.flat()`
      }

      let docAmount = 0;
      for (const doc of docs) {
        docAmount = await this.insertOne(doc, false)
          .catch(reject);
      }

      await this.emit('insert', this.documents);

      resolve(docAmount);
    });
  }

  /**
   * Insert a single document into the collection.
   * 
   * @param {object} doc document to insert
   * @param {boolean} [emitEvent=true] whether to emit the *insert* event
   * @fires Collection#insert after successfully inserting a document if `emitEvent` is `true`
   * @returns {Promise<number | Error>} number of documents in the collection
   */
  insertOne(doc, emitEvent = true) {
    return new Promise(async (resolve, reject) => {
      if (typeof doc !== 'object' || Array.isArray(doc)) {
        reject(new TypeError('All documents need to be of type object, excluding arrays'));
      }

      const docAmount = this.documents.push(doc);

      if (emitEvent === true) {
        await this.emit('insert', this.documents);
      }

      resolve(docAmount);
    });
  }

  /**
   * Find all documents in the collection that match the query/queries.
   * 
   * @param {object} [query] query for the matching documents, if `undefined` return all documents
   * @returns {Promise<object[] | Error>} a Promise with the matching documents
   * @example
   * // find all documents where the value of the
   * // property price is greater than or equal to 50
   * const results = await collection.find({ gte: [ 'price', 50 ] });
   */
  find(query) {
    // TODO: add and/or parameter
    return new Promise((resolve, reject) => {
      if (query === undefined) {
        resolve(this.documents);
      }

      if (typeof query !== 'object') {
        reject(new TypeError('Query must be of type object'));
      }
      if (!Object.keys(query).every(q => checks.hasOwnProperty(q))) {
        reject(new Error('At least one of the query properties is unknown'));
      }
      if (!Object.values(query).every(v => Array.isArray(v))) {
        reject(new TypeError('Query property values must be of type array'));
      }

      const results = this.documents.filter(doc => {
        return Object.entries(query).every(([fn, q]) => {
          const queryKey = q[0];
          const queryValue = q.length > 2 ? q.slice(1) : q[1];
          return checks[fn](doc[queryKey], queryValue);
        });
      });

      resolve(results);
    });
  }

  /**
   * Find the first document in the collection that matches the query/queries.
   * 
   * @param {object} query query for the first matching document
   * @returns {Promise<object | Error>} a Promise with the matching document
   * @example
   * // find the first document where the value of the
   * // property price is greater than or equal to 50
   * const results = await collection.findOne({ gte: [ 'price', 50 ] });
   */
  findOne(query) {
    return new Promise((resolve, reject) => {
      if (typeof query !== 'object') {
        reject(new TypeError('Query must be of type object'));
      }
      if (!Object.keys(query).every(q => checks.hasOwnProperty(q))) {
        reject(new Error('At least one of the query properties is unknown'));
      }
      if (!Object.values(query).every(v => Array.isArray(v))) {
        reject(new TypeError('Query property values must be of type array'));
      }

      // TODO: benchmark performance of using this.find() and only returning the first document
      const result = this.documents.find(doc => {
        return Object.entries(query).every(([fn, q]) => {
          const queryKey = q[0];
          const queryValue = q.length > 2 ? q.slice(1) : q[1];
          return checks[fn](doc[queryKey], queryValue);
        });
      });

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
  remove(doc) {
    return new Promise(async (resolve, reject) => {
      if (typeof doc !== 'object' || Array.isArray(doc)) {
        reject(new TypeError('All documents need to be of type object, excluding arrays'));
      }

      const idx = this.documents.findIndex(d => checks.dseq(d, doc));

      if (idx === -1) {
        reject(new Error('No matching document was found'));
      }

      const removed = this.documents.splice(idx, 1);
      await this.emit('remove', this.documents);
      resolve(removed[0]);
    });
  }

  /**
   * Remove all documents in the collection that match the query/queries.
   * 
   * @param {object} query query for the matching documents
   * @returns {Promise<object[] | Error>} a Promise with the removed documents
   * @example
   * // remove all documents where the value of the
   * // property price is greater than or equal to 50
   * const removedDocuments = await collection.removeWhere({ gte: [ 'price', 50 ] });
   */
  removeWhere(query) {
    return new Promise((resolve, reject) => {
      if (typeof query !== 'object') {
        reject(new TypeError('Query must be of type object'));
      }
      if (!Object.keys(query).every(q => checks.hasOwnProperty(q))) {
        reject(new Error('At least one of the query properties is unknown'));
      }
      if (!Object.values(query).every(v => Array.isArray(v))) {
        reject(new TypeError('Query property values must be of type array'));
      }

      const results = [];
      const indices = [];

      this.documents.forEach((doc, idx) => {
        const match = Object.entries(query).every(([fn, q]) => {
          const queryKey = q[0];
          const queryValue = q.length > 2 ? q.slice(1) : q[1];
          return checks[fn](doc[queryKey], queryValue);
        });
        if (match === true) {
          indices.push(idx);
        }
      });

      // reverse so the actual indices of documents
      // won't change upon removing documents
      indices.reverse().forEach(idx => {
        const removed = this.documents.splice(idx, 1);
        results.push(removed[0]);
      });

      resolve(results);
    });
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