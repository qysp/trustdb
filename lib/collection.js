const uuidv4 = require('uuid/v4');
const EventEmitter = require('./events');
const Schema = require('./schema');
const Result = require('./result');
const checks = require('./checks');
const { isPlainObject } = require('./helpers');

/**
 * @extends EventEmitter
 * @borrows Collection#find as Collection#where
 */
class Collection extends EventEmitter {
  /**
   * Creates a Collection instance.
   *
   * @param {string} name Name of the collection.
   */
  constructor(name) {
    super({
      insert: [],
      remove: [],
      find: [],
      update: [],
    });

    this._name = name;
    this._schema;
    this._documents = [];
    this._created = new Date().toISOString();
  }

  /**
   * Insert new documents into the collection.
   *
   * @param {...object} docs Documents to insert. Passing an array of documents is also supported.
   * @fires Collection#insert After successfully inserting a document.
   * @returns {string[]} IDs of the inserted documents.
   */
  insert(...docs) {
    if (docs.length === 0) {
      throw new Error('Document(-s) to insert cannot be empty');
    }

    if (docs.length === 1 && Array.isArray(...docs)) {
      docs = [].concat(...docs);
    }

    const ids = [];
    for (const doc of docs) {
      ids.push(this.insertOne(doc, false));
    }

    this.emit('insert', docs, this.documents);

    return ids;
  }

  /**
   * Insert a single document into the collection.
   *
   * @param {object} doc Document to insert.
   * @param {boolean} [emitEvent=true] Whether to emit the *insert* event.
   * @fires Collection#insert After successfully inserting a document if `emitEvent` is *true*.
   * @returns {string} ID of the inserted document.
   */
  insertOne(doc, emitEvent = true) {
    if (!isPlainObject(doc)) {
      throw new TypeError('Expected parameter `doc` to be a plain object');
    }

    if (this._schema instanceof Schema) {
      const result = this._schema.validate(doc);
      if (result === false) {
        throw new Error('Failed to validate document');
      }
    }

    const id = uuidv4();
    this._documents.push({
      ...doc,
      __id: id,
    });

    if (emitEvent === true) {
      this.emit('insert', [doc], this.documents);
    }

    return id;
  }

