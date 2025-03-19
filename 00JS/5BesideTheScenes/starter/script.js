'use strict';

// NOTE: (91): A high level overview of Javascript

// jaVASCRIPT is a high-level, object-oriented, multi-paradigm programming language.
// High-level: It has a lot of abstraction from the hardware.
// Object-oriented: It's based on the concept of "objects", which can contain data, in the form of fields (often known as properties), and code, in the form of procedures (often known as methods).
// Multi-paradigm: It supports multiple programming paradigms, such as procedural, object-oriented, and functional programming.

// A high level, garbage collected, dynamically typed, prototype-based, multi-paradigm, single-threaded, first-class function language. Non-blocking event-driven runtime environment.

// Currently, we are doing procedural programming, but we will also learn about object-oriented programming and functional programming.
//Concurrency model because JS needs to be able to handle multiple things happening at the same time since it is a single-threaded language.

//  NOTE: (92): JavaScript Engine and Runtime

// JavaScript Engine: A program that executes JavaScript code. It converts JavaScript code into something that the computer can understand.
// The most popular JS engine is Google's V8 engine, which is used in Google Chrome and Node.js.
// Other engines include SpiderMonkey (used in Firefox), Chakra (used in Microsoft Edge), and JavaScriptCore (used in Safari).
// The engine consists of two parts:
// - Memory Heap: Where the memory allocation happens.
// - Call Stack: Where your stack frames (function calls) are stored.

//  Compilation vs Interpretation:
// Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
// Interpretation: The code is executed line by line.

// Just-In-Time (JIT) Compilation: Entire code is converted into machine code at once, but executed line by line.

// (1) Parsing: The engine parses the code and checks for syntax errors.
// (2) Compilation: The engine converts the code into machine code.
// (3) Execution: The code is executed.

// Runtime: A container that includes everything you need to run a program written in a particular language.
// The JS runtime consists of:
// - The JS engine (V8 engine in Chrome)
// - Web APIs provided by the browser
// - Callback Queue -> timers, promises, data, onClick, etc.
// - Event Loop
// - Microtask Queue
// - Job Queue

// NOTE: (93): eXecution Contexts and The Call Stack

// Execution Context: The environment in which JavaScript code is executed.
// The default execution context is the global execution context.
// Each function call creates a new execution context.
// The execution context contains: These are generated during "creation phase" before the execution
// - The Variable Environment: Contains the variables defined in the current context.
// - The Scope Chain: Contains the current scope and the scopes of its parents.
// - The "this" keyword: A reference to the object that is currently executing the code.

// NOTE: Arrow functions doesnt have their own "this" keyword, they use the "this" keyword of their parent scope. This is called "lexical scoping". Additionally, arrow functions do not have their own "arguments" object.

//Example:
const name = 'Ethan';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();
console.log(x); //3

// Global Context (outside of any function will be executed)
// name = 'Ethan'
// first = function
// second = function
// x = undefined

// Execution Context of first()
// a = 1
// b = undefined

// Execution Context of second()
// c = 2;
// arguments = [7, 9]

// NOTE: values obly become known during execution

// Call Stack: A data structure that records where in the program we are. It's a stack data structure, which means that the last thing that goes in is the first thing that comes out.
// When a function is called, a new execution context is created and pushed onto the call stack.

// NOTE: (94): Scope and The Scope Chain

// Scope: The space or environment in which a certain variable is declared (variable environment).
// Global Scope(local scope): Variables declared outside of any function, which are available everywhere.
// Function Scope: Variables declared inside a function, which are only available inside that function.
// Block Scope: Variables declared inside a block (e.g. a loop), which are only available inside that block. Functions are also block scoped in strict mode.

// Lexical Scoping: A function that is lexically within another function gets access to the scope of the outer function.

// NOTE: scope is not the same as variable scope. Scope is the space or environment in which a certain variable is declared. Variable scope is the accessibility of variables.

// NOTE: Scope has access to variables in the outer scope, but the outer scope does not have access to variables in the inner scope. Variable lookup always starts in the current scope, and if the variable is not found, it looks up in the outer scope. `var` is function scoped, `let` and `const` are block scoped. Sibling scopes do not have access to each other's scope.

// The order of the scope chain is determined by the order in which functions are written in the code., Has nothing to do with the order in which functions are called.

// NOTE: (95): Scoping and The Scope Chain in Practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //NOTE: This is a block scope
      // const output = 'NEW OUTPUT!';
    }
    // console.log(str);
    // console.log(output);
    // console.log(millenial);
    // add(2, 3);
  }

  printAge();

  return age;
}

const firstName = 'Ethan John';
calcAge(1996);

//  NOTE: (97): Variable Environment: Hoisting and The TDZ in Practice

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ethan';
let job = 'student';
const year = 1996;

// Functions
console.log(addDecl(2, 3)); //works
// console.log(addExpr(2, 3)); //remporal death zonewont work
// console.log(addArrow(2, 3)); //temporal death zone wont work
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example 2
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

//IMPORTANT: BEST PRACTICE
// Declare all variables at the top of the scope, and declare functions before you call them.
// This is because of hoisting, which is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// This is why you can call a function before it is declared in the code.
// Hoisting only works with function declarations and variables declared with var, not with let and const.
// Hoisting is a reason why it is a good practice to declare variables at the top of the scope.
// Hoisting is a reason why it is a good practice to declare functions before you call them.
// Hoisting is a reason why it is a good practice to avoid using var, and instead use let and const.

var x1 = 1;
let y = 2;
const z = 3;

