let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

// This code outputs 'false'
// Reason:
// JS does not allow you to use == or === to determine
// whether a value is not a number (NaN)

// Instead, we should use the isNaN() function
console.log(Number.isNaN(nanArray[0])); // 'true'
