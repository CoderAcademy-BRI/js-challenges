/*
Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2
*/

// 29 September 2019
function persistence(num) {
    if (num < 10) {
        return 0;
    }

    let count = 1;
    let sum = sumOfDigits(num);

    while (sum >9) {
        sum = sumOfDigits(sum);
        count++;
    }

    return count;
}

function sumOfDigits(num) {
    let sum = 1;
    for (let digit of num.toString()) {
        sum = sum * digit;
    }
    return sum;
}

module.exports = {
    persistence
}