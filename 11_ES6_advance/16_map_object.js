// +++++++++++++++++++++++++++++++++++++++++++++++ Javascript map Object ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// ++++++++++++++++++ How to Create a Map ++++++++++++
// You can create a JavaScript Map by:

// 1. Passing an Array to new Map()
const user = new Map([["name", "Abdullah"], ["age", 21], ["city", "Peshawar"]])

console.log(user);
console.log(typeof user);
console.log(user.size);

// 2. Create a Map and use Map.set() to add value to the map object.
const user1 = new Map();

user1.set("name","Abdullah khan")
user1.set("age", 21)
user1.set("city","Peshawar")

console.log(user1);
console.log(user1 instanceof Map);

// +++++++++++++++++++++++++++++++++++++++++++++++ Javascript map method ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++ 1. get() method +++++++++++++
// You get the value of a key in a map with the get() method
const user2 = new Map([["name", "Abdullah khan"], ["age", 21], ["city", "Peshawar"]])

let myName = user2.get("name")
console.log(myName);

// +++++++++++++++++ 2. has() method +++++++++++++
const user3 = new Map([["name", "Abdullah khan"], ["age", 21], ["city", "Peshawar"]])

let myAge = user3.has("age")

console.log(myAge);


// +++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Objects vs Maps ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Differences between JavaScript Objects and Maps:

//      Object	                                        Map
// Not directly iterable	                    Directly iterable
// Do not have a size property	                Have a size property
// Keys must be Strings (or Symbols)	        Keys can be any datatype
// Keys are not well ordered	                Keys are ordered by insertion
// Have default keys	                        Do not have default keys
