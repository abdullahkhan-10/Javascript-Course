// +++++++++++++++++++++++++++++++++++++++++++++++++++++++ JavaScript Promises +++++++++++++++++++++++++++++++++++++++++++++++
// A Promise is an Object that links Producing code and Consuming code

// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result

// ++++++++++++++++++++++ General Syntax ++++++++++++++++++++++++
let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful                   both are also built in method
  myReject(); // when error
});

// ++++++++++++++ call both in .then() +++++++++++++++++++++++
// "Consuming Code" (Must wait for a fulfilled Promise)
// .then() and .catch() are javascript built in method which take call back functins.
myPromise.then(
  function (val) {                      // when the promise resolve, we access the data here in (val) as an argument and then work with it.
    /* code if successful */
  },
  function (err) {                     // when the promise rejected, we access the data here in (err) as an argument and then work with it.
    /* code if some error */
  }
);
// ++++++++++++++++ OR we can write also like this +++++++++++++++++++

// myPromise.then(function(value){
//     console.log(value)
// })
// .catch(function(error){
//     console.log(error)
// });

// NOTE.
// Promise.then() takes two arguments, a callback for success and another for failure.
// Both are optional, so you can add a callback for success or failure only.

// +++++++++++++++++++++++++++++++++++++++++++++++++ Promise Object Properties ++++++++++++++++++++++++++++++++++++++++++++++++++++
// A JavaScript Promise object can be:

// 1. Pending
// While a Promise object is "pending" (working), the result is undefined

// 2. Fulfilled
// When a Promise object is "fulfilled", the result is a value.

// 3. Rejected
// When a Promise object is "rejected", the result is an error object.

// +++++++++++++++++++++++++++++++++++++++++++++++++ Promise Example ++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++ Example 1 +++++++++++++++++++
const promiseX = new Promise(function (resol, rej) {
  let x = 0;                  // the resolve method is fulfill, so will tell the first argument of then() to execute the code.
  // let x = 1;               // the reject method is fulfill, so will tell the second argument of then() to execute the code.

  if (x == 0) {
    resol("Yes, X is equal to 0");
  } else {
    rej("No, X is not equal to 0");
  }
});
promiseX.then(
  function (myValue) {
    console.log(myValue);
  },
  function (myError) {
    console.log(myError);
  }
);

// ++++++++++++++ Example 2: Waiting for a Timeout ++++++++++++++++++
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // database calls, Crytography and network calls.

  setTimeout(function () {
    console.log("Code is produced");
    resolve(); // if we do'nt use resolve(), then() will not perform any action, because then() is bound to resolve().
  }, 1000);
});
promiseOne.then(function () {
  console.log("Code is consumed");
});

// ++++++++++++++ Example 3: Waiting for a Timeout ++++++++++++++++++
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Code 2 is Produced");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Code 2 is Consumed");
});

// ++++++++++++++ Example 4: Passing Object to resolve() ++++++++++++++++++
const promiseThree = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Abdullah khan", age: 21 });
  }, 1000);
});
promiseThree.then((obj) => {
  console.log(obj);
});


// ++++++++++++++ Example 5: Then() Chaining ++++++++++++++++++
// we can add more then one then() as well if we need it.
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //   let myError = true;                  // Fail, because the if statement is not true , so in else reject() will execute
    let myError = false;                      // successful, because the if statement is true, so resolve will pass data to then().
    if (!myError) {
      resolve({ name: "Abdullah khan", age: 21 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);                                  // The program will run after 1 second
});

promiseFour
  .then(
    function (userObj) {
      console.log(userObj);
      return userObj.name;                   // if we want to get the properties of an object, we can use another then() as well, we do'nt to store it
    }                                        // an another variable.
  )
  .then(function (userName) {               // we can access that object property in the second then() by passing it as an argument to function, 
    console.log(userName);                  // which is first parameter of that then().
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally( function(){                     // it executed no matter the promise got rejected or resolve
    console.log("The Promise is either resolve or rejected");
  })



