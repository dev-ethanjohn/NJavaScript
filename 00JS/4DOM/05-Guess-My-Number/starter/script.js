'use strict';

// Using the DOM

// get the text content of the element that has the class "message"
console.log(document.querySelector('.message').textContent);

// DOM is a tree structure
// It allows JS to access HTML elements and style to manipulate them
// DOM is not equal to Javascript

// NOTE: (74) Selecting and Manipulating Elements
console.log('----Selecting and Manipulating Elements----');

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent); //now changed (Manipulated the textContent of the p that contains the message class)

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

// NOTE: (75) Handling click event
console.log('----Handling Click Event----');

document.querySelector('.check').addEventListener('click', () => {
  // console.log(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent = 'Correct Number2';

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number!';
  }
});
