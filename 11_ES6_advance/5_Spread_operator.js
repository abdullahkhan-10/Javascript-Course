// +++++++++++++++++++++++++++++++++++++++++++ The Spread Operator ++++++++++++++++++++++++++++++++++++++++++
// The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
// This allows us to quickly copy all or parts of an existing array into another array:

// +++++++++++++ Example 1 +++++++++++++++++ 
// use to combine two array
let array1 = [20,30,40,50]
let array2 = [80,20,10,]

let array3 = [...array1, ...array2]
console.log(array3);

// +++++++++++++ Example 2 +++++++++++++++++ 
// The spread operator is often used to extract only what's needed from an array:
let array4 = [1,2,3,4,5,6]

let [myOne, myTwo, ...myRest] = array4

console.log(myOne);
console.log(myTwo);
console.log(...myRest);

// +++++++++++++ Example 3 +++++++++++++++++ 
// We can use the spread operator with objects too:
const details1 = {
    name: "Abdullah khan",
    Education: "BBA",
    age: 21
}

const details2 ={
    city: "Peshawar",
    country: "Pakistan"
}

let myInfo = {...details1, ...details2}
console.log(myInfo);

// +++++++++++++ Example 4 +++++++++++++++++ 
// spread perator in function.
function Add(name, ...marks){                   // (...marks) refer to rest parameter 
    let sum = 0

    for (let x of marks) {
        sum += x
    }
    console.log(sum);
    console.log(`I am ${name} and I have got ${sum} marks in last semester.`);
}

let arr = [53,80,80,86,61]           // this array will spread its element in the arguments for function call. 
Add("Abdullah khan", ...arr)        // (...arr) refer to spread operator
