// ++++++++++++++++++++++++++++++++++++++++++ Javascript Closure ++++++++++++++++++++++++++++++++++++++++++++++++++++
// A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

function outer(){
    let name = "Abdulllah"

    function displayName(){
        console.log(name);
    }
    return displayName
}

const myName = outer();   // when the outer function invoke, then the displayName function will store in variable along with lexical scope of outer().
myName();

// NOTE.
// 1. When we return the display function, we actually want to store the function in a variable,
// 2. And here not only the child function get store in a variable, But the outer function also get store with it, because it has some connection with the child function, also we can say that the entire lexical scope of parent is store in a variable along with child.
// 3. what dose a connection means, we have used the variable of parent function in child functin, if the lexical scope of parent function is not store, then we would not be able to get their variable in child function. 