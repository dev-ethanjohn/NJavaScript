'use strict';

// IMPORTANT (133): Default Parameters
console.log('--- Default Parameters ---');

const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger //dynamic default value (can use param before it)
) {
  // ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //? {flightNum: 'LH123', numPassenger: 1, price: 199}
createBooking('LH123', 2); //? {flightNum: 'LH123', numPassenger: 2, price: 398}
createBooking('LH123', 3, 800); //? {flightNum: 'LH123', numPassenger: 3, price: 800}

createBooking('LH123', undefined, 1000); //? {flightNum: 'LH123', numPassenger: 1, price: 1000}
createBooking('LH123', 2, undefined); //? {flightNum: 'LH123', numPassenger: 2, price: 398}

// IMPORTANT (134): How Passing Arguments Works: Value vs. Reference
console.log('--- How Passing Arguments Works: Value vs. Reference ---');
//  Functions are called 'pass-by-value' or 'pass-by-reference'
//  Primitive types are passed by value
//  Objects are passed by reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas); //NOTE: Check in
// flight is a primitive value, so it's passed by value (not changed).
// jonas is an object, so it's passed by reference (changed)
console.log(flight); //? LH234
console.log(jonas); //? {name: 'Mr. Jonas Schmedtmann', passport: 24739479284}

// flightNum = flight; //Could not access flightNum from outside the function
// console.log(flightNum);
let flightNum = flight; //? LH234 (flightNum is a new variable)
flightNum = 'LH999';
console.log(flight); //? LH234
console.log(flightNum); //? LH999

const passenger = jonas; //? {name: 'Mr. Jonas Schmedtmann', passport: 24739479284} (passenger is a new variable with the same reference)

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
// checkIn(flight, jonas); //NOTE: Wrong passport!

// jAVASCRIPT DOES NOT HAVE TRUE PASS-BY-REFERENCE
// Primitive values (e.g., numbers, strings, booleans) are passed by value.
// Objects (including arrays and functions) are passed by value of the reference .
// When you pass an object to a function, the reference to the object (a memory address) is passed by value .
// You can modify the properties of the object inside the function because the reference points to the same object in memory.
// However, you cannot change the reference itself (i.e., you cannot make the variable point to a new object).

// (a) Primitive Values Are Passed by Value
function modifyPrimitive(value) {
  value = 10 * 5; // Changes the local copy of `value`
  console.log('Inside function:', value);
}

let num = 5;
modifyPrimitive(num);
console.log('Outside function:', num);
// Inside function: 50
// Outside function: 5

// (b) Objects Are Passed by Value of the Reference
function modifyObject(obj) {
  obj.name = 'Alice'; // Modifies the property of the original object
  console.log('Inside function:', obj);

  obj = { name: 'Bob' }; // Reasignment only affects the local copy of `obj`
  console.log('After reassignment:', obj);
}

const person = { name: 'John' };
modifyObject(person);
console.log('Outside function:', person); // The reassigned object is not returned since the reference is passed by value. But the property of the original object is modified.
// Inside function: { name: 'Alice' }
// After reassignment: { name: 'Bob' }
// Outside function: { name: 'Alice' }

// IMPORTANT (135): First-Class and Higher-Order Functions
console.log('--- First-Class and Higher-Order Functions ---');

// First-Class Functions
// JavaScript treats functions as first-class citizens.
// This means that functions are simply values.
// Functions are just another "type" of object.
// Functions can be stored in variables.
// Functions can be passed as arguments to other functions.
// Functions can return other functions.
// Functions can also have methods and properties like other objects. (e.g., .bind(), .call(), .apply())

// Higher-Order Functions
// A higher-order function is a function that receives another function as an argument, that returns a new function, or both.
// This is only possible because JavaScript has first-class functions.
// Higher-order functions are a common pattern in modern JavaScript development.
// They are used to build abstractions and compose code in a more readable and maintainable way.

// NOTE: There are higher-order functions because the language supports first-class functions. First class functions is just a concept, in practice we are dealing with higher-order functions. Example, using callback functions in event listeners.
