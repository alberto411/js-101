// What will the following code log to the console?
// The code below will log:
// [ 'red', 'green', 'blue', 'purple', 'pink' ]

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1); // The function is invoked, passing colors (array) and color1 ('purple') as arguments
updateColors(colors, color2); // The function is invoked a second time:
                              // This time color2 ('pink') is passed as an argument
console.log(colors);

// Reason:
// During the first function invocation, the colors parameter references the same array that the colors variable
// on line 7 points to and color1 points to the string 'purple'
// The function mutates the array and appends 'purple' to it
// Since the push() method is mutating, then new array is ['red', 'green', 'blue', 'purple']
// The second function invocation passes this mutated array and the color2 variable value ('pink') as arguments
// The function then mutates the array and appends 'pink' to it
// Result: ['red', 'green', 'blue', 'purple', 'pink']
