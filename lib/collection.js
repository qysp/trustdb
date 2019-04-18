/**
 * Creates a Collection instance.
 * 
 * @constructor
 * @param {string} name name of the collection
 * @borrows Collection#insert as Collection#add
 * @borrows Colection#insertOne as Collection#addOne
 * @borrows Collection#remove as Collection#delete
 */
class Collection {
  constructor(name) {
    this.name = name;
    this.documents = [];
    this.timestamp = new Date().getTime();
  }

  /**
   * Insert new documents into the collection.
   * 
   * @param {...object} docs 
   * @returns {Promise<number | Error>} number of documents in the collection
   */
  insert(...docs) {
    return new Promise((resolve, reject) => {
      if (docs.length === 0) {
        reject(new Error('Document(-s) to insert cannot be empty'));
      }

      if (docs.length === 1 && Array.isArray(docs[0])) {
        // (QoL feature) in case an array gets passed as the `docs` argument
        docs = [].concat(...docs); // Node 11+ this could become `docs.flat()`
      }

      let docAmount = 0;
      for (doc of docs) {
        docAmount = await this.insertOne(doc).catch(reject);
      }

      resolve(docAmount);
    });
  }
  add = this.insert;

  /**
   * Insert a single document into the collection.
   * 
   * @param {object} doc
   * @returns {Promise<number | Error>} number of documents in the collection
   */
  insertOne(doc) {
    return new Promise((resolve, reject) => {
      if (typeof doc !== 'object' || Array.isArray(doc)) {
        reject(new TypeError('All documents need to be of type object, excluding arrays'));
      }

      resolve(this.documents.push(doc));
    });
  }
  addOne = this.insertOne;

  remove(doc) {}
  delete = this.remove;
}

module.exports = Collection;