// ++++++++++++++++++++++++++++++++++++++++++++++++++++ For In Loop ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The JavaScript for in statement loops through the properties of an Object:

//General Syntax
for (key in object) {                    // object here mean anything that you want to iterate, example (array, string and javascript object)
    // code block to be executed
}

// +++++++++++++++ For In Loop through Javascript Object ++++++++++++++++++++
const person = {
    name : "Abdullah",
    age: 21,
    city: "Peshawar",
    country: "Pakistan"
}

for (const myKeys in person) {
    console.log(`${myKeys} : ${person[myKeys]}`);             // to access the properties as well as their values.
}

// Example explain
// The for in loop iterates over a person object
// Each iteration returns a key (mykeys)
// The key is used to access the value of the key
// The value of the key is person[mykey]



// +++++++++++++++ For In Loop through Javascript Array ++++++++++++++++++++
const codingLanguage = ["javascript", "python", "solidity", "rust", "C++"]

for (const myLang in codingLanguage) {
    console.log(`${myLang} is the index of ${codingLanguage[myLang]}`);
}

// Note. It is recommneded to use for of, for and forEach() with array. 