// What does the following code log to the console?
// The code logs [ 'HELLO' ] to the console

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

// Reason:
// Line 5 mutates the element at index 7 by calling the String.toUpperCase() method,
// resulting in converting the 'Hello' string to uppercase: 'HELLO'
