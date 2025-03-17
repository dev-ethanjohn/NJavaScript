"use strict";

// NOTE:  Declare variables
let hasDriversLicense = false;
const passTest = true;

// NOTE:  If passTest is true, set hasDriverLicense to true
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// NOTE: (33) Function
// A function is a piece of code that can be called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value).
// All functions in JavaScript are objects.
// Function Declaration: function logger() {}
// Function Expression: const logger = function() {};
// Arrow Function: const logger = () => {};

// Functions that don’t return a value are often used for tasks like:

//1. Performing Actions : Logging messages, updating the DOM, or triggering animations.
//2. Side Effects : Modifying global variables, writing to a database, or interacting with external systems.
//3. Encapsulation : Grouping related logic into reusable blocks without needing to return data.

console.log("----Function----");

// NOTE:  Function Declaration
function logger() {
  console.log("My name is Ethan");
}

logger(); //invoking/calling/running the function

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
