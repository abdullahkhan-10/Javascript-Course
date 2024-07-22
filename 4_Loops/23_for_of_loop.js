// ++++++++++++++++++++++++++++++++++++++++++++++++++++  For Of Loop ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The JavaScript for of statement loops through the values of an iterable object such as (Arrays, Strings and Maps etc).

//General Syntax
for (variable of iterable) {               // For every iteration the value of the next property is assigned to the variable
    // code block to be executed
}

// +++++++++++++ Looping over an Array ++++++++++++++++++++
const birds = ["Pigeon", "Eagle", "Parrot", "Dove", "Sparrow"]

for (const mybird of birds) {
    console.log(mybird);
}

// +++++++++++++ Looping over an String ++++++++++++++++++++
const greeting = "Hello World"
for (const mygreet of greeting) {
    console.log(mygreet);
}


// +++++++++++++ Looping over an map ++++++++++++++++++++
const map = new Map();
map.set("name", "Abdullah")
map.set("age", 21)
map.set("city", "Peshawar")
map.set("country", "Pakistan")

for (const [mykey, myValue] of map) {
    console.log(`${mykey} : ${myValue}`);
}

// +++++++++++++ Looping over an javascript object ++++++++++++++++++++
const car = {
    name : "Civic",
    model: 2022,
    company: "Honda"
}

for (const [myKeys, myValue] of car) {                 // for of loop does not iterate through javascript object, it throw an error
    console.log(`${myKeys} : ${myValue}`);
}