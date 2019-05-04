const expect = require('expect.js');
const checks = require('../lib/checks');

describe('Checks', function() {
  it('equal check', function() {
    const results = [];
    results.push(checks.eq('30', 30));
    results.push(checks.eq('30', 30.0));
    results.push(checks.eq(null, undefined));

    expect(results).to.not.contain(false);
  });

  it('not equal check', function() {
    const results = [];
    results.push(checks.neq('30', 'thirty'));
    results.push(!checks.neq('30', 30.0));

    expect(results).to.not.contain(false);
  });

  it('strict equal check', function() {
    const results = [];
    results.push(checks.seq(30, 30));
    results.push(checks.seq(void 0, undefined));
    results.push(!checks.seq(undefined, null));

    expect(results).to.not.contain(false);
  });

  it('strict not equal check', function() {
    const results = [];
    results.push(checks.sneq(undefined, null));
    results.push(checks.sneq('30', 30.0));

    expect(results).to.not.contain(false);
  });

  it('deep strict equal check', function() {
    const results = [];
    results.push(checks.dseq({a: 1}, {a: 1}));
    results.push(!checks.dseq({a: [undefined]}, {a: [null]}));

    expect(results).to.not.contain(false);
  });

  it('deep strict not equal check', function() {
    const results = [];
    results.push(checks.dsneq({a: 1}, {a: 1, b: 2}));
    results.push(checks.dsneq({a: null}, {a: undefined}));

    expect(results).to.not.contain(false);
  });

  it('greater than check', function() {
    const results = [];
    results.push(checks.gt(30, 5));
    results.push(!checks.gt(30, 30));
    results.push(!checks.gt(30, 60));

    expect(results).to.not.contain(false);
  });

  it('less than check', function() {
    const results = [];
    results.push(checks.lt(5, 30));
    results.push(!checks.lt(30, 30));
    results.push(!checks.lt(60, 30));

    expect(results).to.not.contain(false);
  });

  it('greater than or equal check', function() {
    const results = [];
    results.push(checks.gte(30, 30));
    results.push(checks.gte(30, 5));
    results.push(!checks.gte(30, 60));

    expect(results).to.not.contain(false);
  });

  it('less than or equal check', function() {
    const results = [];
    results.push(checks.lte(30, 30));
    results.push(checks.lte(5, 30));
    results.push(!checks.lte(60, 30));

    expect(results).to.not.contain(false);
  });

  it('starts with check', function() {
    const results = [];
    results.push(checks.sw('something', 'someth'));
    results.push(!checks.sw('something', 'ometh'));

    expect(results).to.not.contain(false);
  });

  it('ends with check', function() {
    const results = [];
    results.push(checks.ew('something', 'thing'));
    results.push(!checks.ew('something', 'thin'));

    expect(results).to.not.contain(false);
  });

  it('type check', function() {
    const results = [];
    results.push(checks.type('something', 'string'));
    results.push(checks.type(() => {}, 'function'));
    results.push(!checks.type('30', 'number'));

    expect(results).to.not.contain(false);
  });

  it('length check', function() {
    const results = [];
    results.push(checks.len('something', 9));
    results.push(checks.len([1,2,3], 3));

    expect(results).to.not.contain(false);
  });

  it('between check', function() {
    const results = [];
    results.push(checks.betw(7, [5, 10]));
    results.push(checks.betw(7, [10, 5]));
    results.push(!checks.betw(7, [0, 5]));

    expect(results).to.not.contain(false);
  });

  it('regex check', function() {
    const results = [];
    results.push(checks.re('something', /ethin/));
    results.push(checks.re('something123', /123$/));
    results.push(!checks.re('something123', /12$/));

    expect(results).to.not.contain(false);
  });

  it('date check', function() {
    const results = [];
    results.push(checks.date(new Date('1/1/1990'), new Date('1/1/1990')));
    results.push(checks.date('1/1/1990', new Date('1/1/1990')));
    results.push(checks.date(new Date('1/1/1990'), '1/1/1990'));
    results.push(checks.date('1/1/1990', '1/1/1990'));
    results.push(!checks.date('1/1/1990', '31/12/2019'));

    expect(results).to.not.contain(false);
  });

  it('property check', function() {
    const results = [];
    results.push(checks.prop(null, true, {a: 1}, 'a'));
    results.push(checks.prop(null, false, {a: 1}, 'b'));
    results.push(checks.prop(null, true, {a: undefined}, 'a'));
    results.push(!checks.prop(null, true, {a: undefined}, 'b'));

    expect(results).to.not.contain(false);
  });
});
