// ++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Function bind() ++++++++++++++++++++++++++++++++++++++++++++++++++
// With the bind() method, an object can borrow a method from another object.

const person = {
    firstName: "Abdullah",
    lastName: "Khan",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.fullName());

const member = {
    firstName: "Muhammad",
    lastName: "Ali"
}

let newFullName = person.fullName.bind(member);
console.log(newFullName);