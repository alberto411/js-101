// What will the code below log to the console?
// The code below will output 5 to the console

let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

// Reason:
// The function parameter 'num' on line 6 creates a new variable num
// within the scope of the myFunc function initialized to 10
// However, the console.log method on line 11 cannot access
// the inner function scope, so the globally declared num (initialized to 5)
// is output to the console.
