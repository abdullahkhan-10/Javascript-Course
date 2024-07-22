// ++++++++++++++++++++++++++++++++++++++++++++++++ Object Methods ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Objects can also have methods.
// Methods are actions that can be performed on objects.
// A method is a function stored as a property in object.

// +++++++++++ Creating Object +++++++++++++ 
// 1. Declaring method inside object.
const person3 = {
    firstName:"Abdullah",
    lastName:"khan",
    age:21,
    eyeColor:"brown",
    fullName: function(){
        console.log(`Here is the full name ${this.firstName} ${this.lastName}.`);
    }
}
console.log(person3);
console.log(person3.fullName());

// 2. Declaring a method outside object
const person4 = {
    firstName:"Abdullah",
    lastName:"khan",
    age:21,
    eyeColor:"brown",
}

person4.fullName = function(){
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
}
console.log(person4);
console.log(person4.fullName());

// 3. update car year
const car = {
    name : "Honda",
    Model : "Civic",
    year : 2020,
    updateYear: function(newYear){
        this.year = newYear
        console.log(`The new year is updated to: ${this.year}`);
    }
}
console.log(car);
car.updateYear(2023);
console.log(car);


// ++++++++++++++++++++++++++++++++++++++++++++++++++ Objects Concatenation ++++++++++++++++++++++++++++++++++++++++++++++++++++++
const obj1 = {
    firstName : "Abdullah",
    lastName : "khan",
    age : 21

}
const obj2 = {
    city : "Peshawar",
    nationality : "Pakistani"
}

const obj3 = {
    hobby : "Coding",
    education : "Business Degree"
}

// 1.
const obj4 = {obj1, obj2}
console.log(obj4);

// 2.
const obj5 = Object.assign({},obj1, obj2, obj3)
console.log(obj5);

// 3. using spread operator, which new but most effective and common way to combine two or more object
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);