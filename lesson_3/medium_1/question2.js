let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that displays:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));
