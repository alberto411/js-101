// The existing code below should be modified so that the function can determine
// whether an input string is an IP address with 4 dot-separated numbers
// (e.g., 255.255.255.0)

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       break;
//     }
//   }

//   return true;
// }

// Option 1:
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}



// Test cases:
console.log(isDotSeparatedIpAddress('255.255.255.0')); // true
console.log(isDotSeparatedIpAddress('4.5.5')) // false
console.log(isDotSeparatedIpAddress('1.2.3.4.5')) // false
console.log(isDotSeparatedIpAddress('257.abc.255.0')) // false
