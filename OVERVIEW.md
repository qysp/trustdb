# TrustDB

## Getting started

Install TrustDB.
```
npm install trustdb
```

Import the package into your app.
```js
const { db } = require('trustdb');
import db from 'trustdb';
```

Connect to the database, given a filepath and desired settings.

```js
await db.connect({
  filepath: '/path/to/file.json',
  autosave: true,
  autosaveInterval: 10000,
  restoreSettings: false,
  overwriteExisting: false,
});
```

Create a collection.
```js
const collection = db.createCollection('repository_collection');
```

Optional: add event listeners for events like `autosave`, `insert`, `find`, `remove` or `update`.

The first parameter for collection events will always be an array of altered or returned documents, no matter which method was used.

```js
// Parameter `err` will be undefined on success.
db.on('autosave', (err) => {
  if (err instanceof Error) {
    console.error(err);
  }
});

collection.on('insert', (insertedDocs, allDocs) => {
  console.log(`Number of documents in ${collection.name} after insert: ${allDocs.length}`);
});

collection.on('find', (foundDocs, allDocs) => {
  console.log(`Number of matching documents found in ${collection.name}: ${foundDocs.length}`);
});

collection.on('remove', (removedDocs, allDocs) => {
  console.log(`Number of removed documents in ${collection.name}: ${removedDocs.length}`);
});

collection.on('update', (updatedDocs, allDocs) => {
  console.log(`Number of updated documents in ${collection.name}: ${updatedDocs.length}`);
});
```

Use schemas.
```js
// Register a schema for this collection.
collection.registerSchema({
  url: 'string',
  title: 'string',
  description: {
    __value: 'string',
    __optional: true,
  },
});
```

Insert documents.
```js
// Some example documents.
const repositories = [{
    url: 'https://github.com/qysp/trustdb',
    title: 'TrustDB',
    description: 'Lightweight in-memory and persistent JavaScript/JSON database.',
  }, {
    url: 'https://github.com/techfort/LokiJS',
    title: 'LokiJS',
    description: 'Fast document oriented javascript in-memory database',
}];

// Insert them as an array or each document as an individual parameter.
collection.insert(repositories);
collection.insert({
  url: 'https://github.com/nodejs/node',
  title: 'Node.js',
  description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
});

// Inserting a document into this collection missing a property,
// having a surplus of properties or mismatching types will throw an error.
collection.insert({ invalid: 'document' }); // => Error: Failed to validate document
```

Search for documents.
```js
// Use query objects or custom filter functions to find matching documents.
collection.find({ description: { regExp: /lightweight/ } });
collection.find((doc) => /lightweight/.test(doc.description));

collection.findOne({ title: { regExp: /js$/i } });
collection.findOne((doc) => /js$/i.test(doc.title));

// Find a document using its ID.
collection.findById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
```

Sort your results.
```js
// Note the second parameter is set to `true`.
// It will return a `Results` instance you can sort, limit, map and so on.
collection.find({ title: { regExp: /javascript/i } }, true)
  .limit(10)
  .simpleSort('title')
  .map((doc) => {
    return {
      ...doc,
      tags: [ 'javascript' ],
    };
  })
  .documents;
```

Remove documents.
```js
// Remove all documents that match the given object.
// Pass in `true` as the second parameter to only remove the first matching document.
collection.removeExact({
  url: 'https://github.com/nodejs/node',
  title: 'Node.js',
  description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
});

// Use query objects or custom filter functions to find matching documents.
collection.remove({ title: { startsWith: 'Trust' } });
collection.remove((doc) => doc.title.startsWith('Trust'));

collection.removeOne({ title: { startsWith: 'Trust' } });
collection.removeOne((doc) => doc.title.startsWith('Trust'));

// Remove a document using its ID.
collection.removeById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');

// Clean the collection using the registered schema.
collection.cleanWithSchema();
```

