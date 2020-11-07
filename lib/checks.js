"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasUnknownCheck = exports.applyQuery = exports.checks = void 0;
var util_1 = require("util");
var util_2 = require("./util");
var chooseOperation = function (operator) { return (operator === 'or' || operator === 'nor') ? 'some' : 'every'; };
var useNegation = function (operator) { return operator === 'not' || operator === 'nor'; };
exports.checks = {
    /**
     * Whether `a` is equal to `b`.
     */
    equal: function (a, b) { return a == b; },
    /**
     * Whether `a` is not equal to `b`.
     */
    notEqual: function (a, b) { return a != b; },
    /**
     * Whether `a` is strict equal to `b`.
     */
    strictEqual: function (a, b) { return a === b; },
    /**
     * Whether `a` is strict not equal to `b`.
     */
    strictNotEqual: function (a, b) { return a !== b; },
    /**
     * Whether `a` is deep strict equal to `b`.
     */
    deepStrictEqual: function (a, b) { return util_1.isDeepStrictEqual(a, b); },
    /**
     * Whether `a` is deep strict not equal to `b`.
     */
    deepStrictNotEqual: function (a, b) { return !util_1.isDeepStrictEqual(a, b); },
    /**
     * Whether `a` is greater than `b`.
     */
    greaterThan: function (a, b) { return typeof a === 'number' && a > b; },
    /**
     * Whether `a` is less than `b`.
     */
    lessThan: function (a, b) { return typeof a === 'number' && a < b; },
    /**
     * Whether `a` is greater than or equal to `b`.
     */
    greaterThanOrEqual: function (a, b) { return typeof a === 'number' && a >= b; },
    /**
     * Whether `a` is less than or equal to `b`.
     */
    lessThanOrEqual: function (a, b) { return typeof a === 'number' && a <= b; },
    /**
     * Whether the string `a` starts with `b`.
     */
    startsWith: function (a, b) { return typeof a === 'string' && a.startsWith(b); },
    /**
     * Whether the string `a` ends with `b`.
     */
    endsWith: function (a, b) { return typeof a === 'string' && a.endsWith(b); },
    /**
     * Whether the type of `a` equals `b`.
     * All primitive types and 'array' are supported.
     */
    typeOf: function (a, b) {
        if (b === 'object') {
            return util_2.isObject(a);
        }
        if (b === 'array') {
            return Array.isArray(a);
        }
        return typeof a === b;
    },
    /**
     * Whether an string, array or set `a` has the length of `b`.
     */
    lengthOf: function (a, b) {
        if (typeof a === 'string' || Array.isArray(a)) {
            return a.length === b;
        }
        if (a instanceof Set) {
            return a.size === b;
        }
        return false;
    },
    /**
     * Whether `a` is between the min and max of `b`.
     * Parameter `b` has to be an array.
     */
    between: function (a, b) {
        if (typeof a !== 'number') {
            return false;
        }
        return Array.isArray(b) &&
            a > Math.min.apply(Math, b) &&
            a < Math.max.apply(Math, b);
    },
    /**
     * Whether `a` matches the pattern of the regex `b`.
     * Parameter `b` can be an RegExp instance, an Array or a string.
     */
    regExp: function (a, b) {
        if (Array.isArray(b)) {
            b = new (RegExp.bind.apply(RegExp, __spreadArrays([void 0], b)))();
        }
        else if (typeof b === 'string') {
            b = new RegExp(b);
        }
        if (!(b instanceof RegExp) || typeof a !== 'string') {
            return false;
        }
        return b.test(a);
    },
    /**
     * Whether the dates `a` and `b` are strict equal.
     * Parameter `a` as well as `b` can an instance of Date or a string.
     */
    dateCompare: function (a, b) {
        if (typeof a !== 'number' && typeof a !== 'string' && !(a instanceof Date)) {
            return false;
        }
        return new Date(a).getTime() === new Date(b).getTime();
    },
    /**
     *  Whether a document has specific `key`; determined by `b`.
     */
    hasProperty: function (_, b, doc, key) {
        return b
            ? util_2.has(doc, key)
            : !util_2.has(doc, key);
    },
    /**
     * Whether an array or set `a` includes `b`.
     */
    includes: function (a, b) {
        return ((Array.isArray(a) && a.includes(b)) ||
            (a instanceof Set && a.has(b)));
    },
    /**
     * Whether an array or set `a` does not include `b`.
     */
    notIncludes: function (a, b) {
        return ((Array.isArray(a) && !a.includes(b)) ||
            (a instanceof Set && !a.has(b)));
    },
    /**
     * Whether `a` is an instance of `b`.
     */
    instanceOf: function (a, b) { return a instanceof b; },
    /**
     * Whether an array or set `b` includes `a`.
     */
    includedIn: function (a, b) {
        return ((Array.isArray(b) && b.includes(a)) ||
            (b instanceof Set && b.has(a)));
    },
    /**
     * Whether an array or set `b` does not include `a`.
     */
    notIncludedIn: function (a, b) {
        return ((Array.isArray(b) && !b.includes(a)) ||
            (b instanceof Set && !b.has(a)));
    },
};
/**
 * Apply a query on a document.
 */
exports.applyQuery = function (queryObj, doc) {
    // Create a clone to not alter the original `queryObj`.
    var _queryObj = util_2.clone(queryObj);
    var resultOperation = chooseOperation(_queryObj.$op);
    var negateResult = useNegation(_queryObj.$op);
    delete _queryObj.$op;
    var endResult = Object.entries(_queryObj)[resultOperation](function (_a) {
        var key = _a[0], query = _a[1];
        if (util_2.isObject(query)) {
            var queryOperation = chooseOperation(query.$op);
            var negateQuery = useNegation(query.$op);
            delete query.$op;
            var queryResult = Object.entries(query)[queryOperation](function (_a) {
                var fn = _a[0], val = _a[1];
                return exports.checks[fn](doc[key], val, doc, key);
            });
            return negateQuery
                ? !queryResult
                : queryResult;
        }
        return doc[key] === query;
    });
    return negateResult
        ? !endResult
        : endResult;
};
/**
 * Check if the query has an unknown query function property (or rather check).
 */
exports.hasUnknownCheck = function (queryObj) {
    return Object.values(queryObj).some(function (val) {
        if (!util_2.isObject(val)) {
            return false;
        }
        return Object.keys(val).some(function (fn) { return !util_2.has(exports.checks, fn) && fn !== '$op'; });
    });
};
