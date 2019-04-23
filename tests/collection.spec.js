const assert = require('assert');
const Ezstore = require('../lib/ezstore');
const Collection = require('../lib/collection');

describe('Collection', function() {
  const db = new Ezstore('test_db');
  let collection;
  before(async function() {
    collection = await db.createCollection('test_collection')
      .catch(err => assert.fail(err));
  });

  afterEach(function() {
    collection.documents.length = 0;
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
