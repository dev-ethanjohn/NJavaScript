/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.asyncIterator property on "book" that
       will allow you to loop over it using a for-await-of-loop
       that will give you back the key-value pairs each loop but
       delayed by 1 second each as a paired array 
       (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-await-of-loop to make sure it works

    HINT: An async generator function is the easiest way to do this
*/

// ====================================
// MAKING AN OBJECT ASYNCHRONOUSLY ITERABLE
// ====================================

// 1️⃣ Creating the "book" object with properties
const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,

  // 2️⃣ Adding a Symbol.asyncIterator to make the object asynchronously iterable
  [Symbol.asyncIterator]: async function* () {
    for (const entry of Object.entries(this)) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1s delay
      yield entry;
    }
  },
};

// ====================================
// USING THE CUSTOM ASYNC ITERATOR
// ====================================

(async () => {
  console.log("Iterating over book properties asynchronously:");

  // ✅ Using for-await-of loop to iterate asynchronously
  for await (const [key, value] of book) {
    console.log([key, value]);
  }
})();

/**
 * 🔹 Expected Output (with 1-second delay between each):
 * Iterating over book properties asynchronously:
 * ["name", "1984"]
 * ["author", "George Orwell"]
 * ["year", 1949]
 * ["rating", 4.6]
 * ["genre", "Science Fiction"]
 * ["movie", true]
 *
 * 🔹 Explanation:
 * - The `[Symbol.asyncIterator]` async generator makes `book` asynchronously iterable.
 * - `for-await-of` allows asynchronous iteration over key-value pairs.
 * - Each iteration is delayed by **1 second** using `setTimeout`.
 */

// ====================================
// KEY TAKEAWAYS
// ====================================

/**
 * ✅ Objects are NOT iterable by default using `for...of` or `for-await-of`.
 * ✅ Assigning an **async generator** to `[Symbol.asyncIterator]` makes objects asynchronously iterable.
 * ✅ `for-await-of` works only with asynchronously iterable objects.
 * ✅ `await new Promise((resolve) => setTimeout(resolve, 1000));` introduces a delay.
 * ✅ `yield entry;` allows iteration over key-value pairs asynchronously.
 */
