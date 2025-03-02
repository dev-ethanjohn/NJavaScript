/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]

    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place or 1
        - if "false", return 0

    3. Print out both arrays

    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/

const bools = [true, true, false, true, false, false];

const newBools = bools.map((result) => {
  if (result === true) {
    return 1;
  }
  return 0;
});

console.log(bools); //? [ true, true, false, true, false, false ]
console.log(newBools); //? [ 1, 1, 0, 1, 0, 0 ]
