const { isDeepStrictEqual } = require('util');

const isFunction = o => typeof o === 'function';
const isString = o => typeof o === 'string';
const isNumber = o => typeof o === 'number';
const isObject = o => typeof o === 'object';
const isArray = o => Array.isArray(o);

module.exports = {
  /**
   * 'Equality' check.
   */
  eq: (a, b) => a == b,
  /**
   * 'Greater than' check.
   */
  gt: (a, b) => a > b,
  /**
   * 'Less than' check.
   */
  lt:  (a, b) => a < b,
  /**
   * 'Strict equal' check.
   */
  seq: (a, b) => a === b,
  /**
   * 'Deep strict equal' check.
   */
  dseq: (a, b) => isDeepStrictEqual(a, b),
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
  sw: (a, b) => isString(a) && a.startsWith(b),
  /**
   * 'Ends with' check.
   */
  ew: (a, b) => isString(a) && a.endsWith(b),
  /**
   * 'Type of' check. 
   */
  type: (a, b) => typeof a === b,
  /**
   * 'Length' check.
   */
  len: (a, b) => isString(a) || isArray(a) && a.length === b,
};