const { isPlainObject, hasOwnProperty } = require('./helpers');

const typeValidator = (type) => (value) => typeof value === type;
const instanceValidator = (instance) => (value) => value instanceof instance;
const customValidator = (predicate) => (value) => predicate(value);

class Schema {
  /**
   * Creates a Schema instance.
   *
   * @param {object} schema Plain object to parse as a schema.
   */
  constructor(schema) {
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
    return this._validate(this._schema, document);
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
      let validator;
      acc[key] = {};

      if (value === 'date') {
        validator = instanceValidator(Date);
      } else if (Array.isArray(value)) {
        validator = customValidator(Array.isArray);
        value = value[0];
      }

      if (isPlainObject(value)) {
        if (validator === undefined) {
          validator = customValidator(isPlainObject);
        }
        acc[key] = this._parseSchema(value);
      }

      if (validator === undefined) {
        validator = typeValidator(value);
      }

      acc[key].__validate = validator;
      return acc;
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
  _validate(schema, obj) {
    const schemaLength = Object.keys(schema).length - (hasOwnProperty(schema, '__validate') ? 1 : 0);
    const objectLength = Object.keys(obj).length - (hasOwnProperty(obj, '__id') ? 1 : 0);
    const sameLength = objectLength === schemaLength;
    return sameLength && Object.entries(obj).every(([key, value]) => {
      if (key === '__id') {
        return true;
      }
      if (!hasOwnProperty(schema, key)) {
        return false;
      }
      if (!schema[key].__validate(value)) {
        return false;
      }
      if (isPlainObject(value)) {
        return this._validate(schema[key], value);
      }
      if (Array.isArray(value)) {
        return value.every((element) => this._validate(schema[key], element));
      }
      return true;
    });
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