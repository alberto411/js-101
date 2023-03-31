// What will the following code log to the console?
// This code will log:
// 'Hello'
// 'HELLO'

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);

// Reason:
// Line 7 logs the value of word to the console ('Hello')
// Line 9 then RETURNS the value of the word parameter ('HELLO')
// Then, line 13 reassigns the myWord variable to the return value
// of the changeMyWord() function
// Finally, line 14 logs this return value to the console
