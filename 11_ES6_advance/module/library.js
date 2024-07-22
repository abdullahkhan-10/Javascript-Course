// We will declare variable , innitiate functions and classe here and then will export to main.js file to call them.

let message = "Hi, Everyone"

function Greeting(name){
    return `Assalam o Alaikum ${name}`
}

class test{
    constructor(){
        console.log("Construtor method is called automatically");
    }
}
// Name export, all at once.
export { message, Greeting, test}


// +++++++++++++ Default export +++++++++++++++ 
// we will gave name to this function in the main.js file where we are importing it.
export default function(){
    let num1 = 10
    let num2 = 5
    let num3 = num1 + num2
    console.log(`The Sum is : ${num3}`);
}