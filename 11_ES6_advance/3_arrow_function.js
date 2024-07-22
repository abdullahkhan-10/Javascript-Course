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


// NOTE. 
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.