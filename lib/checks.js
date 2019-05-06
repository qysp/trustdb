const { isDeepStrictEqual } = require('util');

const checks = {
  /**
   * Whether `a` is equal to `b`.
   */
  equal: (a, b) => a == b,
  /**
   * Whether `a` is not equal to `b`.
   */
  notEqual: (a, b) => a != b,
  /**
   * Whether `a` is strict equal to `b`.
   */
  strictEqual: (a, b) => a === b,
  /**
   * Whether `a` is strict not equal to `b`.
   */
  strictNotEqual: (a, b) => a !== b,
  /**
   * Whether `a` is deep strict equal to `b`.
   */
  deepStrictEqual: (a, b) => isDeepStrictEqual(a, b),
  /**
   * Whether `a` is deep strict not equal to `b`.
   */
  deepStrictNotEqual: (a, b) => !isDeepStrictEqual(a, b),
  /**
   * Whether `a` is greater than `b`.
   */
  greaterThan: (a, b) => a > b,
  /**
   * Whether `a` is less than `b`.
   */
  lessThan:  (a, b) => a < b,
  /**
   * Whether `a` is greater than or equal to `b`.
   */
  greaterThanOrEqual: (a, b) => a >= b,
  /**
   * Whether `a` is less than or equal to `b`.
   */
  lessThanOrEqual: (a, b) => a <= b,
  /**
   * Whether the string `a` starts with `b`.
   */
  startsWith: (a, b) => typeof a === 'string' && a.startsWith(b),
  /**
   * Whether the string `a` ends with `b`.
   */
  endsWith: (a, b) => typeof a === 'string' && a.endsWith(b),
  /**
   * Whether the type of `a` equals `b`.
   * All primitive types and 'array' are supported.
   */
  typeOf: (a, b) => {
    if (b === 'object') {
      return !Array.isArray(a) && typeof a === b;
    }
    if (b === 'array') {
      return Array.isArray(a);
    }
    return typeof a === b;
  },
  /**
   * Whether an string, array or set `a` has the length of `b`.
   */
  lengthOf: (a, b) => {
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
  between: (a, b) => {
    return Array.isArray(b) &&
      a > Math.min.apply(null, b) &&
      a < Math.max.apply(null, b);
  },
  /**
   * Whether `a` matches the pattern of the regex `b`.
   * Parameter `b` can be an RegExp instance, an Array or a string.
   */
  regExp: (a, b) => {
    if (Array.isArray(b)) {
      b = RegExp.apply(null, b);
    } else if (!(b instanceof RegExp)) {
      b = RegExp.call(null, b);
    }
    return b.test(a);
  },
  /**
   * Whether the dates `a` and `b` are strict equal.
   * Parameter `a` as well as `b` can an instance of Date or a string.
   */
  dateCompare: (a, b) => {
    a = a instanceof Date ? a : new Date(a);
    b = b instanceof Date ? b : new Date(b);
    return a.getTime() === b.getTime();
  },
  /**
   *  Whether a document has specific `key`; determined by `b`.
   */
  hasProperty: (_, b, doc, key) => {
    return b
      ? doc.hasOwnProperty(key)
      : !doc.hasOwnProperty(key);
  },
  /**
   * Whether an array or set `a` includes `b`.
   */
  includes: (a, b) => {
    return (
      (Array.isArray(a) && a.includes(b)) ||
      (a instanceof Set && a.has(b))
    );
  },
  /**
   * Whether an array or set `a` does not include `b`.
   */
  notIncludes: (a, b) => {
    return (
      (Array.isArray(a) && !a.includes(b)) ||
      (a instanceof Set && !a.has(b))
    );
  },
  /**
   * Whether `a` is an instance of `b`.
   */
  instanceOf: (a, b) => a instanceof b,
};

/**
 * Apply the query on a document with an optional logical operation.
 * 
 * @param {object} queryObj query to apply on the document
 * @param {string} op logical operation for the query results
 * @param {object} doc document to apply the query on
 * @returns {boolean} result of the query/checks
 */
function applyQuery(queryObj, op, doc) {
  const chooseOperation = operator => (operator === 'or' || operator === 'nor') ? 'some' : 'every';
  const useNegation = operator => operator === 'not' || operator === 'nor';

  const resultOperation = chooseOperation(op);
  
  const endResult = Object.entries(queryObj)[resultOperation](([ key, query ]) => {
    if (typeof query === 'object') {
      let queryOperation = 'every';
      let negateResult = false;

      if (query.hasOwnProperty('$op')) {
        queryOperation = chooseOperation(query.$op);
        negateResult = useNegation(query.$op);
        delete query.$op;
      }
      
      const queryResult = Object.entries(query)[queryOperation](([ fn, val ]) => {
        return checks[fn](doc[key], val, doc, key);
      });

      return negateResult
        ? !queryResult
        : queryResult;
    }

    return doc[key] === query;
  });

  return useNegation(op)
    ? !endResult
    : endResult;
}

/**
 * Validate a query.
 * 
 * @param {object} queryObj query object to validate
 * @returns {boolean} whether all the query functions are correct
 */
function validateQuery(queryObj) {
  return Object.values(queryObj).some(val => {
    if (typeof val === 'object') {
      return Object.keys(val).some(fn =>
        !checks.hasOwnProperty(fn) && fn !== '$op'
      );
    }
  });
}


module.exports = {
  ...checks,
  applyQuery,
  validateQuery,
};