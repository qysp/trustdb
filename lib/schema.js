"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = exports.SchemaType = void 0;
var util_1 = require("./util");
var typeValidator = function (type) { return function (value) { return type === 'any' || typeof value === type; }; };
var instanceValidator = function (instance) { return function (value) { return value instanceof instance; }; };
var customValidator = function (predicate) { return predicate; };
var arrayValidator = function (validator) {
    return function (value) { return Array.isArray(value) && value.every(function (element) { return validator(element); }); };
};
var SchemaType;
(function (SchemaType) {
    SchemaType["Any"] = "any";
    SchemaType["Mixed"] = "any";
    SchemaType["String"] = "string";
    SchemaType["Number"] = "number";
    SchemaType["Boolean"] = "boolean";
    SchemaType["Date"] = "date";
})(SchemaType = exports.SchemaType || (exports.SchemaType = {}));
var Schema = /** @class */ (function () {
    /**
     * Creates a Schema instance.
     */
    function Schema(schema) {
        this.errors = [];
        this.reservedProperties = [
            '__value',
            '__optional',
            '__validate',
            '__skip',
        ];
        this.schema = this.parseSchema(schema);
        this.template = schema;
    }
    /**
     * Validate a document.
     */
    Schema.prototype.validate = function (document) {
        if (!util_1.isObject(document)) {
            throw new TypeError('Expected parameter `document` to be a plain object');
        }
        this.errors.length = 0;
        return this.applySchema(this.schema, document);
    };
    Object.defineProperty(Schema.prototype, "validationErrors", {
        /**
         * Get the validation errors (if present).
         */
        get: function () {
            return this.errors;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Parse an object into a validation schema.
     */
    Schema.prototype.parseSchema = function (schema) {
        var _this = this;
        return Object.entries(schema).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            var parsed = {
                __validate: function (_) { return true; },
                __optional: false,
                __skip: false,
            };
            var isArray = false;
            if (Array.isArray(value)) {
                isArray = true;
                value = value.length > 0 ? value[0] : SchemaType.Any;
            }
            var type = value;
            if (util_1.isObject(value) && Object.keys(value).some(function (key) { return _this.reservedProperties.includes(key); })) {
                if (util_1.has(value, '__optional')) {
                    parsed.__optional = !!value.__optional;
                }
                type = util_1.has(value, '__value') ? value.__value : SchemaType.Any;
                if (Array.isArray(type)) {
                    isArray = true;
                    type = type.length > 0 ? type[0] : SchemaType.Any;
                }
            }
            if (util_1.isObject(type)) {
                Object.assign(parsed, _this.parseSchema(type));
            }
            parsed.__validate = _this.chooseValidator(type, isArray);
            if (value === SchemaType.Any) {
                parsed.__skip = true;
            }
            acc[key] = parsed;
            return acc;
        }, {});
    };
    /**
     * Internal validation wrapper for recursive calls.
     */
    Schema.prototype.applySchema = function (schema, obj) {
        var _this = this;
        var isValid = Object.entries(obj).every(function (_a) {
            var key = _a[0], value = _a[1];
            if (key === '__id') {
                return true;
            }
            if (!util_1.has(schema, key)) {
                _this.log("Property '" + key + "' does not exist in schema");
                return false;
            }
            var s = schema[key];
            if (!s.__validate(value)) {
                _this.log("Mismatched type for property '" + key + "'");
                return false;
            }
            if (util_1.has(s, '__skip')) {
                return true;
            }
            if (util_1.isObject(value)) {
                return _this.applySchema(s, value);
            }
            if (Array.isArray(value)) {
                // TODO: Find better way to check if some but not all elements are plain objects.
                var allPlainObjects = value.every(util_1.isObject);
                var somePlainObjects = value.some(util_1.isObject);
                if (somePlainObjects && !allPlainObjects) {
                    _this.log("Some - but not all - elements of property '" + key + "' are plain objects");
                    return false;
                }
                if (allPlainObjects) {
                    return value.every(function (element) { return _this.applySchema(s, element); });
                }
            }
            return true;
        });
        return isValid && !this.checkDeviations(schema, obj);
    };
    /**
     * Choose a fitting validator based on the value and other parameters.
     *
     * @private
     * @param {string|object} value Value to build the validator for.
     * @param {boolean} [isArray=false] Whether `value` is inside an array.
     * @return {function} Validation function matched to the parameters.
     */
    Schema.prototype.chooseValidator = function (value, isArray) {
        if (isArray === void 0) { isArray = false; }
        var validator = function (_) { return true; };
        if (value === SchemaType.Date) {
            validator = instanceValidator(Date);
        }
        else if (util_1.isObject(value)) {
            validator = customValidator(util_1.isObject);
        }
        else {
            validator = typeValidator(value);
        }
        return isArray
            ? arrayValidator(validator)
            : validator;
    };
    /**
     * Check if the schema and an object differ from each other.
     */
    Schema.prototype.checkDeviations = function (schema, obj) {
        var _this = this;
        return Object.entries(schema).some(function (_a) {
            var key = _a[0], value = _a[1];
            if (_this.reservedProperties.includes(key)) {
                return false;
            }
            if (util_1.has(value, '__optional') && value.__optional === true) {
                return false;
            }
            if (Array.isArray(obj)) {
                if (obj.some(function (element) { return !util_1.has(element, key); })) {
                    _this.log("Elements in document are missing property '" + key + "'");
                    return true;
                }
                return false;
            }
            if (!util_1.has(obj, key)) {
                _this.log("Document is missing property '" + key + "'");
                return true;
            }
            if (util_1.isObject(value)) {
                return _this.checkDeviations(value, obj[key]);
            }
            return false;
        });
    };
    Schema.prototype.log = function (error) {
        this.errors.push(error);
    };
    /**
     * Return the necessary properties for the export.
     */
    Schema.prototype.export = function () {
        return this.template;
    };
    return Schema;
}());
exports.Schema = Schema;
