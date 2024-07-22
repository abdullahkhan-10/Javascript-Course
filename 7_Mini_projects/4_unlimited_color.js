// <!------------------------------------------------ JAVASCRIPT  ----------------------------------------------------------->

function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector("#start").addEventListener("click", startChanging);
document.querySelector("#stop").addEventListener("click", stopChanging);

let toStop; // declare the variable in global scope , so to access in block scope later
function startChanging() {
  toStop = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
}

function stopChanging() {
  clearInterval(toStop); // here we can acccess that global variable
}
