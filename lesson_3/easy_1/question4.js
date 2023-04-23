// Create string with all lowercase letters except for the first character

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

console.log(munstersDescription.charAt(0).toUpperCase() +
            munstersDescription.substring(1).toLowerCase());
