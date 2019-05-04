const { isDeepStrictEqual } = require('util');

const checks = {
  /**
   * 'Equal' check.
   */
  eq: (a, b) => a == b,
  /**
   * 'Not equal' check.
   */
  neq: (a, b) => a != b,
  /**
   * 'Strict equal' check.
   */
  seq: (a, b) => a === b,
  /**
   * 'Strict not equal' check.
   */
  sneq: (a, b) => a !== b,
  /**
   * 'Deep strict equal' check.
   */
  dseq: (a, b) => isDeepStrictEqual(a, b),
  /**
   * 'Deep strict not equal' check.
   */
  dsneq: (a, b) => !isDeepStrictEqual(a, b),
  /**
   * 'Greater than' check.
   */
  gt: (a, b) => a > b,
  /**
   * 'Less than' check.
   */
  lt:  (a, b) => a < b,
  /**
   * 'Greater than or equal' check.
   */
  gte: (a, b) => a >= b,
  /**
   * 'Less than or equal' check.
   */
  lte: (a, b) => a <= b,
  /**
   * 'Starts with' check.
   */
  sw: (a, b) => typeof a === 'string' && a.startsWith(b),
  /**
   * 'Ends with' check.
   */
  ew: (a, b) => typeof a === 'string' && a.endsWith(b),
  /**
   * 'Type of' check. 
   */
  type: (a, b) => typeof a === b,
  /**
   * 'Length' check.
   */
  len: (a, b) => typeof a === 'string' || Array.isArray(a) && a.length === b,
  /**
   * 'Between' check.
   */
  betw: (a, b) => a > Math.min.apply(null, b) && a < Math.max.apply(null, b),
  /**
   * 'Regex' check.
   */
  re: (a, b) => b instanceof RegExp && b.test(a),
  /**
   * 'Date' check.
   */
  date: (a, b) => {
    a = a instanceof Date ? a : new Date(a);
    b = b instanceof Date ? b : new Date(b);
    return a.getTime() === b.getTime();
  },
  /**
   * 'Property' check.
   */
  prop: (_, b, doc, key) => b ? doc.hasOwnProperty(key) : !doc.hasOwnProperty(key),
};

/**
 * Apply the query on a document with an optional logical operation.
 * 
 * @param {object} query query to apply on the document
 * @param {string} op logical operation to perform with the query
 * @param {object} doc document to apply the query on
 * @returns {boolean} result of the query/checks
 */
function applyQuery(query, op, doc) {
  const arrayFn = op === 'or' || op === 'nor' ? 'any' : 'every';
  const invert = op === 'not' || op === 'nor';
  
  const result = Object.entries(query)[arrayFn](([ fn, q ]) => {
    const queryKey = q[0];
    const queryValue = q.length > 2 ? q.slice(1) : q[1];
    // doc[queryKey] = a, queryValue = b
    // doc & queryKey are also passed individually for the 'property' check
    return checks[fn](doc[queryKey], queryValue, doc, queryKey);
  });

  return invert ? !result : result;
}


module.exports = {
  ...checks,
  applyQuery,
};