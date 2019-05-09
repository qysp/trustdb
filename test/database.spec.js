const expect = require('expect.js');
const db = require('../index');
const Collection = require('../lib/collection');

describe('Database', function() {
  describe('#connect()', function() {
    it('should create a new database', async function() {
      await db.connect('/tmp/test_db.json', {
        overwriteExisting: true,
      });
  
      expect(db.filepath).to.equal('/tmp/test_db.json');
      expect(db.collections).to.have.length(0);
      expect(db.autosave).to.be(false);
    });
  });

  describe('#createCollection()', function() {
    it('should create a collection', async function() {
      const collection = await db.createCollection('test_collection1');
  
      expect(db.collections).to.have.length(1);
      expect(collection.name).to.equal('test_collection1');
    });
  });

  describe('#deleteCollectio()', function() {
    it('should delete the correct collection', async function() {
      const collection = await db.deleteCollection('test_collection1');
      
      expect(db.collections).to.have.length(0);
      expect(collection.name).to.equal('test_collection1');
    });
  });

  describe('#addCollection()', function() {
    it('should add a previously created collection', async function() {
      let collection = new Collection('test_collection2');
  
      collection = await db.addCollection(collection);
      
      expect(db.collections).to.have.length(1);
      expect(collection.name).to.equal('test_collection2');
    });
  });

  describe('#getCollection()', function() {
    it('should retrieve the requested collection', async function() {
      const collection = await db.getCollection('test_collection2');
  
      expect(db.collections).to.have.length(1);
      expect(collection.name).to.equal('test_collection2');
    });
  });

  describe('#configureSettings()', function() {
    it('should enable the autosave setting', async function() {
      db.configureSettings({
        autosave: true,
        autosaveInterval: 999999
      });
  
      expect(db.autosave).to.be(true);
      expect(db.autosaveInterval).to.equal(999999);
      expect(db.autosaveHandler).to.not.be(undefined);
      // Disable autosave again.
      db.configureSettings({ autosave: false });
    });
  });
});
