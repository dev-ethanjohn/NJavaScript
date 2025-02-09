/*
    Write out the truth tables for the following boolean operators
    using two boolean values, one on each side:
    - AND
    - OR
    - NOT

    Use console.log to log out the results for each.

    HINT: AND and OR will have 4 possibilities, while NOT has 2
    HINT2: console.log(true && true)
*/

console.log("-----AND-----");

console.log("Hello" && true); //true
console.log("Okay" && false); // false
console.log(0 && 2); // 0
console.log(0 && ""); // 0

console.log(true && true); // true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log("-----OR-----");
console.log(true || true); // true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log("Hello" || true); //Hello
console.log("Okay" || false); // Okay
console.log(0 || 2); // 2
console.log(0 || ""); // ""

console.log("-----NOT-----");
console.log(!true); //false
console.log(!false); //true
