const assert = require('assert');
const Collection = require('../lib/collection');

describe('Collection', function() {
  const collection = new Collection('test_collection');

  afterEach(function() {
    collection.clear();
  });

  it('should insert documents, each given as an individual paramater', async function() {
    await collection.insert(
      { doc: 1 },
      { doc: 2 },
      { doc: 3 }
    );
    assert.equal(collection.documents.length, 3);
  });

  it('should insert documents, given as an array of documents', async function() {
    await collection.insert([
      { doc: 1 },
      { doc: 2 },
      { doc: 3 },
    ]);

    assert.equal(collection.documents.length, 3);
  });

  it('should insert a single document', async function() {
    await collection.insertOne(
      { doc: 1 }
    );

    assert.equal(collection.documents.length, 1);
  });
});
