let myVar = [1]; // myVar is declared and initialized to an array

function myFunc() {
  myVar = [2]; // myVar initialized on line 1 can be accessed within the function scope
}

myFunc(); // myVar is reassigned to the new array value ([2]) when myFunc() is invoked
console.log(myVar); // [2]

// As a result, the new array value of [2] is logged to the console
// Note that in this case it is a reassignment of the variable to a new array,
// and not mutating the original array
