// What does the following code log to the console?
// The code below logs 'Hello' to the console

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

// Reason:
// The Array.concat method doesn't mutate the array: it returns a new array
