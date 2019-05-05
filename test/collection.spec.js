const expect = require('expect.js');
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

    expect(collection.documents).to.have.length(3);
  });

  it('should insert documents, given as an array of documents', async function() {
    await collection.insert([
      { doc: 1 },
      { doc: 2 },
      { doc: 3 },
    ]);

    expect(collection.documents).to.have.length(3);
  });

  it('should insert a single document', async function() {
    await collection.insertOne(
      { doc: 1 }
    );

    expect(collection.documents).to.have.length(1);
  });

  it('should retrieve all documents matching the query', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    const results = await collection.find({ price: { lessThanOrEqual: 40 } });

    expect(collection.documents).to.have.length(3);
    expect(results).to.have.length(2);
  });

  it('should retrieve the first document matching the query', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    const result = await collection.findOne({ price: { lessThanOrEqual: 40 } });

    expect(collection.documents).to.have.length(3);
    expect(result.price).to.equal(20);
  });

  it('should retrieve all documents passing the filter function', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    const results = await collection.findWhere(doc => doc.price <= 40);

    expect(collection.documents).to.have.length(3);
    expect(results).to.have.length(2);
  });

  it('should remove the matching document', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    expect(collection.documents).to.have.length(3);

    const removed = await collection.removeExact({ price: 40 });

    expect(collection.documents).to.have.length(2);
    expect(removed.price).to.equal(40);
  });

  it('should remove the all documents matching the query', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    expect(collection.documents).to.have.length(3);

    const removed = await collection.remove({ price: { lessThanOrEqual: 40 } });

    expect(collection.documents).to.have.length(1);
    expect(removed).to.have.length(2);
  });

  it('should remove the all documents passing the filter function', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    expect(collection.documents).to.have.length(3);

    const removed = await collection.removeWhere(doc => doc.price <= 40);

    expect(collection.documents).to.have.length(1);
    expect(removed).to.have.length(2);
  });

  it('should retrieve the first document of the collection', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    const first = await collection.first();

    expect(first.price).to.equal(50);
  });

  it('should retrieve the last document of the collection', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    const first = await collection.last();

    expect(first.price).to.equal(40);
  });

  it('should get the correct size of the collection', async function() {
    await collection.insert(
      { price: 50 },
      { price: 20 },
      { price: 40 }
    );

    const size = await collection.size();

    expect(size).to.equal(3);
  });
});
