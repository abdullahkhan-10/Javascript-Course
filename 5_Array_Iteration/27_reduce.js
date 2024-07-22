// ++++++++++++++++++++++++++++++++++++++++++++ JavaScript Array reduce() ++++++++++++++++++++++++++++++++++++++++++++++++

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not change the original array


// General Syntax
let initialValue = 0
array.reduce(function(accumulator, currentValue, currentIndex, arr){

}, initialValue);

// Note. // accumulator/total is an empty variable. And the variable with initial value that we have declare, first time its value is assign to that accumulator
// also the resultant value from the loop goes to accumulator



// +++++++++++++++++++++++++ example +++++++++++++++++++++++++++
const myArray = [1,2,3,4,5]
let initialVal = 0

const reduceArray = myArray.reduce( (accu, num) =>{
    console.log(`accu is: ${accu} and current num is: ${num}`);   // just for understanding purpose, who this work
    return accu + num;

},initialVal)
console.log(reduceArray);


// ++++++++++++++++++++++++ another example +++++++++++++++++++++++
const shoppingCart = [
    {
        itemName: "javascript course",
        price: 2949
    },
    {
        itemName: "python course",
        price: 1599
    },
    {
        itemName: "react native course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12949
    },
]

const totalPrice = shoppingCart.reduce( (total, obj) =>{
    return total + obj.price;
}, 0);

console.log(totalPrice);