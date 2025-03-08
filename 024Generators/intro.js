// NOTE ITERABLES -> arrays, strings, sets, maps, others...
// generators is also an iterable
// generators is like an async function in how they pause execution

// Generator function declaration
const counter = function* () {
  // pause here an return the generator
  console.log("This is the first log");
  yield 1;
  console.log("This is after yield 1");
  yield 2;
  yield 3;
};

// Create teh generator object
const counterGenerator = counter();

console.log(counterGenerator.next()); //? { value: 1, done: false }
console.log(counterGenerator.next()); //? { value: 2, done: false }
console.log(counterGenerator.next()); //? { value: 3, done: false }
console.log(counterGenerator.next()); //? { value: undefined, done: true } //it exhaust the generator since done = true
