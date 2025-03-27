// ====================================
// SYMBOLS & ITERATORS IN JAVASCRIPT
// ====================================

// 1️⃣ Symbols are unique and immutable primitive values.
// - They are often used for object property keys to avoid name collisions.
// - They can also be used to create private (weakly encapsulated) properties in objects.
// - When assigned to `Symbol.iterator`, they make objects iterable.
// - However, iterating with `Symbol.iterator` does NOT iterate over object properties.

// ====================================
// OBJECT WITH SYMBOL ITERATOR
// ====================================

// ✅ Defining an object with properties and an iterator
const character = {
  name: "ethan",
  class: "axe",
  quote: "I'll never do it!",
  __admin__: false,

  // ✅ Assigning a generator function to Symbol.iterator
  // This makes `character` iterable using `for...of`
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// ====================================
// USING THE CUSTOM ITERATOR
// ====================================

// ✅ Iterating over the object using `for...of`
for (const value of character) {
  console.log(value);
}

/**
 * Output:
 * 1
 * 2
 * 3
 *
 * 🔹 Explanation:
 * - Normally, objects are NOT iterable.
 * - Assigning a generator function to `[Symbol.iterator]` allows iteration.
 * - The function yields values sequentially (1 → 2 → 3).
 * - **Notice:** This does NOT iterate over `name`, `class`, or other object properties.
 */

// ====================================
// OBJECT WITH ARRAY ITERATION
// ====================================

// ✅ Defining an object that wraps an array and makes it iterable
const dataLoader = {
  data: [10, 20, 30, 40, 50], // The array to iterate over

  // ✅ Assigning a generator function to Symbol.iterator
  // This allows `dataLoader` to be used in `for...of`
  [Symbol.iterator]: function* () {
    for (const item of this.data) {
      yield item;
    }
  },
};

// ✅ Iterating over `dataLoader` using `for...of`
for (const value of dataLoader) {
  console.log(value);
}

/**
 * Output:
 * 10
 * 20
 * 30
 * 40
 * 50
 *
 * 🔹 Explanation:
 * - The `[Symbol.iterator]` function allows iteration over `data`.
 * - The generator function loops through the array and yields each item.
 * - The loop stops after all elements are yielded.
 */

// ====================================
// SYMBOL KEYS & OBJECT PROPERTY ITERATION
// ====================================

// ✅ Defining an object with a Symbol key
const objWithSymbol = {
  visibleKey: "I am visible",
  [Symbol("hiddenKey")]: "You can't see me in normal loops",
};

console.log(Object.keys(objWithSymbol)); // [ 'visibleKey' ]
console.log(Object.getOwnPropertySymbols(objWithSymbol)); // [ Symbol(hiddenKey) ]

/**
 * 🔹 Explanation:
 * - `Object.keys(objWithSymbol)` does NOT return Symbol keys.
 * - `Object.getOwnPropertySymbols(objWithSymbol)` is needed to retrieve Symbol keys.
 */

// ====================================
// KEY TAKEAWAYS
// ====================================

/**
 * ✅ Objects are NOT iterable by default.
 * ✅ Assigning a generator to `[Symbol.iterator]` makes objects iterable.
 * ✅ `for...of` works only with iterable objects.
 * ✅ Generators (`function*`) simplify custom iteration logic.
 * ✅ `for...of` only iterates over `yield`ed values, NOT object properties.
 * ✅ To retrieve Symbol properties, use `Object.getOwnPropertySymbols()`.
 */
