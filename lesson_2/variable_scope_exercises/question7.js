// What will the code below log to the console?
// The code results in an infinite loop and does not log anything

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

// Reason:
// The while loop begins on line 6 based on the num declared and initialized
// on line 4 (assigned to 1)
// This makes the while expression on line 6 always evaluate to 'true' (1 < 3)
// However, the num that is declared on line 7 and incremented on line 7
// is a separate variable from the one evaluated in the while expression
