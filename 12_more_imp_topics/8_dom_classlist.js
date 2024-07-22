// +++++++++++++++++++++++++++++++++++++++++++++++++ Javascript DOM classList() Method +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// it is one of the DOM CSS styling methods:
// 1. style
// 2. className
// we will discuss these two later.

// 3. classList()
// The classList property returns the CSS classnames of an element.

// ++++++++++++++ Syntax +++++++++++++
// element.classlist
// or
// let a = document.getEllementById("id").classList
// console.log(a);

// element.classlist.add("classname")
// element.classlist.remove()
// element.classlist.toggle()

// ++++++++++++++ Return Value +++++++++++++
// Type         	Description
// Object       	A DOMTokenList.
//                  A list of the class names of an element.

// NOTE.
//The classList property is read-only, but you can use the methods listed below, to add, toggle or remove CSS classes from the list/ document.

// +++++++++++++++++++++++++++++++++ classList Properties and Methods ++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++ 1. add() ++++++++++++++++++++++++
// This method is used to add one or more classe to the div.
// We add two classe to the document.
const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", function(){
    const styleDiv = document.getElementById("myDiv")
    styleDiv.classList.add("style1", "style2")

    console.log(styleDiv);
})

// ++++++++++++++++++++ 1. remove() ++++++++++++++++++++++++
// Now I want to remove style1 class from the div.
const removeButton = document.getElementById("remove-btn")

removeButton.addEventListener("click", function(){
    removeStyle = document.getElementById("myDiv")
    removeStyle.classList.remove("style1")

    console.log(removeStyle);
})

// ++++++++++++++++++++ 1. toggle() ++++++++++++++++++++++++
// The toggle() method will automatically add and remove the class from div when we click on button.
const myToggleButton = document.getElementById("toggle-btn")

myToggleButton.addEventListener("click", function(){
    showStyle = document.getElementById("toggleDiv")
    showStyle.classList.toggle("toggle-style")

    console.log(showStyle);
})


