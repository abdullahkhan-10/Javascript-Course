// +++++++++++++++++++++++++++++++++++++++++++++ Javascript While Loop ++++++++++++++++++++++++++++++++++++++++++
// Loops can execute a block of code as long as a specified condition is true.
// The while loop loops through a block of code as long as a specified condition is true.

// General Syntax
while (condition) {
    // code block to be executed
}
// example
let number = 0;
while (number <= 10) {
    console.log(`Value is: ${number}`);   
    // number++
    number = number + 2
}

// while loop throug an array
const birds = ["Pigeon", "Eagle", "Parrot", "Dove", "PeaCock"]

let newArray = 0

while(newArray < birds.length){
    console.log(`bird is: ${birds[newArray]}`);
    newArray = newArray + 1
}


// +++++++++++++++++++++++++++ Do While Loop ++++++++++++++++++++++++
// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// General Syntax
do {
    // code block to be executed
}
while (condition);

// example
let runs = 1
do {
    console.log(`number is: ${runs}`);
    runs++
} while (runs <= 10);