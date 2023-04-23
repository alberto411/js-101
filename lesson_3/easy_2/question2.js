let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Write two distinct ways to reverse the array without mutating the original array
// Option 1:
let reversedArray = numbers.slice(0).reverse();
console.log(reversedArray); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // [1, 2, 3, 4, 5]

// Option 2:
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
