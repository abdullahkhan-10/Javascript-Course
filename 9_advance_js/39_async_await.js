// +++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Async/Await ++++++++++++++++++++++++++++++++++++++++++++
// async makes a function return a Promise
// await makes a function wait for a Promise
// Es 2017

// ++++++++++++++++++++ Async Syntax +++++++++++++++++++
// The keyword async before a function makes the function return a promise:
async function myFunction(){
    return "Abdullah khan"
}
myFunction()
.then( (val) =>{
    console.log(val);
})

// ++++++++++++++++++++ Await Syntax +++++++++++++++++++
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
async function test_1(){
    console.log("1 : Message");
    await console.log("2 : Message");        // function will wait here and will not allow 3 to execute
    console.log("3 : Message");              // it will print at the end
};

console.log("4 : Message")                //this will print first
test_1();
console.log("5 : Message");



// +++++++++++++++++++++++++++++++++++ EXAMPLE 1 ++++++++++++++++++++++++++++++++ 
async function test_3() {
  const response = await fetch('https://api.github.com/users/abdullahkhan-10');   // Valid url so promise resolve, data will be access in .then()
//   const response = await fetch('https://api.github.com/users/abdullahkhan-');    // Invalid url so promise reject, data will be access in .catch()
  const students = response.json();

  return students;

  //we can also write above code in one line
  // return(await fetch("json/student_data.json")).json()
}

test_3()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(`En Error: ${error}`);
  });

// +++++++++++++++++++++++++++++++++++ EXAMPLE 2 ++++++++++++++++++++++++++++++++ 
async function test_3() {
  try {
    const response = await fetch('https://api.github.com/users/abdullahkhan-10');
    const students = response.json();
  
    return students
  }catch(error) {
    console.log(error)
} 
};

test_3().then( (res) =>{
    console.log(res);
  })