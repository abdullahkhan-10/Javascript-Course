// +++++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Classes +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
// JavaScript Classes are templates for JavaScript Objects.

// +++++++++++++++++++++++++++ General syntax ++++++++++++++++++++++++++++
// Use the keyword class to create a class.
// Always add a method named constructor():
class className{
    constructor(name, age){                  // It is used to initialize object properties
        // code here
        this.name = name                    // The class has two initial properties: "name" and "age".
        this.age = age 
    }

    // method_1() { ... }
    // method_2() { ... }
}
// Cretee an object for above class.
const objectName = new className("XYZ", 21)

// Note. 
// A JavaScript class is not an object.
// It is a template for JavaScript objects, which is used to create the object
// If we do not define a constructor method, JavaScript will add an empty constructor method.

// ++++++++++++++++++++++++ Example 1 ++++++++++++++++++++++++++++++++
// when we have class, we can use that class to create an objects.
class User{
    constructor(name,email,passw){                // The constructor method is called automatically when a new object is created.
        this.username = name
        this.email = email
        this.password = passw
    }

    encryptPassword(){        // Prototype method, which we called with object, and here we play with properties of class, mention in constructor().
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const User1 = new User("Abdullah khan", "khan@gmail.com", 1234)     // from the above User class we have created a User1 object
console.log(User1);
console.log(User1.encryptPassword());                             // now we can access the methods of the above class with the object we have created
console.log(User1.changeUserName());

// we can make another object for the (User) class, and this is the beauty of object oriented programming,
// where we do not need to write code repeatedly
const anotherUser = new User("Ammar khan", "ammar@gmail.com", 5432)

// ++++++++++++++++++++++++ Example 2 (behind the scene) ++++++++++++++++++++++++++++++++
// We can also do the same with function
function Person(name, email,passw){
    this.username = name
    this.email = email
    this.password = passw
}

Person.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Person.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const User2 = new Person("Muhammad Ali","ali@gmail.com", 4321)     // from the above user function we have created User2 object
console.log(User2);
console.log(User2.encryptPassword());
console.log(User2.changeUserName());


// +++++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Class Inheritance +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

class User{
    constructor(name){
        this.username = name
    }

    logIn(){
        console.log(`The user ${this.username} is Login!`);
    }
}
// inheritence
class Teacher extends User{                // The teacher class will have the access of all the properties and methods of User class.
    constructor(uname, email, pass){
        super(uname)                       // The super() method refers to the parent class.
        this.email = email
        this.password = pass
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Teacher1 = new Teacher("Hashim khan", "khan@gmail.com", 9876)
// console.log(Teacher1);
Teacher1.logIn()                     // we access method of parent class(User) in the object(Teacher1) of child class (Teacher)
Teacher1.addCourse()

// another object
const Teacher2 = new Teacher("Kamran khan", "kamran@gmail.com", 4567)
Teacher2.logIn()

console.log(Teacher1 instanceof User);

// Note. 
// By calling the super() method in the constructor method of child, we call the parent's constructor method and gets access to the parent's properties and methods.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Static Methods +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Static class methods are defined on the class itself.
// We cannot call a static method on an object, but can only call on the class.

// ++++++++++++++++++ Exampe +++++++++++++++++++++
class User{
    constructor(name){
        this.username = name
    }

    static greeting(){
        console.log(`Good Morning Mr. ${this.username}`);
    }
}

const person1 = new User("Adil")

// We can not call greeting() on person1 object
person1.greeting()

// but we can call it only on user class
User.greeting()


// NOTE. A static method is created with the "static" keyword, and you can only call the method on the class itself.
