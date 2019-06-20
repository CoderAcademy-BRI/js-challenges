// # In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// # If anything in the text isn't a letter, ignore it and don't return it.

// # "a" = 1, "b" = 2, etc.

// # Example
// # alphabet_position("The sunset sets at twelve o' clock.")
// # Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(as a string)

function alphabet_position(text) {
	// Your code here
}

let assert = require("assert")

describe("alphabet_position returns empty string when all characters are not alphabetic", () => {
	it('should return empty string for "-.-#$', () => {
		assert.equal(alphabet_position("-.-#$"), "")
	})
})

describe("should return positions for characters", () => {
	it('should return the string "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"', () => {
		assert.equal(
			alphabet_position("The sunset sets at twelve o' clock."),
			"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
		)
	})
})
