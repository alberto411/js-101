let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc(myVar);
console.log(myVar); // [1]

// Although myVar on line 1 and the function-scoped myVar initially
// reference the same array, line 4 reassigns myVar to a NEW array
// As a result, when myVar is passed as an argument to the console.log() method
// the initial value of myVar (line 1) is logged to the console: [1]
