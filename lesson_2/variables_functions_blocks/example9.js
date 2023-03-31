let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(myVar);
console.log(myVar); // [2]

// Line 1 declares and initialized the myVar variable to an array: [1]
// Since an array acts as pass-by-reference, when we pass this array
// to the myFunc function on line 7, line 4 within the function mutates the array
// and changes the element at index 0 to '2'
// As a result, the mutated array is logged to the console: [2]
