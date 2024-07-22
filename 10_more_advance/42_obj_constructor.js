// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Object Literal ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++ General Syntax +++++++++++++++++++++++
const myObj = {}

// ++++++++++++++++++++ Example ++++++++++++++++++++++++++
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
  
    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`SignedIn: ${this.signedIn}`);
        // console.log(this);                               // This keyword inside method return complete object
    }
};
  
console.log(user.username)
console.log(user.getUserDetails());
// console.log(this);                                      // this in global scope return empty object



// ++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Object Constructors function +++++++++++++++++++++++++++++++++++++++++++++++

// Constructor function for Person objects
// Note. It is considered good practice to keep the first letter of constructor functions with an upper-case.
function Person(first, last, age, eye){
    this.firstName = first                    // this.frstName will store the argument of parameter first.
    this.lastName = last                      // this.lastName will store the argument of parameter last, and same for the rest
    this.age = age
    this.eyeColor = eye
  
    this.greeting = function(){
      console.log(`Welcome: ${this.firstName} ${this.lastName}`);
    }
  
    return this                   // In a constructor function this does not have a value. It is a substitute for the new object. 
};                              // The value of this will become the new object when a new object is created.
  
// Create a Person object, using object constructor
const personOne = new Person("Abdullah", "khan", 21, "Brown",)     // if we don't use new keyword, personTwo will override Properties of personOne.
const personTwo = new Person("Imran", "khan", 72, "dark Brown")
  
console.log(personOne.greeting());    // to get the method greeting().
console.log(personTwo);


// NOTE.
// We can not add new properties to an existing object constructor
// To add a new property to a constructor, you must add it to the constructor function: