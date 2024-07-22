// ++++++++++++++++++++++++++++++++++++++++++++++++ Javscript Hoisting ++++++++++++++++++++++++++++++++++++++++++++++++++
// Declarations on Top.
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// javascript treat all the variable and function declaration at the top.

// +++++++++++++++++++++ Var keyword ++++++++++++++++++++++
x = 5              // assign value. 
var x;             // declare variable.
console.log(x);
// NOTE. Var is not hoisted because we can assign value before declaring.


// +++++++++++++++++++++++++++++++++ JavaScript only hoists declarations ++++++++++++++++++++++++++++++
// +++++++++++++++++++++ let and const keyword ++++++++++++++++++++++
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:

y = 10
let y;
console.log(x);
// Note. for let and const it is mendatory to declare them first and then assign them values.

z = 20
// const z;                  syntax error
console.log(z);


// NOTE. JavaScript only hoists declarations, not initializations.

// +++++++++++++++++++++++ example 1 +++++++++++++++++++++++++
var a = 10;     // initialize a
var b = 20      // initialize b
console.log(a);
console.log(b);

// +++++++++++++++++++++++ example 2 +++++++++++++++++++++++++
var c = 10

console.log(c);
console.log(d);

var d = 30;         // it will show undefine, because we innitialize it and initialization can not be hoisted, mean bahave at the top.

// This is because only the declaration (var d), not the initialization (=30) is hoisted to the top.
// Because of hoisting, d has been declared before it is used, but because initializations are not hoisted, the value of d is undefined.


// +++++++++++++++++++++++ example 3 +++++++++++++++++++++++++
// normal function is hoisted at the top, mean declaration will behave as the top of initialization.

add(10,20)                        // function initialization
function add(a, b){               // function declaration
    console.log(a + b); 
}

// function expression is not hoisted at the top.
sum(50,30)                              // throw an error.
const sum = function(a, b){
    console.log(a + b);
}

