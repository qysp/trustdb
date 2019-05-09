/**
 * Simple sorting function only meant for string/number comparsions.
 * 
 * @param {string | number | Date} a 
 * @param {string | number | Date} b 
 * @returns {number} 
 */
function simpleSorting(a, b) {
  if (a === b) {
    return 0;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }

  if ((typeof a === 'number' || a instanceof Date) &&
      (typeof b === 'number' || b instanceof Date)) {
    return a - b;
  }

  return !a ? 1 : !b ? -1 : 0;
}

module.exports = {
  simpleSorting,
};