const { isDeepStrictEqual } = require('util');

module.exports = {
  /**
   * 'Equal' check.
   */
  eq: (a, b) => a == b,
  /**
   * 'Not equal' check.
   */
  neq: (a, b) => a != b,
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
};