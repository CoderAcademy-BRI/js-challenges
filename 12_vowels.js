/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
vowels("The quick brown fox") should return ["e","u","i","o","o"]
vowels("Hello WOrld") should return ["e","o","O"]

Check your solution by running the tests:
npm test
*/

// 29 Sept 2019
function vowels(string) {
    let splitString = string.split("");
    let vowelArray = [];
    for (let letter of splitString) {
        if (letter.match(/[aeiou]/gi)) {
            vowelArray.push(letter);
        }
    }
    return vowelArray;
}

module.exports = {
    vowels
}