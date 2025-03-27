/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/

// ====================================
// ASYNC GENERATOR FUNCTION: RANDOM SPEED RESPONSE
// ====================================

// 1️⃣ Create an async generator function
// - Has a 50% chance of yielding either:
//   - "Fast!" (resolves after 500ms)
//   - "Slow!" (resolves after 3000ms)

const randomSpeedGenerator = async function* () {
  while (true) {
    yield new Promise((resolve) => {
      // 50% chance to choose fast (500ms) or slow (3000ms)
      const isFast = Math.random() < 0.5; // 50% probability
      const delay = isFast ? 500 : 3000;
      const message = isFast ? "Fast!" : "Slow!";

      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
};

// 2️⃣ Create the generator object by calling the function
const speedGeneratorObject = randomSpeedGenerator();

// ====================================
// EXECUTING THE ASYNC GENERATOR
// ====================================

// 3️⃣ Use a `for-await-of` loop to loop indefinitely
// - This will keep logging either "Fast!" or "Slow!" randomly.
// - Use `Ctrl + C` to force exit the program.

const executeSpeedGenerator = async () => {
  for await (const message of speedGeneratorObject) {
    console.log(message); // Logs "Fast!" or "Slow!" with the corresponding delay
  }
};

// ✅ Start the async generator execution
executeSpeedGenerator();
