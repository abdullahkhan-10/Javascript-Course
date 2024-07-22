// ++++++++++++++++++++++++++++++++++++++++++++++++ Javascript Error Handling ++++++++++++++++++++++++++++++++++++++++++++++++++
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// The finally statement defines a code block to run regardless of the result.

// +++++++++++++++++ The Error Object +++++++++++++++++
// JavaScript has a built in error object that provides error information when an error occurs.
// The error object provides two useful properties: name and message.
// name:	    Sets or returns an error name
// message: 	Sets or returns an error message (a string)


// +++++++++++++++++++ General Syntax ++++++++++++++++++++++
// When executing JavaScript code, different errors can occur, error may be programe error, syntax errorand reference error etc.
try {
    // Block of code to try
} catch (error) {
    // Block of code to handle errors
    // get the error that has occure in try statement.
} finally {
    // Block of code to be executed regardless of the try / catch result
  }

// +++++++++++++++++++ Example 1 ++++++++++++++++++++++
try {
    console.log("Start of try");
    khan;                          // it will cause an error.
} catch{
    console.log("An error has occured");
}

// +++++++++++++++++++ Example 2 ++++++++++++++++++++++
try {
    console.log("Start of try");
    khan;
    console.log("End of try");              // code after error will not execute.
} catch (err) {                    // the error in try statement will store here in err, and now we can handle it, and will show the cause of error.
    console.log(`Error: ${err}`);
}finally{
    console.log("code inside finally will execute regardless of try and catch");
}

// +++++++++++++++++++ Example 3 ++++++++++++++++++++++
try {
    khan;
} catch (error) {
    console.log(error.name);         // tell us about the name of error
    console.log(error.message);      // tell us about why this error has occured.
    console.log(error.stack);        // gave us detial info about the error.
}

// +++++++++++++++++++ Example 4 ++++++++++++++++++++++
// it is usefull when we are dealing with server, mean sending json or getting json from server.
// we will get reference error, because myJso is not defined.
try {
    let myJson = '{"name": "Abdullah khan", "age": 21}'     // json
    let myObj = JSON.parse(myJso)                            // let suppose we are getting data from server, then we need to convert json
    console.log(myObj.name);                                  // into javascript object
    console.log(myObj.age);                                                         

} catch (error) {                                             
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
}

// +++++++++++++++++++ Example 5 ++++++++++++++++++++++
// The Throw statement
// The throw statement allows you to create a custom error.
try {
    let myJson = '{"age": 21}'     
    let myObj = JSON.parse(myJson)                            
    if(!myObj.name){
        throw new Error("Incomplete data, No name")
    }
    console.log(myObj.name);                                  
    console.log(myObj.age);                                                         

} catch (error) {                                             
    console.log(error);
    
}