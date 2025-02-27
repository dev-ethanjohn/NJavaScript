/*
    1. Create the following array called "nums":
        [10, 20, 30, 40, 50]

    2. Create an new array called "timesTwo" that:
        - maps over "nums" and returns each number
          multiplied by two

    3. Create an new array called "over50" that:
        - filters "timesTwo" to keep only values over 50

    4. Print out all 3 arrays

    "over50" should contain: [60, 80, 100]
*/

const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map((num) => {
  return num * 2;
});

const over50 = timesTwo.filter((num) => {
  if (num > 50) {
    return true;
  }

  return false;
});

console.log(nums); //? [ 10, 20, 30, 40, 50 ]
console.log(timesTwo); //? [ 20, 40, 60, 80, 100 ]
console.log(over50); //? [ 60, 80, 100 ]

// prettier-ignore
// NOTE: SHORTHAND using chaining
const isDoubledAndOver50 = nums
    .map((num) => num * 2)
    .filter((num) => num > 50);

console.log(isDoubledAndOver50); // ?[ 60, 80, 100 ]
