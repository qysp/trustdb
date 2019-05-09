# TrustDB

## Getting started

So far not available on [npm](https://npmjs.org) but soonTM.
```js
const db = require('trustdb');
```

For all of the upcoming examples I'm gonna assume it happens in an asynchronous block, i.e. function.

Connect to the database, given a filepath and desired settings.

```js
await db.connect('/path/to/file.json', {
  autosave: true, // default: false
  autosaveInterval: 10000, // in ms; default: 4000
});
```

Create a collection.
```js
const repoCollection = await db.createCollection('repoCollection');
```

Optional: add event listeners for events like `autosave`, `insert`, `find`, `remove` or `update`.
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

// Parameter `filteredDocs` will always be an array, even if the `findOne()` method has been used.
// Parameter `filter` could be a filter function or a query object.
repoCollection.on('find', (filter, filteredDocs, allDocs) => {
  // Assuming the variable `cache` has been defined as an array somewhere.
  cache.push({
    filter: filter,
    results: results,
  });
});

// Parameter `removedDocs` will always be an array, even if the `removeOne()` method has been used.
repoCollection.on('remove', async (removedDocs, allDocs) => {
  console.log(`Number of documents removed from ${repoCollection.name}: ${removedDocs.length}`);
  await db.save();
});

repoCollection.on('update', async (updatedDocs, allDocs) => {
  console.log(`Number of updated documents in ${repoCollection.name}: ${updatedDocs.length}`);
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
await repoCollection.insert({
  url: 'https://github.com/nodejs/node',
  title: 'Node.js',
  description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
});
```

Search for documents.
```js
// Use query objects or custom filter functions to find matching documents.
await repoCollection.find({ description: { regExp: /lightweight/ } });
await repoCollection.find(doc => /lightweight/.test(doc.description));

await repoCollection.findOne({ title: { regExp: /js$/i } });
await repoCollection.findOne(doc => /js$/i.test(doc.description));
```

Sort your results.
```js
// Note the second parameter is set to `true`.
// It will return a `Results` instance you can do the orting on.
await repoCollection.find({ title: { regExp: /js$/i } }, true)
  .then(result => {
    return result
      .limit(10) // limit the amount of documents to sort to 10
      .simpleSort('title') // Sort by property `title`
      .documents // get the sorted documents
  });
```

Remove documents.
```js
// Remove all documents that match the given object.
// Pass in `true` as the second parameter to only remove the first matching document.
await repoCollection.removeExact({
  url: 'https://github.com/nodejs/node',
  title: 'Node.js',
  description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
});

// Remove all documents that match the query or pass the custom filter function.
await repoCollection.remove({ title: { re: /js$/i } });
await repoCollection.remove(doc => doc.title.startsWith('trust'));

// Remove the first document that matches the query or passes the custom filter function.
await repoCollection.removeOne({ title: { re: /js$/i } });
await repoCollection.removeOne(doc => doc.title.startsWith('trust'));
```

Update documents.
```js
// Update all documents that match the query with another object.
await repoCollection.update(
  { description: { regExp: /database/ } },
  { tags: [ 'database' ] }
);

// Update all documents with your own custom filter and update functions.
await repoCollection.update(
  doc => /runtime/.test(doc.description),
  doc => doc.tags = [ 'runtime' ]
);

// But you can obviously also combine the two features.
await repoCollection.update(
  doc => /runtime/.test(doc.description),
  { tags: [ 'runtime' ] }
);
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

// is an instance of Date
collection.find({ propertyA: { instanceOf: Date } });
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

Usage of the logical operator `or` to concatenate each query result.
```js
collection.find({
  propertyA: { startsWith: 'duck' },
  propertyB: { endsWith: 'ing' },
  $op: 'or'
});
```
Explanation: this will return all documents which have a property named `propertyA` with a value that starts with *duck* **or** `propertyB` with a value that ends with *ing*.

Usage of the logical operator `not` to concatenate each query result as well as the operator `or` within the query for the property `propertyA`.
```js
collection.find({
  propertyA: {
    startsWith: 'duck',
    endsWith: 'duck',
    $op: 'or'
  },
  propertyB: { endsWith: 'ing' },
  $op: 'not'
});
```
Explanation: this will return all documents which do **not** have a property named `propertyA` with a value that starts **or** ends with *duck* and `propertyB` with a value that ends with *ing*.