// +++++++++++++++++++++++++++++++++++++++++ Fetch() CRUD Operations ++++++++++++++++++++++++++++++++++++++++++++++++
// The CRUD operation are used to Create, Retrieve, update and delete data on server.

// ++++++++++++++++++++ General Syntax +++++++++++++++++++
fetch(file / URL,{
    method: "Post",              // "Get", "Delete", "Put"
    body: data,                  // Object/Form data/ Json data
    header:{
        'Content-Type': 'application/json',
        // OR in case we work with form
        "Content-Type": "application/x-www-form-urlencoded"           // we will use one of them at a time.
    }
})


// ++++++++++++++++++++ Example 1 +++++++++++++++++++
// Create a post request to insert data on server.
// here we will use fake api from json placeholder website, and will inser data on server.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({               // we are inserting data in object form, thats why we are converting to json formate. json is standard formate 
    title: "The hidden gem",           // and all programming languages can read this formate
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
.then((response) => response.json())
.then((json) => console.log(json));

// NOTE. we have inserted data to server and the server gave an id: 101 to our data, because on the server their are already data with ids upto 100
// the data is inserted temporary on the server.

// ++++++++++++++++++++ Example 2 +++++++++++++++++++
// Create Put request to update data on server.
const myObj = {
    id: 50,
    title: 'The heart Locker',
    body: 'bar',
    userId: 1,
}

fetch('https://jsonplaceholder.typicode.com/posts/50', {
    method: 'PUT',
  body: JSON.stringify(myObj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Note.  resource will not be really updated on the server but it will be faked as if.


// ++++++++++++++++++++ Example 3 +++++++++++++++++++
// deleting data on server
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'DELETE',
});