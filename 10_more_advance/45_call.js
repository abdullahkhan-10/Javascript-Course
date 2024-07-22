// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript call() Method +++++++++++++++++++++++++++++++++++++++++++++++++
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.

// ++++++++++++++++++++ Example 1 +++++++++++++++++++++++
// Use call() with object
const person = {
    fullName: function(){
        return (`${this.firstName} ${this.lastName}`)
    }
};

const person1 = {
    firstName: "Abdullah",
    lastName: "khan"
};

let res = person.fullName.call(person1)
console.log(res);

// ++++++++++++++++++++ Example 2 +++++++++++++++++++++++
// use call() in Function
function setUserName(name){
    this.userName = name
}

function createUser(name, email, password){
    setUserName.call(this, name)                  // we can access the variables of above function here using this syntax

    this.email = email
    this.password = password
}

const myName = new createUser("Abdullah khan", "khan@gmail.com", 12345)
console.log(myName);

