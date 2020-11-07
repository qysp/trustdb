const expect = require('expect.js');
const { Schema, SchemaType } = require('../lib/schema');

describe('Schema', function() {
  const createSchema = () => Schema.from({
    any: SchemaType.Any,
    string: SchemaType.String,
    number: SchemaType.Number,
    boolean: SchemaType.Boolean,
    date: SchemaType.Date,
    array: [SchemaType.Number],
    object: { prop: SchemaType.Number },
    array_of_objects: [ { prop: SchemaType.Number } ],
    nested: { object: { prop: SchemaType.Number } },
    optional: {
      __value: SchemaType.Number,
      __optional: true,
    },
    any_optional: {
      __value: SchemaType.Mixed,
      __optional: true,
    }
  });

  describe('Schema::from()', function() {
    it('should not throw an error', function() {
      expect(createSchema).to.not.throwError();
    });
  });

  describe('#validate()', function() {
    describe('successful validation', function() {
      it('any', function() {
        const schema = Schema.from({ any: 'any' });
        const results = [];
        results.push(schema.validate({ any: 'string' }));
        results.push(schema.validate({ any: 42 }));
        results.push(schema.validate({ any: [{ prop: 42 }] }));
        expect(results).to.only.contain(true);
      });

      it('string', function() {
        const schema = Schema.from({ string: 'string' });
        const result = schema.validate({ string: 'string' });
        expect(result).to.be.ok();
      });

      it('number', function() {
        const schema = Schema.from({ number: 'number' });
        const result = schema.validate({ number: 42 });
        expect(result).to.be.ok();
      });

      it('boolean', function() {
        const schema = Schema.from({ boolean: 'boolean' });
        const result = schema.validate({ boolean: false });
        expect(result).to.be.ok();
      });

      it('date', function() {
        const schema = Schema.from({ date: 'date' });
        const result = schema.validate({ date: new Date() });
        expect(result).to.be.ok();
      });

      it('array', function() {
        const schema = Schema.from({ array: ['number'] });
        const result = schema.validate({ array: [ 1, 2, 3 ] });
        expect(result).to.be.ok();
      });

      it('object', function() {
        const schema = Schema.from({ object: { prop: 'number' } });
        const result = schema.validate({ object: { prop: 42 } });
        expect(result).to.be.ok();
      });

      it('array of objects', function() {
        const schema = Schema.from({
          array_of_objects: [{
            prop: 'number',
          }],
        });
        const result = schema.validate({
          array_of_objects: [{
            prop: 42,
          }, {
            prop: 43,
          }],
        });
        expect(result).to.be.ok();
      });

      it('nested object', function() {
        const schema = Schema.from({ nested: { object: { prop: 'number' } } });
        const result = schema.validate({ nested: { object: { prop: 42 } } });
        expect(result).to.be.ok();
      });

      it('optional', function() {
        const schema = Schema.from({
          optional: {
            __value: 'number',
            __optional: true,
          }
        });
        const results = [];
        results.push(schema.validate({}));
        results.push(schema.validate({ optional: 42 }));
        expect(results).to.only.contain(true);
      });

      it('any & optional', function() {
        const schema = Schema.from({
          any_optional: {
            __value: 'any',
            __optional: true,
          },
        });
        const results = [];
        results.push(schema.validate({}));
        results.push(schema.validate({ any_optional: 'string' }));
        results.push(schema.validate({ any_optional: 42 }));
        results.push(schema.validate({ any_optional: [{ prop: 42 }] }));
        expect(results).to.only.contain(true);
      });
    });

    describe('erroneous validation', function() {
      it('mismatched type', function() {
        const schema1 = Schema.from({ string: 'string' });
        const schema2 = Schema.from({ array: [] });
        const schema3 = Schema.from({ array_of_objects: [{ prop: 'number' }] });
        const results = [];
        results.push(schema1.validate({ string: 42 }));
        results.push(schema2.validate({ array: { prop: 42 } }));
        results.push(schema3.validate({ array_of_objects: [ 42 ] }));
        expect(results).to.only.contain(false);
      });
  
      it('missing property', function() {
        const schema = Schema.from({ prop: 'any' });
        const result = schema.validate({});
        expect(result).to.not.be.ok();
      });
  
      it('surplus property', function() {
        const schema = Schema.from({ prop: 'any' });
        const result = schema.validate({
          prop: 42,
          surplusProp: 43,
        });
        expect(result).to.not.be.ok();
      });
  
      it('mismatched type on optional property', function() {
        const schema = Schema.from({
          prop: {
            __value: 'number',
            __optional: true
          }
        });
        const results = [];
        results.push(!schema.validate({}));
        results.push(schema.validate({ prop: 'string' }));
        expect(results).to.only.contain(false);
      });
    });
  });
});
