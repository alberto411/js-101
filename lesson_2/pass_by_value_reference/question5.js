// What will the following code log to the console?
// The code below logs:
// ['Hello', 'Goodbye']
// ['Hello', 'Goodbye']

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

// Reason:
// Line 11 initializes myWords to an array (['Hello', 'Goodbye'])
// Line 12 invokes the changeMyWords() function passing this array as an argument,
// so it should act as a pass-by-value
// First the initial call to the console.log() method on line 7 logs
// the original array (['Hello', 'Goodbye'])
// However, line 8 within the function REASSIGNS words to a new array (['Hi', 'Goodbye'])
// As a result, the original array that was assigned to myWords is logged
// to the console again (['Hello', 'Goodbye'])
