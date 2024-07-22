// ++++++++++++++++++++++++++++++++++++++++++++++ Function Rest Parameter ++++++++++++++++++++++++++++++++++++++++++++++++++++
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// ++++++++++++++++++++++ Example ++++++++++++++++++++
function Add(name, ...marks){               // rest parameter (...) will add all the numeric value in marks array

    // we will add all the element of array in sum variable
    let sum = 0

    // we will run for of loop on that array, to add all its elements.
    for (let x of marks) {
        sum += x
    }
    console.log(sum);
    console.log(`I am ${name} and I have got ${sum} marks in last semester.`);
}

Add("Abdullah khan",53,80,80,86,61)        // we can pass as much numeric values as we want.

// Note. 
// As in the above example, if we have string argument at the start , then we will not be able to add all arguments.
// To solve this problem we use rest parameter, first we need to declare a separate parameter for the string like (name),
// And then declare another parameter for the rest of numeric value started with (three dots) like(...marks)
// Now we will have string argument in (name) argument/variable, and all the rest numeric value in marks array, and we can do whatever we want with the marks array.