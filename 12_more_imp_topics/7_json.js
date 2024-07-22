// +++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript JSON Intro +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JSON is a text format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.
// The JSON format was originally specified by Douglas Crockford.
// The file type for JSON files is ".json"

// ++++++++++++++++++++++++++ What is JSON? +++++++++++++++++++++++++
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand

// The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

// +++++++++++++++++++ Syntax ++++++++++++++++
// This is json string.
'{"name": "Abdullah khan", "age": 21, "ciy": "Peshawar"}'

// inside json string there is json object literal
// {"name": "Abdullah khan", "age": 21, "ciy": "Peshawar"}
// The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.


// +++++++++++++++++++ Example ++++++++++++++++
let json_text = '{"name": "Abdullah khan", "age": 21, "ciy": "Peshawar"}'

let obj = JSON.parse(json_text)
console.log(obj);

// ++++++++++++++++++++++++++ Why Use JSON? +++++++++++++++++++++++++
// The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.
// Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

// ++++++++++ Built in methods ++++++++++++
JSON.parse()
// JavaScript has a built in function for converting JSON strings into JavaScript objects:

JSON.stringify()
// JavaScript also has a built in function for converting an object into a JSON string:

// ++++++++++ Storing Data ++++++++++++
// When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.
// JSON makes it possible to store JavaScript objects as text.



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ JSON Syntax ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The JSON syntax is a subset of the JavaScript syntax, it is derived from JavaScript object notation syntax
// In JSON, keys must be strings, written with double quotes:

// +++++++++++ Syntax Rules: ++++++++++++
// 1. Data is in name/value pairs
// 2. Data is separated by commas
// 3. Curly braces hold objects
// 4. Square brackets hold arrays

// JSON 
let myJson = '{"name": "Abdullah khan", "age": 21, "ciy": "Peshawar"}'

// Jvascript Object
let myObj = {name: "Abdullah khan", age: 21, ciy: "Peshawar"}

//NOTE. We can aslo write object keys in single quotes, but we must always write json key and values in double quotes.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ JSON vs XML ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Both JSON and XML(Extensible markup language) can be used to receive data from a web server.

// JSON 
// the : after employee will throw an error because we are not in .json file formate.
{
   "employees" [
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
]
}

// xml
<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ JSON Data Types ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++ Valid Data Types +++++++++
// In JSON, values must be one of the following data types:
// a string
// a number
// an object (JSON object)
// an array
// a boolean
// null

// JSON values cannot be one of the following data types:
// a function
// a date
// undefined

// ++++++++++++ Example ++++++++++++++
// error is because we are not in .json file.
// {
  //   "name": "Abdullah khan",
//   "age": 21,
//   "married": false,
//   "kids": ,
//   "hobbies": ["Sport","Startups","learning","Reading Books","traveling"],
//   "vehicle": {
  //     {"type": "car", "brand": "Ferrari"},
  //     {"type": "car", "brand": "Porsche"},
  //     {"type": "car", "brand": "Tesla"},
  //     {"type": "car", "brand": "Mercedeze"},
  
  //   }
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ JSON.parse() ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// +++++++++++++ Example +++++++++++++++
let json_text1 = '{"name": "Abdullah khan", "age": 21, "ciy": "Peshawar"}'

let obj1 = JSON.parse(json_text1)
console.log(obj1);                 // javascript object
console.log(obj1.name);           // To access object values.
console.log(obj1.city);           


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ JSON.stringify() ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// When sending data to a web server, the data has to be a string.
// Convert a JavaScript object into a string with JSON.stringify().

// +++++++++++++ Example +++++++++++++++
let myObj1 = {name: "Abdullah khan", age: 21, ciy: "Peshawar", today: new Date()}

let myJson1 = JSON.stringify(myObj1)
console.log(myJson1);            // json
// myJson1 is now a string, and ready to be sent to a server:

// ++++++++++++++ Stringify Dates +++++++++++++
// In JSON, date objects are not allowed. The JSON.stringify() function will convert any dates into strings.

// +++++++++++++ Example +++++++++++++++
let myObj2 = {name: "Abdullah khan", age: function () {return 30;}, ciy: "Peshawar"}

let myJson2 = JSON.stringify(myObj2)
console.log(myJson2);
// You can convert the string back into a date object at the receiver.

// ++++++++++++++ Stringify Functions +++++++++++++
// In JSON, functions are not allowed as object values.
// The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:

// +++++++++++++ Example 1 +++++++++++++++
let myObj3 = {name: "Abdullah khan", age: function () {return 30;}, ciy: "Peshawar"}

let myJson3 = JSON.stringify(myObj3)
console.log(myJson3);

// +++++++++++++ Example 2 +++++++++++++++
// This can be omitted if you convert your functions into strings before running the JSON.stringify() function.
let myObj4 = {name: "Abdullah khan", age: function () {return 21;}, ciy: "Peshawar"}
myObj4.age = myObj4.age.toString()

let myJson4 = JSON.stringify(myObj4)
console.log(myJson4);

// NOTE. If you send functions using JSON, the functions will lose their scope, and the receiver would have to use eval() to convert them back into functions.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ JSON Server ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// ++++++++++++++ JSON From a Server +++++++++++++++
// You can request JSON from the server by using an AJAX request
// As long as the response from the server is written in JSON format, you can parse the string into a JavaScript object.
const myXml = new XMLHttpRequest();
myXml.onload = function() {
  const myObj = JSON.parse(this.responseText);
  console.log(myObj);
  console.log(myObj.name);
};
myXml.open("GET", "7_json_demo.txt");
myXml.send();

// NOTE. Ajax do not work with node environment, we need to do it with html and browser console.