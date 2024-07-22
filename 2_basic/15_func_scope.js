// ++++++++++++++++++++++++++++++++++++++++ Block and global scope ++++++++++++++++++++++++++++++++++++++++
// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.


// we analyze that variable declared in block with let and const keyword can only be accessed in that block because it has a block scope, We can not access outside the block
let x = 5
console.log(x);
{
    let x = 2;
    console.log(x);
}
console.log(x)


// Variables declared with var inside a { } block can be accessed from outside the block:
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


// ++++++++++++ example 2 ++++++++++++==
var c = 300
// let a = 300
if (true) {
    let a = 10                      // we can not aceess the variabale a and b outside this block, because both have block scope
    const b = 20
    var c = 100                     // we can access the variable c outside this block,because it has global scope.
    console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
console.log(c);


// ++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Closures +++++++++++++++++++++++++++++++++++++++++++++++++
// A closure is a function having access to the parent scope, even after the parent function has closed.

function father(){
    const username = "Abdullah"

    function son(){
        const website = "Google"           // mean the child can access the variable declare in parent, this process is called closure
        console.log(username);
    }

    // console.log(website);

    son()
};
father();                                    // But the parent can not access the variable declare in child.