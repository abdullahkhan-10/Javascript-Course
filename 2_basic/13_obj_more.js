// +++++++++++++++++++++++++++++++++++++++++++ JavaScript Display Objects? +++++++++++++++++++++++++++++++++++++++++++++++++
// Displaying a JavaScript object will output [object Object].
// Some common solutions to display JavaScript objects are:

// 1. Displaying Object Properties
// The properties of an object can be displayed as a string:

const person = {
    name: "Abdullah khan",
    age: 21,
    city : "Peshawar",
    nationality : "Pakistani"
}

console.log(`${person.name} ${person.age} ${person.nationality}`);

// 2. Displaying the Object in a Loop


// 3. Using Object.values()
// Any JavaScript object can be converted to an array using Object.values():
const person1 = {
    name: "Abdullah khan",
    age: 21,
    city : "Peshawar",
    nationality : "Pakistani"
}

const res = Object.values(person1)
console.log(res);

// 4. Using JSON.stringify()
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
const person2 = {
    name: "Abdullah khan",
    age: 21,
    city : "Peshawar",
    nationality : "Pakistani"
}

const myStr = JSON.stringify(person2)
console.log(myStr);

// 5. Using Object.keys()
// The keys return the properties of object, it is usefull in map()
const person3 = {
    name: "Abdullah khan",
    age: 21,
    city : "Peshawar",
    nationality : "Pakistani"
}

const mykeys = Object.keys(person3)
console.log(mykeys);

// 6. The entries() Method
// entries() returns [value,value] pairs instead of [key,value] pairs.
const person4 = {
    name: "Abdullah khan",
    age: 21,
    city : "Peshawar",
    nationality : "Pakistani"
}

const myEntry = Object.entries(person4)
console.log(myEntry);

// ++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Object Accessors (Getters and Setters) +++++++++++++++++++++++++++++++++++++++++++++++++
// Getters and setters allow you to define Object Accessors (Computed Properties).







// ++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Object Iterables +++++++++++++++++++++++++++++++++++++++++++++++++
// Iterable objects are objects that can be iterated over with for..of.
// Technically, iterables must implement the Symbol.iterator method.