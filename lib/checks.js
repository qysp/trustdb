const { isDeepStrictEqual } = require('util');

const checks = {
  /**
   * 'Equal' check.
   */
  equal: (a, b) => a == b,
  /**
   * 'Not equal' check.
   */
  notEqual: (a, b) => a != b,
  /**
   * 'Strict equal' check.
   */
  strictEqual: (a, b) => a === b,
  /**
   * 'Strict not equal' check.
   */
  strictNotEqual: (a, b) => a !== b,
  /**
   * 'Deep strict equal' check.
   */
  deepStrictEqual: (a, b) => isDeepStrictEqual(a, b),
  /**
   * 'Deep strict not equal' check.
   */
  deepStrictNotEqual: (a, b) => !isDeepStrictEqual(a, b),
  /**
   * 'Greater than' check.
   */
  greaterThan: (a, b) => a > b,
  /**
   * 'Less than' check.
   */
  lessThan:  (a, b) => a < b,
  /**
   * 'Greater than or equal' check.
   */
  greaterThanOrEqual: (a, b) => a >= b,
  /**
   * 'Less than or equal' check.
   */
  lessThanOrEqual: (a, b) => a <= b,
  /**
   * 'Starts with' check.
   */
  startsWith: (a, b) => typeof a === 'string' && a.startsWith(b),
  /**
   * 'Ends with' check.
   */
  endsWith: (a, b) => typeof a === 'string' && a.endsWith(b),
  /**
   * 'Type' check.
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
   * 'Length' check.
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
   * 'Between' check.
   */
  between: (a, b) => a > Math.min.apply(null, b) && a < Math.max.apply(null, b),
  /**
   * 'Regex' check.
   */
  regExp: (a, b) => b instanceof RegExp && b.test(a),
  /**
   * 'Date' check.
   */
  dateCompare: (a, b) => {
    a = a instanceof Date ? a : new Date(a);
    b = b instanceof Date ? b : new Date(b);
    return a.getTime() === b.getTime();
  },
  /**
   * 'Property' check.
   */
  hasProperty: (_, b, doc, key) => b ? doc.hasOwnProperty(key) : !doc.hasOwnProperty(key),
  /**
   * 'Includes' check.
   */
  includes: (a, b) => (Array.isArray(a) && a.includes(b)) || (a instanceof Set && a.has(b)),
  /**
   * 'Excludes' check.
   */
  notIncludes: (a, b) => (Array.isArray(a) && !a.includes(b)) || (a instanceof Set && !a.has(b)),
  /**
   * 'Instance of' check.
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

  return useNegation(op) ? !endResult : endResult;
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