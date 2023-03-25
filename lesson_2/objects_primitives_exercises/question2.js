// What does the following code log to the console?
// The code will log:
// 'Hello'
// 'Hello'
// 'Hello'

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.toUpperCase();
console.log(myWord);

// Reason:
// The method invocations on lines 8, 10 and 12 return new strings,
// but they do not affect the original string ('Hello') because it is immutable
