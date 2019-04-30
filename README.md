# EZStore

Lightweight in-memory and persistent JavaScript/JSON database made for NodeJS.

## Getting started

Connect to the database, given a filepath and wanted settings.
NOTE: Assuming everything happens in asynchronus block.
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

Optional: add an event listener for the `insert` or `remove` event.
```js
repoCollection.on('insert', documents => {
  console.log(`Number of documents in ${repoCollection.name} after insert: ${documents.length}`);
});
```

Insert documents.
```js
const repositories = [{
    url: 'https://github.com/qysp/ezstore',
    title: 'ezstore',
    description: 'Lightweight in-memory and persistent JavaScript/JSON database made for NodeJS.'
  }, {
    url: 'https://github.com/techfort/LokiJS',
    title: 'LokiJS',
    description: 'Fast document oriented javascript in-memory database'
}];

await repoCollection.insert(repositories);

await repoCollection.insert({
  url: 'https://github.com/nodejs/node',
  title: 'Node.js',
  description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
});
```

Query for documents.
```js
// Finds all documents where the title ends with 'js' (case insensitive)
const results = await repoCollection.find({ re: ['title', /js$/i] });
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

Usage examples:
```js
// NOTE: The same pattern can be applied to `collection.findOne()`!
// Find all documents, where the value of the property `someProperty`:

// - equals 30, 30.0, '30', etc.
collection.find({ eq: ['someProperty', 30] });

// - equals exactly 30
collection.find({ seq: ['someProperty', 30] });

// - is the exact same object `{a: 1}`
collection.find({ dseq: ['someProperty', {a: 1}] });

// - starts with `somethi`
collection.find({ sw: ['someProperty', 'somethi'] });

// - is of type 'number'
collection.find({ type: ['someProperty', 'number'] });

// - has the length of 5 (array or string)
collection.find({ len: ['someProperty', 5] });

// - is between 5 and 10.
collection.find({ betw: ['someProperty', 5, 10] });

// - matches the regex pattern 'something', case insensitive
collection.find({ re: ['someProperty', /something/i] });

// - equals the date '1/1/1970' (can also be a Date object)
collection.find({ date: ['someProperty', '1/1/1970'] });

// Return all documents of the collection.
// Does not work with `collection.findOne()`.
collection.find();
```