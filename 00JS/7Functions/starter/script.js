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

// IMPORTANT (136): Functions Accepting Callback Functions
console.log('--- Functions Accepting Callback Functions ---');

// Callback Functions
// A callback function is a function that is passed to another function as an argument and is executed inside that function.
// used to implement behavior that is not known at the time of writing the code.
// used to handle tasks that take some time to complete (e.g., fetching data from an API).
// used to handle events (e.g., click events, timer events).
// used to perform tasks after another task has completed.
// used to break up code into smaller, reusable parts.
// used to implement higher-order functions.

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// HIGHER ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest
// Transformed by: oneWord

// JavaScript uses callbacks all the time.
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
// For example, the .forEach() method on arrays.
// The .forEach() method takes a callback function as an argument.
// The callback function is executed on each element in the array.
// callback function allow us to create abstractions and write more reusable code.
// NOTE: ABstractions are a way to hide the complexity of code and make it easier to understand.
//  Example of abstraction: .forEach() method hides the complexity of looping over an array.
//  From the code above, the transformer function is an abstraction that hides the complexity of transforming a string. It delegates the transformation to the callback function. which is passed as an argument. The lower-level functions (oneWord and upperFirstWord) are the implementation details of the abstraction.

// IMPORTANT (137): Functions Returning Functions
console.log('--- Functions Returning Functions ---');

// This is the opposite of the previous example.
// A higher-order function that returns a new function.

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas'); //? Hey Jonas
greeterHey('Steven'); //? Hey Steven

// This is an example of a closure.
// A closure is the closed-over variable environment of the execution context in which a function was created.
// In this case, the greeting variable is a part of the greeterHey function's variable environment.
// Useful for data encapsulation and to create private variables. Functional programming.

greet('Hello')('Jonas'); //? Hello Jonas

// Using arrow functions
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Jonas'); //? Hi Jonas

// IMPORTANT (138): The call and apply Methods
console.log('--- The call and apply Methods ---');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann'); //? Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'John Smith'); //? John Smith booked a seat on Lufthansa flight LH635
console.log(lufthansa.bookings); //? [{flight: 'LH239', name: 'Jonas Schmedtmann'}, {flight: 'LH635', name: 'John Smith'}]

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // assign the function to a variable

// Does NOT work
// book(23, 'Sarah Williams');
// Uncaught TypeError: Cannot read properties of undefined (reading 'airline')
// The this keyword is undefined in the book function because it's a regular function call.

// To solve this, we can use the call method.
// The call method allows us to set the this keyword to any object.
// The first argument of the call method is the object that we want to set as this.
// The other arguments are the arguments of the function.
book.call(eurowings, 23, 'Sarah Williams'); // method borrowing
//? Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings.bookings); //? [{flight: 'EW23', name: 'Sarah Williams'}]

//NOTE:
// A function in JavaScript doesn’t belong to an object—it’s just a value.
// When assigning a method from an object to a variable, it loses its original reference to this.
// The call method allows us to set this manually when calling the function.
// This lets us reuse methods across different objects without duplicating code.

book.call(lufthansa, 239, 'Mary Cooper'); //? Mary Cooper booked a seat on Lufthansa flight LH239
console.log(lufthansa.bookings); //? [{flight: 'LH239', name: 'Jonas Schmedtmann'}, {flight: 'LH635', name: 'John Smith'}, {flight: 'LH239', name: 'Mary Cooper'}] // now has 3 bookings

//NOTE: // When we want to have custom method for an object , we wrap it in a wrapper function.
// Wrapper function for custom behavior
function bookFlightWithReference(obj, flightNum, name) {
  // Call the original book function with the correct `this`
  book.call(obj, flightNum, name);

  // NOTE: Add custom behavior
  console.log(
    `Booking reference number: #${Math.floor(Math.random() * 100000)}`
  );
}

bookFlightWithReference(eurowings, 23, 'Steven Williams');
// Steven Williams booked a seat on Eurowings flight EW23
// Booking reference number: #1542

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper'); //? Mary Cooper booked a seat on Swiss Air Lines flight LX583
bookFlightWithReference(swiss, 583, 'Mary Cooper');
// Mary Cooper booked a seat on Swiss Air Lines flight LX583
// Booking reference number: #1542

// APPLY METHOD
// The apply method works similarly to the call method.
// The only difference is that the apply method receives an array of arguments.
// The apply method is rarely used in modern JavaScript.

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); //? George Cooper booked a seat on Swiss Air Lines flight LX583
bookFlightWithReference(swiss, ...flightData);
// George Cooper booked a seat on Swiss Air Lines flight LX583
// Booking reference number: #1542

// IMPORTANT (139): The bind Method
console.log('--- The bind Method ---');
// The bind method is similar to the call method.
// The bind method also allows us to set the this keyword to any object.
// The difference is that the bind method does not immediately call the function.
// Instead, it returns a new function where the this keyword is bound.

const bookEW = book.bind(eurowings); //? function (flightNum, name) { ... }
const bookLH = book.bind(lufthansa); //? function (flightNum, name) { ... }
const bookLX = book.bind(swiss); //? function (flightNum, name) { ... }

bookEW(23, 'Steven Williams'); //? Steven Williams booked a seat on Eurowings flight EW23
console.log(eurowings.bookings); //? [{flight: 'EW23', name: 'Steven Williams'}]

// This is called partial application.
// The bind method allows us to preset arguments.
// We can create a new function with preset arguments.
// This is useful when we want to create a function based on another function but with some preset parameters.
const bookEW23 = book.bind(eurowings, 23); //? function (name) { ... } *preset argument

