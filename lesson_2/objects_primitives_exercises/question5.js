// What does the following code log to the console?
// The following code logs [ 'Hello' ] to the console

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

// Reason:
// The String.toUpperCase() method is called on the string at index 0 of the array
// However, since a string is a primitive type (which is immutable),
// this method has no affect on the string itself (but it does return a new string)
