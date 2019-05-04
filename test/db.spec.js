const expect = require('expect.js');
const db = require('../index');
const Collection = require('../lib/collection');

describe('Database', function() {
  // TODO:
  // - test autosave settings
  // - test save/load methods

  it('should create a new database', async function() {
    await db.connect('/tmp/test_db.json');

    expect(db.filepath).to.equal('/tmp/test_db.json');
    expect(db.collections).to.have.length(0);
    expect(db.autosave).to.be(false);
  });

  it('should create a collection', async function() {
    const collection = await db.createCollection('test_collection1');

    expect(db.collections).to.have.length(1);
    expect(collection.name).to.equal('test_collection1');
  });

  it('should delete the correct collection', async function() {
    const collection = await db.deleteCollection('test_collection1');
    
    expect(db.collections).to.have.length(0);
    expect(collection.name).to.equal('test_collection1');
  });

  it('should add a previously created collection', async function() {
    let collection = new Collection('test_collection2');

    collection = await db.addCollection(collection);
    
    expect(db.collections).to.have.length(1);
    expect(collection.name).to.equal('test_collection2');
  });

  it('should retrieve the requested collection', async function() {
    const collection = await db.getCollection('test_collection2');

    expect(db.collections).to.have.length(1);
    expect(collection.name).to.equal('test_collection2');
  });

  it('should enable the autosave setting', async function() {
    db.configureSettings({
      autosave: true,
      autosaveInterval: 999999
    });

    expect(db.autosave).to.be(true);
    expect(db.autosaveHandler).to.not.be(undefined);
  });
});
