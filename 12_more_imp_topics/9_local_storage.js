// +++++++++++++++++++++++++++++++++++++++++++++ Javscript localStorage +++++++++++++++++++++++++++++++++++++++++++++++
// localStorage is one the method of window object and itself it is object.
// It is used to store data on document/ specific server.

// ++++++++++++++++++++ General syntax +++++++++++++++++++++++++
// set and store data in key value pair on specific server
// localStorage.setItem("key", "value")         // key set (name) and value set (Abdullah khan).

// we can get the display the data by pass key to this method.
// localStorage.getItem("key")

// ++++++++++++++++++++++++++++++++ Some Real examples +++++++++++++++++++++++++++++++++++++++++++++
const displayName = document.querySelector(".name-tag")
const takeName = document.querySelector(".my-name")

const displayAge = document.querySelector(".age-tag")
const ageInput = document.querySelector(".my-age")


// ++++++++++++++++++++++Example 1 ++++++++++++++++++++++++++
// Taking Name

// ++++++++++++ Method 1 ++++++++++++++
// It is an old way
// displayName.innerHTML = localStorage.name             // The name will remain on document after refreshing the browser.

// takeName.addEventListener("input", (e) =>{
//     // console.log(e.target.value);

//     //This code line mean that make a variable (myName) in local storage , and (e.target.value), mean that what ever we get in input, set it in (myName) variable on local storage.
//     localStorage.myName = e.target.value     
    
//     // This code line mean that what ever value we get from input in (myName) variable, which is set in local storage, also display that value on document.
//     displayName.innerHTML = localStorage.myName  

// })

// ++++++++++++ Method 2 +++++++++++++++
// It is a new recommended way.
displayName.innerHTML = localStorage.getItem("myName")       // The name will remain on document after refreshing the browser.

takeName.addEventListener("input", (e) =>{

    //This code line mean that set the variable (myName) on local storage, and put the value that we get from input (e.target.value) in that variable.
    localStorage.setItem("myName", e.target.value )    
        
    // This code line mean that what ever value we get from input in (myName) variable, which is set in local storage, also display that value in the element whos class is get in (displayName) variable .
    displayName.innerHTML = localStorage.getItem("myName")  
})

// ++++++++++++++++++++++ Example 2 ++++++++++++++++++++++++++
// Taking age
displayAge.innerHTML = localStorage.getItem("myAge")       // The name will remain on document after refreshing the browser.

ageInput.addEventListener("input", (e) =>{
    localStorage.setItem("myAge", e.target.value)
    displayAge.innerHTML = localStorage.getItem("myAge")
})


// NOTE. localStorage is object, so it store values in key/value pair.


// ++++++++++++++++++++++ Example 3 ++++++++++++++++++++++++++
// saving object on server/ document

const objectNameInput = document.querySelector(".obj-name")
const objectAgeInput = document.querySelector(".obj-age")

const objDisplayName = document.querySelector(".obj-name-tag")
const objDisplayAge = document.querySelector(".obj-age-tag")

const userData = {
    name: "",
    age: "",
}

objectNameInput.addEventListener("input", (e) =>{
    userData.name = e.target.value
    localStorage.setItem("userData", JSON.stringify(userData))
    objDisplayName.innerHTML = e.target.value
})



objectAgeInput.addEventListener("input", (e) =>{
    userData.age = e.target.value
    localStorage.setItem("userData", JSON.stringify(userData))
    objDisplayAge.innerHTML =  e.target.value
})

objDisplayName.innerHTML = userData.name
objDisplayAge.innerHTML = userData.age

