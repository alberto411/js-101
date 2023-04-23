// Rewrite the function so that it has only one `return` statement
// Also do not explicitly use `true` or `false`

// Option 1:
// function isColorValid(color) {
//   return  color === "blue" || color === "green";
// }

// Option 2 (using an arrow function):
// const isColorValid = color => color === "blue" ||  color === "green";

// Option 3 (using Array.prototype.includes() method)
const isColorValid = color => ["blue", "green"].includes(color);
