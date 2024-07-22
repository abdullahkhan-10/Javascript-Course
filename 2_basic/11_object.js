// +++++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Object +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// You define (and create) a JavaScript object with an object literal:
// In JavaScript, objects are king. If you understand objects, you understand JavaScript.
// All JavaScript values, except primitives, are objects.

// 1.  Creating object with new keyword
const car = new Object()
car.name = "Honda";
car.color = "White";
car.model = 2021;

// 2. Creating object with singleton
Object.create()

// 3. Creating object with object literal
const person = {
    firstName : "Abdullah",
    lastName : "Khan",
    age : 21,
    eyeColor : "Brown"
}
console.log(person);

// 4. we can also create empty object first and then add properties to it. 
const person1 = {};
person1.firstName = "abdullah";
person1.lastName = "khan";
person1.age = 21;
person1.eyeColor ="brown"

console.log(person1);

// ++++++++++++++++ Objects are Mutable ++++++++++++++++++++++++
// The object x is not a copy of person. It is person. Both x and person are the same object.
// Any changes to x will also change person, because x and person are the same object.
const person2 = {
    firstName:"Abdullah",
    lastName:"khan",
    age:21,
    eyeColor:"brown"
}
console.log("Object before equal to x ", person2);
const x = person2;
x.age = 10;        //  Will change both x.age and person.age

console.log(person2);
console.log(x);

// ++++++++++++++++ Declare Objects with const ++++++++++++++++++++++++
// Declaring objects with const will prevent any accidental change of type:

let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";                                // Changes object to string
console.log(car);

const car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Not possible, it will throw error, assignment to constant.
console.log(car);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ Object Properties ++++++++++++++++++++++++++++++++++++++++++++++++++++++=
//Properties are the values associated with a JavaScript object.
// A JavaScript object is a collection of unordered properties.
// Properties can usually be changed, added, and deleted, but some are read only.

// ++++++++++++++++++++++++++ Accessing object prperties +++++++++++++++++++++++++++++
// The syntax for accessing the property of an object is:

const companySym = Symbol("H")

const car = {
    name : "Honda",
    model : "Civic",
    year : 2021,
    [companySym] : "H"                 // for expression we will put the property in square bracket
}
console.log(car);

// 1
let carName = car.name             // Using dot notation, which is most common
console.log(carName);
// 2
let carModel = car["model"]        // object consider all the properties as string
console.log(carModel);
// 3
console.log(car[companySym]);      // Here also in square bracket


// ++++++++++++++++++++++++++ for...in Loop +++++++++++++++++++++++++++++
// The JavaScript for...in statement loops through the properties of an object.



// ++++++++++++++++++++++ Adding New Properties ++++++++++++++++++++
const person3 = {
    firstName: "Abdullah",
    lastName: "Khan",
    age: 21,
    eyeColor: "Brown",
}

person.nationality = "Pakistani"
console.log(person);

// ++++++++++++++++++++++ Deleting Properties ++++++++++++++++++++
//The delete keyword deletes both the value of the property and the property itself.
// After deletion, the property cannot be used before it is added back again.
// The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
const person4 = {
    firstName: "Abdullah",
    lastName: "Khan",
    age: 21,
    eyeColor: "Brown",
}

delete person4.age;
console.log(person4);


// ++++++++++++++++++++++ Nested Objects ++++++++++++++++++++
const person5 = {
    name : "Abdullah khan",
    age : 21,
    nationality : "Pakistani",
    carCollection : {
        car1: "Ferrari",
        car2: "Lamborghini",
        car3: "Mercedeze",
        car4: "Tesla"
    }
}
console.log(person5.carCollection.car1);
console.log(person5.carCollection["car2"]);
console.log(person5["carCollection"]["car3"]);
console.log(person5.carCollection["car4"]);

// ++++++++++++++++++++++ Nested Arrays and Objects ++++++++++++++++++++
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  let res = myObj.cars                 // return third property of object which is array
  let res2 = myObj.cars[2]            // return 2 index object of array
  let res3 = myObj.cars[2].models     // return models property of object
  console.log(res);
  console.log(res2);
  console.log(res3);