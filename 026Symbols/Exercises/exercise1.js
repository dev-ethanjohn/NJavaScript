/*
    1. Create a variable "movie" that points at this Object:
       { name: "Blade Runner", director: "Ridley Scott",
         year: 1982, rating: 89, genre: "Science Fiction" }

    2. Add the two more properties to the "movie" Object:
       [Symbol("budget")]: 30
       [Symbol("boxOffice")]: 41.6

    3. Use a for-of loop to loop through all the entries inside
       "movie" and print out their key-value pairs:
       Eg: name => Blade Runner, director => Ridley Scott

    4. How would you access and print out the symbols in "movie"?
*/

// ====================================
// SYMBOLS AS OBJECT PROPERTIES
// ====================================

// ✅ 1. Creating a "movie" object with initial properties
const movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: 1982,
  rating: 89,
  genre: "Science Fiction",
};

// ✅ 2. Adding Symbol properties (hidden from normal iteration)
const budgetSymbol = Symbol("budget");
const boxOfficeSymbol = Symbol("boxOffice");

movie[budgetSymbol] = 30; // Budget in million dollars
movie[boxOfficeSymbol] = 41.6; // Box office earnings in million dollars

// ====================================
// LOOPING THROUGH OBJECT PROPERTIES
// ====================================

// ✅ 3. Using Object.entries() with a for-of loop
console.log("Movie Properties:");
for (const [key, value] of Object.entries(movie)) {
  console.log(`${key} => ${value}`);
}

/**
 * 🔹 Output:
 * Movie Properties:
 * name => Blade Runner
 * director => Ridley Scott
 * year => 1982
 * rating => 89
 * genre => Science Fiction
 *
 * 🔹 Explanation:
 * - `Object.entries(movie)` returns only enumerable properties.
 * - Symbols are NOT enumerable, so they do not appear in this loop.
 */

// ====================================
// ACCESSING SYMBOL PROPERTIES
// ====================================

// ✅ 4. Retrieving all symbol keys in the object
const movieSymbols = Object.getOwnPropertySymbols(movie);

console.log("\nMovie Symbol Properties:");
for (const sym of movieSymbols) {
  console.log(`${sym.description} => ${movie[sym]}`);
}

/**
 * 🔹 Output:
 * Movie Symbol Properties:
 * budget => 30
 * boxOffice => 41.6
 *
 * 🔹 Explanation:
 * - `Object.getOwnPropertySymbols(movie)` returns an array of all symbol keys.
 * - Symbols are NOT included in standard `for...in` or `Object.entries()` loops.
 * - We must use this method to access symbol-based properties.
 */

// ====================================
// KEY TAKEAWAYS
// ====================================

/**
 * ✅ Symbols can be used as object keys, but they are not enumerable.
 * ✅ Normal loops (e.g., `for...in`, `Object.entries()`) do NOT access symbol properties.
 * ✅ `Object.getOwnPropertySymbols(obj)` is needed to retrieve symbol keys.
 * ✅ Symbols provide a way to create private (hidden) object properties.
 */
