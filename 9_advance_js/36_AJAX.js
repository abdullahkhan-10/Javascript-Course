// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ AJAX ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// AJAX is not a programming language.
// AJAX is a technique for accessing web servers from a web page.
// AJAX stands for Asynchronous JavaScript And XML.

// ++++++++++++++++++++++++ How AJAX Works ++++++++++++++++++++++
// 1. An event occurs in a web page (the page is loaded, a button is clicked)
// 2. An XMLHttpRequest object is created by JavaScript
// 3. The XMLHttpRequest object sends a request to a web server
// 4. The server processes the request
// 5. The server sends a response back to the web page
// 6. The response is read by JavaScript
// 7. Proper action (like page update) is performed by JavaScript

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ XML HTTP Request +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
// The XMLHttpRequest object is used to request data from a server.

// the request is completed in four steps:
// +++++++++++++++++++++++ 1. Create an XMLHttpRequest Object +++++++++++++++++++++++++++
// Syntax for creating an XMLHttpRequest object:
let myHttp = new XMLHttpRequest();

// +++++++++++++++++++++ 2. Define a Callback Function +++++++++++++++++++++++++++++++
// A callback function is a function passed as a parameter to another function.
// In this case, the callback function should contain the code to execute when the response is ready.
myHttp.onload = function() {
    // What to do when the response is ready
}


// ++++++++++++++++++++++ 3. Open the XMLHttpRequest object ++++++++++++++++++++++++++++++
// and
// ++++++++++++++++++++++ 4. Send a Request To a Server ++++++++++++++++++++++++++++++
// To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

// General Syntax
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();

// Method	                       Description
// open(method, url, async)	       Specifies the type of request

//                                 method: the type of request: GET or POST
//                                 url: the server (file) location or API
//                                 async: true (asynchronous) or false (synchronous)
// send()	Sends the request to the server (used for GET)

// +++++++++++++++++++ Get The response ++++++++++++++++++++++
// responseText	get the response data as a string


// ++++++++++++++++++++++++++++++++++++++++++++++++++++ EXAMPLES ++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. Get data from internal file
myFile = 'student_data.json'

const myXml = new XMLHttpRequest()
// when the browser get load the function will executed.
myXml.onload = function (){
    const myData = JSON.parse(this.responseText)
    console.log(myData);
    console.log(`I am ${myData[0].name} from ${myData[0].city} and below is`);
   
    // we can use forEach() because it is an array.
    console.log('List of my favourite people!');
    myData.forEach( (obj) =>{
        console.log(`Name: ${obj.name} / city: ${obj.city}`);
    })
};
myXml.open('GET', myFile);
myXml.send();
// NOTE. Ajax do not work with node environment, we need to do it with html and browser console.


// 2.  Get the data from an API  
// const myApi = 'https://api.github.com/users/abdullahkhan-10'

// const myReq = new XMLHttpRequest()
// myReq.open("GET", myApi, true)

// onreadystatechange method automatically execute when the readystate is change
// myReq.onreadystatechange = function(){
//     console.log(myReq.readyState);
//     if(myReq.readyState === 4){
//         const data = JSON.parse(this.responseText)       // will convert the text response to json format and store in data variable.
//         console.log(typeof data);
//         console.log(data);
//         console.log(`Name: ${data.name}`);
//         console.log(`Id: ${data.id}`);
//         console.log(`Repositories: ${data.public_repos}`);
//         console.log(`Followers: ${data.followers}`);
//         console.log(`Location: ${data.location}`);
//     }
// };
// myReq.send();

