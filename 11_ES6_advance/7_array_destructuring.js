// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ Destructing Arrays ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// If we have an array or object that we are working with, but we only need some of the items contained in these.
// Destructuring makes it easy to extract only what is needed.

// ++++++++++++++++++++++ Exmaple 1 ++++++++++++++++++++++
// Old way of assigning array elements to a variable.
let birds = ["Eagle", "Pigeon", "Sparrow", "Dove"]

let myEagle = birds[0]
let myPigeon = birds[1]
let mySparrow = birds[2]
let myDove = birds[3]

console.log(myEagle);
console.log(myPigeon);

// ++++++++++++++++++++++ Exmaple 2 ++++++++++++++++++++++
// new way of assigning array elements to variable using destructuring.
let user = ["Abdullah khan", 21, "Peshawar"]

let [name, age = 20, city] = user                       // when destructuring, order of variable is important
console.log(name);
console.log(city);

// OR we can extract only those value that we need.
let[name1,,city1] = user
console.log(name1);

// ++++++++++++++++++++++ Exmaple 3 ++++++++++++++++++++++
// Destructuring of nested array 
let user1 = ["Abdullah khan", 21, "Peshawar", ["Male", 25000]]

let [name2, age2, city2,[gender, salary]] = user1

console.log(name2);
console.log(gender);
console.log(salary);

// ++++++++++++++++++++++ Exmaple 4 ++++++++++++++++++++++
// spread operator in destructuring
let user2 = ["Abdullah khan", 53, 61, 80, 80, 86]

let [name3, ...marks] = user2
console.log(name3);
console.log(marks);

// ++++++++++++++++++++++ Exmaple 5 ++++++++++++++++++++++
// Destructuring of array in function, useful for react

function user([name4, age4, city4]){            // destructuring concept is used to store the values of array in variables
    console.log(name4);                         // And now we can manipulate with value that is store in variable.
    console.log(age4);
    console.log(city4);
}
user(["Abdullah khan", 21, "Peshawar"]);         // We pass the array as an arguments

// ++++++++++++++++++++++ Exmaple 6 ++++++++++++++++++++++
// Destructuring also comes in handy when a function returns an array:
function user(){            
    return ["Abdullah khan", 21, "Peshawar"]
}

// NOTE. When the function is called , it return the array, and then with destructuring the function assign values of array to variables.
let [name5, age5, city5] = user();

console.log(name5);
console.log(city5);