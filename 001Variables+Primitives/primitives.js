/* 2 WAYS of doing things */

// (1) Declaration + Assignment
let city = "London";

// (2) Declaration
let country;
// Assignment
country = "UK";

// Reassignment
/*In swift, let cannot be reassigned HAHA */
country = "Philippines";

//! const -≥ cannot be reassigned
const animal = "Monkey";
// animal = "Cat"; !ERROR

/*==== Numbers ====*/
const age = 24;
let price = 12.3;

/*==== Boolean ====*/
const happy = true;
let sad = false;

/*==== Null / Undefined ====*/
const empty = null;
const empty2 = undefined;

//NOTE
/**----------------------------------------------
 * Javascript is a dynamic language. Unlike swift, dart or any, JS allow you to reassigned a new type to your variable. (Not quite type sate) In short,
 * ? In short, a "Loosely/Dynamically typed" language. It does not enforce strict type checking at compile time
 *---------------------------------------------**/
// Example (4 separate containers)
const var1 = "Hello"; // A string
const var2 = 42; // A number
const var3 = "Hello"; // Another string

let var4 = var3; // var4 now holds "Hello"
var4 = "Meow"; // var4 is now changed to "Meow"

console.log(var4); // Output: Meow

/*---- END OF SECTION----*/
//
//
//
//
//
//
//
//
//IMPORTANT
/*================== QUIZ =================*/
console.log(5 == "5"); // true (loose equality ignores type)
console.log(5 === "5"); // false (strict equality checks type)

let x = "10";
let y = 5;
console.log(x + y); // "105" (string concatenation)
console.log(x - y); // 5 (arithmetic forces number conversion)

console.log(typeof null); // "object" (quirk of JavaScript)
console.log(typeof undefined); // "undefined" (type is undefined)

let a = "Hello";
let b = "World";
console.log(a + " " + b); // "Hello World" (strings joined with space)

console.log("10" * 2); // 20 (arithmetic converts string to number)
console.log("10" + 2); // "102" (concatenation treats number as string)
