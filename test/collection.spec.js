const expect = require('expect.js');
const Collection = require('../lib/collection');

describe('Collection', function() {
  const collection = new Collection('test_collection');

  beforeEach('reset collection', async function() {
    collection.clear();
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 },
      { price: 40 },
    );
  });

  describe('#insert()', function() {
    it('should insert documents, each given as an individual paramater', async function() {
      // TODO: find a better solution for the insert test cases
      await collection.clear();
      await collection.insert(
        { doc: 1 },
        { doc: 2 },
        { doc: 3 }
      );
  
      expect(collection.documents).to.have.length(3);
    });
  
    it('should insert documents, given as an array of documents', async function() {
      await collection.clear();
      await collection.insert([
        { doc: 1 },
        { doc: 2 },
        { doc: 3 },
      ]);
  
      expect(collection.documents).to.have.length(3);
    });
  });
  
  describe('#insertOne()', function() {
    it('should insert a single document', async function() {
      await collection.clear();
      await collection.insertOne(
        { doc: 1 }
      );
  
      expect(collection.documents).to.have.length(1);
    });
  });

  describe('#find()', function() {
    it('should retrieve all documents matching the query', async function() {
      const results = await collection.find({ price: { lessThanOrEqual: 40 } });
  
      expect(collection.documents).to.have.length(4);
      expect(results).to.have.length(3);
    });

    it('should retrieve all documents passing the filter function', async function() {
      const results = await collection.find(doc => doc.price <= 40);
  
      expect(collection.documents).to.have.length(4);
      expect(results).to.have.length(3);
    });
  });

  describe('#findOne()', function() {
    it('should retrieve the first document matching the query', async function() {
      const result = await collection.findOne({ price: { lessThanOrEqual: 40 } });

      expect(collection.documents).to.have.length(4);
      expect(result.price).to.equal(20);
    });

    it('should retrieve the first document passing the filter function', async function() {
      const result = await collection.findOne(doc => doc.price <= 40);

      expect(collection.documents).to.have.length(4);
      expect(result.price).to.equal(20);
    });
  });

  describe('#removeExact()', function() {
    it('should remove the first matching document', async function() {
      const removed = await collection.removeExact({ price: 40 }, true);
  
      expect(collection.documents).to.have.length(3);
      expect(removed.price).to.equal(40);
    });
  
    it('should remove all matching documents', async function() {
      const removed = await collection.removeExact({ price: 40 });
  
      expect(collection.documents).to.have.length(2);
      expect(removed).to.have.length(2);
    });
  });

  describe('#remove()', function() {
    it('should remove the all documents matching the query', async function() {
      const removed = await collection.remove({ price: { lessThanOrEqual: 40 } });
  
      expect(collection.documents).to.have.length(1);
      expect(removed).to.have.length(3);
    });
  
    it('should remove the all documents passing the filter function', async function() {
      const removed = await collection.remove(doc => doc.price <= 40);
  
      expect(collection.documents).to.have.length(1);
      expect(removed).to.have.length(3);
    });
  });

  describe('#removeOne()', function() {
    it('should remove the first document that passes the filter function', async function() {
      const removed = await collection.removeOne({ price: { lessThanOrEqual: 40 } });
  
      expect(collection.documents).to.have.length(3);
      expect(removed.price).to.equal(20);
    });
  
    it('should remove the first document that passes the filter function', async function() {
      const removed = await collection.removeOne(doc => doc.price <= 40);
  
      expect(collection.documents).to.have.length(3);
      expect(removed.price).to.equal(20);
    });
  });

  describe('#update()', function() {
    it('should update the all documents matching the query', async function() {  
      const updated = await collection.update(
        { price: { lessThanOrEqual: 40 } },
        { price: 30 }
      );
  
      expect(collection.documents).to.have.length(4);
      expect(updated).to.have.length(3);
      expect(updated.map(u => u.price)).to.only.contain(30);
    });
  
    it('should update the all documents passing the filter function', async function() {
      const updated = await collection.update(
        doc => doc.price <= 40,
        doc => doc.price = 30,
      );
  
      expect(collection.documents).to.have.length(4);
      expect(updated).to.have.length(3);
      expect(updated.map(u => u.price)).to.only.contain(30);
    });
  });

  describe('#documents', function() {
    it('should retrieve all documents of the collection', function() {
      expect(collection.documents).to.have.length(4);
    });
  });

  describe('#firstDocument', function() {
    it('should retrieve the first document of the collection', function() {
      expect(collection.firstDocument.price).to.equal(50);
    });
  });

  describe('#lastDocument', function() {
    it('should retrieve the last document of the collection', function() {
      expect(collection.lastDocument.price).to.equal(40);
    });
  });

  describe('#size', function() {
    it('should get the correct size of the collection', function() {
      expect(collection.size).to.equal(4);
    });
  });
});
