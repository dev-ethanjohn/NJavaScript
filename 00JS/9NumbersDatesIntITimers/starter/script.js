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

//* parsing (remove unnecessary symbols to return only numbers)
// thh string must start with a number
//  whitespace wont affect the returned number
console.log(Number.parseInt('30px', 10)); //? 30
console.log(Number.parseInt('px39', 10)); //NaN

console.log(Number.parseInt(' 2.5rem')); //? 2
console.log(Number.parseFloat(' 2.5rem')); //? 2.5

//* CHECK if is not a number
console.log(Number.isNaN(' 2.5rem')); //? false
console.log(Number.isNaN(' rem20')); //? false
console.log(Number.isNaN(+'20X')); //? true
console.log(Number.isNaN(23 / 0)); //? false (infinity)

//* checks if its a number
console.log(Number.isFinite(20)); //? true
console.log(Number.isFinite('20')); //? false
console.log(Number.isFinite(23 / 0)); //? false
console.log(Number.isFinite(+'20X')); //? false

console.log(Number.isInteger(23)); //? true
console.log(Number.isInteger('23')); //? false

// IMPORTANT (180) Math and Rounding
console.log('---Math and Rounding---');

console.log(Math.sqrt(25)); //? 5
// the same but more flexible
console.log(25 ** (1 / 2)); //? 5
console.log(25 ** (1 / 3)); //? 2.924017738212866

//* Math.max does type coercion but not parsing
console.log(Math.max(4, 18, 23, 11, 30)); //? 30
console.log(Math.max(4, 18, '23', 11, 30)); //? 30
console.log(Math.max(4, 18, '23px', 11, 30)); //? NaN

console.log(Math.min(4, 18, 23, 11, 30)); //? 4

//* calculate the area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2); //? 314.1592653589793

//* Get random number
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(10, 20)); // Possible values: 10, 11, 12, ..., 20
randomInt(5, 15); // Possible values: 5, 6, 7, ..., 15
randomInt(0, 5); // Possible values: 0, 1, 2, ..., 5

//* Rounding integers
// all these do type coercion
console.log(Math.trunc(23.3)); //? 23 *Removes the decimal part

console.log(Math.round(23.3)); //? 23 *Rounds to the nearest integer
console.log(Math.round(23.9)); //? 24

console.log(Math.ceil(23.3)); //? 24 *always round up
console.log(Math.ceil('23.9')); //? 24

console.log(Math.floor(23.3)); //? 23 *always round down
console.log(Math.floor(23.9)); //? 23

console.log(Math.trunc(-23.3)); //? -23
console.log(Math.floor(-23.3)); //? -24 *better since it covers negative values ((rounds down))

//* Rounding decimals
// strings, we have to add Number or `+` to make them Numbers
console.log((2.7).toFixed(0)); //? 3 *rounded up
console.log((2.7).toFixed(3)); //? 2.700
console.log((2.234).toFixed(2)); //? 2.23
console.log(+(2.234).toFixed(2)); //? 2.23
