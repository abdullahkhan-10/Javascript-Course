// +++++++++++++++++++++++++++++++++++++++++++++++ Javascript Scope +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Scope determines the accessibility (visibility) of variables.
// JavaScript variables have 3 types of scope:

// +++++++++++++++++++++++ 1. Block scope ++++++++++++++++++
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.

// we analyze that variable declared in block with let and const keyword can only be accessed in that block because it has a block scope, We can not access outside the block
let x = 5
console.log(x);
{
    let x = 2;
    console.log(x);
}
console.log(x)

// ++++++++++++++++++++ 2. Function scope ++++++++++++++++++++
// JavaScript has function scope: Each function creates a new scope.
// Variables declared within a JavaScript function, are LOCAL to the function:
// Local variables have Function Scope:
// They can only be accessed from within the function.

// code here can NOT use myName
console.log(myName);            // will throw an error.

function myFunction() {
    let myName = "Abdullah khan";
    // code here CAN use myName
    console.log(myName);
}
myFunction();

// code here can NOT use myName
console.log(myName);             // will throw an error.

// NOTE. 
// Local variables are created when a function starts, and deleted when the function is completed.
// Variables declared with var, let and const are quite similar when declared inside a function.

// +++++++++++++++++++ 3. Global scope +++++++++++++++++++++++++
// A variable declared outside a function, becomes GLOBAL, A global variable has Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var inside a { } block can be accessed from outside the block:
var y = 10;
console.log(y);
// Here y is 10

{
var y = 2;
console.log(y);
// Here y is 2
}

console.log(y);
// Here y is 2


// ++++++++++++++++++++++ example +++++++++++++++++++++++==
// This example will help us to understand global and block scope.
var c = 300
// let a = 300
if (true) {
    let a = 10                      // we can not aceess the variabale a and b outside this block, because both have block scope
    const b = 20
    var c = 100                     // we can access the variable c outside this block,because it has global scope.
    console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
console.log(c);
