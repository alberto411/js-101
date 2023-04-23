// Return a new version of this sentence that ends before 'house'

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newAdvice = advice.slice(0, advice.indexOf('house'));

console.log(newAdvice);
