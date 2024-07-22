// ++++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Iterators +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.
// Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:
//value:
// The next value in the iteration sequence.
// done:
// This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

// iterator is used to parse/ iterate an array, here we have the control in geting values of array.
// like in other case where we have many methods (for loop, while loop, for of loop, for in loop and forEach etc), here we don't have control over the values of array, because when we apply any of them loop on array, it will gave all the elements of array, we can also use if and then but it is complicated.

// ++++++++++++++++++++++ General syntax ++++++++++++++++++++++++
// we can also use it with stringa and object, but here we will take array 
let x = [100, 200, 300, 400]

let z = x[Symbol.iterator]()             // symbol.iterator is a function that help us iterate through an array.

console.log(z);
console.log(typeof z);
console.log(z.next());                    // next() is a function that help us access/ read array value, which is return by symbol.iterator

// +++++++++++++++++++++ Example 1 +++++++++++++++++++++++++++
let birds = ["Eagle", "Pigeon", "Dov", "Sparrow"]
let iter = birds[Symbol.iterator]()             // symbol.iterator is a function that help us iterate through an array.

console.log(iter);
console.log(iter.next());      
iter.next();                        // second value not print on console, because we did not log this next()      
console.log(iter.next());      
console.log(iter.next());        // done in result will be false until there is value left for iteration, when all the elements of array get iterated.
console.log(iter.next());           // done in result will be true, which indicate that all the elements of array are being iterated.      

// NOTE. To access all the elements of array we have to log next() function that number of time.

// +++++++++++++++++++++ Example 2 +++++++++++++++++++++++++++
// to get values of object
let birds1 = ["Eagle", "Pigeon", "Dov", "Sparrow"]
let iter1 = birds1[Symbol.iterator]()             // symbol.iterator is a function that help us iterate through an array.

console.log(iter1);
console.log(iter1.next().value);        // As iter1 is an object, so we can get the values of object with (.value)
console.log(iter1.next().value); 
console.log(iter1.next().value); 

// +++++++++++++++++++++ Example 3 +++++++++++++++++++++++++++
// we can also loop through an iterator, if we need all the elements of array.

let birds2 = ["Eagle", "Pigeon", "Dov", "Sparrow"]

let iter2 = birds2[Symbol.iterator]()             
let result = iter2.next()

while (!result.done) {
    console.log(result.value);
    result = iter2.next()
}

// Note. it is easy to do that with for of loop.
for (const elements of birds2) {
    console.log(elements);
}