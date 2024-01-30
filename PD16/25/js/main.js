const randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess(guess) {
  if (guess === randomNumber) {
    console.log("Congratulations! You guessed the correct number!");
  } else if (guess < randomNumber) {
    console.log("Too low! Try guessing a higher number.");
  } else {
    console.log("Too high! Try guessing a lower number.");
  }
}
const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
checkGuess(userGuess);
