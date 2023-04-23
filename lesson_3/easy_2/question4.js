// Put the words "Four score and" in front of the famousWords string

let famousWords = "seven years ago...";

// Option 1:
// let newString = "Four score and " + famousWords;
// console.log(newString);

// Option 2:
let newString = "Four score and ".concat(famousWords);
console.log(newString);
