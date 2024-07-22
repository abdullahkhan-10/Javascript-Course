// <!----------------------------------------------------------- Javascript --------------------------------------------------------------->

const myButtons = document.querySelectorAll(".button");
const myBody = document.querySelector("body");

myButtons.forEach((allBtn) => {
  // console.log(allBtn);

  allBtn.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === "orange") {
      myBody.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "white") {
      myBody.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      myBody.style.backgroundColor = "rgb(60, 128, 223)";
    }
    if (event.target.id === "green") {
      myBody.style.backgroundColor = "rgb(47, 197, 47)";
    }
  });
});
