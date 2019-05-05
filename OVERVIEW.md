# TrustDB

## Getting started

**NOTE**: Assuming everything happens in asynchronus block.

Connect to the database, given a filepath and wanted settings.

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
  console.log(`Number of documents removed from ${repoCollection.name}: ${removedDocs.length}`);
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
  * equal
  * notEqual
  * strictEqual
  * strictNotEqual
  * deepStrictEqual
  * deepStrictNotEqual
  * greaterThan
  * lessThan
  * greaterThanOrEqual
  * lessThanOrEqual
  * startsWith
  * endsWith
  * typeOf
  * lengthOf
  * between
  * regExp
  * dateCompare
  * hasProperty
  * includes
  * notIncludes
  * instanceOf

### Usage examples:

**NOTE**: The same pattern for the queries applies to the `findOne` and `removeWhere` methods!

```js
// Find all documents, where:

// - the value of the property `propertyA` equals 30, 30.0, '30', etc.
collection.find({ propertyA: { equal: 30 } });

// - the value of the property `propertyA` equals exactly 30
collection.find({ propertyA: { strictEqual: 30 } });

// - the value of the property `propertyA` is the exact same object `{a: 1}`
collection.find({ propertyA: { deepStrictEqual: { a: 1 } } });

// - the value of the property `propertyA` ends with 'ing'
collection.find({ propertyA: { endsWith: 'ing' } });

// - the value of the property `propertyA` is of type 'number' (only primitive types and array)
collection.find({ propertyA: { typeOf: 'number' } });

// - the value of the property `propertyA` has the length of 5 (array, string or set)
collection.find({ propertyA: { lengthOf: 5 } });

// - the value of the property `propertyA` is between 5 and 10 (order of the numbers does not matter)
collection.find({ propertyA: { between: [ 5, 10 ] } });

// - the value of the property `propertyA` matches the regex pattern 'something', case insensitive
collection.find({ propertyA: { regExp: /something/i } });

// - the value of the property `propertyA` equals the date '1/1/1970' (can also be a Date object)
collection.find({ propertyA: { dateCompare: '1/1/1970' } });

// - property `propertyA` does not exist
collection.find({ propertyA: { hasProperty: false } });

// - the value of the property `propertyA` does not include 10 (array or set)
collection.find({ propertyA: { notIncludes: 10 } });

// - the value of the property `propertyA` is an instance of Date
collection.find({ propertyA: { instanceOf: Date } });
```

### More examples and advanced usage:

```js
// Does not work with the `findOne` or `removeWhere` methods.
// In those cases use the `first` or `clear` methods.
collection.find();

// Strict comparison (i.e. ===)
collection.find({ propertyA: 30 });
collection.find({ propertyB: 'something' });

// Using the logical operator 'or' on (or rather between) each query.
// This will return all documents which have a property named:
// - `propertyA` with a value that starts with 'duck' **OR**
// - `propertyB` with a value that ends with 'ing'. 
collection.find({
  propertyA: { startsWith: 'duck' },
  propertyB: { endsWith: 'ing' }
}, 'or');

// Using the logical operator 'or' for each check of a property
// **AND** using the logical operator 'not' on each query on a property.
// This will return all documents which do **NOT** have a property named:
// - `propertyA` with a value that starts **OR** ends with 'duck' and
// - `propertyB` with a value that ends with 'ing'.
collection.find({
  propertyA: {
    startsWith: 'duck',
    endsWith: 'duck',
    $op: 'or'
  },
  propertyB: { endsWith: 'ing' },
}, 'not');
```