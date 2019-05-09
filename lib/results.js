const { simpleSorting } = require('./sorting');

class Results {
  /**
   * @param {object[]} documents
   */
  constructor(documents) {
    this._originalDocuments = documents;
    this._documents = documents;
  }

  /**
   * Sort the results JavaScript's default sorting algorithm.
   * 
   * @param {boolean} [desc=false] whether to sort the results descending
   * @returns {this} Results instance
   */
  defaultSort(desc = false) {
    this._documents.sort();

    if (desc === true) {
      this._documents.reverse();
    }

    return this;
  }

  /**
   * Sort the results given a specific property.
   * Should work quite reliable when the value to sort by is a
   * string, number or something similar (e. g. a Date object).
   * 
   * @param {string} prop property name within the documents
   * @param {boolean} [desc=false] whether to sort the results descending
   * @returns {this} Results instance
   */
  simpleSort(prop, desc = false) {
    if (typeof prop !== 'string') {
      throw new Error('Parameter `prop` must be a string');
    }

    this._documents.sort((a, b) => {
      return simpleSorting(a[prop], b[prop]);
    });

    if (desc === true) {
      this._documents.reverse();
    }

    return this;
  }

  /**
   * Sort the results using your own custom sort function.
   * 
   * @param {function} sortFn custom sort function which will be applied on each result
   * @returns {this} Results instance
   */
  sort(sortFn) {
    if (typeof sortFn !== 'function') {
      throw new Error('Paramter `sortFn` must be a function');
    }

    this._documents.sort(sortFn);
    return this;
  }

  /**
   * Limit the number of results.
   * 
   * @param {number} value limit value for the results
   * @returns {this} Results instance
   */
  limit(value) {
    this._documents.slice(0, value);
    return this;
  }

  /**
   * Get the results, i.e. filtered and possibly altered documents.
   * 
   * @returns {object[]} filtered/altered documents
   */
  get documents() {
    return this._documents;
  }

  /**
   * Get the unaltered results, i.e. filtered documents.
   * 
   * @returns {object[]} unaltered documents
   */
  get originalDocuments() {
    return this._originalDocuments;
  }
}

module.exports = Results;