// ====================================
// GENERATOR FUNCTION WITH PROMISES
// ====================================

// A generator function named `counter`
// - `function*` defines a generator function.
// - A generator allows execution to pause and resume, yielding values one at a time.
// - In this case, the generator yields Promises that resolve after a delay.

const counter = function* () {
  // `yield` returns a Promise that resolves to `1` after 1 second.
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  // `yield` returns a Promise that resolves to `2` after 2 seconds.
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

// Creating a generator object by calling the `counter` function
const counterGenerator = counter();

// ====================================
// LOGGING THE GENERATOR OBJECT
// ====================================

console.log(counter); // Logs the function definition: [GeneratorFunction: counter]
console.log(counterGenerator); // Logs: Object [Generator] {}

// ====================================
// METHOD 1: Handling Promises using `.then()`
// ====================================

// - The `.next()` method is called on the generator to retrieve the first yielded value.
// - Since the value is a Promise, we handle it using `.then()`.

counterGenerator.next().value.then((result) => {
  console.log(result); // Logs `1` after 1 second
});

counterGenerator.next().value.then((result) => {
  console.log(result); // Logs `2` after 2 more seconds
});

/*
Expected Output (with delays):
1  (after 1 second)
2  (after an additional 2 seconds)
*/

// ====================================
// METHOD 2: Using an `async function` with `await`
// ====================================

// - This method loops through the generator and `await`s each Promise.
// - Since the generator object is iterable, we use `for...of` to iterate over its values.

const getObjectsAsync = async () => {
  for (const promise of counter()) {
    const result = await promise; // Wait for the Promise to resolve
    console.log(result); // Logs `1` and then `2`
  }
};

// ✅ Uncomment to run this method
// getObjectsAsync();

/*
Expected Output:
1  (after 1 second)
2  (after 2 more seconds)
*/

// ====================================
// METHOD 3: Using `for await...of`
// ====================================

// - Normally, `for await...of` is used for **async generators** (`async function*`).
// - However, it works here because the generator yields **Promises**, which `for await...of` will wait for.

(async () => {
  for await (const promise of counter()) {
    console.log(promise); // Logs `1` and then `2`
  }
})();

/*
Expected Output:
1  (after 1 second)
2  (after 2 more seconds)
*/

// ====================================
// 🔍 COMPARISON: `.then()` vs `await`
// ====================================

// ✅ `.then()` Approach:
// - Calls `.next()` manually, then handles the Promise separately.
// - More control but requires multiple `.then()` calls.
// - Can lead to **callback nesting** if used for multiple promises.

// ✅ `await` in `for...of`:
// - Cleaner, avoids nesting, and looks synchronous.
// - However, **it does not work for async generators (`async function*`)**.

// ✅ `for await...of`:
// - Works natively with Promises inside a generator.
// - More readable and avoids the need for manual `.next()` calls.

// **Which is better?**
// 🔹 If working with a small number of Promises -> `.then()` is fine.
// 🔹 If handling multiple Promises -> `await` is cleaner.
// 🔹 If iterating over Promises from a generator -> `for await...of` is best.
