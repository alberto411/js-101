// What will the following code log to the console?
// The code below logs:
// 'hello'
// 'Hello'
// 'Hello!!!'

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word); // 'Hello'
let exclaimedWord = exclaim(capitalizedWord); // 'Hello!!!'

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

// Reason:
// This time, both the capitalize() and exclaim() functions define 'word' as a function parameter
// Line 19: console.log(word)
// This method call passes in the global variable `word` as a parameter, 
// although the capitalize() method already defines `word` (but in a different memory location)
// The return value of this function is 'Hello'
// Line 16 invokes this function and assigns this return value to the variable `capitalizedWord`: 'Hello'
// Line 20: console.log(capitalizedWord);
// This logs the value of capitalizedWord to the console
// Line 17: invokes the exclaim() function:
// When this function is invoked, capitalizedWord is passed as an argument, and at this point
// both the global variable capitalized Word and the word parameter in the exclaim() function
// have the same value 'Hello' (at different locations in memory)
// This function concatenates the value of word and appends the string '!!!' to it: 'Hello!!!'
// The function returns this value, and the value is assigned on line 17 to the exclaimedWord() variable
// Finally, the console.log() method call on line 21 logs this value to the console
