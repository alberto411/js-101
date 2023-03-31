// What will the following code log to the console?
// The code will log:
// 'Goodbye'
// 'Hello'

let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

// Reason:
// myWord is declared and initialized to the string 'Hello' on line 6
// myOtherWord is declared and assigned the variable myWord on line 7
// myWord is then reassigned to 'Goodbye' on line 8
// Line 10 logs the current value of myWord ('Goodbye') on line 10
// Although myOtherWord is assigned to myWord, since the strings are stored
// at different addresses in memory, it logs 'Hello' to the console on line 11
