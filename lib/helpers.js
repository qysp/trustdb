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
 * @returns {Promise<void | Error>} 
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

module.exports = {
  isPlainObject,
  mkdirp,
};