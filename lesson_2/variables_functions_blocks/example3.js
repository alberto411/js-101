let myVar = [1];

function myFunc() {
  myVar[0] = 2; // Instead of reassigning myVar variable to a new array, the array is mutated:
}               // The element at index 0 is changed from 1 to 2

myFunc();
console.log(myVar); // [2]

// Array that is logged on line 8 is the same (reassigned) array (myVar)