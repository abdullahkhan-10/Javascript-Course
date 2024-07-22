fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return (res.text());
})
.then((data)=>{
    console.log(data[3]);
})
.catch( (err) =>{
  console.log("Error: ", err);
})

//short form
// fetch("content/readme.txt")
// .then(res => res.text())
// .then(data => console.log(data))