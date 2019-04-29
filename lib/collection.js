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
   * Query for documents in this collection.
   * 
   * @param {object} query 
   * @returns {Promise<object[] | Error>} 
   * @example
   * // find all documents where the price is greater than or equal to 50
   * const results = await collection.find({ gte: [ 'price', 50 ] });
   */
  find(query) {
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

      const results = this.documents.filter(doc => {
        return Object.entries(query).every(q => {
          // TODO: more dynamic in case of more than one query value (i.e. for between query)
          const fn = q[0];
          const queryKey = q[1][0];
          const queryValue = q[1][1];
          return checks[fn](doc[queryKey], queryValue);
        });
      });

      resolve(results);
    });
  }

  remove(doc) {
    return new Promise(async (resolve, reject) => {
      if (typeof doc !== 'object' || Array.isArray(doc)) {
        reject(new TypeError('All documents need to be of type object, excluding arrays'));
      }

      const idx = this.documents.indexOf(doc);

      if (idx === -1) {
        reject(new Error('No matching document was found'));
      }

      const removed = this.documents.splice(idx, 1);
      await this.emit('remove', this.documents);
      resolve(removed[0]);
    });
  }

  /**
   * Clear the collection by deleting all its documents.
   */
  clear() {
    this.documents.length = 0;
  }

  /**
   * Internal function.
   */
  _export() {
    return {
      name: this.name,
      documents: this.documents,
    };
  }
}

module.exports = Collection;