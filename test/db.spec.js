const assert = require('assert');
const db = require('../index');
const Collection = require('../lib/collection');

describe('Database', function() {
  // TODO:
  // - test autosave settings
  // - test save/load methods

  it('should create a new database', async function() {
    await db.connect('/tmp/test_db.json');

    assert.equal(db.collections.length, 0);
  });

  it('should create a collection', async function() {
    const collection = await db.createCollection('test_collection1')
      .catch(err => assert.fail(err));

    assert.equal(db.collections.length, 1);
    assert.equal(collection.name, 'test_collection1');
  });

  it('should delete the correct collection', async function() {
    const collection = await db.deleteCollection('test_collection1')
      .catch(err => assert.fail(err));
    
    assert.equal(db.collections.length, 0);
    assert.equal(collection.name, 'test_collection1');
  });

  it('should add a previously created collection', async function() {
    let collection = new Collection('test_collection2');

    collection = await db.addCollection(collection)
      .catch(err => assert.fail(err));
    
    assert.equal(db.collections.length, 1);
    assert.equal(collection.name, 'test_collection2');
  });

  it('should retrieve the requested collection', async function() {
    const collection = await db.getCollection('test_collection2')
      .catch(err => assert.fail(err));

    assert.equal(db.collections.length, 1);
    assert.equal(collection.name, 'test_collection2');
  });
  
});