   /**
   * Find all documents in the collection that match the query or pass the filter function.
   *
   * @param {object | function} filter Query object or filter function which will be applied on each document.
   * @param {boolean} resultInstance Wether to return a Result instance with the matching documents.
   * @fires Collection#find After successfully filtering documents.
   * @returns {object[]} Matching documents.
   * @example
   * // Find all documents where the value of the property price is greater than or equal to 50.
   * collection.find({ price: { greaterThanOrEqual: 50 } });
   * @example
   * // Same result but using a function.
   * collection.find((doc) => doc.price >= 50);
   */
  find(filter, resultInstance = false) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Expected parameter `filter` to be a plain object or function');
    }
    if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
      throw new Error('At least one or more unknown query functions');
    }

    const filteredDocs = this.documents.filter((doc) => {
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
   * @param {object | function} filter Query object or filter function which will be applied on each document.
   * @fires Collection#find After successfully filtering documents.
   * @returns {object} Matching document.
   * @example
   * // Find the first document where the value of the roperty price is greater than or equal to 50.
   * collection.findOne({ price: { greaterThanOrEqual: 50 } });
   * @example
   * // Same result but using a function.
   * collection.findOne((doc) => doc.price >= 50);
   */
  findOne(filter) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Expected parameter `filter` to be a plain object or function');
    }
    if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
      throw new Error('At least one or more unknown query functions');
    }

    const result = this.documents.find((doc) => {
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
   * @param {string} id ID of the document to retrieve.
   * @returns {object} Matching document.
   * @example
   * collection.findById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
   */
  findById(id) {
    if (typeof id !== 'string') {
      throw new TypeError('Expected parameter `id` to be a string');
    }

    const result = this.documents.find((doc) => doc.__id === id);

    this.emit('find', result, this.documents);
    return result;
  }

  /**
   * Remove all documents matching the given document from the collection.
   *
   * @param {object} doc Document(-s) to remove.
   * @param {boolean} [first=false] Whether to remove only the first matching document.
   * @fires Collection#remove After successfully removing the document(-s).
   * @returns {object | object[]} Removed document(-s).
   * @example
   * // Remove the first matching document.
   * collection.removeExact({ price: 50 }, true);
   * @example
   * // Remove all matching documents.
   * collection.removeExact({ price: 50 });
   */
  removeExact(doc, first = false) {
    if (!isPlainObject(doc)) {
      throw new TypeError('Expected parameter `doc` to be a plain object');
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
        indices.reverse().forEach((idx) => {
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
   * @param {object | function} filter Query object or filter function which will be applied on each document.
   * @fires Collection#remove After successfully removing the documents.
   * @returns {object[]} Removed documents.
   * @example
   * // Remove all documents where the value of the
   * // property price is greater than or equal to 50.
   * collection.remove({ price: { greaterThanOrEqual: 50 } });
   * @example
   * // Same result but using a function.
   * collection.remove((doc) => doc.price >= 50);
   */
  remove(filter) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Expected parameter `filter` to be a plain object or function');
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
    indices.reverse().forEach((idx) => {
      removed.push(...this._documents.splice(idx, 1));
    });

    this.emit('remove', removed, this.documents);
    return removed;
  }

  /**
   * Remove the first document in the collection that matches the query or passes the filter function.
   *
   * @param {object | function} filter Query object or filter function which will be applied on each document.
   * @fires Collection#remove After successfully removing the document.
   * @returns {object[]} Removed document.
   * @example
   * // Remove the first document where the value of the
   * // property price is greater than or equal to 50.
   * collection.removeOne({ price: { greaterThanOrEqual: 50 } });
   * // or
   * collection.removeOne((doc) => doc.price >= 50);
   */
  removeOne(filter) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Expected parameter `filter` to be a plain object or function');
    }
    if (isPlainObject(filter) && checks.hasUnknownCheck(filter)) {
      throw new Error('At least one or more unknown query functions');
    }

    const idx = this.documents.findIndex((doc) => {
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
   * @param {string} id ID of the document to remove.
   * @fires Collection#remove After successfully removing the document.
   * @returns {object} Removed document.
   * @example
   * collection.removeById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
   */
  removeById(id) {
    if (typeof id !== 'string') {
      throw new TypeError('Expected parameter `id` to be a string');
    }

    const idx = this.documents.findIndex((doc) => doc.__id === id);

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
   * @param {object | function} filter Query object or filter function which will be applied on each document.
   * @param {object | function} updater Object or update function which will be applied on each filtered document.
   * @fires Collection#update After successfully updating the documents.
   * @returns {object[]} Updated documents.
   * @example
   * // Update all documents where the value of the property price is greater than or equal to 50 and set it to 49.99.
   * collection.update(
   *   (doc) => doc.price >= 50,
   *   { price: 49.99 }
   * );
   */
  update(filter, updater) {
    if (!isPlainObject(filter) && typeof filter !== 'function') {
      throw new TypeError('Expected parameter `filter` to be a plain object or function');
    }
    // TODO: find better name than "updater"
    if (!isPlainObject(updater) && typeof updater !== 'function') {
      throw new TypeError('Expected parameter `update` to be a plain object or function');
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
   * @param {string} id ID of the document to update.
   * @param {object | function} updater Object or update function which will be applied on each filtered document.
   * @fires Collection#update After successfully updating the document.
   * @returns {object} Updated document.
   * @example
   * collection.updateById(
   *  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
   *  { price: 49.99 }
   * );
   */
  updateById(id, updater) {
    if (typeof id !== 'string') {
      throw new TypeError('Expected parameter `id` to be a string');
    }
    if (!isPlainObject(updater) && typeof updater !== 'function') {
      throw new TypeError('Expected parameter `update` to be a plain object or function');
    }

    const result = this.documents.find((doc) => doc.__id === id);

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
   * Register a schema to validate documents inserted into the collection.
   *
   * @param {Schema|object} schema Schema to validate documents with.
   * @returns {Schema} Registered schema.
   */
  registerSchema(schema) {
    if (schema instanceof Schema) {
      this._schema = schema;
    } else if (isPlainObject(schema)) {
      this._schema = new Schema(schema);
    } else {
      throw new TypeError('Expected parameter `schema` to be a Schema instance or plain object');
    }
    return this._schema;
  }

  /**
   * Unregister the schema which ultimately stops the
   * collection from validating any further documents.
   *
   * @returns {Schema} Unregistered schema if there was a registered schema beforehand.
   */
  unregisterSchema() {
    const unregistered = this._schema;
    this._schema = undefined;
    return unregistered;
  }

  /**
   * Clean the collection from invalid documents using
   * the passed in or registered schema.
   *
   * @param {Schema} [schema] Schema instance to clean collection with.
   * @returns {object[]} Removed documents.
   */
  cleanWithSchema(schema) {
    if (schema !== undefined && !(schema instanceof Schema)) {
      throw new Error('Expected parameter `schema` to be a Schema instance');
    } else if (!(this._schema instanceof Schema)) {
      throw new Error('No schema registered');
    }

    return this.remove((doc) => !(schema || this._schema).validate(doc));
  }

  /**
   * Clear the collection by deleting all of its documents.
   *
   * @returns {object[]} All of the removed documents.
   */
  clear() {
    return this._documents.splice(0, this.size);
  }

  /**
   * Get all documents of the collection.
   *
   * @returns {object[]} All documents of the collection.
   */
  get documents() {
    return this._documents;
  }

  /**
   * Get the name of the collection.
   *
   * @returns {string} Name of the collection.
   */
  get name() {
    return this._name;
  }

  /**
   * Get the date and time of creation for this collection.
   *
   * @returns {string} Date and time of creation.
   */
  get created() {
    return this._created;
  }

  /**
   * Get the first document of the collection.
   *
   * @returns {object} First document of the collection.
   */
  get firstDocument() {
    return this._documents[0];
  }

  /**
   * Get the last document of the collection.
   *
   * @returns {object} Last document of the collection.
   */
  get lastDocument() {
    return this._documents[this._documents.length-1];
  }

  /**
   * Get the amount of documents of the collection.
   *
   * @returns {number} Amount of documents of the collection.
   */
  get size() {
    return this._documents.length;
  }

  /**
   * Return the necessary properties for the export.
   *
   * @private
   * @return {object} Necessary collection properties.
   */
  _export() {
    const exported = {
      name: this.name,
      documents: this.documents,
      created: this.created,
    };
    if (this._schema instanceof Schema) {
      exported.schema = this._schema._export();
    }
    return exported;
  }
}

Collection.prototype.where = Collection.prototype.find;

module.exports = Collection;