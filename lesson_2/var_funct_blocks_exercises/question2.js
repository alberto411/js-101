// What will the following code log to the console?
// The code below logs:
// [ 'red', 'green', 'blue', undefined ]

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

// Reason:
// On line 8 two parameters are defined: colors and color
// The function blocks access to the color and colors variables
// declared outside of the function scope
// When the updateColors() function is invoked on line 12,
// only one of the two parameters (colors) is passed as an argument
// As a result, colors references ['red', 'green', 'blue'] initialized on line 6,
// but the color parameter remains undefined
// As a result, [ 'red', 'green', 'blue', undefined ] is logged to the console