bookEW23('Martha Cooper'); //? Martha Cooper booked a seat on Eurowings flight EW23
bookEW23('John Cooper'); //? John Cooper booked a seat on Eurowings flight EW23
console.log(eurowings.bookings); // [{flight: 'EW23', name: 'Steven Williams'}, {flight: 'EW23', name
// : 'Martha Cooper'}, {flight: 'EW23', name: 'John Cooper'}]

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); //? {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), planes: 300, book: ƒ, …}
  this.planes++;
  console.log(this.planes); //? 301
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// In event listeners, the this keyword points to the DOM element that the handler is attached to.
// To make the this keyword point to the object that we want, we use the bind method.

// Partial Application
// The bind method allows us to preset arguments.
// We can create a new function with preset arguments.
// This is useful when we want to create a function based on another function but with some preset parameters.

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //? 220

const addVAT = addTax.bind(null, 0.23); //? function (value) { ... }
// addVAT = value + value * 0.23; *the same as addTax(0.23, value)
console.log(addVAT(100)); //? 123
console.log(addVAT(23)); //? 28.29

// function returning function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23); //? function (value) { ... }
console.log(addVAT2(100)); //? 123
console.log(addVAT2(23)); //? 28.29

// IMPORTANT (141): Immediately Invoked Function Expressions (IIFE)
console.log('--- Immediately Invoked Function Expressions (IIFE) ---');

const runOnce = function () {
  console.log('This will never run again');
};
runOnce(); //? This will never run again

// function() {
//   console.log('This will never run again');
// }
// Uncaught SyntaxError: Function statements require a function name

// IIFE (Immediately Invoked Function Expressions)
// A function that is executed right after it's created.
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
//? This will never run again

(() => console.log('This will ALSO never run again'))();
//? This will ALSO never run again

{
  const isPrivate = 23; //can't access isPrivate from outside
  var notPrivate = 46; //can access notPrivate from outside
}

console.log(notPrivate); //? 46 (var is not block-scoped) Not recommended
// console.log(isPrivate); //? Uncaught ReferenceError: isPrivate is not defined

// IMPORTANT (142): Closures
console.log('--- Closures ---');

// A closure is the closed-over variable environment of the execution context in which a function was created. even after that execution context is gone.
// A closure gives a function access to all the variables of its parent function, even after the parent function has returned.
// The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// A closure makes sure that a function doesn't lose connection to variables that existed at the function's birthplace.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// NOTE: A closure may remember the variables from the place where it was created, even if the function is executed outside that scope.
// when we call the secureBooking function, its execution context is removed from the call stack. However, the inner function still has access to the variables of the outer function. This is because the inner function forms a closure over the variables of the outer function.
// The closure has three scope chains:
// 1. Variables from its own scope.
// 2. Variables from the scope of the outer function.
// 3. Global variables.
const booker = secureBooking(); //? function () { ... }

// if a variable is reached by closure, it cannot be garbage collected
booker(); //? 1 passengers
booker(); //? 2 passengers
booker(); //? 3 passengers

// IMPORTANT: A closure makes sure that a func doesnt loose connection to variables existed at the functions's birth place (parent's scope).
// The booker function is created inside the secureBooking function.
// The booker function has access to the passengerCount variable because it is defined in the same lexical scope as booker.

// NOTE: We do NOT have to manually crate closures, this is a JS feature that happens automatically. We can't evem access closed-over variables/ private explicitly. A closure is NOT a tangible JS object.
console.dir(booker);

// IMPORTANT: (143): More closures examples
// NOTE: EXAMPLE 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    //reborn again in h
    console.log(b * 2);
  };
};

g();
f(); //? 46
console.dir(f);

// Reassigning f funct
h();
f(); //? 1554
console.dir(f);

// NOTE: EXAMPLE2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

setTimeout(() => {
  console.log('TIMER');
}, 1000);

// const perGroup = 1000; NOTE: the closure has priority over the scope chain
boardPassengers(180, 3);
// Will start boarding in 3 seconds
// TIMER                                        //after 1 sec
// We are boarding all 180 passengers           //after 1 sec + 2sec / 3sec
// There are 3 groups, each with 60 passengers

// IMPORTANT: MORE EXAMPLES
// 1. Lexical Scoping, a function can access variables from the scope in which it was defined, not where it is called.

function outer() {
  const outerVar = "I'm from outer!";

  function inner() {
    console.log(outerVar); // ✅ Works! inner() can access outerVar
  }

  inner();
}

outer(); // Output: "I'm from outer!"

// 2. Closures - When functoins remember their scope
// A closure happends when a function is returned from another function, but it still remember the variables from its original scope.

function outer() {
  const secret = 'I know the secret!';

  return function inner() {
    console.log(secret); // ✅ Still works! inner() remembers secret
  };
}

const myFunc = outer(); // outer() executes and returns inner()
myFunc(); // Output: "I know the secret!"

// 3. Closures are often un private variables or function factories.
// Data Privary using closures
function bankAccount(initialBalance) {
  let balance = initialBalance; //Private variable

  console.log('checking balance-----');

  return {
    // object
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${balance}`);
    },
    withdraw(amount) {
      if (balance >= amount) {
        balance -= amount;
        console.log(`Withdre: $${amount}. New balance: $${balance}`);
      } else {
        console.log(`Insufficient funds!`);
      }
    },
    checkBalance() {
      console.log(`Balance: $${balance}`);
    },
  };
}

const myAccount = bankAccount(100); // Create an account with $100
myAccount.deposit(50); // Output: Deposited: $50. New balance: $150
myAccount.withdraw(30); // Output: Withdrew: $30. New balance: $120
myAccount.checkBalance(); // Output: Balance: $120

console.log(myAccount.balance); // ❌ Undefined! balance is private
