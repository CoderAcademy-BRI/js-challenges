const equalValues = require('./21_equalValues').equalValues;

describe('equalValues tests', () => {
  it('Should return true if the values are the same', () => {
    expect(equalValues({
      a: [2, 3],
      b: [4]
    }, {
      a: [2, 3],
      b: [4]
    })).toBe(true);
    expect(equalValues({
      adam: 3,
      laura: 4
    }, {
      adam: 3,
      laura: 4
    })).toBe(true);
  });
  it('Should return false if the values are not the same', () => {
    expect(equalValues([{
      a: 3
    }, {
      b: 4
    }], [{
      a: '3'
    }, {
      b: '4'
    }])).toBe(false);
    expect(equalValues({
      adam: 3,
      laura: 4,
      maisie: 2
    }, {
      adam: 3,
      laura: 4
    })).toBe(false);
    expect(equalValues({
      a: 3,
      b: 2
    }, {
      a: 3
    })).toBe(false);
  });
});

// ---------------------------------------------------
//  Beast Mode - remove .skip below
// ---------------------------------------------------
describe.skip('Beast Mode', () => {
  it('Beast mode: Should return true if the values are not in the same order, but are otherwise the same', () => {
    expect(equalValues({
      a: 3,
      b: 2
    }, {
      b: 2,
      a: 3
    })).toBe(true);
  });
  it('Beast mode++: Should return true if one value is in JSON', () => {
    expect(equalValues({
      a: 3,
      b: 4
    }, {
      "a": 3,
      "b": 4
    })).toBe(true);
  });
});