Update documents.
```js
// Update all documents that match the query with another object.
collection.update(
  { description: { regExp: /database/ } },
  { tags: [ 'database' ] }
);

// Update all documents with your own custom filter and update functions.
collection.update(
  (doc) => /runtime/i.test(doc.description),
  (doc) => doc.tags = [ 'runtime' ]
);

// But you can obviously also combine the two features.
collection.update(
  (doc) => /runtime/i.test(doc.description),
  { tags: [ 'runtime' ] }
);

// Update a document using its ID.
collection.removeById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
```

## Settings
  * **filepath**: Filepath for the database. Database cannot be saved if omitted. Can be added at any point in time after connecting successfully.
  * **autosave**: Whether the database should be automatically saved.
  * **autosaveInterval**: Interval for the autosave (in milliseconds).
  * **restoreSettings**: Whether it should restore settings from the loaded database, if it exists. Any additional settings will overwrite the loaded settings.
  * **overwriteExisting**: Whether the existing database (same filepath) should be overwritten.

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
  * includedIn
  * notIncludedIn

### Usage examples

All of these same queries can of course also be applied to the `findOne`, `remove` and `update` methods!

In these examples we will find all documents, where the value of `propertyA` or the property itself:
```js
// equals 30, 30.0, '30', etc.
collection.find({ propertyA: { equal: 30 } });

// equals exactly 30
collection.find({ propertyA: { strictEqual: 30 } });
collection.find({ propertyA: 30 })

// is the exact same object { a: 1 }
collection.find({ propertyA: { deepStrictEqual: { a: 1 } } });

// ends with 'ing'
collection.find({ propertyA: { endsWith: 'ing' } });

// is of type 'number' (only primitive types and array)
collection.find({ propertyA: { typeOf: 'number' } });

// has the length of 5 (array, string or set)
collection.find({ propertyA: { lengthOf: 5 } });

// is between 5 and 10 (order of the numbers does not matter)
collection.find({ propertyA: { between: [ 5, 10 ] } });

// matches the regex pattern 'something', case insensitive
collection.find({ propertyA: { regExp: /something/i } });

// equals the date '1/1/1970' (can also be a Date object)
collection.find({ propertyA: { dateCompare: '1/1/1970' } });

// does not exist
collection.find({ propertyA: { hasProperty: false } });

// does not include 10 (array or set)
collection.find({ propertyA: { notIncludes: 10 } });

// is an instance of Date (won't work with custom instances after loading a database)
collection.find({ propertyA: { instanceOf: Date } });

// is included in [5, 10, 20, 40] (array or set)
collection.find({ propertyA: { includedIn: [5, 10, 20, 40] } });
```

### Advanced usage examples

You can use logical operators which will concatenate the result of queries for a specific property.
For example, `and`, which is the default, makes sure every query result is truthy or the document won't pass.
On the other hand, `or` will make sure that at least one of the query results is truthy.

The available logical operators are:
  * and
  * not
  * or
  * nor

To utilize one of these logical operators, assign it to the property `$op` (standing for *operator*).

Furthermore, it is also possible to apply a logical operator to a specific property aka. it's queries.

#### Example #1

Usage of the logical operator `or` to concatenate each query result.
```js
collection.find({
  propertyA: { startsWith: 'duck' },
  propertyB: { startsWith: 'duck' },
  $op: 'or',
});
```
Explanation: this will return all documents which have a property named `propertyA` with a value that **starts with** *duck* **or** `propertyB` with a value that **starts with** *duck*.

#### Example #2

Usage of the logical operator `not` to concatenate each query result as well as the operator `or` within the query for the property `propertyA`.
```js
collection.find({
  propertyA: {
    typeOf: 'array',
    lengthOf: 5,
    $op: 'and', // `and` can also be omitted
  },
  propertyB: {
    greaterThan: 100,
    lessThan: 50,
    $op: 'or',
  },
  $op: 'not',
});
```
Explanation: this will return all documents which do **not** have a property named `propertyA` with a value that is an **array** **and** has the **length of** *5* and **not** a property named `propertyB` with a value that is either **greater than** *100* or **less than** *50*.