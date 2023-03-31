// What does the following code log to the console?
// The code logs ['Hi', 'Goodbye'] and then 'Hello'

let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

// Reason:
// On line 5 we declare and initialize myWords to an array (['Hello', 'Goodbye'])
// On line 6 we set the element at index 0 to the value of the myWord variable ('Hi')
// After that, on line 7 we reassign myWord to a new string value ('Hello')
