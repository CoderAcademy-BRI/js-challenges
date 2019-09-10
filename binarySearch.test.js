const binarySearch = require('./07_binarySearch').binarySearch;

describe('Count loops', function () {
    test('Should count one step when search values is in the middle', function () {
        expect(binarySearch([1, 3, 7, 10, 14, 19, 31], 10)).toEqual([3, 1]);
    })
    test('Should count one step when search value is only value', function () {
        expect(binarySearch([1], 1)).toEqual([0, 1])
    })
    test('Should count length divided by two steps when value is at beginning', function () {
        expect(binarySearch([1, 3, 7, 10, 14, 19, 31], 1)).toEqual([0, 3]);
    })
    test('Should count length divided by two steps when value is at end', function () {
        expect(binarySearch([1, 3, 7, 10, 14, 19, 31], 31)).toEqual([6, 3]);
    })
})