console.log(x1 === window.x1); //true
console.log(y === window.y); //false
console.log(z === window.z); //false

// NOTE: (98): The this Keyword in Practice

// The "this" keyword is a special variable that is created for every execution context (every function).
// It takes the value of (points to) the "owner" of the function in which the "this" keyword is used.
// The value of "this" is not static and depends on how the function is called, and its value is only assigned when the function is actually called.
// The value of "this" is not determined by the function where it is used, but by the object that calls the function.
// If the function is a method of an object, "this" points to the object itself.
// If the function is a regular function, "this" points to the global object (window in the browser).
// If the function is called in strict mode, "this" is undefined.
// If the function is an arrow function, "this" points to the parent scope.
// if the function is an event handler, "this" points to the element that the event fired from.

console.log(this); //window object

// regukalr function
const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear); // 41
  console.log(this); //undefined
};
calcAge1(1996);

// arrow function (uses lexical parent's this keyword)
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear); // 57
  console.log(this); //window object (parent scope)
};
calcAgeArrow(1980);

// method of an object
const ethan = {
  year: 1996,
  calcAge: function () {
    console.log(this); //ethan object
    console.log(2037 - this.year); //41
  },
};
ethan.calcAge();

// NOTE: The this aways points to the object that is calling the method
const matilda = {
  year: 2017,
};
matilda.calcAge = ethan.calcAge;
matilda.calcAge(); //this points to matilda object //20

// const f = ethan.calcAge;
// f(); //this is undefined because it is a regular function call

// NOTE: (100): Regular Functions vs. Arrow Functions
console.log('-----Regular Functions vs. Arrow Functions-----');

// Regular Functions
const ethan1 = {
  firstName: 'Ethan',
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1 [USING SELF]
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2 [USING ARROW FUNCTION] ES6 way
    // const isMillenial = () => {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
ethan1.greet(); //window object -> Hey undefined
ethan1.calcAge(); //ethan object -> 42

// NOTE: It is advisable to not use an Arrow Function as a method in an object because it will point to a global object (window object) instead of the object that is calling the method. But, you can use arrow function inside a regular function to access the "this" keyword of the parent scope.
// The fact that arrow functions inherit this from their parent scope makes them particularly useful in scenarios where you want to preserve the context of this. This is especially common in callbacks, event handlers, and asynchronous code.
// However, because arrow functions don’t have their own this, they’re not suitable for all cases (e.g., object methods or constructors).

const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};
const sum = addExpr1(2, 5, 8);
console.log(sum); // 7

// const addArrow1 = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow1(2, 10); // error

// NOTE: However arguments is not used much in modern JavaScript because it is not an array, but an array-like object. It is better to use the rest parameter syntax instead.

// Using Modern rest parameter syntax
const addArrow1 = (a, b, ...rest) => {
  console.log(rest);
  return a + b;
};
const sum2 = addArrow1(2, 10, 100, 200);
console.log(sum2); // 12

// NOTE: (101): Primitives vs. Objects (Primitive vs. Reference Types)

// Primitive Types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Reference Types: Object, Array, Function

// Memory Allocation:
// - Primitive Types: Stored in the call stack.
// - References to Objects: Stored in the call stack, and the object is stored in the heap.
// - Reference Types: Stored in the heap, and the pointer to the memory location is stored in the call stack.

// Variables that store primitive types store the actual value, while variables that store reference types store a reference to the value.

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // Davis Williams

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//NOTE: The variables store a reference to the object in the heap, not the object itself. So variables store the memory address of the object in the heap. They are not the object itself.

// (102): Object References in Practice (Shallow and Deep copies)
console.log('----Object References in Practice');

// Shallow Copy: A shallow copy means constructing a new collection object and then populating it with references to the child objects found in the original.
// Deep Copy: A deep copy means constructing a new collection object and then, recursively, populating it with copies of the child objects found in the original.

const elsa = {
  firstName: 'Elsa',
  lastName: 'Wiliams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedElsa = marryPerson(elsa, 'Davis');

// const marriedElsa = elsa;
// marriedElsa.lastName = 'Davis';

// console.log('Before', elsa);
// console.log('After', marriedElsa);

// elsa = { x: 23 }; // This wony work -> Not allowed to change the memory address by assigning a new object
// elsa.age = 28;
// console.log(elsa);
// console.log(marriedElsa);

console.log(marriedElsa);

const elsa2 = {
  firstName: 'Elsa',
  lastName: 'Wiliams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// NOTE: Shallow copy
const elsaCopy = { ...elsa2 }; //creating a new brand new object uisng spread operator
elsaCopy.lastName = 'Davis';

console.log(elsa2); // {firstName: 'Elsa', lastName: 'Wiliams', age: 27, family: Array(2)}
console.log(elsaCopy); // {firstName: 'Elsa', lastName: 'Davis', age: 27, family: Array(2)}

elsaCopy.family.push('Ethan');
elsaCopy.family.push('John');

console.log(elsa2);
console.log(elsaCopy);

// NOTE: Deep clone
const elsaDeepCopy = structuredClone(elsa2);
elsaDeepCopy.family.push('Dan');
elsaDeepCopy.family.push('Cleo');

console.log(elsa2); // {firstName: 'Elsa', lastName: 'Wiliams', age: 27, family: Array(4)}
console.log(elsaDeepCopy); // {firstName: 'Elsa', lastName: 'Wiliams', age: 27, family: Array(6)} //NOTE: Array is now 6 including `Dan` and `Cleo`;

// NOTE: Prior have to use external library like lodash for deep cloning of objects.
