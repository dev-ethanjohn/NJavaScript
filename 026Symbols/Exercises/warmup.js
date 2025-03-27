/*
    1. Create a variable called "baboon" that points to a Symbol
       with a description of "Monkey"

    2. Create a variable called "gorilla" that points to a Symbol
       with a description of "Monkey" as well

    3. Print out the types of each of the symbols as well as their
       description property

    4. Are the two symbols equivalent? (Equality check)
       Why or why not?
*/

// ====================================
// SYMBOLS IN JAVASCRIPT
// ====================================

// ✅ 1. Creating two Symbol variables with the same description
const baboon = Symbol("Monkey"); // A unique Symbol with the description "Monkey"
const gorilla = Symbol("Monkey"); // Another unique Symbol with the same description

// ====================================
// LOGGING SYMBOLS
// ====================================

// ✅ 2. Checking the type of each variable
console.log(typeof baboon); // "symbol"
console.log(typeof gorilla); // "symbol"

// ✅ 3. Accessing the description property
console.log(baboon.description); // "Monkey"
console.log(gorilla.description); // "Monkey"

// ====================================
// SYMBOL EQUALITY CHECK
// ====================================

// ✅ 4. Comparing the two symbols
console.log(baboon === gorilla); // ❌ false

/**
 * 🔹 Explanation:
 * - Even though both symbols share the same description ("Monkey"),
 *   they are unique and different from each other.
 * - `Symbol()` always generates a new and distinct symbol instance.
 * - The description is for debugging purposes only; it does not affect uniqueness.
 */

// ====================================
// KEY TAKEAWAYS
// ====================================

/**
 * ✅ Symbols are unique, even if they have the same description.
 * ✅ Their uniqueness prevents accidental property name collisions in objects.
 * ✅ Unlike strings, symbols with the same description are NOT the same.
 * ✅ Symbols are a great way to create private or hidden object properties.
 */
