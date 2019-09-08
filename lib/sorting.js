/**
 * Sorting function which only meant for simple comparsions.
 *
 * @param {any} a The first element for comparison.
 * @param {any} b The second element for comparison.
 * @returns {0 | 1 | -1}
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

  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a ? -1 : 1;
  }

  return !a ? 1 : !b ? -1 : 0;
}

module.exports = {
  simpleSorting,
};