const expect = require('expect.js');
const checks = require('../lib/checks');

describe('Checks', function() {
  const results = [];

  afterEach(function() {
    results.length = 0;
  });

  it('equal check', function() {
    results.push(checks.equal('30', 30));
    results.push(checks.equal('30', 30.0));
    results.push(checks.equal(null, undefined));

    expect(results).to.not.contain(false);
  });

  it('not equal check', function() {
    results.push(checks.notEqual('30', 'thirty'));
    results.push(!checks.notEqual('30', 30.0));

    expect(results).to.not.contain(false);
  });

  it('strict equal check', function() {
    results.push(checks.strictEqual(30, 30));
    results.push(checks.strictEqual(void 0, undefined));
    results.push(!checks.strictEqual(undefined, null));

    expect(results).to.not.contain(false);
  });

  it('strict not equal check', function() {
    results.push(checks.strictNotEqual(undefined, null));
    results.push(checks.strictNotEqual('30', 30.0));

    expect(results).to.not.contain(false);
  });

  it('deep strict equal check', function() {
    results.push(checks.deepStrictEqual({ a: 1 },  {a: 1 }));
    results.push(!checks.deepStrictEqual({ a: [ undefined ] }, { a: [ null ] }));

    expect(results).to.not.contain(false);
  });

  it('deep strict not equal check', function() {
    results.push(checks.deepStrictNotEqual({ a: 1 }, { a: 1, b: 2 }));
    results.push(checks.deepStrictNotEqual({ a: null }, { a: undefined }));

    expect(results).to.not.contain(false);
  });

  it('greater than check', function() {
    results.push(checks.greaterThan(30, 5));
    results.push(!checks.greaterThan(30, 30));
    results.push(!checks.greaterThan(30, 60));

    expect(results).to.not.contain(false);
  });

  it('less than check', function() {
    results.push(checks.lessThan(5, 30));
    results.push(!checks.lessThan(30, 30));
    results.push(!checks.lessThan(60, 30));

    expect(results).to.not.contain(false);
  });

  it('greater than or equal check', function() {
    results.push(checks.greaterThanOrEqual(30, 30));
    results.push(checks.greaterThanOrEqual(30, 5));
    results.push(!checks.greaterThanOrEqual(30, 60));

    expect(results).to.not.contain(false);
  });

  it('less than or equal check', function() {
    results.push(checks.lessThanOrEqual(30, 30));
    results.push(checks.lessThanOrEqual(5, 30));
    results.push(!checks.lessThanOrEqual(60, 30));

    expect(results).to.not.contain(false);
  });

  it('starts with check', function() {
    results.push(checks.startsWith('something', 'someth'));
    results.push(!checks.startsWith('something', 'ometh'));

    expect(results).to.not.contain(false);
  });

  it('ends with check', function() {
    results.push(checks.endsWith('something', 'thing'));
    results.push(!checks.endsWith('something', 'thin'));

    expect(results).to.not.contain(false);
  });

  it('type check', function() {
    results.push(checks.typeOf('something', 'string'));
    results.push(checks.typeOf(() => {}, 'function'));
    results.push(checks.typeOf({}, 'object'));
    results.push(checks.typeOf([], 'array'));
    results.push(!checks.typeOf('30', 'number'));

    expect(results).to.not.contain(false);
  });

  it('lengreaterThanh check', function() {
    results.push(checks.lengthOf('something', 9));
    results.push(checks.lengthOf([1, 2, 3], 3));
    results.push(checks.lengthOf(new Set([1, 2, 3]), 3));

    expect(results).to.not.contain(false);
  });

  it('between check', function() {
    results.push(checks.between(7, [5, 10]));
    results.push(checks.between(7, [10, 5]));
    results.push(!checks.between(7, [0, 5]));
    results.push(!checks.between(7, 10));

    expect(results).to.not.contain(false);
  });

  it('regex check', function() {
    results.push(checks.regExp('something', /ethin/));
    results.push(checks.regExp('something123', /123$/));
    results.push(checks.regExp('something123', '^some'));
    results.push(checks.regExp('something123', ['^some', 'i']));
    results.push(!checks.regExp('something123', /12$/));

    expect(results).to.not.contain(false);
  });

  it('date check', function() {
    results.push(checks.dateCompare(new Date('1/1/1990'), new Date('1/1/1990')));
    results.push(checks.dateCompare('1/1/1990', new Date('1/1/1990')));
    results.push(checks.dateCompare(new Date('1/1/1990'), '1/1/1990'));
    results.push(checks.dateCompare('1/1/1990', '1/1/1990'));
    results.push(!checks.dateCompare('1/1/1990', '31/12/2019'));

    expect(results).to.not.contain(false);
  });

  it('property check', function() {
    results.push(checks.hasProperty(null, true, {a: 1}, 'a'));
    results.push(checks.hasProperty(null, false, {a: 1}, 'b'));
    results.push(checks.hasProperty(null, true, {a: undefined}, 'a'));
    results.push(!checks.hasProperty(null, true, {a: undefined}, 'b'));

    expect(results).to.not.contain(false);
  });

  it('includes check', function() {
    results.push(checks.includes([1, 2, 3], 1));
    results.push(checks.includes(new Set([1, 2, 3]), 1));
    results.push(!checks.includes([1, 2, 3], 4));
    results.push(!checks.includes(new Set([1, 2, 3]), 4));

    expect(results).to.not.contain(false);
  });

  it('not includes check', function() {
    results.push(checks.notIncludes([1, 2, 3], 4));
    results.push(checks.notIncludes(new Set([1, 2, 3]), 4));
    results.push(!checks.notIncludes([1, 2, 3], 1));
    results.push(!checks.notIncludes(new Set([1, 2, 3]), 1));

    expect(results).to.not.contain(false);
  });

  it('instance of check', function() {
    results.push(checks.instanceOf(new Date(), Date));
    results.push(checks.instanceOf(new Set(), Set));
    results.push(checks.instanceOf(/pattern/, RegExp));
    results.push(!checks.instanceOf(new Map(), Set));

    expect(results).to.not.contain(false);
  });

  it('included in check', function() {
    results.push(checks.includedIn(1, [1, 2, 3]));
    results.push(checks.includedIn(1, new Set([1, 2, 3])));
    results.push(!checks.includedIn(4, [1, 2, 3]));
    results.push(!checks.includedIn(4, new Set([1, 2, 3])));

    expect(results).to.not.contain(false);
  });

  it('not included in check', function() {
    results.push(checks.notIncludedIn(4, [1, 2, 3]));
    results.push(checks.notIncludedIn(4, new Set([1, 2, 3])));
    results.push(!checks.notIncludedIn(1, [1, 2, 3]));
    results.push(!checks.notIncludedIn(1, new Set([1, 2, 3])));

    expect(results).to.not.contain(false);
  });
});
