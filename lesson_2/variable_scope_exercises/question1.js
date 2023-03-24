// What will the code below log to the console?
// It will log '10' to the console

let num = 5; // Variable 'num' is declared and initialized in outer scope

function myFunc() {
  num = 10; // Variable declared in outer scope can be accessed and is
}           // reassigned in the function scope

myFunc();
console.log(num);

// As a result, '10' is logged to the console
