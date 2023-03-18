// Ask the user for total amount of their car purchase
// Ask the user for the desired loan APR
// Ask the user for the duration of the loan (in months)

const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to Al's Auto Loans");

prompt("What's the total loan amount you require for your car purchase?");
let loanAmount = READLINE.question();

while (invalidNumber())
