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

// NOTE: (36) Functions Calling Other Functions
console.log("----Functions Calling Other Functions----");

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor2(2, 3)); //? Juice with 8 apple pieces and 12 orange pieces.

// NOTE: (39) Introduction to Arrays
console.log("----Introduction to Arrays----");

// Arrays are a collection of variables that are accessed with an index number.
// Arrays are a type of object used for storing multiple values in a single variable.
// Each value in an array is called an element.
// Arrays can store multiple data types.
// Arrays are zero-based, meaning the first element index is 0.
// Arrays are mutable, meaning they can be changed after they are created.
// Arrays are created using square brackets [].
// Arrays can be created with the Array() constructor.
// Arrays can be created with an array literal.
// Arrays can be created with the spread operator.

// using array literal
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// using new Array() constructor
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]); //? Michael
console.log(friends[2]); //? Peter

console.log(friends.length); //? 3
console.log(friends[friends.length - 1]); //? Peter (last element)

// Change element
// Arrays are not primitive values, but objects.
// Therefore, we can change elements in an array even if the array is declared with const.
friends[2] = "Jay";
console.log(friends); //? ["Michael", "Steven", "Jay"]

// friends = ["Bob", "Alice", "Jay" ]; //? TypeError: Assignment to constant variable.

// Arrays and objects are stored in memory as references.
// The const keyword ensures that the variable always points to the same reference in memory.
// You can still modify the contents of the array or object because the reference itself hasn’t changed.

// In the second case (friends = [...]), we're trying to reassign the variable to a completely new array, which violates the const rule.

// Array Methods
// Array methods are built-in JavaScript functions that can be called on arrays.
// Array methods are used to perform operations on arrays.
// Array methods modify the original array and are not chainable.
// Array methods can be divided into mutator methods, accessor methods, and iteration methods.

// Mutator methods modify the original array:
// push() adds one or more elements to the end.
// pop() removes the last element.
// shift() removes the first element.
// unshift() adds one or more elements to the beginning.
// splice() adds or removes elements at any index.
// sort() sorts an array alphabetically or numerically.
// reverse() reverses an array.
// fill() fills the array with a static value.
// copyWithin() copies array elements to another position in the array.
// Accessor methods return a new value or representation:
// concat() concatenates two or more arrays.
// includes() checks if an array contains a certain element.
// indexOf() returns the first index of an element.
// join() joins all elements into a string.
// slice() extracts a section of an array.
// toString() returns a string representing the array.

// Iteration methods apply a function to each element:
// forEach() executes a provided function once for each array element.
// filter() creates a new array with elements that satisfy a condition.
// map() creates a new array by mapping each element to a function.
// reduce() applies a function to each element to reduce the array to a single value.
// some() checks if any elements satisfy a condition.
// every() checks if all elements satisfy a condition.

const firstName = "Ethan";
const ethan = [firstName, "Liu", 2037 - 1991, "student", friends];
console.log(ethan);
console.log(ethan.length); //? 5

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years2 = [1990, 1967, 2002, 2010, 2018];

const ages1 = calcAge(years2[0]);
const ages2 = calcAge(years2[1]);
const ages3 = calcAge(years2[years2.length - 1]);
console.log(ages1, ages2, ages3); //? 47 70 19

// function calls in an array
const ages = [
  calcAge(years2[0]),
  calcAge(years2[1]),
  calcAge(years2[years2.length - 1]),
];
console.log(ages); //? [47, 70, 19]

// NOTE: (40) Basic Array Operations (Methods)
console.log("----Basic Array Operations (Methods)----");

const friends2 = ["Michael", "Steven", "Peter"];
console.log(friends2);

// Add elements (.push())
// push() method adds elements to the end of an array and returns the new length of the array.
const newLength = friends2.push("Jay");
console.log(friends2); //? ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength); //? 4

// Add elements (.unshift())
// unshift() method adds elements to the beginning of an array and returns the new length of the array.
const newLength2 = friends2.unshift("John");
console.log(friends2); //? ["John", "Michael", "Steven", "Peter", "Jay"]
console.log(newLength2); //? 5

// Remove elements (.pop())
// pop() method removes the last element from an array and returns that element.
const popped = friends2.pop();
console.log(friends2); //? ['John', 'Michael', 'Steven', 'Peter']
console.log(popped); //? Jay

// Remove elements (.shift())
// shift() method removes the first element from an array and returns that element.
const shifted = friends2.shift();
console.log(friends2); //? ['Michael', 'Steven', 'Peter']
console.log(shifted); //? John

// indexOf()
// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(friends2.indexOf("Steven")); //? 1
console.log(friends2.indexOf("Bob")); //? -1

// includes() (ES6)
// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(friends2.includes("Steven")); //? true
console.log(friends2.includes("Bob")); //? false

if (friends2.includes("Steven")) {
  console.log("You have a friend called Steven");
} //? You have a friend called Steven

// NOTE: (41) Introduction to Objects
console.log("----Introduction to Objects----");

// Objects are a collection of key-value pairs.
// Objects are a type of data structure that can store data and functions.
// Objects are used to store multiple sets of data.
// Objects are created using curly braces {}.
// Objects can store data and functions.
// Objects can store multiple data types.
// Objects are mutable, meaning they can be changed after they are created.
// Objects are accessed using dot notation or bracket notation.
// Objects are stored in memory as references.
// Objects are passed by reference.
// Objects can be created with object literals.
// Objects can be created with the Object() constructor.
// Objects can be created with the new keyword.
// Objects can be created with the Object.create() method.
// Objects can be created with the class keyword.
// Objects can be created with the function constructor.
// Objects can be created with the ES6 class syntax.

const ethan2 = {
  firstName: "Ethan",
  lastName: "Paguntalan",
  age: 2025 - 2000,
  job: "student",
  friends: ["Michael", "Steven", "Peter"],
};

// Accessing Object Properties
console.log(ethan2);
console.log(ethan2.lastName); //? Paguntalan
console.log(ethan2["lastName"]); //? Paguntalan
