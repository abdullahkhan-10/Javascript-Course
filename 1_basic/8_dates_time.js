// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ Date Objects ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JavaScript stores dates as number of milliseconds since January 01, 1970.

// Date objects are created with the new Date() constructor, when we create it, it come with many irrelevant parameter, to remove those we use the following method.
let d = new Date()
console.log(d);


// There are 9 ways to create a new date object:

// let myDate = new Date(2023, 03, 23)                   year, month, day
// let myDate = new Date("2022-03-25")                  // date string
// let myDate = new Date(2018, 11, 24, 10, 33)          // year, month, day, Hour, minutes
// let myDate = new Date(2018, 9)                       // year, month, 
let myDate = new Date(2018)                             // if we supply one parameter, will output time from 1970
console.log(myDate);
console.log(myDate.toLocaleString());

// JavaScript ISO Dates
// The ISO (International standard) 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format
let d2 = new Date("2024-03-20")
console.log(d2);

// Parsing Dates
// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
//Date.parse() returns the number of milliseconds between the date and January 1, 1970:
let d3 = Date.parse("March 25 2024")
console.log(d3);


// ++++++++++++++++++++++++++++++++++++++++++++++ Date Methods +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. toString() is used to convert date into string, and make it readable, gave local time (pakistan satndard time)
let creatDate = new Date()
console.log(creatDate);

console.log(creatDate.toString());             // return (Fri May 24 2024 15:04:34 GMT+0500 (Pakistan Standard Time) )
console.log(creatDate.toLocaleString());       // return (5/24/2024, 3:04:34 PM)

// 2. The toDateString() method converts a date to a more readable format:
console.log(creatDate.toDateString());
console.log(typeof creatDate);

// 3. getFullYear() Method
// The getFullYear() method returns the year of a date as a four digit number:
const createDate1 = new Date("2021-03-25");
console.log( createDate1.getFullYear());

// 4. getMonth()
// The getMonth() method returns the month of a date as a number (0-11).
const createDate2 = new Date("2021-03-25");    // javascript start minths from zero
console.log( createDate2.getMonth());

// 5. getDate()
// The getDate() method returns the day of a date as a number (1-31):
const createDate3 = new Date("2021-03-25");    
console.log( createDate3.getDate());

// 6. getDay()
// The getDay() method returns the weekday of a date as a number (0-6).
// In JavaScript, the first day of the week (day 0) is Sunday.
const createDate4 = new Date("2021-03-25");    
console.log(createDate4.getDay());

// 7. getTime()
// The getTime() method returns the number of milliseconds since January 1, 1970:
const createDate5 = new Date("2021-03-25");    
console.log( createDate5.getTime());

