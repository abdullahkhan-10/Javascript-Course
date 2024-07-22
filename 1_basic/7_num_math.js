// ++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Number +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// JavaScript has only one type of number. Numbers can be written with or without decimals.
// JavaScript Numbers are Always 64-bit Floating Point
// Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.


let x = 30
let y = 5.3

// Extra large or extra small numbers
let xx = 123e5;    // 12300000
let yy = 123e-5;   // 0.00123

let runs = 230
console.log(runs);

// Number as Object, but it is no recommended
let balance = new Number(10000)
console.log(balance);

// +++++++++++++++++++++++++++++++++++++++++++++++++ Number Methods +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. toString() Method
// The toString() method returns a number as a string.
let num1 = 500
let res = num1.toString();
console.log(res);
console.log(res.length);  // if we convert number into string, then we can find its length as well.

// 2. toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals, it deal with only digit from right side of decimal
let num2 = 8.6352
let res2 = num2.toFixed(1);
let res3 = num2.toFixed(2);
console.log(res2);
console.log(res3);

// 3. toPrecision()
// toPrecision() returns a string, with a number written with a specified length, it deal with all digits
let num3 = 278.6352
let res4 = num3.toPrecision(4);
let ress = num3.toPrecision(5);
console.log(res4);
console.log(ress);

// 4. toLocalString()
let num4 = 10000000
let res5 = num4.toLocaleString();            // convert to USA standard
let resss = num4.toLocaleString('en-IN');    // convert to indian standard
console.log(res5);
console.log(resss);


// ++++++++++++++++++++++++++++++++++++++++++++ JavaScript Math Object +++++++++++++++++++++++++++++++++++++++++++++++
// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// 1. Math.round()
// Math.round(x) returns the nearest integer, return left side value of decimeal
let num5 = 24.346
let res6 = Math.round(num5)
console.log(res6);

// 2. Math.ceil()
// Math.ceil(x) returns the value rounded up to its nearest integer, round up left side value
let num6 = 3.8
// let x = 5.4
let res7 = Math.ceil(num6)
console.log(res7);

// 3. Math.floor()
// Math.floor(x) returns the value rounded down to its nearest integer:
let num7 = 4.3
let res8 = Math.floor(num7)
console.log(res8);

// 4. Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(8,2))

// 5. Math.sqrt()
console.log(Math.sqrt(25));

// 6. Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(5, -7));

// 7 Math.min() and Math.max()
console.log(Math.min(7,4,5,9,8,3));

console.log(Math.max(3,4,6,8,2,9));

// 8. Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());

// Retun a random integer from 0 to 10
console.log(Math.floor(Math.random() * 11));

// Retun a random integer from 0 to 99
console.log(Math.floor(Math.random() * 100));

// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1);


// return random value between 10 and 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);