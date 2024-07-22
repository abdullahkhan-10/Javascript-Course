// +++++++++++++++++++++++++++++++++++++++++++ Javascript Strict Mode ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// "use strict"; Defines that JavaScript code should be executed in "strict mode".

// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript, it came ES version 5
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

// ++++++++++++++++++ Declaring Strict Mode +++++++++++++++
// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):

// ++++++++++++++++ example 1 ++++++++++++++++++++++
// Both of the below function will throw an error.
"use strict";
name = "Abdullah"              // it will gave an arror because we have not define the variable.
console.log(name);

function test(){              // It will also return an error.
    num1 = 20
    num2 = 10
    num3 = num1 + num2
    console.log(num3);
}
test()

// ++++++++++++++++ example 2 ++++++++++++++++++++++
// Both will not throw an error because we have properly define all the variables.
"use strict";
let name = "Abdullah"              // it will gave an arror because we have not define the variable.
console.log(name);

function test(){              // It will also return an error.
    let num1 = 20
    let num2 = 10
    let num3 = num1 + num2
    console.log(num3);
}
test();