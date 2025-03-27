/*
    1. Create an async Generator function that will yield
       a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)
*/

// ====================================
// ASYNC GENERATOR FUNCTION: RANDOM NUMBER GENERATOR
// ====================================

// 1️⃣ Create an async generator function
// - Uses `async function*` to yield asynchronous values.
// - Each iteration waits 1 second before yielding a **random integer between 0-9**.

const randomNumberGenerator = async function* () {
  while (true) {
    // Yield a Promise that resolves with a random integer (0-9) after 1 second
    yield new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10)); // Random number between 0-9
      }, 1000);
    });
  }
};

// 2️⃣ Create the generator object by calling the function
const randomGeneratorObject = randomNumberGenerator();

// ====================================
// EXECUTING THE ASYNC GENERATOR
// ====================================

// 3️⃣ Use a `for-await-of` loop to loop indefinitely
// - This will keep generating and logging random numbers every second.
// - Use `Ctrl + C` to force exit the program.

const executeRandomGenerator = async () => {
  for await (const number of randomGeneratorObject) {
    console.log(number); // Logs a random number (0-9) every second
  }
};

// ✅ Start the async generator execution
executeRandomGenerator();
