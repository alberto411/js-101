// What will the following code log to the console?
// The code below logs:
// ['red', 'green', 'blue']

let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors); // `colors` parameter within function scope and global `colors` variable point to same array
                                     // The removeColor() function then mutates the array with the pop() function
                                     // by removing the last element in the array: ['red', 'green']
                                     // The function returns a reference to this array, which is assigned to the newly declared
                                     // newColors variable
addColor(colors, color);
console.log(newColors);

// Reason:
// Note that on line 15 the pop() method returns the value the element that was removed: 'blue'
// As a result this REASSIGNS the color variable to the value of 'blue'
// On line 23 the current value of `colors` (['red', 'green']) and the current value of `color`
// are passed as parameters to the addColor() function
// The addColor() function then appends the string `color` value ('blue') to the `colors` array: ['red', 'green', 'blue']
