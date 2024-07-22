// +++++++++++++++++++++++++++++++++++++++++++++++ High Order Array method ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. forEach()
// 2. filter()
// 3. map()
// 4. reduce()

// ++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Array forEach() +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The forEach() method calls a function (a callback function) for each array element.

// +++++++++++++++++++ General Syntax ++++++++++++++++
array.forEach(function(currentValue, index, arr){
    //code here
})

// +++++++++++++++++++ Example ++++++++++++++++
const codingLanguage = ["Javascript", "Python","Solidity", "Rust", "C++"]

codingLanguage.forEach( (myLanguage) => {
    console.log(`language is: ${myLanguage}`);
})

// +++++++++++++++ Reference of call back function ++++++++++++++++++++++++++++++ 
// A callback is a function passed as an argument to another function
// (A function that we don't uaually store and also don't mention its name, but want to run each time when gave its reference or declare in method)
// first we will declare a function and then will gave reference of that function in forEach method

function printLanguage(myLang){
    console.log(myLang);
}
codingLanguage.forEach(printLanguage)


// ++++++++++++++++ Three arguments ++++++++++++++++++++++
// The item value
// The item index
// The array itself
codingLanguage.forEach( (language, index, arr) => {         // with this we will get each array element, its index and the whole array
    console.log(language, index, arr);
})


// ++++++++++++++++++ forEach() on array of object +++++++++++++++++
const person = [
    {
        firstName: "Abdullah",
        lastName: "khan"
    },
    {
        firstName: "Muhammad",
        lastName: "Ali"
    },
    {
        firstName: "Babar",
        lastName: "Azam"
    }
];
person.forEach( (myObj) => {
    console.log(`${myObj.firstName} ${myObj.lastName}`);  
})

// Note. In forEach() the call back function is called for each element of array and store all array elements in myObj, since we have objects in array, so we can access the properties of each object with dot.

// +++++++++++++++++++++++++++++ Return Value +++++++++++++++++++++++++++++
// The forEach() return an undefine value
const coding = ["js", "ruby", "java", "python", "cpp"]

const res = coding.forEach( (myLanguage) => {            // we store it in a variable, and when we log the variable, it return undefine
    // console.log(item);
    return myLanguage
} )

console.log(res);