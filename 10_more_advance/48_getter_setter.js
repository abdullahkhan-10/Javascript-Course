// +++++++++++++++++++++++++++++++++++++++++++++ getter setter (Class Based Syntax) +++++++++++++++++++++++++++++++++++++++++++++++++++
// Mostly we will have this syntax
// Classes also allows you to use getters and setters.
// It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
// To add getters and setters in the class, use the get and set keywords.

// +++++++++++++++++++ Example 1 +++++++++++++++++++++++++
class User{
    constructor(name,passw){
        this.username = name
        this.password = passw
    }

    get username(){
        return this._username.toLowerCase()   // The underscore character is used before peoperty to separate getter/setter from actual property.
    }
    set username(value){
        this._username = value
    }
}

const myName = new User("Abdullah Khan", "123abc")
console.log(myName.username);              // even if the getter is a method, you do not use parentheses when you want to get the property value.

// +++++++++++++++++++ Example 2 +++++++++++++++++++++++++
// use the setter to change the name
class User{
    constructor(name,passw){
        this.username = name
        this.password = passw
    }

    get username(){
        return this._username.toLowerCase()   
    }
    set username(value){
        this._username = value
    }
}

const myName1 = new User("Abdullah Khan", "123abc")
myName1.username = "Muhammad Ali"                    // now with setter we will have this name print on the console.
console.log(myName1.username);   


// +++++++++++++++++++++++++++++++++++++++++++++ getter setter (Function Based Syntax) +++++++++++++++++++++++++++++++++++++++++++++++++++
// Also we will also see it often
function User(name, passw){
    this._username = name                                  // underscore is used to avoid this. calling race
    this._password = passw

    Object.defineProperty(this, 'username', {              // it takes three parameter this which refer to object, the property and new object.
        get: function(){
            return this._username.toLowerCase()
        },

        set: function(value){
            this._username = value
        }
    })         

    Object.defineProperty(this, 'password', {             
        get: function(){
            return this._password.toUpperCase()
        },

        set: function(value){
            this._password = value
        }
    })         
}

const myDetails = new User("Abdullah Khan", "123abc")
console.log(myDetails.username);
console.log(myDetails.password);


// +++++++++++++++++++++++++++++++++++++++++++++ getter setter (Object Based Syntax) +++++++++++++++++++++++++++++++++++++++++++++++++++
// We will see it very less

const User = {
    _name: "Abdullah khan",
    _password: "123abc",

    get name(){
        return this._name.toLowerCase()
    },

    set name(value){
        this._name = value
    }
}
const myName2 = Object.create(User)

console.log(myName2.name);