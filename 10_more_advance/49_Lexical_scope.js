// ++++++++++++++++++++++++++++++++++++++++++ Javascript Lexical Scoping ++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++ Example 1 +++++++++++++++++++
function init() {
  var name = "Mozilla";                  // name is a local variable created by init

    // displayName() is the inner function, that forms the closure
  function displayName() {
    console.log(name);                   // use variable declared in the parent function
  }
  displayName();
}
init();

// ++++++++++++++++ Example 2 +++++++++++++++++++
function outer(){
    let name = "Abdullah"
    // console.log(secret);

    function innerOne(){
        let secret = "Boom123"
        console.log("Inner One", name);
    }

    function innerTwo(){
        console.log("Inner Two", name);
        // console.log("Inner one secret", secret);
    }

    innerOne()
    innerTwo()
}
outer();

// Note.
// 1. We can access all the variable declare in parent funtion in their child functions.
// 2. We can Not access the variable which is declare in one child funtion in another child function.
// 3. We also can't access the variable of child function in parent function.