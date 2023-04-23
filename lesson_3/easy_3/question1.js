// Write 3 ways to remove all elements from the array below:

let numbers = [1, 2, 3, 4];

// Option 1: Use the splice() method
numbers.splice(0, 4);

// Or

numbers.splice(0, numbers.length);

// Option 2: Use the length property
numbers.length = 0;

// Option 3: Use a `while`` statement with the pop() method
while (numbers.length) {
  numbers.pop();
}
