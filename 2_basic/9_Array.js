// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Javscript Arrays ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// An array is a special variable, which can hold more than one value:
// Arrays are a special type of objects, with numbered indexes. The typeof operator in JavaScript returns "object" for arrays.
//But, JavaScript arrays are best described as arrays.

const countries = ["pakistan", "afghanistan", "India", "China"]

// We can also write like this, in which declaration can span multiple lines
const countries1 = [
    "pakistan",
    "afghanistan",
    "India",
    "China"
];

// We can also create array and then provide an element
const countries2 = []
countries2[0] = "Pakistan"
countries2[1] = "Afghanistan"
countries2[2] = "India"
countries2[3] = "China"

// Array with different element
const myArray  = ["Abdullah", 20, "khan", true]

// ++++++++ Accessing Array Elements +++++++++++
// You access an array element by referring to the index number:
const countries3 = ["pakistan", "afghanistan", "India", "China"]
const country = countries3[0]          // to access first element
console.log(country);

// To access the last element
const countriess = ["pakistan", "afghanistan", "India", "China"]
const countryx = countriess.length; 
const countryy = countriess[countriess.length -1]
// const country = countries[4-1]
console.log(countryx);
console.log(countryy);

// ++++++++++++ Changing an Array Element +++++++++++
const countries4 = ["pakistan", "afghanistan", "India", "China"]
countries4[0] = "Beautiful Pakistan" 
console.log(countries4);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ Array Methods ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. Array length
const birds = ["Pigeon","Parrot","Sparrow","Dov"] 
let size = birds.length;
console.log(size);            // size is 4

// 2. Converting array to string  using toString() method.
const countries5 = ["pakistan", "afghanistan", "India", "China"]
let country1 = countries5.toString()
console.log(country1);
console.log(typeof country1);

// 3. Array at()
// ES2022 intoduced the array method at(), we can also use at() to access element of array
const birds1 = ["Pigeon","Parrot","Sparrow","Dov"] 
let bird = birds1.at(2);   // access element with at() method.
let birdd = birds1[2];     // access element with Square bracket [].
console.log(bird);
console.log(birdd);

// 4. Array join()
// The join() method also joins all array elements into a string.
const birds2 = ["Pigeon","Parrot","Sparrow","Dov"] 
let my_join = birds2.join(" * ")
console.log(my_join);

// 5. pop()
// This method remove last element from array.
const birds3 = ["Pigeon","Parrot","Sparrow","Dov"] 
birds3.pop();
console.log(birds3);

// 6. push()
// add new element at the end of array
const birds4 = ["Pigeon","Parrot","Sparrow","Dov"] 
birds4.push("Eagle");
console.log(birds4);

// 7. shift()
// remove the first element from array 
const birds5 = ["Pigeon","Parrot","Sparrow","Dov"] 
birds5.shift();
console.log(birds5);

// 8. unshift()
// add new element to array at beginning.
const birds6 = ["Pigeon","Parrot","Sparrow","Dov"] 
birds6.unshift("Eagle");
console.log(birds6);

// 9. concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Rayhan", "Malik", "Noreen", "Mischael"]
const myBoys = ["Hekmat", "Amir", "Zafar", "Kamal"]
const moreBoy = ["Murad", "Bilal", "Kareem"]
const myChildrens = myGirls.concat(myBoys, moreBoy);
console.log(myChildrens);

// The concat() method can also take strings as arguments:
const birds7 = ["Pigeon","Parrot","Sparrow","Dov"] 
const myBirds = birds7.concat("Eagle");
console.log(myBirds);

// Combining of array using spread operator
const myGirls1 = ["Rayhan", "Malik", "Noreen", "Mischael"]
const myBoys1 = ["Hekmat", "Amir", "Zafar", "Kamal"]

let myChildrens1 = [...myGirls1, ...myBoys1]
console.log(myChildrens1);

// +++++++++ Flattening an Array ++++++++++++
// Flattening an array is the process of reducing the dimensionality of an array.
//Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

// 10. flat()
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [ 1, 2, 3, 4,[5, 4, 2], 9, 2,[3, 2, 4,[,2,1.3]]]
const newArr = myArray.flat();
console.log(newArr);

// 11.splice()
// can be use to add new element to array
const birds8 = ["Pigeon","Parrot","Sparrow","Dov"] 
birds8.splice(2, 0, "Eagle", "peacock")               //Add these two element at positin 2 without removing any element from the array, without removing existing element
console.log(birds8);

// it can also be use to remove element from array without leaving holes.
const birds9 = ["Pigeon","Parrot","Sparrow","Dov", "Eagle", "Peacock", "Ostrich"] 
let spliceArray = birds9.splice(1, 3)     // it mean from position 1 remove 3 elements          
console.log(birds9);
console.log(spliceArray);   //The splice() method manipulated the original array, it remove the selected element from original array and make new array.


// 12. slice()
// The slice() method slices out a piece of an array into a new array,
// it does not manipulate original array, mean do not remove any element from source array.
const birds10 = ["Pigeon","Parrot","Sparrow","Dov", "Eagle", "Peacock", "Ostrich"] 
let sliceArray = birds10.slice(1, 4)     // it mean from position 1 remove 4 elements, not including end argument         
console.log(birds10);
console.log(sliceArray);   