// What does the following code log to the console?
// The code below outputs:
// ['Hi', 'Bye']
// 'Hello', 'Goodbye'

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

// Reason:
// The variable myWords is declared and initialized to an array on line 6,
// which is a reference type
// myOtherWords is initialized to myWords, so both variables point to the same array
// Howevere, on line 8 myWords is reassigned to a new value (which is a new array)
// As a result, myWords oupts the reassigned array (['Hi', 'Bye']),
// but myOtherWords outputs the initial array (['Hello', 'Goodbye'])
// to the console
