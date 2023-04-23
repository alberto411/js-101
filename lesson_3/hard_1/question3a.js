// What will this code snippet output to the console?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // 'one is: one'
console.log(`two is: ${two}`); // 'two is: two'
console.log(`three is: ${three}`); // 'three is: three'

// Because the reassignment of `one`, `two` and `three`
// shadows the same variables declared locally, the reassignments
// do not have any affect and the globally assigned values
// of `one`, `two` and `three` are output to the console
