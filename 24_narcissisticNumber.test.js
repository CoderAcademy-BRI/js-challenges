const narcissisticNumber = require('./24_narcissisticNumber').narcissisticNumber;

describe("Not a narcissistic number", () => {
  it("Should return false for 12", () => {
    expect(narcissisticNumber(12)).toBe(false);
  });
  it("Should return false for 123", () => {
    expect(narcissisticNumber(123)).toBe(false);
  });
});
describe("A narcissistic number", () => {
  it("Should return true for 153", () => {
    expect(narcissisticNumber(153)).toBe(true);
  });
  it("Should return true for 1634", () => {
    expect(narcissisticNumber(1634)).toBe(true);
  });
});