const openDoor = require("./03_openDoor").openDoor

function makeItem(name, hasCoffee) {
    item = new Object()
    item.name = name
    item.hasCoffee = hasCoffee
    return item
}

describe('openDoor', function () {

    let hash = []
    test('should return true if "Simon" and hasCoffee with single object', function () {
        hash = []
        hash.push(makeItem('Simon', true))
        expect(openDoor(hash)).toBe(true)
    })
    test('should return true if "Simon" and hasCoffee with multiple objects', function () {
        hash = []
        hash.push(makeItem('Simon', true))
        hash.push(makeItem('Scott', true))
        expect(openDoor(hash)).toBe(true)
    })
    test('should return false if !"Simon" and hasCoffee', function () {
        hash = []
        hash.push(makeItem('Scott', true))
        expect(openDoor(hash)).toBe(false)
    })
    test('should return false if "Simon" and !hasCoffee', function () {
        hash = []
        hash.push(makeItem('Simon', false))
        expect(openDoor(hash)).toBe(false)
    })
    test('should return false if empty array passed', function () {
        hash = []
        expect(openDoor(hash)).toBe(false)
    })
})