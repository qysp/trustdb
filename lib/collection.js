const EzeventEmitter = require('./ezevents');

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
    this.timestamp = new Date().getTime();
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
   * Clear the collection by deleting all its documents.
   */
  clear() {
    this.documents.length = 0;
  }

  _export() {
    return {
      name: this.name,
      documents: this.documents,
      timestamp: this.timestamp,
    };
  }
}

module.exports = Collection;