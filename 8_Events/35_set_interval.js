// ++++++++++++++++++++++++++++++++++++++++++++++++++++ Window setInterval() +++++++++++++++++++++++++++++++++++++++++++++
// The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// 1 second = 1000 milliseconds.

// General Syntax
// setInterval(function(){}, milliseconds, param1, param2,)

// Example 1
// Display "Welcome to Khan Academy" every second
const stopCode = setInterval(() => {
  document.querySelector("#para").innerHTML += "Welcome to Khan Academy";
}, 1000);

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(stopCode);
});

//Example 2
const currentDate = function (cd) {
  console.log(cd, Date.now());
};
const stopDate = setInterval(currentDate, 1000, "Current Date:");

// to stop the date on console
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(stopDate);
});
