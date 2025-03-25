'use strict';

// IMPORTANT (179): Converting and Checking Numbers
console.log('---Converting and Checking Numbers');

// In order languages, we have diff type of numbers like floats, int
console.log(23 === 23.0); // ?true

//  Base 10 -> 0 - 9 | 1/10 = 0.1. 3/10 = 3.33333333...infinity
//  Binary base 2  -> 0 1
console.log(0.1 + 0.2); //? 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //? false (an error in JS)

// convert string to number
console.log(Number('23')); //? 23
console.log(+'23'); //? 23 *(type coercion)

// parsing (remove unnecessary symbols to return only numbers)
// thh string must start with a number
//  whitespace wont affect the returned number
console.log(Number.parseInt('30px', 10)); //? 30
console.log(Number.parseInt('px39', 10)); //NaN

console.log(Number.parseInt(' 2.5rem')); //? 2
console.log(Number.parseFloat(' 2.5rem')); //? 2.5

// CHECK if is not a number
console.log(Number.isNaN(' 2.5rem')); //? false
console.log(Number.isNaN(' rem20')); //? false
console.log(Number.isNaN(+'20X')); //? true
console.log(Number.isNaN(23 / 0)); //? false (infinity)

// checks if its a number
console.log(Number.isFinite(20)); //? true
console.log(Number.isFinite('20')); //? false
console.log(Number.isFinite(23 / 0)); //? false
console.log(Number.isFinite(+'20X')); //? false

console.log(Number.isInteger(23)); //? true
console.log(Number.isInteger('23')); //? false
