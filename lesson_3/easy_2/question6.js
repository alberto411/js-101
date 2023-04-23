let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// Option 1: Use the concat() method and use spread syntax
// to pass flintstones as an iterable
// flintstones = [].concat(...flintstones);

// Option 2: Use the reduce() method
// flintstones = flintstones.reduce((accumulator, element) => {
//   return accumulator.concat(element);
// }, []);

// console.log(flintstones); // [ 'Fred', 'Wilma', [ 'Barney', 'Betty' ], [ 'Bambam', 'Pebbles' ] ]

// Option 3: Use the forEach() method
// let newFlintstones = [];
// flintstones.forEach(element => {
//   newFlintstones = newFlintstones.concat(element);
// });

// console.log(newFlintstones);

// Option 4: Use the flat() method
let newFlintstones = flintstones.flat();

console.log(newFlintstones);
