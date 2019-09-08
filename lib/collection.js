const uuidv4 = require('uuid/v4');
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
      insert: [],
      remove: [],
      find: [],
      update: [],
    };

    this._name = name;
    this._documents = [];
  }

  /**
   * Insert new documents into the collection.
   * 
   * @param {...object} docs (one or) multiple documents, each as an individual parameter or an array of documents
   * @fires Collection#insert after successfully inserting a document
   */
  insert(...docs) {
    if (docs.length === 0) {
      throw new Error('Document(-s) to insert cannot be empty');
    }

    if (docs.length === 1 && Array.isArray(...docs)) {
      docs = [].concat(...docs);
    }

    for (const doc of docs) {
      this.insertOne(doc, false);
    }

    this.emit('insert', docs, this.documents);
  }

  /**
   * Insert a single document into the collection.
   * 
   * @param {object} doc document to insert
   * @param {boolean} [emitEvent=true] whether to emit the *insert* event (used internally)
   * @fires Collection#insert after successfully inserting a document if `emitEvent` is `true`
   */
  insertOne(doc, emitEvent = true) {
    if (!isPlainObject(doc)) {
      throw new TypeError('Document must be a plain object');
    }

    this._documents.push({
      __id: uuidv4(),
      ...doc,
    });

    if (emitEvent === true) {
      this.emit('insert', [doc], this.documents);
    }
  }

   /**
   * Find all documents in the collection that match the query or passes the filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @param {boolean} resultInstance return a Result instance with the matching documents
   * @fires Collection#find after successfully filtering documents
   * @returns {object[]} matching document
   * @example
   * // Find all documents where the value of the
   * // property price is greater than or equal to 50.
   * collection.find({ price: { greaterThanOrEqual: 50 } });
   * // or
   * collection.find(doc => doc.price >= 50);
   */
  find(filter, resultInstance = false) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Filter/Query must be a plain object or function');
    }
    if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
      throw new Error('At least one or more unknown query functions');
    }

    const filteredDocs = this.documents.filter(doc => {
      if (typeof filter === 'function') {
        return filter(doc);
      } else {
        return checks.applyQuery(filter, doc);
      }
    });

    const result = resultInstance === true
      ? new Result(filteredDocs)
      : filteredDocs;

    this.emit('find', filteredDocs, this.documents);
    return result;
}

  /**
   * Find the first document in the collection that matches the query or passes the filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @fires Collection#find after successfully filtering documents
   * @returns {object | undefined} matching document
   * @example
   * // Find the first document where the value of the
   * // property price is greater than or equal to 50.
   * collection.findOne({ price: { greaterThanOrEqual: 50 } });
   * // or
   * collection.findOne(doc => doc.price >= 50);
   */
  findOne(filter) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Filter/Query must be a plain object or function');
    }
    if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
      throw new Error('At least one or more unknown query functions');
    }

    const result = this.documents.find(doc => {
      if (typeof filter === 'function') {
        return filter(doc);
      } else {
        return checks.applyQuery(filter, doc);
      }
    });

    this.emit('find', [result], this.documents);
    return result;
  }

  /**
   * Find the document with the matching ID.
   * 
   * @param {string} id ID of the document to retrieve
   * @returns {object | undefined} matching document
   * @example
   * collection.findById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
   */
  findById(id) {
    if (typeof id !== 'string') {
      throw new TypeError('ID must be a string');
    }

    const result = this.documents.find(doc => doc.__id === id);

    this.emit('find', result, this.documents);
    return result;
  }

  /**
   * Remove all documents matching the given document from the collection.
   * 
   * @param {object} doc document/-s to remove
   * @param {boolean} [first=false] whether to remove only the first matching document
   * @fires Collection#remove after successfully removing the document/-s
   * @returns {object | object[]} removed document/-s
   * @example
   * // First matching document
   * collection.removeExact({ price: 50 }, true);
   * // All matching documents
   * collection.removeExact({ price: 50 });
   */
  removeExact(doc, first = false) {
    if (!isPlainObject(doc)) {
      throw new TypeError('Document must be a plain object');
    }

    const removed = [];
    const indices = [];

    this.documents.forEach((d, idx) => {
      // Shallow clone to remove the __id field for a deep strict equal check.
      const _doc = { ...d };
      delete _doc.__id;
      const match = checks.deepStrictEqual(_doc, doc);
      if (match) {
        indices.push(idx);
      }
    });

    if (indices.length > 0) {
      if (first === true) {
        removed.push(...this._documents.splice(indices[0], 1));
      } else {
        indices.reverse().forEach(idx => {
          removed.push(...this._documents.splice(idx, 1));
        });
      }
    }

    this.emit('remove', removed, this.documents);
    return first === true ? removed[0] : removed;
  }

  /**
   * Remove all documents in the collection that match the query or passes the filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @fires Collection#remove after successfully removing the documents
   * @returns {object[]} removed documents
   * @example
   * // Remove all documents where the value of the
   * // property price is greater than or equal to 50.
   * collection.remove({ price: { greaterThanOrEqual: 50 } });
   * // or
   * collection.remove(doc => doc.price >= 50);
   */
  remove(filter) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Filter/Query must be a plain object or function');
    }
    if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
      throw new Error('At least one or more unknown query functions');
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
      removed.push(...this._documents.splice(idx, 1));
    });

    this.emit('remove', removed, this.documents);
    return removed;
  }

  /**
   * Remove the first document in the collection that matches the query or passes the filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @fires Collection#remove after successfully removing the document
   * @returns {object[]} removed document
   * @example
   * // Remove the first document where the value of the
   * // property price is greater than or equal to 50.
   * collection.removeOne({ price: { greaterThanOrEqual: 50 } });
   * // or
   * collection.removeOne(doc => doc.price >= 50);
   */
  removeOne(filter) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Filter/Query must be a plain object or function');
    }
    if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
      throw new Error('At least one or more unknown query functions');
    }

    const idx = this.documents.findIndex(doc => {
      if (typeof filter === 'function') {
        return filter(doc);
      } else {
        return checks.applyQuery(filter, doc);
      } 
    });

    let removed;
    if (idx !== -1) {
      removed = this._documents.splice(idx, 1)[0];
    }

    this.emit('remove', removed, this.documents);
    return removed;
  }

  /**
   * Remove the document with the matching ID.
   * 
   * @param {string} id ID of the document to remove
   * @fires Collection#remove after successfully removing the document
   * @returns {object} removed document
   * @example
   * collection.removeById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
   */
  removeById(id) {
    if (typeof id !== 'string') {
      throw new TypeError('ID must be a string');
    }

    const idx = this.documents.findIndex(doc => doc.__id === id);
    
    let removed;
    if (idx !== -1) {
      removed = this._documents.splice(idx, 1)[0];
    }

    this.emit('remove', removed, this.documents);
    return removed;
  }

  /**
   * Update all documents in the collection that match the query or pass the custom filter function.
   * 
   * @param {object | function} filter query object or filter function which will be applied on each document
   * @param {object | function} updater object or update function which will be applied on each filtered document
   * @fires Collection#update after successfully updating the documents
   * @returns {object[]} updated documents
   * @example
   * // Update all documents where the value of the property
   * // price is greater than or equal to 50 and set it to 49.99.
   * collection.update(
   *   doc => doc.price >= 50,
   *   { price: 49.99 }
   * );
   */
  update(filter, updater) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Filter/Query must be a plain object or function');
    }
    // TODO: find better name than "updater"
    if (!isPlainObject(updater) && typeof updater !== 'function') {
      throw new TypeError('Updater must be a plain object or function');
    }
    if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
      throw new Error('At least one or more unknown query functions');
    }

    const updated = [];

    this.documents.forEach((doc, idx) => {
      const match = typeof filter === 'function'
        ? filter(doc)
        : checks.applyQuery(filter, doc);

      if (!match) {
        return;
      }

      if (typeof updater === 'function') {
        updater(doc);
      } else {
        Object.assign(doc, updater);
      }

      this._documents.splice(idx, 1, doc);
      updated.push(doc);
    });

    this.emit('update', updated, this.documents);
    return updated;
  }


  /**
   * Update the document with the matching ID.
   * 
   * @param {string} id ID of the document to update
   * @param {object | function} updater object or update function which will be applied on the matching document
   * @fires Collection#update after successfully updating the document
   * @returns {object} updated document
   * @example
   * collection.updateById(
   *  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
   *  { price: 49.99 }
   * );
   */
  updateById(id, updater) {
    if (typeof id !== 'string') {
      throw new TypeError('ID must be a string');
    }
    if (!isPlainObject(updater) && typeof updater !== 'function') {
      throw new TypeError('Updater must be a plain object or function');
    }

    const result = this.documents.find(doc => doc.__id === id);
    
    if (result === undefined) {
      new Error('No matching document was found');
    }

    if (typeof updater === 'function') {
      updater(result);
    } else {
      Object.assign(result, updater);
    }

    this.emit('update', [result], this.documents);
    return result;
  }

  /**
   * Clear the collection by deleting all of its documents.
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