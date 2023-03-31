// What will the following code log to the console?
// The code below logs 'Hello' twice

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

// Reason:
// Although the changeMyWord function reassigns word to the return value
// of the word.toUpperCase() method ('HELLO')
// On line 9 the myWord variable is initialized to 'Hello' and this string
// is passed as an argument to the changeMyWord function,
// but because these are primitive values, the myWord variable
// and the word function parameter point to 2 different memory locations

// As a result, line 10 invokes the changeMyWord() function, which simply
// logs 'Hello' to the console (acting like pass-by-value)
// Calling the console.log() method on line 11 also logs 'Hello' to the console
