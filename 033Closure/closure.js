/**
 * Closures in JavaScript
 *
 * A closure is a function that remembers the scope in which it was created,
 * even after that scope has exited. This allows the function to "close over"
 * its surrounding variables, preserving access to them.
 *
 * Closures help with:
 * 1. **Encapsulation** - Private variables and state management.
 * 2. **Data Persistence** - Retaining state between function calls.
 * 3. **Callbacks & Higher-Order Functions** - Maintaining context in asynchronous operations.
 *
 * Example:
 */

const wrapperFunction = () => {
  const prices = [100]; // * 2nd PRIORITY - Outer scope variable

  const logPrices = () => {
    // const prices = [1, 2, 3, 4, 5];   * 1st PRIORITY (Uncommenting this will take precedence)
    console.log(prices); // Accesses `prices` from outer scope
  };

  return logPrices;
};

const result = wrapperFunction();
result(); // Logs: [100] - Closure retains access to `prices` from wrapperFunction()

// console.log(prices); //! ReferenceError - `prices` is not accessible outside wrapperFunction()

/**
 * Explanation:
 * - `wrapperFunction` creates a local variable `prices`.
 * - `logPrices` is an inner function that references `prices`.
 * - `wrapperFunction` returns `logPrices`, forming a closure.
 * - When `result` is called, `logPrices` still has access to `prices`.
 *
 * Key Takeaways:
 * - Closures allow functions to retain access to their lexical scope.
 * - Useful in data hiding, function factories, event handlers, and async operations.
 */
