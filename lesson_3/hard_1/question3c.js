// What will this code snippet output to the console?

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // 'one is: two'
console.log(`two is: ${two}`); // 'two is: three'
console.log(`three is: ${three}`); // 'three is: one'

// Note that the splice() method on lines 4 to 6 mutate the arrays
// that are passed into messWithVars() as parameters
// As a result, the arrays are passed by reference, and `one`` is assigned to "two",
// `two is assigned to "three", and `three`` is assigned to "one"
