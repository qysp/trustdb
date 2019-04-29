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

  it('should retrieve all documents matching the query', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    const results = await collection.find({ lte: ['price', 40] });

    assert.equal(collection.documents.length, 3);
    assert.equal(results.length, 2);
  });

  it('should retrieve the first document matching the query', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    const result = await collection.findOne({ lte: ['price', 40] });

    assert.equal(collection.documents.length, 3);
    assert.equal(result.price, 20);
  });

  it('should remove the matching document', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    assert.equal(collection.documents.length, 3);

    const removed = await collection.remove({ price: 40 });

    assert.equal(collection.documents.length, 2);
    assert.equal(removed.price, 40);
  });
});
