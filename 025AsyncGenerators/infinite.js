// ====================================
// ASYNC GENERATOR FUNCTION EXAMPLE
// ====================================

// A generator function named `asyncGenerator`
// - Defined using `async function*`, making it an **async generator**.
// - Async generators allow us to use `await` inside the generator and yield Promises.
// - The function **loops indefinitely**, yielding incremented numbers every 1 second.
// - The loop stops when `i` reaches `5` (controlled with `if (i === 5) return`).

const asyncGenerator = async function* () {
  let i = 0; // Counter starts at 0

  while (true) {
    // `yield` a Promise that resolves with `i + 1` after 1 second.
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i + 1);
      }, 1000);
    });

    i++; // Increment counter

    // Stop the generator when `i` reaches 5.
    if (i === 5) return;

    // We can also delegate iteration using `yield* [1, 2, 3]`
  }
};

// Creating an async generator object by calling the function
const asyncGeneratorObject = asyncGenerator();

// ====================================
// LOGGING THE ASYNC GENERATOR OBJECT
// ====================================

console.log(asyncGenerator); // Logs the function definition: [AsyncGeneratorFunction: asyncGenerator]
console.log(asyncGeneratorObject); // Logs: Object [AsyncGenerator] {}

// ====================================
// EXECUTING THE ASYNC GENERATOR
// ====================================

// - `for await...of` is used because the generator is **async** and yields Promises.
// - This loop waits for each yielded Promise to resolve before continuing.

const asyncGeneratorExecutor = async () => {
  for await (const promise of asyncGeneratorObject) {
    console.log(promise); // Logs `1`, `2`, `3`, `4`, `5` (with 1s delay each)
  }
};

// ✅ Start the async generator execution
asyncGeneratorExecutor();

console.log("Run on main; not affected by async generator");

/*
Expected Output:
Run on main; not affected by async generator   (Immediately)
1  (after 1 second)
2  (after another second)
3  (after another second)
4  (after another second)
5  (after another second, then generator stops)
*/

// ====================================
// 🔍 DETAILED BREAKDOWN OF THE ASYNC GENERATOR
// ====================================

// ✅ 1. `yield new Promise(...)`
// - The generator starts execution and **pauses** at `yield`, returning a Promise.
// - The Promise resolves with an incremented value after 1 second.

// ✅ 2. `i++`
// - The counter is **incremented by 1** after each loop iteration.

// ✅ 3. `if (i === 5) return;`
// - When `i` reaches `5`, the generator **stops execution**.

// ✅ 4. `for await...of`
// - This loop **waits for each yielded Promise to resolve** before logging the value.

// ====================================
// 🔍 COMPARISON: Normal Generator vs Async Generator
// ====================================

// 🔹 **Normal Generator (`function*`)**
// - Yields values **immediately** without waiting.
// - Values must be handled manually (e.g., `.next().value.then(...)` for Promises).

// 🔹 **Async Generator (`async function*`)**
// - Can `await` inside the function and yield **resolved Promises** directly.
// - Works seamlessly with `for await...of`, making async handling much cleaner.

// **Which is better?**
// ✅ If values are **synchronous**, use a normal generator (`function*`).
// ✅ If values are **async (e.g., fetched from an API)**, use an async generator (`async function*`).
