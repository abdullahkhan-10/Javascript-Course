// +++++++++++++++++++++++++++++++++++++++++++ ES6 Modules +++++++++++++++++++++++++++++++++++++++++++
// JavaScript modules allow you to break up your code into separate files.
// This makes it easier to maintain the code-base.
// ES Modules rely on the import and export statements.
// Modules also rely on type="module" in the <script> tag.

import {message as mes, Greeting, test} from "./library.js"
import Addition from "./library.js"

console.log(mes);

console.log(Greeting("Abdullah khan"));

let obj = new test()

// default export function is this.
Addition()


// ++++++++++++++++++++++ another method +++++++++++++++++++++++

// the * mean that import all the variable, functions and classes in variable (khan), and then we can access all those imported material like with (khan.Greeting()).

// import * as khan from "./library.js"

// console.log(khan.message);

// console.log(khan.Greeting("Abdullah khan"));

// let obj = new khan.test()