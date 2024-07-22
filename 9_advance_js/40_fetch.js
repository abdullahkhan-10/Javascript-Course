// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Fetch API ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.

// ++++++++++++++++++ General Syntax +++++++++++++++++++
//Fetch General syntax, To Get/retrieve data from server and to read it

fetch(filr / url)                   // return promise
  .then(function (response) {       // the first then() also return promise.
    return response.Data;           //Data may text() or json()
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// +++++++++++++++++++++++++++++++++++++ Example 1 fetch() inside file ++++++++++++++++++++++++++++
// fetch("readme.txt")
// .then((res)=>{
//     return (res.text());
// })
// .then((data)=>{
//     // console.log(data);
//     document.write(data);
// });

    
// +++++++++++++++++++++++++++++++++++++ Example 2 fetch() outside file ++++++++++++++++++++++++++++
// fetch("https://jsonplaceholder.typicode.com/users")
// .then( (response) =>{                                  // we get the data in string format
//     return response.json()                             // we convert that data/array to json formate
// })
// .then( (data) =>{                      // then the array is pass here as argument, and now we can get their object and properties of object 
//     // document.write(data)
//     console.log(data);
//     console.log(data[2].name);
//     console.log(data[6].name);
//     console.log(data[6].phone);
// })
// .catch( (error) =>{
//     document.write("Can't Fetch the data", error)
//     console.log("Can't Fetch the data", error)
// })


// +++++++++++++++++++++++++++++++++++++ Example 3 print data on browser from external file  ++++++++++++++++++++++++++++
// fetch("https://jsonplaceholder.typicode.com/users")
// .then( (res) =>{
//     return res.json()
// })
// .then( (data) =>{
//     console.log(data);
//     data.forEach( (obj) =>{
//         let showData = `${obj.name} - ${obj.email} - ${obj.address.city} - ${obj.address.geo.lat} <br>`
//         document.write(showData)
//     })
// })
// .catch( (err) =>{
//     document.write("Can't Fetch data", err)
// })


// +++++++++++++++++++++++++++++++++++++ Example 4 fetch data from internal file to browser  ++++++++++++++++++++++++++++
// fetch("student_data.json")
// .then( (res) =>{
//     return res.json()
// })
// .then( (data) =>{
//     console.log(data);
//     // forEach() and for in loop work the same 
//     for (let obj in data){
//         // console.log(obj,data[obj]);
//         let showData = `Name: ${data[obj].name},   Age: ${data[obj].age},   City: ${data[obj].city} <br>`
//         document.write(showData)
//     }
// })
// .catch( (err)=>{
//     document.write("Can't fetch data", err)
// })
