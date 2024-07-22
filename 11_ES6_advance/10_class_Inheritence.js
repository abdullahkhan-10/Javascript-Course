// +++++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Class Inheritance +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

// ++++++++++++++++++++++ Example 1 ++++++++++++++++++++++++ 
// It is callde (Base class)
class Employee{
    constructor(name){
        this.empName = name                                    // property of base class
        console.log(`Constructor : Employee`);
    }

    info(){                                                     // method of base class
        console.log(`The person name is ${this.empName}`);
    }
}

//Inheritence also called (Derived class)
class Manager extends Employee{
    constructor(manName){
        super(manName)                                        // The super method refer to (base class)
        console.log(`Constructor : Manager`);                // without calling a super method, in derived class we will get an error
    }
}

// Employee object
const emp = new Employee("Abdullah khan")           // A constructor method is called when we create an object.
emp.info()

// Manager object
const mana = new Manager("Afridi khan")
mana.info()
// This is how we can access the property and method of base class in derived class.


// ++++++++++++++++++++++ Example 2 ++++++++++++++++++++++++ 
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
Teacher1.logIn()                     // we access method and property of base class(User) with the object of derived class (Teacher)
Teacher1.addCourse()                 // We can also access the own method of derived class with the object of derived class

// another object
const Teacher2 = new Teacher("Kamran khan", "kamran@gmail.com", 4567)
Teacher2.logIn()

console.log(Teacher1 instanceof User);

// Note. 
// By calling the super() method in the constructor method of child, we call the parent's constructor method and gets access to the parent's properties and methods.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// ++++++++++++++++++++++ Example 3 ++++++++++++++++++++++++ 
// Real world example, increase the salary of manager.

class Employee{
    constructor(name, age, salary){
        this.myName = name
        this.myAge = age
        this.mySalary = salary
    }

    info(){
        console.log(`Employee Name : ${this.myName}, Age : ${this.myAge}, Salary : ${this.mySalary}`);
    }
}

class Manager extends Employee{
    // let travelAllownce = 1000                // we can not declare this variable in class, we need to declare it in method

    // In derived class prototype method we do not need to take arguments for the properties of base class. but in constructor method we will use super method and also take argumnets for the properties of base class
    Mainfo(){
        let travelAllownce = 1000
        let phoneAllownce = 300
        let totalSalary = this.mySalary + travelAllownce + phoneAllownce

        console.log(`Manager Name : ${this.myName}, Age : ${this.myAge}, Salary : ${totalSalary}`);  // We only access the properties of base class.
    }
}

const obj1 = new Employee("Abdullah khan", 21, 25000)
obj1.info()

const obj2 = new Manager("Afridi khan", 25, 33000)
obj2.Mainfo()