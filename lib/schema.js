const { isPlainObject, hasOwnProperty } = require('./helpers');

const typeValidator = (type) => (value) => type === 'any' || typeof value === type;
const instanceValidator = (instance) => (value) => value instanceof instance;
const customValidator = (predicate) => (value) => predicate(value);
const arrayValidator = (validator) => (value) => Array.isArray(value) && value.every((element) => validator(element));

/**
 * @typedef SchemaTypes
 * @property {'any'} Any
 * @property {'any'} Mixed
 * @property {'string'} String
 * @property {'number'} Number
 * @property {'boolean'} Boolean
 * @property {'date'} Date
 */

class Schema {
  /**
   * Creates a Schema instance.
   *
   * @param {object} schema Plain object to parse as a schema.
   */
  constructor(schema) {
    this._reservedProperties = [
      '__value',
      '__optional',
      '__validate',
      '__skip',
    ];
    this._schema = this._parseSchema(schema);
    this._template = schema;
    // TODO: Add validation errors to this log.
    this._validationErrors = [];
  }

  /**
   * Validate a document.
   *
   * @param {object} document Document to validate.
   * @return {boolean} Whether the document is valid.
   */
  validate(document) {
    if (!isPlainObject(document)) {
      throw new TypeError('Expected parameter `document` to be a plain object');
    }
    this._validationErrors.length = 0;
    return this._applySchema(this._schema, document);
  }

  /**
   * Get the available schema types.
   *
   * @returns {SchemaTypes} Available schema types.
   */
  static get Types() {
    return {
      Any: 'any',
      Mixed: 'any',
      String: 'string',
      Number: 'number',
      Boolean: 'boolean',
      Date: 'date',
    };
  }

  /**
   * Get the validation errors (if present).
   *
   * @returns {string[]} Validation errors.
   */
  get validationErrors() {
    return this._validationErrors;
  }

  /**
   * Parse an object into a validation schema.
   *
   * @private
   * @param {object} schema Plain object to parse as a schema.
   * @return {object} Parsed validation schema.
   */
  _parseSchema(schema) {
    if (!isPlainObject(schema)) {
      throw new TypeError('Expected parameter `schema` to be a plain object');
    }

    return Object.entries(schema).reduce((acc, [key, value]) => {
      let isArray = false;
      let _schema = {};

      if (Array.isArray(value)) {
        isArray = true;
        value = value.length > 0 ? value[0] : 'any';
      }

      if (isPlainObject(value) && Object.keys(value).some(
          (key) => this._reservedProperties.includes(key))) {
        if (hasOwnProperty(value, '__optional')) {
          _schema.__optional = !!value.__optional;
        }
        value = hasOwnProperty(value, '__value') ? value.__value : 'any';
        if (Array.isArray(value)) {
          isArray = true;
          value = value.length > 0 ? value[0] : 'any';
        }
      }

      if (isPlainObject(value)) {
        Object.assign(_schema, this._parseSchema(value));
      }

      _schema.__validate = this._chooseValidator(value, isArray);
      if (value === 'any') {
        _schema.__skip = true;
      }

      return {
        ...acc,
        [key]: _schema,
      };
    }, {});
  }

  /**
   * Internal validation wrapper for recursive calls.
   *
   * @private
   * @param {object} schema Schema used for validation.
   * @param {object} obj Plain object to validate.
   * @return {boolean} Whether the plain object is valid.
   */
  _applySchema(schema, obj) {
    const isValid = Object.entries(obj).every(([key, value]) => {
      if (key === '__id') {
        return true;
      }
      if (!hasOwnProperty(schema, key)) {
        this._addLog(`Property '${key}' does not exist in schema`);
        return false;
      }
      if (!schema[key].__validate(value)) {
        this._addLog(`Mismatched type for property '${key}'`);
        return false;
      }
      if (hasOwnProperty(schema[key], '__skip')) {
        return true;
      }
      if (isPlainObject(value)) {
        return this._applySchema(schema[key], value);
      }
      if (Array.isArray(value)) {
        // TODO: Find better way to check if some but not all elements are plain objects.
        const allPlainObjects = value.every(isPlainObject);
        const somePlainObjects = value.some(isPlainObject);
        if (somePlainObjects && !allPlainObjects) {
          this._addLog(`Some - but not all - elements of property '${key}' are plain objects`);
          return false;
        }
        if (allPlainObjects) {
          return value.every((element) => this._applySchema(schema[key], element));
        }
      }
      return true;
    });

    return isValid && !this._checkDeviations(schema, obj);
  }

  /**
   * Choose a fitting validator based on the value and other parameters.
   *
   * @private
   * @param {string|object} value Value to build the validator for.
   * @param {boolean} [isArray=false] Whether `value` is inside an array.
   * @return {function} Validation function matched to the parameters.
   */
  _chooseValidator(value, isArray = false) {
    let validator = () => true;
    if (value === 'date') {
      validator = instanceValidator(Date);
    } else if (isPlainObject(value)) {
      validator = customValidator(isPlainObject);
    } else {
      validator = typeValidator(value);
    }
    return isArray
      ? arrayValidator(validator)
      : validator;
  }

  /**
   * Check if the schema and an object differ from each other.
   *
   * @private
   * @param {object} schema Schema used for validation.
   * @param {object} obj Plain object to validate.
   * @returns {boolean} Whether `schema` and `obj` differ from each other.
   */
  _checkDeviations(schema, obj) {
    return Object.entries(schema).some(([key, value]) => {
      if (this._reservedProperties.includes(key)) {
        return false;
      }
      if (hasOwnProperty(value, '__optional') && value.__optional === true) {
        return false;
      }
      if (Array.isArray(obj)) {
        if (obj.some((element) => !hasOwnProperty(element, key))) {
          this._addLog(`Elements in document are missing property '${key}'`);
          return true;
        }
        return false;
      }
      if (!hasOwnProperty(obj, key)) {
        this._addLog(`Document is missing property '${key}'`);
        return true;
      }
      if (isPlainObject(value)) {
        return this._checkDeviations(value, obj[key]);
      }
      return false;
    });
  }

  _addLog(message) {
    this._validationErrors.push(message);
  }

  /**
   * Return the necessary properties for the export.
   *
   * @private
   * @return {object} Necessary schema properties.
   */
  _export() {
    return this._template;
  }
}

module.exports = Schema;