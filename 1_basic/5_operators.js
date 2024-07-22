// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript operators +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Javascript operators are used to perform different types of mathematical and logical computations.

// Types of JavaScript Operators:
/*
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. String Operators
5. Logical Operators
6. Bitwise Operators
7. Ternary Operators
. Type Operators
*/

// ++++++++++++++++++++++++++++++++++++ 1. Arithmetic Operators ++++++++++++++++++++++++++++++++++++
// Arithmetic operators perform arithmetic on numbers (literals or variables)

// ++++++++++ Addition ++++++++++++
// let x = 10
// let y = 20
// let z = x + y

// +++++++++ Subtraction +++++++++++
// let a = 50
// let b = 20
// let c = a - b

// ++++++++++ Multiplication +++++++++++++
// let x = 10
// let y = 20
// let z = x * y

// ++++++++++ Division ++++++++++
// let x = 100
// let y = 20
// let z = x / y
// console.log(z);       // Gave the answer of division in return 

// +++++++++++ Modulas ++++++++++
// The modulus operator (%) returns the reminder of division.
let x = 5
let y = 2
let z = 5 % 2    //Answer will be 1, which is remainder

// +++++++++++ Exponentiation ++++++++++++++
// The exponentiation operator (**) raises the first operand to the power of the second operand.
let a = 2
let b = 5
let c = a ** b;  // mean 2*2*2*2*2, multiply 2 five times

// +++++++++++ Incrementing +++++++++++++
// var x = 10
// x ++;
// var z = x

// ++++++++++ Decrementing +++++++++++++
// let y = 10
// y --;
// let w = y

// ++++++++++ Operator Precedence +++++++++++
// Operator precedence describes the order in which operations are performed in an arithmetic expression, In Javascript operation are perfome from left to right.

let num1 = 150 + 50 * 5

// ++++++++++++++++++++++++++++++++++++ 2. Assigning Operators ++++++++++++++++++++++++++++++++++++
// Assignment operators (=) assign values to JavaScript variables.

// Addition Assignment Operator
// let x = 20
// x += 10           // x = x + 10
// console.log(x);

// subtraction Assignment Operator
// let x = 20
// x -= 10           // x = x - 10
// console.log(x);

// same for the rest as well

// ++++++++++++++++++++++++++++++++++++++++++++++++ 3. Comparison Operators ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++ Loose Comparison (equal to (==)) ++++++++++++++++
// In loose/regular comparison, data type does not matter, It compare only values.
// +++++++++++ example 1 +++++++++
let number3 = 10
let number4 = "10"
console.log(number3 == num4);              // true

// +++++++++++ example 2 +++++++++
let num2 = 5
console.log(num2 == 10);               // false , because 5 is not equal to 10

let num22 = 30
console.log(num22 == 30);            //  true

// +++++++++++++++++ strict comparison ++++++++++++++++
// equal value and equal data type (===)
// In strict comparison, data type does matter along with value.
// +++++++++ example 1 ++++++++ 
let number5 = 10
let number6 = "10"
console.log(number5 === number6);           // false

// +++++++++ example 2 ++++++++ 
let number1 = 40
console.log(num1 === 40);  // true
        
let num3 = 40
console.log(num2 === '40');  // false, because one is number and one string, type is not equal


        // not equal (!=)
let num4 = 20
let num44 = 50
console.log(num4 != num44); // true

        //not equal value or not equal type (!==)
let num5 = 20
let num55 = 20
console.log(num5 !== num55);  //false because value is equal

let num6 = 20
let num66 = '20'
console.log(num6 !== num66);  //true because at least one is not equal which is type


// ++++++++++++++++++++++++++++++++++++ 4. Logical Operators ++++++++++++++++++++++++++++++++++++
// Logical operators are used to determine the logic between variables or values.

//++++++++++ The && Operator (AND) ++++++++++++++
//The && operator returns true if both expressions are true, otherwise it returns false.
let digit1 = 6;
let digit2 = 3;

let result = digit1 < 10 && digit2 > 1  //both expression are true, so it will return true
console.log(result);

let result2 = digit1 < 10 && digit2 < 1    // one expression is false digit2 < 1, so it will return false
console.log(result2);

// ++++++++++ The || Operator (Logical OR) ++++++++++++
// The || returns true if one or both expressions are true, otherwise it returns false.

let digit3 = 8
let digit4 = 3
let result3 = digit3 == 5 || digit4 == 6;  //both are false, it will return false
console.log(result3);

let digit5 = 8
let digit6 = 3
let result4 = digit5 == 8 || digit6 == 4;  //one expression is true, it will return true
console.log(result4);

let digit7 = 8
let digit8 = 3
let result5 = digit7 == 8 || digit8 == 3;  //both are true true, it will return true
console.log(result4);

// ++++++++++ The ! Operator (Logical NOT) +++++++++++++=
// The NOT operator (!) returns true for false statements and false for true statements.

let myNum1 = 8
let myNum2 = 3

let ans1 = !(myNum1 === myNum2)  // it is false statement, but will return true.
console.log(ans1);

let ans2 = !(myNum1 > myNum2);   // it is true statement, but will return false
console.log(ans2);
