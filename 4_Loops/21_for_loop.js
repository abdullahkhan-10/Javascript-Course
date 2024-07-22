// +++++++++++++++++++++++++++++++++++++++++++++++++++ Javascript For Loop +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Loops can execute a block of code a number of times.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// General Syntax
// The for statement creates a loop with 3 optional expressions:

for (expression1; expression2; expression3) {
  // code block to be executed
}

// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.

for (let i = 0; i <= 10; i++) {
  console.log(`The number is ${i}`); // If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
}

// +++++++++++++++ (if) in for loop ++++++++++++++
for (let a = 0; a <= 10; a++) {
  let num1 = a;
  if (num1 === 5) {
    console.log("5 is the best number");
  }
  console.log(num1);
}

// +++++++++++++++++++++ loop throup an array +++++++++++++++
let myArr = ["Pigeon", "Eagle", "Parrot", "Dove"];
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
  let res = myArr[i];
  console.log(res);
}

// +++++++++++++++++++++ Loop scope ++++++++++++++
var i = 5;
// code here is 5
console.log(`above loop ${i}`);

for (var i = 0; i < 10; i++) {
  // some code
  console.log(i);
}
// Here i is 10
console.log(`outside loop ${i}`);

// +++++++++++++ with let keyword +++++++++++++++
let i = 5;
// code here is 5
console.log(`above loop ${i}`);

for (let i = 0; i < 10; i++) {
  // some code
  console.log(i);
}
// Here i is 5, we will not access the value of i declare inside the loop
console.log(`outside loop ${i}`);

// ++++++++++++++++++++++++ break and continue ++++++++++++++++++++++++++++++

// break
// The break statement "jumps out" of a loop.
//  the break statement can be used to jump out of any code block:
for (let index = 1; index <= 15; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of i is ${index}`);
}

// Continue
// The continue statement "jumps over" one iteration in the loop.
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
      console.log(`Detected 5`);
      continue
  }
 console.log(`Value of i is ${index}`);
  
}
