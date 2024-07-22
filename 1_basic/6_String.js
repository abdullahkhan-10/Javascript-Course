// +++++++++++++++++++++++++++++++++ String ++++++++++++++++++++++++++++++++++++++++++
// A JavaScript string is zero or more characters written inside quotes.

let firstName = "abdulllah"
let lastName = 'khan'
let fullName = "My name is 'abdullah' khan"

// String as Object
let x = "abdullah"
let y = new String("khan")

console.log(x);
console.log(typeof x);
console.log(y);
console.log(typeof y);

// +++++++++++++++++++++++++++++ Template Strings ++++++++++++++++++++++++++++++++++
/*
Templates were introduced with ES6 (JavaScript 2016).
Templates are strings enclosed in backticks (`This is a template string`).
*/

//Templates allow single and double quotes inside a string:
let text = `He's the main character of the movie "Spidarman" `

// Template Strings allow multiline strings:
let text1 = `the quick
brown fox
jumps over
the lazy dog`;

// Template String provide an easy way to interpolate variables and expressions into strings.
//The method is called string interpolation.
let myName = "Abdullah khan"
let myAge = 21
let result = `My name is ${myName} and I am ${myAge} years old.`;
console.log(result);

// Template Strings allow expressions in strings:
let price1 =  250
let price2 = 120
let add = `The total price of product is RS. ${price1 + price2 }`
console.log(add);



// +++++++++++++++++++++++++++ JavaScript String Methods +++++++++++++++++++++++++++++++++
// Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.

// 1. Length
let text2 = "abcdefghijklmnopq"
console.log(text2.length)

// 2. String charAt()
// The charAt() method returns the character at a specified index (position) in a string:
let text3 = "abdullah khan"
console.log(text3.charAt(3));

// 3. String at()
// ES2022 introduced the string method at():
// The at() method returns the character at a specified index (position) in a string.
// The at() method is supported in all modern browsers since March 2022:
// It allows the use of negative indexes while charAt() do not.
let text4 = "afridi"
console.log(text4.at(1));
console.log(text4.at(-2));

// 4. String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).
let text5 = "Abdullah khan afridi"
console.log(text5.slice(6, 15));
console.log(text5.slice(-9, -2));
console.log(text5.slice(-11));

// 5. String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let text6 = "Abdullah khan afridi"
console.log(text6.substring(7, 15));
console.log(text6.substring(8));

// 6. toUpperCase()
let text7 = "abdullah khan"
let upper = text7.toUpperCase();
console.log(upper);

// 7. concat()
let firstName1 = "abdullah"
let lastName1 = "khan"
let fullName1 = firstName1.concat(" " , lastName1)
console.log(fullName1);

// 8. String trim()
// The trim() method removes whitespace from both sides of a string:
let text8 = "    Abdullah khan     "
console.log(text8);
console.log(text8.trim());

// 9. String Padding
// add value to the string
// ECMAScript 2017 features
let text9 = "5";
let padded = text9.padStart(4,"0");
console.log(padded);

let text10 = "5";
let padded1 = text10.padEnd(4,"0");
console.log(padded1);

// 10. Replacing String Content 
//replace() and replaceAll()
// The replace() method replaces a specified value with another value in a string:
let text11 = "Please visit openAi"
console.log(text11.replace("openAi", "Google"));

//ES2021 feature.
let text12 = "I love Cats. Cats are very easy to love. cats are very popular."
console.log(text12.replaceAll("Cats", "Pigeons"));  //it is case sensitive

// 11. String split()
// A string can be converted to an array with the split() method:
let text13 = "Abdullah-khan afridi"
console.log(text13.split("-"))

// ++++++++++++++++++++++++++++++++++++++++++++++++ String Search ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text14 = "My name is Abdullah khan, I am called Mr khan!";
let index = text14.indexOf("khan");
let indexx = text14.indexOf("John");  // if not found return -1
console.log(index);
console.log(indexx);

// 2. String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text15 = "My name is Abdullah khan, I am called Mr khan!";
let index1 = text15.lastIndexOf("khan");
console.log(index1);

// 3. String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// search() and indexof() are equal , but search can not take second parameter and indexof can not take powerful search value like (regular expressions)
let text16 = "Would you like to tell me about your area of living";
let serch = text16.search("tell");
console.log(serch);

// 4. String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let text17 = "The rain in SPAIN stays mainly in the plain";
let res = text17.match("ain");
console.log(res);

//Perform a global search for "ain":
let text18 = "The rain in SPAIN stays mainly in the plain";
let res1 = text18.match(/ain/g);
console.log(res1);

// Perform a global, case-insensitive search for "ain":
let text19 = "The rain in SPAIN stays mainly in the plain";
let res2 = text19.match(/ain/gi);
console.log(res2);

// 5.  String includes()
// The includes() method returns true if a string contains a specified value, Otherwise it returns false.
let text20 = "Hi Mr James, Welcome to Pakistan!"
let res3 = text20.includes("James")
let res4 = text20.includes("khan")
console.log(res3);
console.log(res4);