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
people = [];
people.push(makeItem("Simon", true));
assert.equal(true, openDoor(people));
