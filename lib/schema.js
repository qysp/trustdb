const { isPlainObject, hasOwnProperty } = require('./helpers');

const typeValidator = (type) => (value) => typeof value === type;
const instanceValidator = (instance) => (value) => value instanceof instance;
const customValidator = (predicate) => (value) => predicate(value);
const arrayValidator = (validator) => (value) => value.every((element) => validator(element));

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

      if (isPlainObject(value)) {
        const hasReservedProperty = Object.keys(value)
          .some((key) => this._reservedProperties.includes(key));
        if (hasReservedProperty) {
          if (hasOwnProperty(value, '__optional')) {
            _schema.__optional = value.__optional;
          }
          value = hasOwnProperty(value, '__value') ? value.__value : 'any';
          if (Array.isArray(value)) {
            isArray = true;
            value = value.length > 0 ? value[0] : 'any';
          }
        } else {
          _schema = this._parseSchema(value);
        }
      }

      if (value === 'any') {
        _schema.__skip = true;
      } else {
        _schema.__validate = this._chooseValidator(value, isArray);
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
        return false;
      }
      if (hasOwnProperty(schema[key], '__skip')) {
        return true;
      }
      if (!schema[key].__validate(value)) {
        return false;
      }
      if (isPlainObject(value)) {
        return this._applySchema(schema[key], value);
      }
      if (Array.isArray(value)) {
        // TODO: Find better way to check if some but not all elements are plain objects.
        const allPlainObjects = value.every(isPlainObject);
        const somePlainObjects = value.some(isPlainObject);
        if (somePlainObjects && !allPlainObjects) {
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
        return obj.some((element) => !hasOwnProperty(element, key));
      }
      if (!hasOwnProperty(obj, key)) {
        return true;
      }
      if (isPlainObject(value)) {
        return this._checkDeviations(value, obj[key]);
      }
      return false;
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