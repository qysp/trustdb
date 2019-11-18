const TrustDB = require('./lib/trustdb');
const Schema = require('./lib/schema');
const Collection = require('./lib/collection');
const Result = require('./lib/result');

const db = new TrustDB();

module.exports = {
  default: db,
  db,
  Schema,
  Collection,
  Result,
};