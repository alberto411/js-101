function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(2)); // [1, 2]
console.log(factors(10)); // [1, 2, 5, 10]
// Edge case:
console.log(factors(0)); // Empty array: []

// With the original `do...while`` loop,
// when 0 is passed as an argument to the factors() function,
// it results in an infinite loop
// By changing the loop to a `while` loop, an empty array is returned instead
