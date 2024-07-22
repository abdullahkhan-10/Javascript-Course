// ++++++++++++++++++++++++++++++++++++++++ Window setTimeout() ++++++++++++++++++++++++++++++++++++++++++++
// The setTimeout() method calls a function after a number of milliseconds.
// 1 second = 1000 milliseconds.

// NOTE.
// The setTimeout() is executed only once.
// If you need repeated executions, use setInterval() instead.
// Use the clearTimeout() method to prevent the function from starting.

// General Syntax
// myTimeout = setTimeout(function(){}, milliseconds, param1, param2,);       // parameters are optional

// Then you can to stop the execution by calling clearTimeout():
// clearTimeout(myTimeout);

// Example 1
// display an alert box after three second
setTimeout((d) => {
    alert(`Assalam o Alaikum ${d}!`);
  },
  3000,
  "My Dear"
);

// Example 2
// stop changing of text
const newText = function (p) {
  document.querySelector("h1").innerHTML = `Best Coding Academy ${p}`;
};

const toStop = setTimeout(newText, 2000, "In Pakistan");            // we can also passed parameters in setTimeOut()

// clearTimeOut() is used to stop the setTimeOut() method
document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(toStop);
  console.log(
    "The setTimeOut method is being stop and no text will be change in DOM"
  );
});
