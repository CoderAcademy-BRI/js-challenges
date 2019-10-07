/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array.

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes.

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (arr) => {
    let count = 0;
    if (arr.count < 0) { return 0;};
    for (let num in arr) {
        if (num % 2 == 0) {
            count++;
        };
    };
    return count;
}

// Your tests here
var assert = require("assert")

describe('countEvens', function() {
    describe('Should count 1 even number', function () {
        test("should return 1 with [1,2,3]", function () {
            expect(countEvens([1,2,3])).toBe(1);
        });
    });
    describe('Should count < 1 even numbers', function () {
        test("should return 2 with [1,2,3,4]", function () {
            expect(countEvens([1,2,3,4])).toBe(2);
        });
        test("should return 3 with [2,3,4,5,6]", function() {
            expect([2,3,4,5,6]).toBe(3);
        });
    });
    describe('Should count 0 with no even numbers', function () {
        test("should return 0 with empty array", function () {
            expect([]).toBe(0);
        });
        test('should be 0 with [1,3,5]', function() {
            expect([1,3,5]).toBe(0);
        });
    });
});