// ++++++++++++++++++++++++++++++++++++++++++++ JavaScript Sets Object +++++++++++++++++++++++++++++++++++++++++++++++++++
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

// +++++++++++ How to Create a Set ++++++++++++++++
// You can create a JavaScript Set by two ways:

// 1. Passing an array to new Set()
const birds = new Set(["Eagle","pigeon","sparrow","dov","Eagle"])          // birds is a set object

console.log(birds);
console.log(typeof birds);
console.log(`The set has ${birds.size} Values.`);
// NOTE. if we add two same value set will consider them as one

// 2. Create an empty set and use add() method to add values.
// create set
const birds1 = new Set();

// add values to set
birds1.add("Eagle")
birds1.add("Pigeon")
birds1.add("Sparrow")
birds1.add("dov")

console.log(birds1);
console.log(birds1 instanceof Set);     // return true 



// ++++++++++++++++++++++++++++++++++++++++++++ JavaScript Sets methods +++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++ 1. new Set() Method ++++++++++++++++
// Pass an array to the new Set() constructor:
let mySet = new Set(["a","b","c"])
console.log(mySet);

// ++++++++++++++ 2. add() Method ++++++++++++++++
let mySet1 = new Set(["a","b","c"])
mySet1.add("d")
mySet1.add("e")
console.log(mySet1);      // the set will have 5 values now.

// ++++++++++++++ 3. Listing set elements ++++++++++++++++
// You can list all Set elements (values) with a for..of loop:
const birds2 = new Set(["Eagle","pigeon","sparrow","dov",])  

for (const myBird of birds2) {
    console.log(myBird);
}

// ++++++++++++++ 4. has() method ++++++++++++++++
// The has() method returns true if a specified value exists in a set.
const birds3 = new Set(["Eagle","pigeon","sparrow","dov",])  

let checkBird = birds3.has("dov")

console.log(checkBird);




