// ++++++++++++++++++++++++++++++++++++++++++++ Javascript Callback +++++++++++++++++++++++++++++++++++++++++++++++



// In the real world, callbacks are most often used with asynchronous functions.
// A typical example is JavaScript setTimeout().


setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
};

// In the example above, myFunction is used as a callback.
// myFunction is passed to setTimeout() as an argument.

// NOTE. When you pass a function as an argument, remember not to use parenthesis.
// Right: setTimeout(myFunction, 3000);
// Wrong: setTimeout(myFunction(), 3000);


// ++++++++++++++++ Callback Alternatives ++++++++++++++++++++++++
// With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in paralell.
// But, asynchronus programmes are difficult to write and difficult to debug.
// Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.