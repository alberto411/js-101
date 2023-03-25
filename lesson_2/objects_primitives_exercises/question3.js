// What does the following code log to the console?
// The code logs [ 'Hello', 'Goodbye' ] to the console

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);

// Reason:
// On line 4 the variable myWords is declared and initialized to an array
// Since an array is an object (which is mutable), the Array.push method
// appends the 'Goodbye' element to the array:
// [ 'Hello', 'Goodbye' ]
// When myWords is logged to the console on line 7, this mutated array is logged
