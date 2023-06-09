// Objectives for Rock, Paper, Scissors:
// Ask the user to make a choice (Rock, Paper, Scissors, Spock, or Lizard)
// Ask the computer to make a choice
// Display the winner/

const READLINE = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard', 'r', 'p', 'sc', 'sp', 'l']
const DISPLAY_CHOICES = VALID_CHOICES.splice(0, 4);
const SHORTCUT_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  sp: 'spock',
  l: 'lizard',
}

let userWins = 0;
let computerWins = 0;

// Add an arrow prompt to all text generated by the program
function prompt(msg) {
  console.log(`=> ${msg}`);
}

// Welcome the user and introduce the rules of the game
console.clear();
prompt("Welcome to the Rock, Paper, Scissors, Spock, Lizard game!");
prompt("This game is similar to the classic Rock, Paper, Scissors game, but with an added twist: Spock and Lizard.");
prompt("In this version of the game, Rock beats Lizard, Lizard beats Spock, Spock beats Scissors,");
prompt("Scissors beats Lizard, Lizard beats Paper, Paper beats Spock, and Spock beats Rock.")
  
prompt("Got it? :) Press Enter to continue.")
READLINE.question("");

while (true) {
  console.clear();
  prompt("Enter the shortcut key of your choice: rock (r), paper (p), scissors (sc), spock (sp), lizard (l)");
  let choice = READLINE.question();
  
  // Require the user to enter only the shortcut key
  while (!SHORTCUT_CHOICES.hasOwnProperty(choice)) {
    prompt("Enter only the shortcut key for your choice. For example, for 'rock', input 'r'.");
    choice = READLINE.question().toLowerCase();
  }
  
  // Calculate the computer's choice
  let randomIndex = Math.floor(Math.random() * DISPLAY_CHOICES.length);
  let computerChoice = DISPLAY_CHOICES[randomIndex];
  
  const value = Object.keys(SHORTCUT_CHOICES).find(key => {
    return key.startsWith(choice);
  });
  
  // Logic to decide the winner of the round
  prompt(`You chose ${SHORTCUT_CHOICES[value]}. Computer chose ${computerChoice}.`);

  if ((value === 'r' && computerChoice === 'scissors') ||
      (value === 'sc' && computerChoice === 'paper') ||
      (value === 'p' && computerChoice === 'rock') ||
      (value === 'r' && computerChoice === 'lizard') ||
      (value === 'l' && computerChoice === 'spock') ||
      (value === 'sp' && computerChoice === 'scissors') ||
      (value === 'sc' && computerChoice === 'lizard') ||
      (value === 'l' && computerChoice === 'paper') ||
      (value === 'p' && computerChoice === 'spock') ||
      (value === 'sp' && computerChoice === 'rock')) {
    prompt("You won!");
  } else if ((value === 'sc' && computerChoice === 'rock') ||
      (value === 'p' && computerChoice === 'scissors') ||
      (value === 'r' && computerChoice === 'paper') ||
      (value === 'l' && computerChoice === 'rock') ||
      (value === 'sp' && computerChoice === 'lizard') ||
      (value === 'sc' && computerChoice === 'spock') ||
      (value === 'l' && computerChoice === 'scissors') ||
      (value === 'p' && computerChoice === 'lizard') ||
      (value === 'sp' && computerChoice === 'paper') ||
      (value === 'r' && computerChoice === 'spock')) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie!");
  }
  

  // Ask the user if they wish to play again
  prompt("Would you like to play again? (y/n)");
  let answer = READLINE.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y' or 'n'");
    answer = READLINE.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}
