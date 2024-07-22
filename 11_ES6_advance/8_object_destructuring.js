// +++++++++++++++++++++++++++++++++++++++++++ Destructuring Objects ++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++ Example 1 +++++++++++++++++++
// Old way of assigning object properties to variables.
const user = {
  name: "Abdullah khan",
  age: 21,
  city: "Peshawar",
};
let myName = user.name;
let myAge = user.age;

console.log(myName);
console.log(myAge);

// +++++++++++++++++++ Example 2 +++++++++++++++++++
// New way of assigning object properties to variables using destructuring
let user1 = {
  name: "Abdullah khan",
  age: 21,
  city: "Peshawar",
};

let { name, age, city } = user1;
console.log(name);
console.log(city);

// +++++++++++++++++++ Example 3 +++++++++++++++++++
// We can also set alias name to variable in destructuring
let user2 = {
  name: "Abdullah khan",
  age: 21,
  city: "Peshawar",
};

let { name: myN, age: myA, city: myC } = user1;             // myN, myA, and myC are alias name of variables
console.log(myN);
console.log(myC);

// +++++++++++++++++++ Example 4 +++++++++++++++++++
// destructuring of object inside function, usefull for react.
function user({ name, age, city }) {
  // console.log(`My name is ${name}, I am ${age} years old and I belongs to ${city}.`);
  console.log(name);
  console.log(age);
  console.log(city);
}

user({ name: "Abdullah khan", age: 21, city: "Peshawar" });

// +++++++++++++++++++ Example 5 +++++++++++++++++++
// Destructuring aslo come in handy when function return an object
function user() {
  return { name: "Abdullah khan", age: 21, city: "Peshawar" };
}

const { age: myage, name: myname, city: mycity } = user();

console.log(myname);
console.log(myage);
console.log(mycity);

// NOTE. Notice that the object properties do not have to be declared in a specific order.
