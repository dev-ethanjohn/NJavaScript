//*Using Loop
// const counter = (number) => {
//   while (number > 0) {
//     console.log(number);
//     number--;
//   }
// };

// counter(10);

// * Recursion (BASIC)
// const counter = (number) => {
//   // base case
//   if (number === 0) return; //break out

//   console.log(number);
//   counter(number - 1);
// };

// counter(5);

//IMPORTANT 📝 Recursive Function to Calculate the Sum of an Array
//
// This function calculates the sum of all elements in an array using recursion.
// It demonstrates how recursion works by breaking the problem into smaller subproblems.

// -------------------------
// ### Key Concepts
// -------------------------

// NOTE: Base Case:
//    - The base case stops the recursion when the index reaches the last element of the array.
//    - Without a base case, the function would keep calling itself indefinitely, leading to a stack overflow error.

// NOTE: Recursive Case:
//    - The function calls itself with a smaller input (incrementing the index).
//    - Each recursive call adds the current element to the result of the next call.

// NOTE Call Stack:
//    - When a function calls itself, the current state (variables, parameters, etc.) is pushed onto the call stack.
//    - Once the base case is reached, the stack starts "unwinding," and each call returns its result to the previous call.

const nums = [1, 2, 3, 4, 5];

// Recursive function to calculate the sum of elements in an array.
// @param {Array} arr - The array of numbers to sum.
// @param {number} index - The current index being processed.
// @returns {number} - The sum of the array elements from the current index to the end.
const sum = (arr, index) => {
  // Base Case:
  // If the index is at the last element of the array, return that element.
  if (index === arr.length - 1) {
    console.log(`base case: index = ${index}`); // Logs the base case for clarity
    return arr[index];
  }

  // Recursive Case:
  console.log(`index: ${index}`);
  // Add the current element to the result of the recursive call
  return arr[index] + sum(arr, index + 1);
};

const result = sum(nums, 0);

console.log(result); // Output: 15

// -------------------------
// ### Step-by-Step Execution
// -------------------------

// Let’s trace the execution of the function step by step for the array `[1, 2, 3, 4, 5]`.

// #### Initial Call:
// `sum([1, 2, 3, 4, 5], 0)`

// 1. First Recursive Call:
//    - `index = 0`
//    - Logs: `index: 0`
//    - Returns: `1 + sum([1, 2, 3, 4, 5], 1)`

// 2. Second Recursive Call:
//    - `index = 1`
//    - Logs: `index: 1`
//    - Returns: `2 + sum([1, 2, 3, 4, 5], 2)`

// 3. Third Recursive Call:
//    - `index = 2`
//    - Logs: `index: 2`
//    - Returns: `3 + sum([1, 2, 3, 4, 5], 3)`

// 4. Fourth Recursive Call:
//    - `index = 3`
//    - Logs: `index: 3`
//    - Returns: `4 + sum([1, 2, 3, 4, 5], 4)`

// 5. Fifth Recursive Call (Base Case):
//    - `index = 4` (last element of the array)
//    - Logs: `base case: index = 4`
//    - Returns: `5`

// #### Unwinding the Call Stack:
// After reaching the base case, the recursion starts "unwinding":

// 1. Fourth Call:
//    - Returns: `4 + 5 = 9`

// 2. Third Call:
//    - Returns: `3 + 9 = 12`

// 3. Second Call:
//    - Returns: `2 + 12 = 14`

// 4. First Call:
//    - Returns: `1 + 14 = 15`

// Final result: `15`.

// -------------------------
// ### Console Output
// -------------------------

// Here’s what gets logged to the console during execution:
//
// ```
// index: 0
// index: 1
// index: 2
// index: 3
// base case: index = 4
// 15
// ```

// - Each `index: X` log corresponds to a recursive call.
// - The `base case: index = 4` log shows when the recursion stops.

// -------------------------
// ### Why Use Recursion?
// -------------------------

// While this problem could also be solved iteratively (e.g., using a loop), recursion is used here to demonstrate:
// 1. How to break a problem into smaller subproblems.
// 2. How the call stack works in recursive functions.

// Recursion is particularly useful for problems like tree traversal, factorial calculation, Fibonacci sequence generation, etc.

// -------------------------
// ### Practice Exercise
// -------------------------

// Modify the function to calculate the **product** of all elements in the array instead of the sum.
// For example, for `[1, 2, 3, 4, 5]`, the result should be `120`.

// const product = (arr, index) => {
//   if (index === arr.length - 1) {
//     return arr[index];
//   }
//   return arr[index] * product(arr, index + 1);
// };

// console.log(product([1, 2, 3, 4, 5], 0)); // Output: 120

// -------------------------
// ### Final Thoughts
// -------------------------

// Recursion can seem tricky at first, but with practice, it becomes easier to understand.
// Start with simple examples like this one, and gradually move to more complex problems.
// Focus on understanding the **base case** and how the problem is broken down into smaller subproblems.
