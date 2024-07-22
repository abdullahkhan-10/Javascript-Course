// +++++++++++++++++++++++++++++++++++++++++++ Switch Statement +++++++++++++++++++++++++++++++++++++++++++++++
// Use the switch statement to select one of many code blocks to be executed.

// General Syntax
switch (key) {
    case value:
        // code block
        break;
    case value:
        // code block
        break;
    case value:
        // code block
        break;

    default:
        break;
}

// The switch key is evaluated once.
// The value of the key is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

let day = "thursday";

switch (day) {
    case "sunday":
        console.log("It's Sunday today");
        break;                                        // the break keyword stop the execution of unnecessary code
    case "monday":
        console.log("It's Monday today");
        break;
    case "tuesday":
        console.log("It's Tuesday today");
        break;
    case "wednesday":
        console.log("It's Wednesday today");
        break;
    case "thursday":
        console.log("It's Thursday today");
        // break;                                   // if we comment break keyword here, the next case will also log in console except default, which we 
    case "friday":                                 // do not want.
        console.log("It's Friday today");
        break;
    case "saturday":
        console.log("It's Saturday today");
        break;

    default:                                       // The default keyword specifies the code to run if there is no case match:
        console.log("No day is match");
        break;
}

// Default keyword
let day1 = new Date().getDay();

switch (day1) {
    case 0:
        console.log("It's Sunday today");
        break;
    case 6:
        console.log("It's Saturday today");
        break;

    default:
        console.log("No day is match");
        break;
};