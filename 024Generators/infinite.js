// ====================================
// NOTE: INFINITE GENERATOR FUNCTION EXAMPLE
// ====================================

// - A generator function that produces an infinite sequence of numbers.
// - Uses a `while (true)` loop to keep yielding values indefinitely.

const counter = function* () {
  let i = 0; // Start the counter at 0

  while (true) {
    yield i; // Pause execution and return the current value of `i`
    i++; // Increment `i` for the next iteration
  }
};

// Create an instance of the generator
const counterGenerator = counter();

// ====================================
// NOTE: METHOD 1: FOR...OF LOOP (INFINITE)
// ====================================

// - A `for...of` loop would run indefinitely, since the generator never completes.
// - Uncommenting the code below will cause an infinite loop.
// - Only safe to use with a `break` condition.

// Uncomment with caution
/*
for (const value of counterGenerator) {
  console.log(value);
}
*/

// ====================================
// NOTE: METHOD 2: CONTROLLED WHILE LOOP
// ====================================

// - We manually control the number of iterations using a `count` variable.
// - Calls `.next()` five times and logs the results.

let count = 0;

while (count < 5) {
  // `.next()` returns an object with `{ value, done }`
  console.log(counterGenerator.next()); // Logs the next generated value
  count++;
}

/*
Expected Output:
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
*/

// ====================================
// IMPORTANT NOTES
// ====================================

// - The generator does NOT terminate (`done: false` indefinitely).
// - Each `.next()` call resumes execution, retrieves the next value, and pauses again.
// - Unlike a normal function, it does NOT return all values at once—values are generated on demand.
