// ++++++++++++++++++++++++++++++++++++++ Let & Const +++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++ var ++++++++++++++++++ 
var name = "Khan"

// can be redeclare
var name = "Afridi"

// can also reasingn
name = "pathan"

console.log(name);

// ++++++++++++++++++ let ++++++++++++++++++ 
let myName = "abdullah"

// let myName = "khan"         // can not be Redeclared, gave error

myName = "afridi"              // can reasign

// ++++++++++++++++++ Const ++++++++++++++++++ 
const personName = "pathan"

// const personName = "abdullah"       // can not redeclared, gave error

// personName = "khan"                 // cannot reassign, gave error


// ++++++++++++++++++++++++++++++++++++++++ Block and global scope ++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++ example 1 ++++++++++++++++++++
// we analyze that variable declared inside block with let keyword can only be accessed in that block because it has a block scope, We can not access outside the block, also same is the case with const keyword
let x = 5
console.log(x);
{
    let x = 2;
    console.log(x);
}
console.log(x)

// ++++++++++++++ example 2 ++++++++++++++++++++
// Variables declared with var inside a { } block can be accessed from outside the block, Because it has global scope:
var y = 10;
console.log(y);
// Here y is 10

{
var y = 2;
console.log(y);
// Here y is 2
}

console.log(y);
// Here y is 2