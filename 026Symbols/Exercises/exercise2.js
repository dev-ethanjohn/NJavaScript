/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.iterator property on "book" that will
       allow you to loop over it using a for-of-loop that will
       give you back the key-value pairs each loop as a paired
       array (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-of-loop to make sure it works

    HINT: A generator function is the easiest way to do this
*/

// ====================================
// MAKING AN OBJECT ITERABLE USING SYMBOL.ITERATOR
// ====================================

// 1️⃣ Creating the "book" object with properties
const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,

  // 2️⃣ Adding a Symbol.iterator to make the object iterable
  [Symbol.iterator]: function* () {
    // ✅ Loop through each entry of the object (key-value pairs)
    for (const entry of Object.entries(this)) {
      yield entry; // Yield the key-value pair as an array
    }
  },
};

// ====================================
// USING THE CUSTOM ITERATOR
// ====================================

// ✅ Testing iteration with a for...of loop
console.log("Iterating over book properties:");
for (const [key, value] of book) {
  console.log([key, value]);
}

/**
 * 🔹 Expected Output:
 * Iterating over book properties:
 * ["name", "1984"]
 * ["author", "George Orwell"]
 * ["year", 1949]
 * ["rating", 4.6]
 * ["genre", "Science Fiction"]
 * ["movie", true]
 *
 * 🔹 Explanation:
 * - The `[Symbol.iterator]` generator function makes `book` iterable.
 * - The `for...of` loop retrieves each key-value pair as an array.
 * - Works similarly to how a `Map` is iterated.
 */

// ====================================
// KEY TAKEAWAYS
// ====================================

/**
 * ✅ Objects are NOT iterable by default (cannot use `for...of`).
 * ✅ Assigning a generator to `[Symbol.iterator]` makes objects iterable.
 * ✅ `for...of` works only with iterable objects.
 * ✅ `Object.entries(this)` returns an array of key-value pairs.
 * ✅ `yield entry;` allows iteration over key-value pairs as arrays.
 */
