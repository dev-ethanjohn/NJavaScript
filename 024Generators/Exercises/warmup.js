/*
    1. Create a generator function called "countTo10" that will
       yield the numbers 0-10 (inclusive) then stop.

    2. Create the generator object by calling the generator
       function and iterate through the generator using a
       for...of loop.
*/

function* countTo10() {
  for (let i = 0; i <= 10; i++) {
    yield i;
  }
}

// generator object
const counter = countTo10();

for (const number of counter) {
  console.log(number);
}

/*
   0
   1
   2
   3
   4
   5
   6
   7
   8
   9
   10
*/
