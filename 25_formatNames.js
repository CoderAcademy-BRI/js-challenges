// Format names
// Manipulate the input to return output in the desired format.
// Input is an array of hashes with first and last names
// Expected output is a string with a comma-separated list of names in the format (LAST, FIRST), in alphabetical order by last name.

// Example input:
/*
  [
    {
      first: "Joe",
      last: "Miller"
    },
    {
      first: "John",
      last: "Miller"
    },
    {
      first: "Sara",
      last: "Jones"
    },
    {
      first: "Sara",
      last: "Abel"
    }
  ]
  
  Expected output:
  "(ABEL, SARA), (JONES, SARA), (MILLER, JOE), (MILLER, JOHN)"  
*/

function formatNames(names) {
	// Your code goes here
}

let assert = require("assert")

describe("formatNames", () => {
	context("with an empty input", () => {
		it("should return an empty string with empty input", () => {
			assert.equal(formatNames([]), "")
		})
	})
	context("with input", () => {
		it("should return (ABEL, SARA), (JONES, SARA), (MILLER, JOE), (MILLER, JOHN) with input specified", () => {
			assert.equal(
				formatNames([
					{
						first: "Joe",
						last: "Miller"
					},
					{
						first: "John",
						last: "Miller"
					},
					{
						first: "Sara",
						last: "Jones"
					},
					{
						first: "Sara",
						last: "Abel"
					}
				]),
				"(ABEL, SARA), (JONES, SARA), (MILLER, JOE), (MILLER, JOHN)"
			)
		})
	})
})
