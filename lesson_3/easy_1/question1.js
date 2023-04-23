let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

console.log(numbers);

// This code does not log an error. It logs:
// [ 1, 2, 3, <3 empty items>, 5 ]

// Line 3 will return 'undefined'