// IMPORTANT: Using spread operator , we are only making copies of primitive types. We don't do that with arrays, objects, or anything other than primitive types. Arrays and other referenced types do not get copied separately.

const prices = [[10], [20], [30]];
const copy = [...prices];

console.log(copy); //? [ [ 10 ], [ 20 ], [ 30 ] ]
prices[0].push(15);
console.log(prices); //? [ [ 10, 15 ], [ 20 ], [ 30 ] ]

// NOTE:  Since the spread operator (...) only creates a shallow copy, the inner arrays inside copy still reference the same memory locations as the ones inside prices
console.log(copy); //? [ [ 10, 15 ], [ 20 ], [ 30 ] ]

//NOTE: When you're dealing with primitives (numbers, strings, booleans, etc.), the spread operator (...) creates a completely separate copy because primitives are copied by value, not by reference.

// IMPORTANT To create a complete copy with reference types, use array methods like map
console.log("----deep copy----");
const deepCopy = prices.map((innerArray) => [...innerArray]);

prices[0].push(20);

console.log(prices); //? [ [ 10, 15, 20 ], [ 20 ], [ 30 ] ]   (ADDED 20)
console.log(deepCopy); //? [ [ 10, 15 ], [ 20 ], [ 30 ] ]     (Remained)
