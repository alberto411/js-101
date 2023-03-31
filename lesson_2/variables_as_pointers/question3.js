// What will the following code log to the console?
// The code below will log:
// [ 'Hi', 'Goodbye' ]
// [ 'Hi', 'Goodbye' ]

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

// Reason:
// myWords is initialized to an array, which is a reference type
// In a reference type, the variable points to a value that is a reference
// to another memory location
// Line 3 changes one of the elements within the array (mutates),
// but does not reassign the variable value itself
// Since the array was mutated, and both myWords and myOtherWords point
// to the same array, the same output is logged for both variables
