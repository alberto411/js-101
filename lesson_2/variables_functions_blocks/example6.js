let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc();
console.log(myVar); // TypeError: Cannot set properties of undefined (setting '0')

// Once again, the myVar variable declared within the function scope
// blocks access to the myVar declared and initialized on line 1 (an array value)
// Line 4 attempts to mutate the element at index 0 within this array,
// but as mentioned above access is blocked
// The myVar value within the function is initially 'undefined',
// so line 4 attempts to access the 0 index of an undefined variable (undefined[0] = 2),
// resulting in the TypeError
