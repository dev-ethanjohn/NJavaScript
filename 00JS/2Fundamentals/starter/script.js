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

// NOTE: (34) Function Declaration vs. Expression
console.log("----Function Declaration vs. Expression----");

const age1 = calcAge1(1991); //Hoisted

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(age1); //? 46

// Function Expression
// An expression produces a value. It can be stored in a variable.
// A function expression is a function that is assigned to a variable.
// Function Expression is not hoisted
// Function Expression can be called only after it is defined
// Function Expression can be used as an argument to other functions

// IMPORTANT: hoisting means that you can use the function before it's declared in the code.

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2); //? 46

// Use Function Declarations When:
// You want the function to be hoisted and callable before its definition.
// The function is a standalone block of logic that doesn’t need to be dynamically assigned.
// Use Function Expressions (and even arrow functions) When:
// You need to assign a function to a variable (e.g., for dynamic behavior).
// You’re working with callbacks , IIFEs (Immediately Invoked Function Expressions) , or higher-order functions.

// NOTE: (35) Arrow Function
console.log("----Arrow Function----");

// Arrow Function
// Arrow functions are always ANONYMOUS.
// Arrow functions do not get their own this keyword. They use the this keyword of the function they are written in.
// Arrow functions are not hoisted.
// Arrow functions cannot be used as constructors and will throw an error when used with new.
// Arrow functions cannot be generators.
// Arrow functions do not have the arguments object.
// Arrow functions do not have a prototype property.
// Arrow functions do not have a super keyword.
// Arrow functions do not have new.target.

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); //? 46

const yearsUntilRetirement = (birthYear, firstName) => {
  const currentAge = 2037 - birthYear;
  const retirement = 65 - currentAge;
  return `${firstName} retires in ${retirement} years`;
};

const retirement = yearsUntilRetirement(1991, "Ethan");
console.log(retirement); //? Ethan retires in 19 years
