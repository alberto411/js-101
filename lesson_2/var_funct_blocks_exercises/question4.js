// What will the following code log to the console?
// The code below will log:
// ['red', 'green', 'blue', 'purple', 'pink']

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1); // ['red', 'green', 'blue', 'purple']
updateColors(newColors, color2);
console.log(colors);

// Reason:
// The first function invocation passes in the global `colors` variable
// which references an array (['red', 'green', 'blue']) and the string value 'purple'
// Within the function on line 10, the push() method appends the variable color ('purple')
// to the array and returns the value of the colors parameter: ['red', 'green', 'blue', 'purple']
// This return value is assigned to a newly declared variable newColors
// On line 15, the updateColors() method is invoked again passing this new newColors variable (the mutated array)
// and globally declared value of color2 ('pink')
// The function uses the push(method) to append color2 to the newColors array and returns this value
// Result: 'red', 'green', 'blue', 'purple', 'pink']
