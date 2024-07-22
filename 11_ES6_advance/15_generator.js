// ++++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Generator +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Generator is also a function but unlike normal function here we have the control of code inside generator function, mean we can access what ever statement we want from the function and generator function will return that specific statement.

// +++++++++++++++++++++++ General syntax +++++++++++++++++++++++++++
function *myFunction(){             // the * make it generator function
    yield "First";                    // yield mean pause, mean the function return code aftre this, but if we want the second yield use next()
    yield "second";
    yield "Third";
} 
let khan = myFunction()         
console.log(khan);                 // khan is an object generator
console.log(typeof khan); 
console.log(khan.next());          // to get the next yield 
console.log(khan.next().value);      

  
  // +++++++++++++++++++++ Example 1 +++++++++++++++++++++++
function *message(){
    console.log("First Message");            // This message will log into the console    
    yield "Yield No 1"                       // the yield will stop the code execution here, only first meassge and first yield will be log. 
    console.log("Second meassage");
    yield "Yield No 2"                      
}
  
let khan1 = message()
console.log(khan1.next());
console.log(khan1.next());            // to get the second yield and log the second message, we will call another next()


// +++++++++++++++++++++ Example 2 +++++++++++++++++++++++
function *message(){
    yield "Yield No 1"                       
    yield "Yield No 2"  
    yield                     // If we did'nt gave any data to yield, it will gave us undefined value                    
}
  
let khan2 = message()
console.log(khan2.next());
console.log(khan2.next());            
console.log(khan2.next());          // we have only two yield in generator function, so the third next() will return object with value: undefined, and done: true.    

// +++++++++++++++++++++ Example 3 +++++++++++++++++++++++
function *message(){
    yield "Yield No 1"               
    yield "Yield No 2"                      
    yield "Yield No 3"                      
}
  
let khan3 = message()
console.log(khan3.next());
khan3.next();                    // the second yield will log to the console.
console.log(khan3.next());            
console.log(khan3.next());   


// +++++++++++++++++++++ Example 4 +++++++++++++++++++++++
// we can also get the argument of next() with the yield. 
function *message(){
    let num1 = yield            // yield will access the argument and will store in variable num1, and now we can play with num1.              
    console.log(`The Price is ${num1} rupees.`);
}
  
let khan4 = message()
khan4.next()
khan4.next(50);                // we can also send value as an argument in next()