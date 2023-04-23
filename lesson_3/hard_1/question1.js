// Will the functions below return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// These functions do not return the same
// The function first() returns:
// { prop1: 'hi there' }
// However, the function second() returns 'undefined'
// In function second(), the bracket is not on the same line
// as `return` (line 10), so JavaScript inserts a semicolon;
// As a result, the `return` statement causes the function
// to terminate early, thus returning 'undefined'
