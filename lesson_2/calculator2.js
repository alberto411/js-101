// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation (add, subtract, divide or multiply) to perform
// Perform the operation
// Display the result in the terminal

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function invalidAnswer(str) {
  return str !== 'y' && str !== 'n';
}

prompt("Welcome to the Calculator!");

while (true) {

  prompt('What is the first number?');
  let number1 = readline.question(); // Use the question method and save the input to the number1 variable

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt('What is the second number?');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Please choose 1, 2, 3 or 4.");
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}.`);

  prompt('Would you like to perform another operation? (y/n)');
  let answerYesNo = readline.question();

  while (invalidAnswer(answerYesNo)) {
    prompt('Please enter y or n.');
    answerYesNo = readline.question();
  }

  if (answerYesNo[0].toLowerCase() !== 'y') break;

}
