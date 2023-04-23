// What will this code snippet output to the console?

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // 'one is: one'
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// Again, the messWithVars() function has 3 parameters
// that shadow the globally assigned variables `one`, `two` and `three`
// Thus, these globally assigned values are logged to the console
