const expect = require('expect.js');
const db = require('../lib/index').default;
const Collection = require('../lib/collection').default;

describe('Database', function() {
  describe('#connect()', function() {
    it('should create a new database', async function() {
      await db.connect({
        filepath: '/tmp/test_db.json',
        overwriteExisting: true,
      });

      expect(db.path).to.equal('/tmp/test_db.json');
      expect(db.collections).to.be.empty();
      expect(db.isConnected).to.be(true);
    });
  });

  describe('#createCollection()', function() {
    it('should create a collection', function() {
      const collection = db.createCollection('test_collection1');

      expect(db.collections).to.have.length(1);
      expect(collection.name).to.equal('test_collection1');
    });
  });

  describe('#deleteCollectio()', function() {
    it('should delete the correct collection', function() {
      const collection = db.deleteCollection('test_collection1');

      expect(db.collections).to.be.empty();
      expect(collection.name).to.equal('test_collection1');
    });
  });

  describe('#addCollection()', function() {
    it('should add a previously created collection', function() {
      let collection = new Collection('test_collection2');

      collection = db.addCollection(collection);

      expect(db.collections).to.have.length(1);
      expect(collection.name).to.equal('test_collection2');
    });
  });

  describe('#getCollection()', function() {
    it('should retrieve the requested collection', function() {
      const collection = db.getCollection('test_collection2');

      expect(db.collections).to.have.length(1);
      expect(collection.name).to.equal('test_collection2');
    });
  });

  describe('#configureSettings()', function() {
    it('should enable the autosave setting', function() {
      db.configureSettings({
        autosave: 5000,
      });

      expect(db.autosaveInterval).to.equal(5000);
      // Disable autosave again.
      db.autosaveInterval = 0;
    });
  });

  describe('#saveDatabase()', function() {
    it('should save the database', function(done) {
      db.saveDatabase().then(done).catch(done);
    });
  });

  describe('#moveDatabase()', function() {
    it('should move the database', function(done) {
      db.moveDatabase('/tmp/test_db_moved.db').then(done).catch(done);
    });
  });

  describe('#deleteDatabase()', function() {
    it('should delete the database', function(done) {
      db.deleteDatabase().then(done).catch(done);
    });
  });

  describe('#disconnect()', function() {
    it('should close the database connection', function(done) {
      db.disconnect().then(() => {
        expect(db.isConnected).to.be(false);
        expect(db.collections).to.be.empty();
        done();
      }).catch(done);
    });
  });
});
