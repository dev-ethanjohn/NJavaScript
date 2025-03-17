const js = "amazing";
// if (js === "amazing") {
//   alert("JavaScript is FUN!");
//
console.log(40 + 8 - 10);

// NOTE: (9) VALUES AND VARIABLES
console.log("----9 Values and Variables----");
console.log(49 + 10 + 5 - 10); //? 54

// Declare a variable with an initial value
// Use camelCase for variable names
// Do not start with a number or special character
// Do not use reserved JS keywords
// Variables are case-sensitive
// Use descriptive names
let firstName = "Ethan";
let age = 24;
console.log(firstName, age); //? Ethan 24

// NOTE: (10) Assignment
console.log("----10 Assignment----");
//1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
//2. Log their values to the console.
const country = "Philippines";
const continent = "Asia";
const population = 114;

console.log(country, continent, population); //? Philippines Asia 114

// NOTE: (11) Data Types
console.log("----11 Data Types----");
// 7 Primitive Data Types
// 1. Number: Floating point numbers (decimal numbers)
// 2. String: Sequence of characters
// 3. Boolean: Logical type that can only be true or false
// 4. Undefined: Value taken by a variable that is not yet defined ('empty value')
// 5. Null: Also means 'empty value'
// 6. Symbol: Value that is unique and cannot be changed
// 7. BigInt: Larger integers than the Number type can hold

// Javascript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically. The value determines the data type, not the variable itself.

let javascriptIsFun = true;
console.log(javascriptIsFun); //? true

console.log(typeof true); //? boolean
console.log(typeof javascriptIsFun); //? boolean
console.log(typeof 23); //? number
console.log(typeof "Ethan"); //? string

javascriptIsFun = "YES!"; // reassigned from boolean to a string
console.log(typeof javascriptIsFun); //? string

// Variable declaration
let year;
console.log(year); //? undefined (no value assigned)
console.log(typeof year); //? undefined string

// Assignment
year = 1997;
console.log(year); //? 1997
console.log(typeof year); //? number

console.log(typeof null); //? object (a bug in JS)

// NOTE: (12) Let, Const, and Var
console.log("----12 Let, Const, and Var----");
// Use let for variables that will change
let age2 = 24;
age2 = 25;

// Use const for variables that will not change
const birthYear = 1997;
// birthYear = 1996; //? TypeError

// Use var for variables that will change (old way)
var job = "developer";
job = "teacher";

// Use const by default, and let when you need to reassign a variable
// Avoid using var

// NOTE: (13) Basic Operators
console.log("----13 Basic Operators----");
// Arithmetic Operators
const now = 2021;
const ageEthan = now - 1997;
const ageSarah = now - 1996;
console.log(ageEthan, ageSarah); //? 24 25

console.log(ageEthan * 2, ageEthan / 10, 2 ** 3); //? 48 2.4 8
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName2 = "Ethan";
const lastName = "Lopez";
console.log(firstName2 + " " + lastName); //? Ethan Lopez (String concatenation)

// Assignment Operators
let x = 10 + 5; //? 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x); //? 100

// Comparison Operators
console.log(ageEthan > ageSarah); //? false
console.log(ageSarah >= 18); //? true

const isFullAge = ageSarah >= 18; //? true
console.log(now - 1997 > now - 1996); //? false

// NOTE: (14) Operator Precedence
console.log("----14 Operator Precedence----");

// MDN Operator Precedence Table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Higher precedence means the operator is executed first
// Operator precedence determines the order in which operators are executed

const now2 = 2025;
const ageEthan2 = now2 - 1997;
const ageSarah2 = now2 - 1996;

console.log(now2 - 1997 > now2 - 1996); //? false

let x2, y;
x2 = y = 25 - 10 - 5; // x = y = 10
console.log(x2, y); //? 10 10

const averageAge = (ageEthan2 + ageSarah2) / 2;
console.log(ageEthan2, ageSarah2, averageAge); //? 28 29 28.5

// NOTE: (17) Strings and Template Literals
console.log("----17 Strings and Template Literals----");
const firstName3 = "Ethan";
const job2 = "developer";
const birthYear2 = 1997;
const year2 = 2021;

const ethan =
  "I'm " +
  firstName3 +
  ", a " +
  (year2 - birthYear2) +
  " year old " +
  job2 +
  "!";
console.log(ethan); //? I'm Ethan, a 24 year old developer!

// Template Literals
const ethanNew = `I'm ${firstName3}, a ${year2 - birthYear2} year old ${job2}!`;
console.log(ethanNew); //? I'm Ethan, a 24 year old developer!

// Multiline string
console.log(`String
multiple
lines`);

// NOTE: (18) Taking Decisions: if/else Statements
console.log("----18 Taking Decisions: if/else Statements----");
const age3 = 16;
const isOldEnough = age3 >= 18;
let yearsLeft;

if (isOldEnough) {
  console.log("Ethan can start driving license 🚗");
} else {
  yearsLeft = 18 - age3;
  console.log(`Ethan is too young. Wait another ${yearsLeft} years.`);
}

const birthYear3 = 1997;

let century;
if (birthYear3 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); //? 20
