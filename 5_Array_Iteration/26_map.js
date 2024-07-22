// ++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Array map() ++++++++++++++++++++++++++++++++++++++++++++++++++

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// ++++++++++++= general Syntax +++++++++++++++++++ 
array.map(function(currentValue, index, arr){
    // code here 
})

// +++++++++++++++ example ++++++++++++++++++++
const myArray = [10,15,20,25,30,35,40]

const mapArray = myArray.map( (num) =>{
    return num + 3
});
console.log(mapArray);


// +++++++++++++++ two map() and filter() ++++++++++++++++

const anotherMapArray = myArray
                               .map( (num) => num * 5)
                               .map( (num) => num + 2)
                               .filter( (num) => num >= 100);
console.log(anotherMapArray);


// ++++++++++++++++++ get full name +++++++++++++++++++
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

const fullName = persons.map( (obj) =>{
    return (`${obj.firstname} ${obj.lastname}`)
    
});
console.log(fullName);