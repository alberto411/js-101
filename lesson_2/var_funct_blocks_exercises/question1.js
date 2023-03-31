// What will the following code log to the console?
// The code below logs:
// ['red', 'green', 'blue', 'yellow']

let color = 'yellow'; // Declares a variable and initializes it to the string 'yellow'
let colors = ['red', 'green', 'blue']; // Declares a variable and initializes it to an array (['red', 'green', 'blue'])

function updateColors(colors) { // The colors parameter shadows the colors variable declared on line 6
  colors.push(color); // This function calls the push() method, passing the variable `color` as an argument
}

updateColors(colors);
console.log(colors);

// When updateColors function is invoked on line 12 (passing the `colors` array) as an argument,
// and since this points to a reference type value, the variable `colors` declared on line 6
// and the function parameter `colors` point to the same array
// The push() method on line 9 then mutates this array and appends the 'yellow' element to it
// As a result, the console.log() method call on line 13 logs the value of `colors` on line 6,
// which is mutated array: ['red', 'green', 'blue', 'yellow']
