//Fetch General syntax to post/send data to server,

// fetch(file / URL, {
//   //here we will mention method like post,put,delete and get
//   method: "post",
//   //we will pass that data in body that we want to save on server, it may be in different formate like Form Data/JSON Data/ Text.
//   body: "data",

//   //here we will mention the formate/type of data that we want to send through body to server
//   header: {
//     "Content-Type": "application/json",
//     //if we are sending form data we will write like this.
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
// });

//Although its a dummy file taken from websit (json placeholder), But we can send data to our file on server with exact same method.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  //we can also store this object in variable, and then call here, like json.stringify(a), while object is store in a.
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result);
  });
//We can also write like this
// .then((response) => response.json())
//   .then((json) => console.log(json));

//Update/put data to our file on server

let x = {
  title: "foo",
  body: "bar",
  userId: 1,
};
//path of the file on server
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify(x),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });

//delete data from server.

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

//In actual life we don't take users data in object form we take user data in html form. and then send to server using post method.

//We will put whole code in click event inside function, and once we click on submit button the function will call and code will execute.

document.getElementById("saveForm").addEventListener("click", function (x) {
  //because of this the whole page will not refresh ,only that part will change that we want to update
  x.preventDefault();

  let a = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
    userId: document.getElementById("userId").value,
  };

  //here we will use the link of that file , where we want to sent this data.
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(a),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
});

//if we have form data, then we don't need to use json formate, we can send directly through form formate

document.getElementById("saveForm").addEventListener("click", function (x) {
  x.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: new FormData(document.getElementById("myForm")),
    headers: {
      "Content-Type": "application/x-wwww-form-urlencoded",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
});
