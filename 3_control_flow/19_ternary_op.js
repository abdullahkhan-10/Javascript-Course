// ++++++++++++++++++++++++++++++++++++++++++++++++++ Ternary Operator ++++++++++++++++++++++++++++++++++++++++++++++++++++_
// The ternary operator is a simplified conditional operator like if / else.

// General Syntax
condition ? true : false;

// here Condition match, which mean true, so first statement will log
let watchPrice = 200
watchPrice < 250 ? console.log("I can buy this watch!") : console.log("My pocket does not allow me to buy this watch.");

// OR
// here condition does'nt match, which mean false, so second statement will log.
let watchPrice1 = 300            
watchPrice1 < 250 ? console.log("I can buy this watch!") : console.log("My pocket does not allow me to buy this watch.");


// ++++++++++++++++++++++++++++++++++++++++++++++ falsy and truthy values ++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++ 1. falsy values +++++++++++++++++++
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
let name = ""
if (name){
    console.log("My name is khan.");
}else{
    console.log("Don't have any name.");
}


// +++++++++++++++ 2. //truthy values ++++++++++++++
// "0", 'false', " ", [], {}, function(){}
let arr = []
if (arr.length === 0){
    console.log("You have pass an empty array.");
}

// empty object
let obj = {}
if (Object.keys(obj).length === 0){
    console.log("You have pass an empty object.");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++  Nullish Coalescing Operator (??): null undefined ++++++++++++++++++++++++++++++++++++++++
// if we have two values and we want to get the second value, then we use (null or undefined with double ??) to avoid getting the first value.

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



console.log(val1);