// Explain in detail in above ( 9_advance_js ) folder.

// +++++++++++++++++++ Examples 1 ++++++++++++++++++++++++ 
// Normal function returning promise

function prom(complete){
    return new Promise( function(resolve, reject){
        if(complete){
            resolve("The code is Successful")
        }else{
            reject("The code has failed")
        }
    });
};

console.log(prom(true));         // the promise is resolve, in case we pass false as an arguments, the promise will be rejected.


// +++++++++++++++++++ Examples 2 ++++++++++++++++++++++++ 
// Normal function returning promise with then() and catch()
function prom(complete){
    return new Promise( function(resolve, reject){
        console.log("Fetching data please wait");
        if(complete){
            resolve("The code is Successful")
        }else{
            reject("The code has failed")
        }
    });
};

prom(false).then( (res) =>{
    console.log(res);
}).catch( (err) =>{
    console.log(err);
})


// +++++++++++++++++++++++++++++++++++++++++++++++++++ Promise.all ++++++++++++++++++++++++++++++++++++++++++++++++++
// if we have three promises and all get resolve, then() method will called, if we one promise get rejected among them, catch() mwthod will be called.

// Promise 1
let p1 = new Promise(function(resolve, reject){
    setTimeout( () =>{
        console.log("The first promise has resolved");
        resolve(10)
    }, 1000)
})

// Promise 2
let p2 = new Promise(function(resolve, reject){
    setTimeout( () =>{
        console.log("The Second promise has rejected");
        // resolve(20)
        reject(20)                                     // the secod is rejected and code inside reject() will execute in catch()
    }, 2000)
})

// Promise 3
let p3 = new Promise(function(resolve, reject){
    setTimeout( () =>{
        console.log("The third promise has resolved");
        resolve(30)
    }, 3000)
})

Promise.all([p1,p2,p3]).then( (res) =>{               // if one promise among them get rejected, the promise.all() return the array.
    console.log(`Result: ${res}`);
}).catch( (err) =>{
    console.log(`Error: ${err}`);
})
