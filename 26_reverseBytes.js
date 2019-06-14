// Reverse bytes

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

//   11111111  00000000  00001111  10101010
//     (byte1)(byte2)(byte3)(byte4)
// should become:

// 10101010  00001111  00000000  11111111
//   (byte4)(byte3)(byte2)(byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
function getBytes(data) {
	let i = 0
	let bytes = []
	while (i < data.length) {
		bytes.push(data.slice(i, i + 8))
		i += 8
	}
	return bytes
}

function reverseBytes(data) {
	// Your code goes here

	let revBytes = []
	for (byte of getBytes(data).reverse()) {
		revBytes = revBytes.concat(byte)
	}
	return revBytes
}

let assert = require("assert")

describe("reverseBytes", () => {
	context("With empty input", () => {
		it("should return an empty array with empty input", () => {
			assert.deepEqual(reverseBytes([]), [])
		})
	})
	context("with input", () => {
		it("should return [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] for [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]", () => {
			assert.deepEqual(reverseBytes([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]), [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1
			])
		})
		it("should return [1,1,1,1,0,0,0,0, 0,0,0,0,1,1,1,1] for [0,0,0,0,1,1,1,1, 1,1,1,1,0,0,0,0]", () => {
			assert.deepEqual(reverseBytes([0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]), [
				1,
				1,
				1,
				1,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				1,
				1,
				1
			])
		})
		it("should return [0,0,0,0,0,0,0,0, 1,1,0,0,1.1,0,0, 0,0,0,1,0,1,1,1] for [0,0,0,1,0,1,1,1, 1,1,0,0,1.1,0,0, 0,0,0,0,0,0,0,0]", () => {
			assert.deepEqual(
				reverseBytes([0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
				[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1]
			)
		})
	})
})
