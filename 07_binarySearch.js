/*
Write a method which will act as a binary search which will find the
position and the actual number of steps required to find the position.
When the array has an even number of values the midpoint index will be rounded up.

Example:
    binaryArray = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps.
    In the first step, 3 is the midpoint index (value = 12).
    In the second step 1 is the midpoint index (value = 5).
    In the third and final step we are only left with 8 at index 2.

*/

function binarySearch(binaryArray, searchValue) {
    let left = 0;
    let right = binaryArray.length - 1;
    let count = 1;
    let resultArray = [];

    while (left <= right) {
        let middle = left + (right - left)/2;
        if (binaryArray[middle] == searchValue) {
            resultArray.push(middle);
            resultArray.push(count);
            break;
        } else if (binaryArray[middle] > searchValue) {
            right = middle - 1;
            count++;
        } else {
            left = middle + 1;
            count++;
        }
    }
    return resultArray;
}

module.exports = {
    binarySearch
};