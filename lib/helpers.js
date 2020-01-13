const fs = require('fs').promises;
const path = require('path');
const v8 = require('v8');

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
 * @returns {Promise<void>} A Promise which resolves after creating the directories.
 */
async function mkdirp(filepath) {
  const dirname = path.dirname(filepath);
  if (dirname.length > 1) {
    await fs.mkdir(dirname, { recursive: true });
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

/**
 * Clone a JavaScript value.
 *
 * @param {any} value JavaScript value to clone.
 * @return {any} Clone of `value`.
 */
function clone(value) {
  return v8.deserialize(v8.serialize(value));
}

module.exports = {
  isPlainObject,
  mkdirp,
  hasOwnProperty,
  clone,
};