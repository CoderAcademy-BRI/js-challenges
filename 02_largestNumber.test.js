const largestNumber = require("./02_largestNumber").largestNumber

describe("largestNumber", function () {
	test("should return the largest number", function () {
		expect(largestNumber([5, -2, 10])).toBe(10)
	})
	test("should ignore invalid array entries", function () {
		expect(largestNumber([10, 10, "s"])).toBe(10)
	})
	test("should return null if the array is empty", function () {
		expect(largestNumber([])).toBe(null)
	})
	test("should return largest negative if all negative", function () {
		expect(largestNumber([-1, -2, -3])).toBe(-1)
	})
})