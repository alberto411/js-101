// What will the following code log to the console?
// The code will log 'Hello' twice

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

// Reason:
// The first call to console.log logs 'Hello'
// Since myOtherWord is assigned to myWord (initialized to 'Hello'),
// The second call to console.log also logs 'Hello'
