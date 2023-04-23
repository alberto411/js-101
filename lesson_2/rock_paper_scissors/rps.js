// Objectives for Rock, Paper, Scissors:
// Ask the user to make a choice (Rock, Paper, or Scissors)
// Ask the computer to make a choice
// Display the winner/

const READLINE = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors']; // Extract array literal to a constant

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    prompt("You won!");
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'paper')) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = READLINE.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = READLINE.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  let answer = READLINE.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y' or 'n'");
    answer = READLINE.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}
