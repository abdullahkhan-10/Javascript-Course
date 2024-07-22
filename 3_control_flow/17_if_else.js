// +++++++++++++++++++++++++++++++++++++++++++++++++ Conditional Statement +++++++++++++++++++++++++++++++++++++++++++++++++++

// Conditional statements are used to perform different actions based on different conditions.
// Very often when you write code, you want to perform different actions for different decisions, We use conditional statement to do this.

// 1. The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
if (condition){
    //Block of code to be executed if condition is true.
}

let age = 18
if (age == 18){
    let name = "Abdullah"
    console.log(`${name} is now an adult.`);
};

// 2. The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.
let temperture = 38 
if (temperture < 30){
    console.log("The weather is pleasent today.");
} else {
    console.log("It is very hot today.");
}

// 3. The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.
let temperture1 = 38 

if (temperture1 < 30){
    console.log("The weather is pleasent today.");
} else if (temperture1 == 38) {
    console.log("The Weather is normal today.");
} else{
    console.log("It is very hot today.");

}

// ++++++++++++++++++++++++ logical operators ++++++++++++++++++++
let userLoggedIn = true
let debitCard = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if (userLoggedIn && debitCard){                        // if both are true code will be executed.
    console.log("Allow the user the purchase.");
}

if (loggedInFromGoogle || loggedInFromEmail){         // if atleast one is true code will be executed.
    console.log("The user is logged in");
}