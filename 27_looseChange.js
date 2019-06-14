// Loose change

// Write a function that returns a hash with the smallest number of coins that would make up an amount of money passed in as an argument

// Assume Australian change
// Input is always dollars and cents (whole numbers are dollars)

// Example: looseChange(1.35)
// Expected output: {2d: 0, 1d: 1, 50c: 0, 20c: 1, 10c: 1, 5c: 1}

// If the amount isn't divisible by 5 (there is leftover balance), add another 5c piece if its > 2 cents
// Example: looseChange(23)
// Expected output: {2d: 0, 1d: 0, 50c: 0, 20c: 1, 10c: 0, 5c: 1}

function looseChange(money) {
	// your code goes here
}

let assert = require("assert")

describe("looseChange", () => {
	context("Get all zeros with 0", () => {
		it("should return all 0's with 0 input", () => {
			assert.deepEqual(looseChange(0), { "2d": 0, "1d": 0, "50c": 0, "20c": 0, "10c": 0, "5c": 0 })
		})
	})
	context("Get correct change with number divisible by 5", () => {
		it("should return 1-1d and 1-20c for 1.20", () => {
			assert.deepEqual(looseChange(1.2), {
				"2d": 0,
				"1d": 1,
				"50c": 0,
				"20c": 1,
				"10c": 0,
				"5c": 0
			})
		})
		it("should return 2-2d, 1-1d, and 1-50c for 3.50", () => {
			assert.deepEqual(looseChange(3.5), {
				"2d": 1,
				"1d": 1,
				"50c": 1,
				"20c": 0,
				"10c": 0,
				"5c": 0
			})
		})
	})
	context("Get extra nickel when more than 2cents remaining", () => {
		it("should get 1-20c and 1-5c with .23", () => {
			assert.deepEqual(looseChange(0.23), {
				"2d": 0,
				"1d": 0,
				"50c": 0,
				"20c": 1,
				"10c": 0,
				"5c": 1
			})
		})
	})
	context("Ignore extra change when less than 3cents", () => {
		it("should get 1-1d for 1.02", () => {
			assert.deepEqual(looseChange(1.02), {
				"2d": 0,
				"1d": 1,
				"50c": 0,
				"20c": 0,
				"10c": 0,
				"5c": 0
			})
		})
	})
	context("Works with an integer instead of float", () => {
		it("should get 5-2d for 10", () => {
			assert.deepEqual(looseChange(10), {
				"2d": 5,
				"1d": 0,
				"50c": 0,
				"20c": 0,
				"10c": 0,
				"5c": 0
			})
		})
	})
})
