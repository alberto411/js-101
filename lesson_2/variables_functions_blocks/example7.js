let myVar = 1; // myVar is initialized to a primitive value

function myFunc(myVar) { // Since myVar on line 1 is a primitive value, passing an argument acts as pass-by-value
  myVar = 2; // myVar within this function and myVar on line 1 point to different values (1)
}            // at different locations in memory

myFunc(myVar);
console.log(myVar); // 1

// Once again, myVar declared within the function cannot access the myVar variable
// initialized on line 1, so line 4 simply reassigns the function-scoped variable,
// not myVar declared on line 1
// As a result, line 8 logs '1' to the console (not '2')
