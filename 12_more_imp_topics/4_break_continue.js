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
    continue;
  }
  console.log(`Value of i is ${index}`);
}
