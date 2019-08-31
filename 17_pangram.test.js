const isPangram = require('./20_pangram').isPangram;

describe('Pangram Challenge', function () {
  it('The phrase "the quick brown fox jumps over the lazy dog" should return true', function () {
    expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
  });
  it('The phrase "the five boxing kanye west wizards jump quickly" should return true', function () {
    expect(isPangram('the five boxing kanye west wizards jump quickly')).toBe(true);
  });
  it('The phrase "take the dog for a walk" should return false', function () {
    expect(isPangram('take the dog for a walk')).toBe(false);
  });
  it('The phrase "alright alright alright" should return false', function () {
    expect(isPangram('alright alright alright')).toBe(false);
  });
  it('Should return false if numbers are included in place of letters', function () {
    expect(isPangram('abcdefghijk1mn0pqrstuvwxyz')).toBe(false);
  });
  it('Should return false if only numbers are included', function () {
    expect(isPangram('1, 2, 3, 4')).toBe(false);
  });
  it('Should return true for any uppercase letters', function () {
    expect(isPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(true);
  });
});