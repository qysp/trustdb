# EZStore

Promise-based, lightweight in-memory and persistent JavaScript/JSON database.

Inspired by [LokiJS](https://github.com/techfort/LokiJS).

## Getting started

Connect to the database, given a filepath and wanted settings.

**NOTE**: Assuming everything happens in asynchronus block.

```js
const db = require('ezstore');

await db.connect('/path/to/file.json', {
  autosave: true, // default: false
  autosaveInterval: 10000, // in ms; default: 4000
});
```

Create a collection.
```js
const repoCollection = await db.createCollection('repoCollection');
```

Optional: add an event listener an event, like `insert` or `remove`.
```js
// Asynchronous events are allowed too!
repoCollection.on('insert', async (documents) => {
  console.log(`Number of documents in ${repoCollection.name} after insert: ${documents.length}`);
  await db.save();
});
```

Insert documents.
```js
// Some example documents.
const repositories = [{
    url: 'https://github.com/qysp/ezstore',
    title: 'ezstore',
    description: 'Promise-based, lightweight in-memory and persistent JavaScript/JSON database.'
  }, {
    url: 'https://github.com/techfort/LokiJS',
    title: 'LokiJS',
    description: 'Fast document oriented javascript in-memory database'
}];

// Insert them as an array or each document as an individual parameter.
await repoCollection.insert(repositories);

// Use insertOne to only insert one document.
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
// Remove a single document.
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

### Usage examples:

**NOTE**: The same pattern for the queries can be applied to findOne and removeWhere methods!

```js
// Make sure to always have the document's property as the first element in the array.
// Find all documents, where the value of the property `someProperty`:

// - equals 30, 30.0, '30', etc.
collection.find({ eq: ['someProperty', 30] });

// - equals exactly 30
collection.find({ seq: ['someProperty', 30] });

// - is the exact same object `{a: 1}`
collection.find({ dseq: ['someProperty', {a: 1}] });

// - ends with 'ing'
collection.find({ ew: ['someProperty', 'ing'] });

// - is of type 'number'
collection.find({ type: ['someProperty', 'number'] });

// - has the length of 5 (array or string)
collection.find({ len: ['someProperty', 5] });

// - is between 5 and 10 (order of the numbers does not matter).
collection.find({ betw: ['someProperty', 5, 10] });

// - matches the regex pattern 'something', case insensitive
collection.find({ re: ['someProperty', /something/i] });

// - equals the date '1/1/1970' (can also be a Date object)
collection.find({ date: ['someProperty', '1/1/1970'] });

// Return all documents of the collection.
// Does not work with the `findOne` or `removeWhere` methods.
// In those cases use the `first` or `clear` methods.
collection.find();
```