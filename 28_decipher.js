// You are given a secret message you need to decipher.Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched(e.g.Hello becomes Holle)
// the first letter is replaced by its character code(e.g.H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// EXTRA FUN!!! Make up another encryption and challenge your friends to write the decipher method

function decipher(code) {
	// your code goes here
}

let assert = require("assert")
describe("decipher", () => {
	it("should decipher '72olle 103doo 100ya' as 'Hello good day'", () => {
		assert.equal(decipher("72olle 103doo 100ya"), "Hello good day")
	})
	it("should decipher '82yade 115te 103o' as 'Ready set go'", () => {
		assert.equal(decipher("82yade 115te 103o"), "Ready set go")
	})
})
// write some more tests. Share then with your classmates
