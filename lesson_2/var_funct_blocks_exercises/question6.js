// What will the following code log to the console?
// The code below logs:
// 'hello!!!'
// 'Hello'
// 'hello!!!'

function capitalize() { // Function is declared that capitalizes the first letter of the `word` string
  return word[0].toUpperCase() + word.slice(1); // Reference the first letter of `word` and call the toUpperCase() method
}                                               // to capitalize the letter
                                                // Call the slice() method to return the string 'ello' and concatenate the two strings
                                                // Return this new string: 'Hello'

function exclaim() {  // Function is declared that appends '!!!' to the `word` string
  return word += '!!!';
}

let word = 'hello'; // Declare and initialize the variable `word` to the string 'hello'
let capitalizedWord = capitalize(word); // Declare and initialize `capitalizedWord` to the return value of invoking the capitalize function: 'Hello'
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

// Reason:
// Although capitalize() function is invoked on line 18, we don't use the argument within the function,
// so the `word` variable referenced on line 8 (within the function) is the global variable `word`
// However, since the value of `word` is a primitive type, line 8 does not change the value (it is still 'hello')
// on line 19 we invoke the exclaim() function, which returns the current value of `word` plus '!!!'
// Result of console.log(word) ==> 'hello!!!'
// Result of console.log(capitalizedWord) ==> 'Hello'
// Result of console.log(exclaimedWord) === 'hello!!!'
