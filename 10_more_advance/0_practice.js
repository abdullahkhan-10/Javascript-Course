function outer(){
    let name = "Abdulllah"

    function displayName(){
        console.log(name);
    }
    return displayName
}

const myName = outer();
myName();

// NOTE.
// 1. When we return the display function, we actually want to store the function in a variable,
//2.  And here not only the child function get store in a variable, But the outer function also get store with it, because it has some connection with the child function, also we can say that the entire lexical scope is store in a variable.
// 3. what dose a connection means, we have use the variable of parent function in child functin, if the lexical scope of parent function is not store, then we would not be able to get their variable in child function. 