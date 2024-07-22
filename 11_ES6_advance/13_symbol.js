// +++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript symbol Type ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// A JavaScript Symbol is a primitive data type just like Number, String, or Boolean.
// It represents a unique "hidden" value/identifier that no other code can accidentally access.


// +++++++++++++++++++++++ Example 1 ++++++++++++++++++++++++++
// as symbol represent unique values, If you create two symbols with the same description they will have different values.

let name = Symbol("Abdullah")
let myName = Symbol("Abdullah")

console.log(name === myName);  // it will gave us false, because symbol consider both unique value

// +++++++++++++++++++++++ Example 2 ++++++++++++++++++++++++++
let name1 = Symbol("Abdullah")

console.log(name1);
console.log(typeof name1);
console.log(name1.toString());       // we can not access symbol in some cases like in (alert), so we need to convert it to string.
console.log(name1.description);      // we can also get the value of symbol using description keyword. 

// +++++++++++++++++++++++ Example 3 ++++++++++++++++++++++++++
// For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.
// Using Symbol() to create a unique identifiers, solves this problem:

let userId = Symbol("id")

const person = {
    name: "Abdullah khan",
    age: 21,
    eyeColor: "brown",
    [userId]: 12345
}

console.log(person.name); 
console.log(person.userId);    // in object we can not access the value of symbol with dot notation.
console.log(person[userId]);   // we will access value of symbol with square bracket.

// +++++++++++++++++++++++ Example 4 ++++++++++++++++++++++++++
// we can not access the symbol key when we want apply loop on object.
let userId1 = Symbol("id")

const person1 = {
    name: "Abdullah khan",
    age: 21,
    eyeColor: "brown",
    [userId]: 12345
}

for (const myKeys in person1) {
    console.log(myKeys);
}
// Note. it will gave us an error that userId is not define, to do that we need to make it a strig.

// +++++++++++++++++++++++ Example 5 ++++++++++++++++++++++++++
// if we want to convert the object into JSON formate we will also not get the symbol 
let userId2 = Symbol("id")

const person2 = {
    name: "Abdullah khan",
    age: 21,
    eyeColor: "brown",
    [userId]: 12345
}
console.log(JSON.stringify(person2));

// Note. it will also gave us an error.