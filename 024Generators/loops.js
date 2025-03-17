const counter = function* () {
  // pause here an return the generator
  yield 1;
  yield 2;
  yield 3;
};

// Create teh generator object
const counterGenerator = counter();

console.log(counterGenerator);

// NOTE FOR OF LOOP
// for (const count of counterGenerator) {
//   console.log(count);
// }

// NOTE REGULAR LOOP

let counterObject = counterGenerator.next();

while (counterObject.done === false) {
  console.log(counterObject.value);
  counterObject = counterGenerator.next();
}

console.log("All done!");
/*
Object [Generator] {}
1
2
3
All done!
*/
