// +++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Type Conversion ++++++++++++++++++++++++++++++++++++++++++++
// JavaScript variables can be converted to a new variable and another data type:

// The Unary + Operator
// The unary + operator can be used to convert a variable to a number:

let a = " abdullah"
let b = + a;
console.log(b);

let x = "10"
let y = + x;
console.log(y);

// +++++++++++++++++++ 1. Converting Strings to Numbers ++++++++++++++++++
let pii = "3.14"
let emptyStr = ""
let NonNumStr = "Abdullah"

let ans1 = Number (pii);   //Numeric string convert to number
console.log(ans1);
console.log(typeof ans1);

let ans2 = Number ("")    //empty string convert 0
console.log(ans2);
console.log(typeof ans2);

let ans3 = Number ("Abdullah") // Non-Numeric string convert NaN (not a number)
console.log(ans3);
console.log(typeof ans3);

// +++++++++++++++ 2. Converting Numbers to Strings +++++++++++++++++++

let number = 100
let conStr = String(number);

console.log(conStr);
console.log(typeof conStr);

// +++++++++++++ 3. Converting Dates to Numbers ++++++++++++++++++++++

let myDate = new Date();
let answer = myDate;
console.log("Here is the current date I was looking for " + answer);
console.log(typeof answer);

console.log("Converted to number");

let answer1 = Number (myDate);
console.log("Here is the current date in number I was looking for " + answer1);
console.log(typeof answer1);


// ++++++++++++++ 4. Converting Booleans to Numbers +++++++++++++++++++
let isLoggedIn = true

let ans4 = isLoggedIn
console.log(ans4);
console.log(typeof ans4);

let ans5 = Number(isLoggedIn)
console.log(ans5);
console.log(typeof ans5);


// +++++++++++++++++++++++++++++++++++++++++++ Stack and heap +++++++++++++++++++++++++++++++++++++++++++

// all primitive data type goes to stack and then we get a copy of that when we want

// let myName = "Abdullah"

// let anotherName = myName
// anotherName = "Khan"

// console.log(myName);
// console.log(anotherName);

// All non-primitive data type goes to heap and we get the original reference 

let userOne = {
    email : "abdullahkhan@gmail.com",
    id : 10101,
}

let userTwo = userOne;

// as we have assign userOne to Usertwo, so any changes we made to userTwo, It will be automatically made to userOne.
userTwo.email = "abdullahafridi@gmail.com"    

console.log(userOne.email);
console.log(userTwo.email);