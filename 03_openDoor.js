/*
Open Door

You will only open the door if Simon is there with coffee.

The openDoor function should return true if 
at least one person at the door has the name Simon,
and hasCoffee is true. Otherwise return false.

Does your solutino work when only one person is at the door? 
What if no one is there?

Beast mode: make it work when multiple people come to the door

Test your solution:
mocha 03_openDoor.js
*/

function openDoor(input) {
	// Your code here
}

function makeItem(name, hasCoffee) {
	item = new Object()
	item.name = name
	item.hasCoffee = hasCoffee
	return item
}

var assert = require("assert")

describe("openDoor with one person at the door", function() {
	let people = []
	it('should return true if "Simon" and hasCoffee with single object', function() {
		people = []
		people.push(makeItem("Simon", true))
		assert.equal(true, openDoor(people))
	})
	it('should return false if !"Simon" and hasCoffee', function() {
		people = []
		people.push(makeItem("Scott", true))
		assert.equal(false, openDoor(people))
	})
	it('should return false if "Simon" and !hasCoffee', function() {
		people = []
		people.push(makeItem("Simon", false))
		assert.equal(false, openDoor(people))
	})
})

describe("openDoor with no one at the door", function() {
	it("should return false if empty array passed", function() {
		people = []
		assert.equal(false, openDoor(people))
	})
})

describe("BEAST MODE! openDoor with multiple people at the door", function() {
	it("should return true if Simon is first with coffee", function() {
		people = []
		people.push(makeItem("Simon", true))
		people.push(("Scott", true))
		assert.equal(true, openDoor(people))
	})
	it("should return true if Simon is with coffee but not first", function() {
		people = []
		people.push(makeItem("Scott", true))
		people.push(makeItem("Simon", true))
		assert.equal(true, openDoor(people))
	})
	it("should return false if Simon is not there", function() {
		people = []
		people.push(makeItem("Sally", true))
		people.push(makeItem("Scott", true))
		assert.equal(false, openDoor(people))
	})
	it("should return false if Simon is there but does not have coffee", function() {
		people = []
		people.push(makeItem("Simon", false))
		people.push(makeItem("Sally", true))
		people.push(makeItem("Scott", true))
		assert.equal(false, openDoor(people))
	})
})
