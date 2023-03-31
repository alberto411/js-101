let myVar = [1];

function myFunc(myVar) {
  myVar = [2];
}

myFunc();
console.log(myVar); // [1]

// Similar to example 4, myVar declared in the function cannot access
// the myVar variable declared on line 1
// As a result, the console.log() method call on line 8 logs the outer scope
// value of myVar to the console, as access to the myVar in the function is blocked
