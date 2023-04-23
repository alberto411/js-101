// What will the code below output
// arr1 will output
// [{ first: 42 }, { second: "value2" }, 3, 4, 5]

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Reason:
// The slice() method only makes a shallow copy of the array,
// so a duplicate is made only of the outermost values in the array.
// As a result, arr1 and arr2 both point to { first: "value1" }
// and { second: "value2" }, respectively
