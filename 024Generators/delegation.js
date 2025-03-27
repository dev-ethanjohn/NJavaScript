// ====================================
//NOTE: GENERATOR FUNCTION WITH `yield*` EXAMPLE
// ====================================

// A generator function named `counter`
// - `function*` defines a generator function.
// - A generator allows execution to pause and resume, returning values one at a time.

const counter = function* () {
  // `yield` pauses the function and returns the value `1`
  yield 1;

  // `yield*` delegates iteration to another iterable (like an array).
  // Instead of yielding each value manually, it iterates over [2, 3, 4].
  yield* [2, 3, 4];

  // `yield` again pauses and returns `5`
  yield 5;
};

// Creating a generator object by calling the `counter` function
const counterGenerator = counter();

// ====================================
//NOTE: METHOD 1: Using a `for...of` loop to iterate over the generator
// ====================================

// The `for...of` loop automatically calls `.next()` on the generator.
// It retrieves values one by one until `done` becomes `true` (meaning no values left).

for (const value of counterGenerator) {
  console.log(value); // Logs each value yielded by the generator
}

/*
Expected Output:
1  // First value directly yielded
2  // First value from the delegated array
3  // Second value from the delegated array
4  // Third value from the delegated array
5  // Last value directly yielded
*/

// ====================================
//NOTE: METHOD 2: Manually Using `.next()` Calls
// ====================================

// Alternative way to iterate through the generator manually using `.next()`

const manualGenerator = counter(); // Creating a new generator instance

console.log(manualGenerator.next()); // { value: 1, done: false }
console.log(manualGenerator.next()); // { value: 2, done: false }
console.log(manualGenerator.next()); // { value: 3, done: false }
console.log(manualGenerator.next()); // { value: 4, done: false }
console.log(manualGenerator.next()); // { value: 5, done: false }
console.log(manualGenerator.next()); // { value: undefined, done: true } (End of generator)

// ====================================
//NOTE: 🔍 DETAILED BREAKDOWN OF THE GENERATOR
// ====================================

// ✅ 1. `yield 1;`
// - The function starts executing and pauses at `yield 1`.
// - It returns `{ value: 1, done: false }` and waits for the next `.next()` call.

// ✅ 2. `yield* [2, 3, 4];`
// - `yield*` delegates execution to the array `[2, 3, 4]`.
// - This means the generator automatically **yields** each item in the array, one at a time.

// ✅ 3. `yield 5;`
// - After finishing the array, the function continues execution and yields `5`.

// ✅ 4. End of Generator
// - Once there are no more `yield` statements left, calling `.next()` returns:
//   `{ value: undefined, done: true }`, signaling that iteration is complete.

// IMPORTANT: USE CASES
//*Delegating to Another Generator
function* generatorA() {
  yield "A1";
  yield "A2";
}

function* generatorB() {
  yield "B1";
  yield* generatorA(); // Delegates to generatorA
  yield "B2";
}

const gen = generatorB();
console.log([...gen]); // ["B1", "A1", "A2", "B2"]

//* Iterating Over Object Properties
// yield* can extract object values dynamically.
function* iterateObject(obj) {
  yield* Object.values(obj);
}

const user = { name: "Alice", age: 25, city: "Paris" };
console.log([...iterateObject(user)]);
// Output: ["Alice", 25, "Paris"]
