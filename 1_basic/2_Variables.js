//+++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Variables +++++++++++++++++++++++++++++++++++++++++++++++
// The var keyword was used in all JavaScript code from 1995 to 2015.
// The let and const keywords were added to JavaScript in ES6(2015).

// It is a good coding practice to initialize variables when you declare them.
// Declare and initiate at the beginning, giving name is declaration and giving value is initialization.
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};


// +++++++++++++++++++++++++++++++++++ Const +++++++++++++++++++++++++++++++++++++++++++
const accountId = 12345;

//accountId = 10;   // Not allowed, because we can not change the value of variable, which has const keyword
console.log(accountId);


// +++++++++++++++++++++++++++++++++++++++ let and Var +++++++++++++++++++++++++++++++++++++++++
// Variables declared with let have Block Scope
// Variables declared with let cannot be Redeclared in the same scope, but can be reassign.

let accountEmail = "khan@gmail.com";
var accountPassword = "6789"
var accountCity = "Peshawar";
//variable without assigning value
let accountState;   


// We can change value of variable which has var and let keyword
accountEmail = "afridi@gmail.com";
accountPassword = "1010";
accountCity = "Jamrud";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// ++++++++++++++++++++++++++++++++++++++++ Re-declared ++++++++++++++++++++++++++++++++++++++++
// Variables defined with let can not be redeclared, it will gave an error.

// let x = "John Doe";
// let x = 0;

// Variables defined with var can be redeclared.

var y = "John Doe";
var y = 0;

// ++++++++++++++++++++++++++++++++++++++++ Re-assign ++++++++++++++++++++++++++++++++++++++++
// A variable defined with the const keyword cannot be reassigned:

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error



// You can change the elements of a constant array:
const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";
cars.push("Audi");

//But you can NOT reassign the array, it will gave an error:
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR


// ++++++++++++++++++++++++++++++++++++++++ Block and global scope ++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++ example 1 ++++++++++++++++++++
// we analyze that variable declared inside block with let keyword can only be accessed in that block because it has a block scope, We can not access outside the block, also same is the case with const keyword
let x = 5
console.log(x);
// x is 5 here
{
    let x = 2;
    console.log(x);
    // x is 2 here
}
console.log(x)
// x is 5 here

// ++++++++++++++ example 2 ++++++++++++++++++++
// Variables declared with var inside a { } block can be accessed from outside the block, Because it has global scope:
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