// What will the following code log to the console?
// The code below logs:
// ['Hello', 'Goodbye']
// ['Hi', 'Goodbye']

function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

// Reason:
// Line 11 initializes the myWords variable to an array (['Hello', 'Goodbye'])
// We then pass this array as an argument to the changeMyWords() function on line 12
// (pass-by-reference)
// First, the console.log() method call on line 7 logs the initial array: ['Hello', 'Goodbye']
// Then, line 8 mutates the array by replacing the element at index 0 ('Hello') with 'Hi'
// The new mutated array is then logged to the console: ['Hi', 'Goodbye']
