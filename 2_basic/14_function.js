// ++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Function Introduction ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when you invokes it (calls it).
// You can use a function declaration or a function expression.

// 1. Function Declarations
// Functions defined using a declaration are hoisted, it can be called before it is declared.

addTwoNumber();
function addTwoNumber(){
    console.log(2 + 2);
};
addTwoNumber;              // Will not log anything
// addTwoNumber();


// 2. Function Expressions
// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable:
//Functions defined using an expression are not hoisted, it can not be called before it is declared

// console.log(addNumeber(10));            // it will gave an error
const addNumeber = function(num){
    return num + 5
};
console.log(addNumeber(10));    // we will called it after the declaration


// ++++++++++++++++ Function Return ++++++++++++++++++++
// When JavaScript reaches a return statement, the function will stop executing.

function myFunction(p1, p2 = 15) {
    // Function returns the product of p1 and p2
    return p1 * p2;                                    // we need to store the return value in variable

    console.log("This code will not execute because it is after return");
};
// Function is called (invoke), the return value will end up in result, which mean function can be use as values
let result = myFunction(5, 10);
console.log(result);


// ++++++++++++++++++++ Local Variables ++++++++++++++++++
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.


// code here can not use variable name, because variable is not declare here, Will throw an error
// console.log(`My name is ${name} and I am living in peshawar.`);

function person(){
    let name = "Abdullah khan"
    //Code here can use variable name
    console.log(`My name is ${name} and I am living in Peshawar.`);
}
person();

// code here can not use variable name, Will throw an error
// console.log(`My name is ${name} and I am living in peshawar.`);


// ++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Function Parameters ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.

// Parameter Rules
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

// +++++++++++++++++++++ 1. default parameter values ++++++++++++++++++++
function myAddition(p1, p2 = 15) {                 
    return p1 + p2;                   

};
let res = myFunction(5);  // if the value of p2 is not passed, then it will take value from the parameter above, which is 15.
console.log(result);

// +++++++++++++++++++++ 2. Function Rest Parameter ++++++++++++++++++++++++
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array, mean it store all the arguments in array.
function calculatePrice(...price){
    return price
};
console.log(calculatePrice(200,100, 300, 400, 600, 150, 380)); 


//for interview purpose
function calculatePrice1(num1, num2, ...price){
    return price
};

// 200 will store in num1, 100 will store in num2 and the rest of the values will store in price as an array 
console.log(calculatePrice1(200,100, 300, 400, 600, 150, 380));  


// +++++++++++++++++++ 3. Passing object in arguments +++++++++++++++++++++++++++ 
const person = {
    name : "Abdullah khan",
    age : 21
}

function myObject(obj){
    console.log(`My name is ${obj.name} and I am ${obj.age} years old. `);

}
//call a function
myObject(person);      // We can pass object as an arguments 
// OR 
myObject({
    name:"Abdullah",
    age : 21
})


// +++++++++++++++++++ 3. Passing Array in arguments +++++++++++++++++++++++++++ 

const numbers = [200, 300, 400, 100, 700]

function myArray(arr){
    return arr
    // return arr[2]               //we can get specific value of array as well
};

console.log(myArray(numbers));     // we can pass an array as well as an arguments

// ++++++++++++++++++++++++++++++++++++++++++++++++++ Breaking a Return Statement ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// It is a default JavaScript behavior to close a statement automatically at the end of a line.

// JavaScript allow you to break a statement into two lines.
function myFunction(a) {
    let 
    power = 10; 
    return a * power;
}
let multiply = myFunction(25)
console.log(multiply);

// But, what will happen if you break the return statement in two lines like this:
function myFunction(a) {
    let 
    power = 10; 
    return
    a * power;
}
let multiply1 = myFunction(25)
console.log(multiply1);           // The function will return undefined!

// Why? Because JavaScript thought you meant:
function myFunction(a) {
    let 
    power = 10; 
    return;                 // The return has been close automatically because of javascript default behavior.
    a * power;
}
let multiply2 = myFunction(25)
console.log(multiply2);

// Explanation:
// If a statement is incomplete like:
let
// JavaScript will try to complete the statement by reading the next line:
power = 10;
// But since this statement is complete:
return
// JavaScript will automatically close it like this:
return;

// NOTE. Never break a return statement.


// ++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Function Invocation ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Immediately Invoked Function Expressions (IIFE)

// In order to invoke IIFE function, we need to put the function in parenthesis first.
// 1. named IIFE
(function greeting(){
    console.log("Good Morning...");
})();           // this parenthesis work as IIFE                      


// if we want to innitiate two IIFE function in same file, we need to put semi-colon at the end of first function to avoid error.
// 2. IIFE without name but have parameter
( (name) => {
    console.log(`Good Morning ${name}`);
})
("Abdullah khan");