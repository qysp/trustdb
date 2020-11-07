const expect = require('expect.js');
const Collection = require('../lib/collection').default;
const { Schema } = require('../lib/schema');

describe('Collection', function() {
  const collection = new Collection('test_collection');
  // collection.registerSchema({
  //   price: 'number',
  // });

  beforeEach('reset collection', function() {
    collection.clear();
    collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 },
      { price: 40 },
    );
  });

  describe('#insert()', function() {
    it('should insert documents, each given as an individual paramater', function() {
      collection.insert(
        { price: 1 },
        { price: 2 },
        { price: 3 }
      );

      expect(collection.documents).to.have.length(7);
    });

    it('should insert documents, given as an array of documents', function() {
      collection.insert([
        { price: 1 },
        { price: 2 },
        { price: 3 },
      ]);

      expect(collection.documents).to.have.length(7);
    });
  });

  describe('#insertOne()', function() {
    it('should insert a single document', function() {
      collection.insertOne({ price: 1 });

      expect(collection.documents).to.have.length(5);
    });
  });

  describe('#find()', function() {
    it('should retrieve all documents matching the query', function() {
      const results = collection.find({ price: { lessThanOrEqual: 40 } });

      expect(collection.documents).to.have.length(4);
      expect(results).to.have.length(3);
    });

    it('should retrieve all documents passing the filter function', function() {
      const results = collection.find((doc) => doc.price <= 40);

      expect(collection.documents).to.have.length(4);
      expect(results).to.have.length(3);
    });
  });

  describe('#findOne()', function() {
    it('should retrieve the first document matching the query', function() {
      const result = collection.findOne({ price: { lessThanOrEqual: 40 } });

      expect(collection.documents).to.have.length(4);
      expect(result.price).to.equal(20);
    });

    it('should retrieve the first document passing the filter function', function() {
      const result = collection.findOne((doc) => doc.price <= 40);

      expect(collection.documents).to.have.length(4);
      expect(result.price).to.equal(20);
    });
  });

  describe('#findById()', function() {
    it('should retrieve the document matching the ID', function() {
      const doc = collection.findOne({ price: 20 });
      const result = collection.findById(doc.__id);

      expect(collection.documents).to.have.length(4);
      expect(result.price).to.equal(20);
    });
  });

  describe('#removeExact()', function() {
    it('should remove the first matching document', function() {
      const removed = collection.removeExact({ price: 40 }, true);

      expect(collection.documents).to.have.length(3);
      expect(removed.price).to.equal(40);
    });

    it('should remove all matching documents', function() {
      const removed = collection.removeExact({ price: 40 });

      expect(collection.documents).to.have.length(2);
      expect(removed).to.have.length(2);
    });
  });

  describe('#remove()', function() {
    it('should remove the all documents matching the query', function() {
      const removed = collection.remove({ price: { lessThanOrEqual: 40 } });

      expect(collection.documents).to.have.length(1);
      expect(removed).to.have.length(3);
    });

    it('should remove the all documents passing the filter function', function() {
      const removed = collection.remove((doc) => doc.price <= 40);

      expect(collection.documents).to.have.length(1);
      expect(removed).to.have.length(3);
    });
  });

  describe('#removeOne()', function() {
    it('should remove the first document that passes the filter function', function() {
      const removed = collection.removeOne({ price: { lessThanOrEqual: 40 } });

      expect(collection.documents).to.have.length(3);
      expect(removed.price).to.equal(20);
    });

    it('should remove the first document that passes the filter function', function() {
      const removed = collection.removeOne((doc) => doc.price <= 40);

      expect(collection.documents).to.have.length(3);
      expect(removed.price).to.equal(20);
    });
  });

  describe('#removeById()', function() {
    it('should remove the document matching the ID', function() {
      const doc = collection.findOne({ price: 20 });
      const removed = collection.removeById(doc.__id);

      expect(collection.documents).to.have.length(3);
      expect(removed.price).to.equal(20);
    });
  });

  describe('#update()', function() {
    it('should update the all documents matching the query', function() {
      const updated = collection.update(
        { price: { lessThanOrEqual: 40 } },
        { price: 30 }
      );

      expect(collection.documents).to.have.length(4);
      expect(updated).to.have.length(3);
      expect(updated.map((u) => u.price)).to.only.contain(30);
    });

    it('should update the all documents passing the filter function', function() {
      const updated = collection.update(
        (doc) => doc.price <= 40,
        (doc) => doc.price = 30,
      );

      expect(collection.documents).to.have.length(4);
      expect(updated).to.have.length(3);
      expect(updated.map((u) => u.price)).to.only.contain(30);
    });
  });

  describe('#updateById()', function() {
    it('should update the document matching the ID', function() {
      const doc = collection.findOne({ price: 20 });
      const updated = collection.updateById(doc.__id, { price: 25 });

      expect(collection.documents).to.have.length(4);
      expect(updated.price).to.equal(25);
    });
  });

  describe('#registerSchema()', function() {
    it('should register a validation schema from an object', function() {
      collection.registerSchema({ price: 'number' });
      expect(collection._schema).to.be.a(Schema);
    });

    it('should register a validation schema from a Schema instance', function() {
      collection.registerSchema(new Schema({ price: 'number' }));
      expect(collection._schema).to.be.a(Schema);
    });

    it('should throw an error inserting the document', function() {
      expect(collection.insertOne).withArgs({ price: 'thirty' }).to.throwError();
    });
  });

  describe('#cleanWithSchema()', function() {
    it('should clean the collection using the registered schema', function() {
      // TODO: Make up better test case.
      collection._documents.push({ price: 'TEST' });
      const removed = collection.cleanWithSchema();
      expect(removed).to.have.length(1);
    });
  });

  describe('#unregisterSchema()', function() {
    it('should unregister the validation schema', function() {
      collection.unregisterSchema();
      expect(collection._schema).to.not.be.a(Schema);
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
