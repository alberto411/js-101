function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the function invocation below return?
console.log(bar(foo())); // 'no'

// Reason:
// The foo() function will always return 'yes',
// and 'yes' === 'no' evaluated in the bar() function will be 'false'
