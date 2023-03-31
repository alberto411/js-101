let myVar = 1;

function myFunc(myVar) {
  myVar = 2;
}

myFunc();
console.log(myVar); // 1

// When the myFunc() function is invoked on line 7, a new myVar variable
// is declared and initialized within the scope of the function
// This myVar variable is not the same variable that was initialized on line 1
// As a result, the variable within the function scope shadows (blocks access to)
// the variable declared on line 1
// Thus myVar reassigned on line 4 is a new variable, separate from myVar declared on line 1
// Line 8 thus logs the initial (global) value of myVar: 1
