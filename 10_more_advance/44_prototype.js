// ++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Object Prototypes ++++++++++++++++++++++++++++++++++++++++++++++
// All JavaScript objects inherit properties and methods from a prototype.

// ++++++++++++++++++++ Prototype Inheritance +++++++++++++++++
// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype

// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

// +++++++++++++++++++++ Example 1 ++++++++++++++++++++++++++++++
// To add new properties to object constructor using javascript Prototype property.
function Person(first, last, age, color){
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = color;
};
// add property using prototype
Person.prototype.nationality = "Pakistani"

// Object Constructor
const myBrother = new Person("Ashfaq", "Ahmad", 40, "Brown")

console.log(myBrother);
console.log(`My elder Brother is ${myBrother.nationality}`);            // Access the property


// +++++++++++++++++++++ Example 2 ++++++++++++++++++++++++++++++
// To add new method to object constructor using javascript Prototype property.
function Personn(first, last, age){
    this.firstName = first
    this.lastName = last
    this.age = age
};

// add method
Personn.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`
};

// create object constructor
const myFather = new Personn("Shakoor", "Khan", 60);

console.log(myFather);
console.log(`My Father name is ${myFather.fullName()}`);        // Access the method


// NOTE. Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.