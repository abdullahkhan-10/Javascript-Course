// +++++++++++++++++++++++++++++++++++++++++++++++++++ Advance Examples +++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++ Example 6: Resolving promise with Async ++++++++++++++++++
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //   let myVar = true;
    let myVar = false;
    if (!myVar) {
      resolve({ name: "Imran khan", age: 72 });
    } else {
      reject("Error: Something went wrong again");
    }
  }, 1000);
});

async function consumePromiseFive() {
  // we will use try() and catch(), because we need to handle the error as well
  try {
    const response = await promiseFive;                           // if the promise get resolve we will get the data here
    console.log(response);
  } catch (err) {
    console.log(err);                                            // if the promise get rejected we will get the data here
  }
}
consumePromiseFive();


// ++++++++++++++ Example 7: Async function with fetch() ++++++++++++++++++
async function getMyData() {
    try {
      const response = await fetch("https://api.github.com/users/abdullahkhan-10");      // it takes time to get data from url, that's why use await.
      const data = await response.json();                                              // it also takes time to convert the string into JSON formate.
      console.log(data);
    } catch (err) {
      console.log(`En Error: ${err}`);
    }
};
  
getMyData();


// ++++++++++++++ Example 8: Then() with fetch() ++++++++++++++++++
fetch("https://api.github.com/users/abdullahkhan-10")
.then( (res) =>{
    return res.json()
})
.then( (data) =>{
    console.log(data);
})
.catch( (err) =>{
    console.log(`En Error: ${err}`);
})