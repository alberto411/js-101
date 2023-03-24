// What will the code below log to the console?
// The code will output:
// 5
// 10
// to the console.

let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc(); // First the value of num declared in the outer scope
          // is logged to the console ==> 5 when the function is invoked
console.log(num); // Then this console.log method logs the new value
                  // of num reassigned on line 11 ==> 10
