/*
You helped Neo almost get out of the matrix with matrix_addition but
Cypher was one step ahead of you. In order to get past Cypher's trap and
save Neo you need to write a new function.

Write a function similar to the matrix_addition challenge but instead
of addition, write one for multiplication.

Check your solution by running mocha 14_multiply_matrices

Example:
function multiplyMatrices([[1,2,3],[4,5,6]], [[7,8],[9,10],[11,12]])
=> [[58, 64], [139,154]]

Hint:
Try drawing the function out first if the arrays are a little confusing.
*/

// Returns result of matrix multiplication, or null
// if the matrices cannot be multiplied
function multiplyMatrices(matrixOne, matrixTwo) {
	// your code here
}

const assert = require("assert")

describe("Matrix multiplication", function() {})
describe("multiplyMatrices with invalid input", function() {
	it("should return null if one is empty", function() {
		let matrix1 = []
		let matrix2 = [1, 2]
		assert.equal(multiplyMatrices(matrix1, matrix2), null)
	})
	it("should return null if dimensions do not match", function() {
		let matrix1 = [1, 2]
		let matrix2 = [1, 2]
		assert.equal(multiplyMatrices(matrix1, matrix2), null)
	})
})

describe("multiplyMatrices with valid input", function() {
	it("should return [[58,4],[139,154]] with inputs [[1, 2, 3], [4, 5, 6]] and [[7, 8], [9, 10], [11, 12]] ", function() {
		matrix1 = [[1, 2, 3], [4, 5, 6]]
		matrix2 = [[7, 8], [9, 10], [11, 12]]
		expected = [[58, 4], [139, 154]]
		assert.deepEqual(multiplyMatrices(matrix1, matrix2), expected)
	})
	it("should return [[18,5],[26,15]] with inputs [[2,3][4,1]] and [[6,4].[2,-1]]", function() {
		matrix1 = [[2, 3], [4, 1]]
		matrix2 = [[6, 4], [2, -1]]
		expected = [[18, 5], [26, 15]]
		assert.deepEqual(multiplyMatrices(matrix1, matrix2), expected)
	})
	it("should return [[24,28],[1,7]] with inputs [[6,4],[2,-1]], [[2,4],[3,1]]", function() {
		matrix1 = [[6, 4], [2, -1]]
		matrix2 = [[2, 4], [3, 1]]
		expected = [[24, 28], [1, 7]]
		assert.deepEqual(multiplyMatrices(matrix1, matrix2), expected)
	})
	it("should return [[2,13,5],[-7,-8,-4],[16,4,4]] with inputs [[2,1],[-1,-2],[0,4]] and [[-1,6,2],[4,1,1]]", function() {
		matrix1 = [[2, 1], [-1, -2], [0, 4]]
		matrix2 = [[-1, 6, 2], [4, 1, 1]]
		expected = [[2, 13, 5], [-7, -8, -4], [16, 4, 4]]
		assert.deepEqual(multiplyMatrices(matrix1, matrix2), expected)
	})
})
