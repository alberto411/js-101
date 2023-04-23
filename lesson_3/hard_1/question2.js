// What does the last line in the code below output?
// { first: [ 1, 2 ] }

// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Since the push() method is mutating, the original object referenced
// by object is changed

// To modify `numArray` but not `object`, there are two options
// Option 1: Use the Array.prototype.slice() method
// let object = { first: [1] };
// let numArray = object["first"].slice(); // slice() method returns a shallow copy of the array
// numArray.push(2);

// Option 2: Use the Array.prototype.concat() method
let object = { first: [1] };
let numArray = object["first"].concat(); // concat() returns a new array instead of modifying the original array
numArray.push(2);

