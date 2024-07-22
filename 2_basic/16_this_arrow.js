// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ This Keyword ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// In JavaScript, the this keyword refers to an object.
// this keyword in object is used to access the properties of the object 
// in general it refer the current context.

// The this keyword refers to different objects depending on how it is used:
// 1. an in object method , this refer to object.
const user = {
    username: "Abdullah",
    age : 21,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Ali"
// user.welcomeMessage()              // here it will log ali instead of abdullah, because this keyword in object refer to current context

console.log(this);                     // In Browser this gave us window object, but in node environment it gave us empty object.


// 2. alone this refer to global object, 
let x = this;
console.log(x);      // In Browser this gave us window object, but in node environment it gave us empty object.


// 3. In function this refer to global object.
function globe(){
    let username = "Abdullahh"
    console.log(this.username);      // will return undefined, because we can only use this syntax in object to get its property.
}
globe();

function globe(){
    console.log(this);            // it will return a global object
}
globe();

// 4. In function, in strict mode, this refer to undefined.
"use strict";
function globe(){
    console.log(this);            // In function strict mode it will return undefine.
}
globe();

// 5. in event this refer to an element that recieve the event.  


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

// +++++++++++++++++++++ General syntax ++++++++++++++++++++++++++
const myFunction = () => "Abdullah khan"     // arrow function return value by default

const myFunction1 = (a, b) => a * b          // arrow function with parameters
myFunction(15,4)

// +++++++++++++++++++++++ Normal Function +++++++++++++++++++
function Multiply(num1, num2){
    return num1 * num2;
}
console.log(Multiply(10,7));

// +++++++++++++++++++++++ Arrow Function +++++++++++++++++++++
// this keyword in arrow function
const myFunc = () =>{
    console.log(this);     // it return an empty object
};
myFunc();

// writing method 1
const greeting = (name) => {
    return(`Welcome to our website, ${name}`);
};
console.log(greeting("Abdullah khan"));

// Writing method 2
// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
const Addition = (num1, num2) => num1 + num2

console.log(Addition(50, 40));

// Writing method 3
addTwo = (val1, val2) => (val1 + val2)            // It is a good practice to put the return value in parenthesis.
console.log(addTwo(5, 10));
//OR
const myObj = () => ({name: "Abdullah khan", age: 21});   // Because the parenthesis help in a situation when want to return an object or array.
console.log(myObj());
