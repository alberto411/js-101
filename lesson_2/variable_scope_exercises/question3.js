// What will the code below log to the console?
// It will log '5' to the console

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

// '5' is logged to the console because line 7 is a declaration and initialization
// of a new variable 'num' - not a reassignment of the value of 'num'
// declared on line 4
