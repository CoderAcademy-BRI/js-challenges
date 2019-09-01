const uniqueString = require('./19_uniqueString').uniqueString;

describe('Unique string challenge', function () {
  it('Should return the unique string', function () {
    expect(uniqueString(['aa', 'AaA', 'aaaa', 'bBbB', 'aAaA', 'a'])).toBe('bBbB');
  });

  it('Should return the unique string when the array elements have mixed letters', function () {
    expect(uniqueString(['kios', 'foo', 'ikos', 'ikso', 'kois', 'kiso'])).toBe('foo');
  });

  it('Should return the unique string when it is the first one in the array arg', function () {
    expect(uniqueString(['abc', ' ', '  '])).toBe('abc');
  });
});