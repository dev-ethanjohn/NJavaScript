/**
 * Closures in JavaScript: Scope, State, and Functions
 * ---------------------------------------------------
 * A closure is a function that "remembers" the variables from its surrounding (lexical) scope,
 * even after the outer function has finished executing.
 *
 * Closures are useful for:
 * - Encapsulation: Keeping variables private.
 * - Maintaining State: Remembering values between function calls.
 * - Creating Functions Dynamically: Useful in event handlers, callbacks, and function factories.
 */

// -----------------------------
//* 🔹 Example 1: Global Scope
// -----------------------------
const prices = [10, 28, 99, 3];

const logPrices = () => {
  console.log(prices); // ✅ Accessing global variable
};

logPrices(); // Output: [ 10, 28, 99, 3 ]
console.log(prices); // Output: [ 10, 28, 99, 3 ] ✅ Accessible globally

// -----------------------------
//* 🔹 Example 2: Function Scope
// -----------------------------
const logPrices2 = () => {
  const prices2 = [10, 28, 99, 3]; // 🛑 Local variable
  console.log(prices2); // ✅ Works inside the function
};

logPrices2();
// console.log(prices2); // ❌ ReferenceError: prices2 is not defined

// -----------------------------
// *🔹 Example 3: Closures in Action
// -----------------------------
const createPriceLogger = () => {
  const prices = [10, 28, 99, 3]; // Enclosed variable (private state)

  return () => {
    console.log(prices); // ✅ Still accessible inside the inner function
  };
};

const logPricesClosure = createPriceLogger();
logPricesClosure(); // Output: [10, 28, 99, 3]

// -----------------------------
// 🔹 Key Takeaways
// -----------------------------
/**
 * 1. Scope defines where variables exist:
 *    - Global variables are accessible anywhere.
 *    - Local variables exist only inside functions.
 * 2. Closures "remember" variables from their outer function, even after it returns.
 * 3. Use closures for private state management, such as counters, event listeners, and function factories.
 */
