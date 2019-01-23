// Declaring variables in JavaScript

// 1. Create a new variable called myString which cannot be reassigned
// and set its value to 'my string'
// 2. Create a second variable called numbers which can be reassigned
// and set its value to 7
// 3. Implement setNumbers to set our global numbers variable to the 
// value passed in as a parameter

// Run 'mocha 01_jsIntro.js' to test 
// (you'll have to have mocha installed globally)

// Define global variables here

function setNumbers(num) {
  // Your code here
}
var assert = require('assert');

describe('jsIntro', () => {
  it('checks that myString cannot be changed', function () {
    try {
      myString = 'abc';
    } catch (err) {
      //do nothing
    }
    assert.equal(myString, "my string");
  });

  it('checks that numbers can be changed with setNumbers function', function () {
    setNumbers(9);
    assert.equal(numbers, 9);
  });
});
