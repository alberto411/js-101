// What does the following code log to the console?
// The code below outputs the array ['Hi', 'Goodbye']
// and the string 'Hello'

let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

// Reason:
// Line 5 declares and initializes the variable myWords to an array with 2 strings
// Line 6 declares and initializes a new variable myWord to the element within
// that array at index 0 (zero) - 'Hello'
// Since this string is a primitive type, index 0 of the array ('Hello')
// and the myWord variable reference different strings at different memory addresses
// that happen to be the same value
// Line 7 reassigns index 0 of the myWords array to 'Hi', but this does not affect
// the value of the myWord variable
