let myVar = 1; // myVar variable is declared and initialized to 1

function myFunc() {
  myVar = 2; // myVar is accessible within the scope of the function,
}            // so it can be reassigned to 2 on line 4

myFunc(); // Reassignment of myVar occurs with this function invocation
console.log(myVar); // 2

// As a result, the reassigned value of 2 is logged to the console
