// ==============================
// NOTE: GENERATOR FUNCTION EXAMPLE
// ==============================

// - A generator function is defined using `function*` syntax.
// - `yield` pauses execution and returns a value.
// - Calling `.next()` resumes execution from where it was paused.

const counter = function* () {
  // `yield` pauses the function and returns a value each time `.next()` is called
  yield 1;
  yield 2;
  yield 3;
};

// Create the generator object
const counterGenerator = counter();

console.log(counterGenerator); // Logs the generator object

// ==============================
// NOTE: METHOD 1: USING FOR...OF LOOP
// ==============================

// - The `for...of` loop automatically calls `.next()`
// - It iterates until `{ done: true }` is reached
// - This is the cleanest way to iterate over a generator

// Uncomment to test this method
/*
for (const count of counterGenerator) {
  console.log(count);
}
*/

// ==============================
//  NOTE: METHOD 2: USING A WHILE LOOP
// ==============================

// - Manually calling `.next()` to retrieve values
// - Stops when `done` is `true`

let counterObject = counterGenerator.next(); // Get the first yielded value

while (counterObject.done === false) {
  console.log(counterObject.value); // Log the yielded value

  counterObject = counterGenerator.next(); // Move to the next yield
  console.log(counterObject); // Log the next result object
}

console.log("All done!"); // Indicate completion

/*
Expected Output:
1
{ value: 2, done: false }
2
{ value: 3, done: false }
3
{ value: undefined, done: true }
All done!
*/

// ==============================
// IMPORTANT NOTE ABOUT GENERATORS
// ==============================

// NOTE: Once a generator is exhausted (`done: true`), calling `.next()` will always return `{ value: undefined, done: true }`
// - To reuse a generator, a new instance must be created.

console.log(counterGenerator.next()); // { value: undefined, done: true } - Generator exhausted

//* To iterate again, we need to create a new generator instance
const newCounterGenerator = counter();

console.log(newCounterGenerator.next()); // { value: 1, done: false }
