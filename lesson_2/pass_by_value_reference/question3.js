// What will the following code log to the console?
// The code below will log:
// 'Hello'
// 'Hello'
// 'HELLO'

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

// Reason:
// Line 13 initializes the myWord variable to the string value 'Hello'
// This value is then passed as an argument to the changeMyWord() function on line 14
// The console.log() method on line 8 (within the function) then logs 'Hello'
// After that, word is reassigned to the return value of the changeMyWord() function
// Line 15 logs the initial value of myWord to the console: 'Hello'
// Finally, line 16 logs myOtherWord which is the return value of the function: 'HELLO'
