const { simpleSorting } = require('./sorting');

class Result {
  /**
   * Creates a Result instance.
   *
   * @param {object[]} documents Documents for sorting.
   */
  constructor(documents) {
    this._originalDocuments = documents;
    this._documents = documents;
  }

  /**
   * Sort the results given a specific property.
   * Supported property value types are string, number, boolean or Date.
   *
   * @param {string} prop Property name within the documents.
   * @param {boolean} [desc=false] Whether to sort the results descending.
   * @returns {this} Result instance.
   */
  simpleSort(prop, desc = false) {
    if (typeof prop !== 'string') {
      throw new TypeError('Expected parameter `prop` to be a string');
    }

    this._documents.sort((a, b) => simpleSorting(a[prop], b[prop]));

    if (desc === true) {
      this._documents.reverse();
    }

    return this;
  }

  /**
   * Sort the results using your own custom sort function.
   *
   * @param {function} sortFn Custom sort function which will be applied on each result.
   * @returns {this} Result instance.
   */
  sort(sortFn) {
    if (typeof sortFn !== 'function') {
      throw new TypeError('Expected parameter `sortFn` to be a function');
    }

    this._documents.sort(sortFn);
    return this;
  }

  /**
   * Map the results using your own custom map function.
   *
   * @param {function} mapFn Custom map function which will be applied on each result.
   * @returns {this} Result instance.
   */
  map(mapFn) {
    if (typeof mapFn !== 'function') {
      throw new TypeError('Expected parameter `mapFn` to be a function');
    }

    this._documents = this.documents.map(mapFn);
    return this;
  }

  /**
   * Limit the number of results.
   *
   * @param {number} value Limit value for the results.
   * @returns {this} Result instance.
   */
  limit(value) {
    this._documents = this.documents.slice(0, value);
    return this;
  }

  /**
   * Get the filtered and possibly altered documents.
   *
   * @returns {object[]} Filtered and possibly altered documents.
   */
  get documents() {
    return this._documents;
  }

  /**
   * Get the filtered but unaltered results documents.
   *
   * @returns {object[]} Filtered but unaltered documents.
   */
  get originalDocuments() {
    return this._originalDocuments;
  }
}

module.exports = Result;