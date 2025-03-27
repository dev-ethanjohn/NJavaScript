// ==============================
// NOTE: GENERATOR FUNCTION EXAMPLE
// ==============================
const counter = function* () {
  yield 1;
  yield 2;
  return;
  yield 3; //* this won't yield (stops the iteration)
};

// Create the generator object
const counterGenerator = counter();

console.log(counterGenerator); // Logs the generator object

for (const value of counterGenerator) {
  console.log(value);
}

// Object [Generator] {}
// 1
// 2

console.log(counterGenerator.next()); //? { value: undefined, done: true } *it doesn't reached the `yield 3`
