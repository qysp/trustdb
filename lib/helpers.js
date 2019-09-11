const fs = require('fs').promises;

/**
 * Check if a variable is a plain JavaScript object.
 *
 * @param {any} o Variable to check.
 * @returns {boolean} Whether `o` is a plain JavaScript object.
 */
function isPlainObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

/**
 * Create a directory recursively.
 *
 * @param {string} filepath Path to a file.
 * @returns {Promise<void | Error>} A Promise which resolves after creating the directories.
 */
async function mkdirp(filepath) {
  const filepathParts = filepath.split('/');

  if (filepathParts.length > 1) {
    const path = filepathParts
      .slice(0, filepathParts.length-1)
      .join('/');
    await fs.mkdir(path, { recursive: true });
  }
}

/**
 * Check if a property exists on an object.
 *
 * @param {object} obj Plain object to check.
 * @param {any} prop Property to check for on `obj`.
 * @returns {boolean} Whether `prop` exists on `obj`.
 */
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = {
  isPlainObject,
  mkdirp,
  hasOwnProperty,
};