const expect = require('expect.js');
const Result = require('../lib/result');

describe('Result', function() {
  let resultNumbers;
  let resultStrings;

  beforeEach(function() {
    resultNumbers = new Result([
      { price: 50 },
      { price: 20 },
      { price: 40 },
      { price: NaN },
    ]);
    resultStrings = new Result([
      { name: 'Max Mustermann' },
      { name: 'John Doe' },
      { name: 'Jane Doe' },
    ]);
  });

  describe('#simpleSort()', function() {
    it('should sort the documents correctly by price', function() {
      resultNumbers.simpleSort('price');
      expect(resultNumbers.documents[0].price).to.equal(20)
    });

    it('should sort the documents correctly by name', function() {
      resultStrings.simpleSort('name');
      expect(resultStrings.documents[0].name).to.equal('Jane Doe')
    });
  });

  describe('#sort()', function() {
    it('should sort the documents correctly by price', function() {
      resultNumbers.sort((a, b) => a['price'] - b['price']);
      expect(resultNumbers.documents[0].price).to.equal(20);
    });
  });
});
