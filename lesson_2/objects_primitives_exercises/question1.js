// What does the following code log to the console?
// The code below logs 'Hello' to the console

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

// Reason:
// On line 5, calling the concat() method on the string assigned to myWord
// does not do anything because the string ('Hello') is a primitive
// that is immutable
// Line 5 appends the ' there.' to the 'Hello' string, which returns a new string
// 'Hello there.', but we do not do anything with the return value
// (e.g., log it to the console)
