// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript OOP ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object Oriented Programming, it is a coding methodology/ Style / Pattern
// 1. It make the code more Modular and Reusable.
// 2. Make the code well organized.
// 3. Easier to debug
// 4.Best for medium and large website projects
// We will discuss class and object here.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Classes +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
// JavaScript Classes are templates for JavaScript Objects.

// ++++++++++++++++++++++++ Example 1 ++++++++++++++++++++++++++++++++
// class which only have method
class greeting{
    message(){
        console.log("Assalam O alaikum Everyone");
    }

    sorry(){
        console.log("Sorry Everyone");
    }
}

let greetObj = new greeting()
greetObj.message()
greetObj.sorry();

// ++++++++++++++++++++++++ Example 2 ++++++++++++++++++++++++++++++++
// Class with constructor() and prototype() methods.
// when we have class, we can use that class to create an objects.
class User{
    constructor(name,email,passw){                // The constructor method is called automatically when a new object is created.
        this.username = name
        this.email = email
        this.password = passw
    }

    encryptPassword(){          // Prototype method, which we called with object, and here we play with properties of class, mention in constructor().
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
console.log(anotherUser);
console.log(anotherUser.changeUserName());

// ++++++++++++++++++++++++ Example 3 (behind the scene) ++++++++++++++++++++++++++++++++
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