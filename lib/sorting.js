/**
 * Sorting function which only meant for simple comparsions.
 *
 * @param {any} a The first element for comparison.
 * @param {any} b The second element for comparison.
 * @returns {number}
 */
function simpleSorting(a, b) {
  if (a === b) {
    return 0;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }

  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a ? -1 : 1;
  }

  return !a ? 1 : !b ? -1 : 0;
}

module.exports = {
  simpleSorting,
};