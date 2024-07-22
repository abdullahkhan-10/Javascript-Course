"use strict"; // treat all JS code as newer version
// ++++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Data Types ++++++++++++++++++++++++++++++++++++++++++++
// 


// ------------- Primitive data types ------------ 
// A primitive data type is data that has a primitive value.
// A primitive value is a value that has no properties or methods.

// Numbers => (same for integers (10), floats (10.5), negatives (-10))
// bigint => big number
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// ---------- Reference or Non primitive ----------- 
// data types that has properties or values

//object
// Array
// Function


let name = "Abdullah"
let age = 18
let bigNumber = 257823583286948n
let isLoggedIn = false
let outsideTemp = null  // mean empty 
let state;             // Data type is undefined
let id = symbol ('123')


// object
let student = {
    studentName : "Abdullah khan",
    studentAge : 21,
}

// array
const birds = ['Eagle', "Pigeon"," sparrow","Dov"]

// Function 
function add(num1, num2){
    let res = num1 + num2
    console.log(res);
}
add(50,30)

console.log(typeof name, typeof age, typeof bigNumber, typeof isLoggedIn, typeof outsideTemp, typeof state, typeof student, typeof id);

console.log(`The type of Null is ${typeof null}`); // Data type is object
console.log(`The type of array is ${typeof birds}`); // Data type is object
console.log(`The type of Function is ${typeof add}`); // Data type is Function