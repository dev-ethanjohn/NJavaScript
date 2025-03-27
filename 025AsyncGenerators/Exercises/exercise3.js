/*
    1. Create an async Generator function that has a single
       parameter called "time". This function will yield a
       Promise that resolves with the time taken after that
       many milliseconds. The time for each subsequent Promise
       will take TWICE as long.

    2. Create the generator object by calling the function ^
       with the value 100 to start.

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    4. Example output if we started with:
       const timeGeneratorObject = timeGenerator(100)
       for await (const time of timeGeneratorObject)
          - ^ If we logged "time" each loop we'd get:
          - 100, 200, 400, 800, 1600, 3200 ... etc
*/

// ====================================
// ASYNC GENERATOR FUNCTION: EXPONENTIAL TIME DELAY
// ====================================

// 1️⃣ Create an async generator function that doubles the delay each iteration
const timeGenerator = async function* (time) {
  while (true) {
    yield new Promise((resolve) => {
      setTimeout(() => {
        resolve(time); // Resolves after `time` milliseconds
      }, time);
    });

    time *= 2; // Double the time for the next iteration
  }
};

// 2️⃣ Create the generator object by calling the function
const timeGeneratorObject = timeGenerator(100); // Starts with 100ms

// ====================================
// EXECUTING THE ASYNC GENERATOR
// ====================================

// 3️⃣ Use a `for-await-of` loop to iterate through the generator indefinitely
const executeTimeGenerator = async () => {
  for await (const time of timeGeneratorObject) {
    console.log(time); // Logs each resolved time
  }
};

// ✅ Start the generator execution
executeTimeGenerator();
