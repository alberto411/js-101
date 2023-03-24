// What will the code below log to the console?
// The code will result in a reference error on line 7

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

// Reason:
// ReferenceError: Cannot access 'num' before initialization
// The let declaration on line 8 creates a new 'num' variable initialized to 10
// The console.log method on line 7 tries to access num, but it can't
// because num within the myFunc function scope has been intialized yet
