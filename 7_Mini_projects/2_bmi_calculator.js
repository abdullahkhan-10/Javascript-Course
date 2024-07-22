const myForm = document.querySelector("form")

myForm.addEventListener("submit", (i) => {
    i.preventDefault();

    const myHeight = parseInt(document.querySelector("#height").value)
    const myWeight = parseInt(document.querySelector("#weight").value)
    const myResult = document.querySelector("#results");
    const anotherResult = document.querySelector("#results2")

    if (myHeight === "" || myHeight < 0 || isNaN(myHeight)) {
        myResult.innerHTML = `Enter a valid height ${myHeight}`
    } else if (myWeight == "" || myWeight < 0 || isNaN(myWeight)) {
        myResult.innerHTML = `Enter a valid weight ${myWeight}`
    } else {
        const bmi = (myWeight / ((myHeight * myHeight) / 10000)).toFixed(2);
        myResult.innerHTML = `<span>Your BMI is: ${bmi}</span>`

        if (bmi < 18.6) {
            anotherResult.innerHTML = "You are under weight"
        } else if (bmi > 18.6 && bmi < 24.9) {
            anotherResult.innerHTML = "Your weight is normal"
        } else {
            anotherResult.innerHTML = "You are over weight"
        }
    }
});