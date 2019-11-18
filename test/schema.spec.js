const expect = require('expect.js');
const Schema = require('../lib/schema');

describe('Schema', function() {
  const createSchema = () => new Schema({
    price: {
      min: 'number',
      max: 'number',
    },
    staggering: [{
      volume: 'number',
      price: 'number',
    }],
    updated: 'date',
  });

  describe('#new Schema()', function() {
    it('should not throw an error', function() {
      expect(createSchema).to.not.throwError();
    });
  });

  const schema = createSchema();

  describe('#validate()', function() {
    it('should successfully validate the object', function() {
      const result = schema.validate({
        price: {
          min: 5,
          max: 10,
        },
        staggering: [{
          volume: 1,
          price: 10,
        }, {
          volume: 5,
          price: 7,
        }],
        updated: new Date(),
      });
      expect(result).to.be.ok();
    });

    it('should fail to validate the object (wrong type)', function() {
      const result = schema.validate({
        price: {
          min: 5,
          max: 'ten',
        },
        staggering: [{
          volume: 1,
          price: 10,
        }, {
          volume: 5,
          price: 'seven',
        }],
        updated: new Date(),
      });
      expect(result).to.not.be.ok();
    });

    it('should fail to validate the object (missing property)', function() {
      const result = schema.validate({
        price: {
          min: 5,
        },
        staggering: [{
          volume: 1,
          price: 10,
        }, {
          volume: 5,
        }],
        updated: new Date(),
      });
      expect(result).to.not.be.ok();
    });

    it('should fail to validate the object (surplus property)', function() {
      const result = schema.validate({
        price: {
          min: 5,
          max: 10,
          avg: 7.5,
        },
        staggering: [{
          volume: 1,
          price: 10,
        }, {
          volume: 5,
          price: 7,
        }],
        updated: new Date(),
      });
      expect(result).to.not.be.ok();
    });
  });
});
