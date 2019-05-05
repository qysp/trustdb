# TrustDB

Promise-based, lightweight in-memory and persistent JavaScript/JSON database.

Inspired by [LokiJS](https://github.com/techfort/LokiJS).

## Getting started

Connect to the database, given a filepath and wanted settings.

**NOTE**: Assuming everything happens in asynchronus block. Furthermore, these are only a few examples of what you could do.

```js
const db = require('trustdb');

await db.connect('/path/to/file.json', {
  autosave: true, // default: false
  autosaveInterval: 10000, // in ms; default: 4000
});
```

Create a collection.
```js
const repoCollection = await db.createCollection('repoCollection');
```

Optional: add event listeners for events like `autosave`, `insert`, `find` or `remove`.
```js
// Parameter `err` will be undefined on success.
db.on('autosave', err => {
  if (err instanceof Error) {
    console.error(err);
  }
});

// Asynchronous events are allowed too!
repoCollection.on('insert', async (insertedDocs, allDocs) => {
  console.log(`Number of documents in ${repoCollection.name} after insert: ${allDocs.length}`);
  await db.save();
});

// `results` will always be an array, even if `findOne` method has been used.
repoCollection.on('find', (query, results, allDocs) => {
  // Assuming variable `cache` has been defined as an array somewhere.
  cache.push({
    query: query,
    results: results,
  });
});

// `removedDocs` will always be an array, even if `remove` method has been used.
repoCollection.on('remove', async (removedDocs, allDocs) => {
  console.log(`Number of removed documents in ${repoCollection.name}: ${removedDocs.length}`);
  await db.save();
});
```

Insert documents.
```js
// Some example documents.
const repositories = [{
    url: 'https://github.com/qysp/trustdb',
    title: 'trustdb',
    description: 'Promise-based, lightweight in-memory and persistent JavaScript/JSON database.'
  }, {
    url: 'https://github.com/techfort/LokiJS',
    title: 'LokiJS',
    description: 'Fast document oriented javascript in-memory database'
}];

// Insert them as an array or each document as an individual parameter.
await repoCollection.insert(repositories);

// You can also use insertOne to only insert one document.
await repoCollection.insertOne({
  url: 'https://github.com/nodejs/node',
  title: 'Node.js',
  description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
});
```

Search for documents.
```js
// Find all documents where the title ends with 'js' (case insensitive)
const results = await repoCollection.find({ re: ['title', /js$/i] });

// or just the first result that matches the pattern
const result = await repoCollection.findOne({ re: ['title', /js$/i] });
```

Remove documents.
```js
// Remove a single document. If that document does not exist it will throw an error, so be sure to catch it.
await repoCollection.remove({
  url: 'https://github.com/nodejs/node',
  title: 'Node.js',
  description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
});

// Or remove multiple with a query.
const removedDocuments = await repoCollection.removeWhere({ re: ['title', /js$/i] });
```

## Query functions
  * equal: `eq`
  * not equal: `neq`
  * greater than: `gt`
  * less than: `lt`
  * strict equal: `seq`
  * strict not equal: `sneq`
  * deep strict equal: `dseq`
  * deep not strict equal: `dsneq`
  * greather than or equal: `gte`
  * less than or equal: `lte`
  * starts with: `sw`
  * ends with: `ew`
  * type of: `type`
  * length: `len`
  * between: `betw`
  * regex match: `re`
  * date compare: `date`
  * property exists: `prop`
  * includes: `incl`
  * excludes: `excl`
  * instance of: `iof`

### Usage examples:

**NOTE**: The same pattern for the queries applies to the `findOne` and `removeWhere` methods!

```js
// Find all documents, where:

// - the value of the property `someProperty` equals 30, 30.0, '30', etc.
collection.find({ eq: ['someProperty', 30] });

// - the value of the property `someProperty` equals exactly 30
collection.find({ seq: ['someProperty', 30] });

// - the value of the property `someProperty` is the exact same object `{a: 1}`
collection.find({ dseq: ['someProperty', {a: 1}] });

// - the value of the property `someProperty` ends with 'ing'
collection.find({ ew: ['someProperty', 'ing'] });

// - the value of the property `someProperty` is of type 'array' (does work with all primitive types and arrays)
collection.find({ type: ['someProperty', 'array'] });

// - the value of the property `someProperty` has the length of 5 (array, string or set)
collection.find({ len: ['someProperty', 5] });

// - the value of the property `someProperty` is between 5 and 10 (order of the numbers does not matter)
collection.find({ betw: ['someProperty', 5, 10] });

// - the value of the property `someProperty` matches the regex pattern 'something', case insensitive
collection.find({ re: ['someProperty', /something/i] });

// - the value of the property `someProperty` equals the date '1/1/1970' (can also be a Date object)
collection.find({ date: ['someProperty', '1/1/1970'] });

// - property `someProperty` does not exist
collection.find({ prop: ['someProperty', false] });

// - the value of the property `someProperty` includes 10 (array or set)
collection.find({ incl: ['someProperty', 10] });

// - the value of the property `someProperty` is an instance of Date
collection.find({ iof: ['someProperty', Date] });

// Return all documents of the collection.
// Does not work with the `findOne` or `removeWhere` methods.
// In those cases use the `first` or `clear` methods.
collection.find();
```