// Replac every instance of 'important' with 'urgent'

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));

// Expected output:
// 'Few things in life are as urgent as house training your pet dinosaur.'

// Note that the original string is unchanged
console.log(advice);

// To replace all occurences of 'important', use replaceAll()
