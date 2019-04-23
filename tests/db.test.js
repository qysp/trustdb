const assert = require('assert');
const Ezstore = require('../lib/ezstore');
const Collection = require('../lib/collection');

describe('Database', function() {
  const db = new Ezstore('test_db');

  it('should create a collection', async function() {
    const collection = await db.createCollection('test_collection')
      .catch(err => assert.fail(err));

    assert.equal(db.collections.length, 1);
    assert.equal(collection.name, 'test_collection');
  });

  it('should delete the correct collection', async function() {
    const collection = await db.deleteCollection('test_collection')
      .catch(err => assert.fail(err));
    
    assert.equal(db.collections.length, 0);
    assert.equal(collection.name, 'test_collection');
  });

  it('should add a previously created collection', async function() {
    let collection = new Collection('test_collection');
    collection = await db.addCollection(collection)
      .catch(err => assert.fail(err));
    
    assert.equal(collection.name, 'test_collection');
  });
  
});
