// ++++++++++++++++++++++++++++++++++++++++ Javascript error names +++++++++++++++++++++++++++++++++++++++++++++++
// In javascript we will come across six different types of errors.
// EvalError	              An error has occurred in the eval() function
// RangeError	              A number "out of range" has occurred
// ReferenceError	          An illegal reference has occurred
// SyntaxError	              A syntax error has occurred
// TypeError	              A type error has occurred
// URIError	                  An error in encodeURI() has occurred

// ++++++++++++++++++++ EvalError +++++++++++++++++++ 
// Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.

// ++++++++++++++++++++ RangeError +++++++++++++++++++ 
// A RangeError is thrown if you use a number that is outside the range of legal values.


// ++++++++++++++++++++ ReferenceError +++++++++++++++++++ 
// A ReferenceError is thrown if you use (reference) a variable that has not been declared:
let x = 5
try {
    z = y + x           // y can not be use because it is not being declared any where.
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// ++++++++++++++++++++ SyntaxError +++++++++++++++++++ 
// A SyntaxError is a type of error that is thrown when there is a typo in the code, creating invalid code - code which cannot be interpreted by the compiler.
try {
    eval("alert('khan)")
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
// NOTE. 
// The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.
// Because it allows arbitrary code to be run, it also represents a security problem. 

// ++++++++++++++++++++ TypeError +++++++++++++++++++ 
// A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function, Mean 1 is incompetable to convert to lower or upper case.
let num = 1
try {
    num.toUpperCase();            // // You cannot convert a number to upper case
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// ++++++++++++++++++++ URIError +++++++++++++++++++ 
// A URIError is thrown if you use illegal characters in a URI function:
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

