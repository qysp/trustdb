const fs = require('fs');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);

/**
 * Check if a variable is a plain JavaScript object.
 * 
 * @param {any} o variable to check
 * @returns {boolean} whether `o` is a plain JavaScript object
 */
function isPlainObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

/**
 * Create a directory recursively.
 * 
 * @param {string} filepath path to a file
 * @returns {Promise<void | Error>} a Promise which resolves after creating the directories
 */
async function mkdirp(filepath) {
  const filepathParts = filepath.split('/');

  if (filepathParts.length > 1) {
    const path = filepathParts
      .slice(0, filepathParts.length-1)
      .join('/');
    await mkdir(path, { recursive: true });
  }
}

/**
 * Check if a property exists on an object.
 *
 * @param {object} obj plain object to check
 * @param {any} prop property to check for on `obj`
 * @returns {boolean} whether `prop` exists on `obj`
 */
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = {
  isPlainObject,
  mkdirp,
  hasOwnProperty,
};