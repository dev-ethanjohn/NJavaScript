'use strict';

// Using the DOM

// get the text content of the element that has the class "message"
// console.log(document.querySelector('.message').textContent);

// DOM is a tree structure
// It allows JS to access HTML elements and style to manipulate them
// DOM is not equal to Javascript

'use strict';

// Cache DOM elements
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const guessElement = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// Initialize variables
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = Number(scoreElement.textContent);

//NOTE: Helper Functions
const displayMessage = message => {
  messageElement.textContent = message;
};

const updateScore = newScore => {
  score = newScore;
  scoreElement.textContent = score;
};

const setGameStyles = (bgColor, numberWidth) => {
  document.querySelector('body').style.backgroundColor = bgColor;
  numberElement.style.width = numberWidth;
};

const resetGame = () => {
  // Reset variables
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  // Reset UI elements
  displayMessage('Start guessing...');
  updateScore(score);
  numberElement.textContent = '?';
  guessElement.value = '';

  // Reset styles
  setGameStyles('#222', '15rem');

  // Re-enable the "Check" button
  checkButton.disabled = false;
};

// Handle "Check" button click
checkButton.addEventListener('click', () => {
  const guess = Number(guessElement.value);

  // Input validation
  if (!guess || guess < 1 || guess > 20) {
    messageElement.textContent = 'Please enter a valid number (1–20)!';
    return;
  }

  // Game logic
  if (guess === secretNum) {
    // When player wins
    displayMessage('You hit the jackpot!');
    numberElement.textContent = secretNum;

    setGameStyles('#60b347', '30rem');

    // Update high score
    const highScore = Number(highScoreElement.textContent);
    if (score > highScore) {
      highScoreElement.textContent = score;
    }

    // Disable the "Check" button
    checkButton.disabled = true;
  } else {
    // When guess is incorrect
    if (score > 0) {
      displayMessage(guess > secretNum ? 'Oops, too high!' : 'Oops, too low!');
      updateScore(score - 1);
    } else {
      displayMessage('You lost the game!');
      checkButton.disabled = true;
    }
  }
});

againButton.addEventListener('click', resetGame);
