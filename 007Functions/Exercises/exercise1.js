/*
    Write a function called "noRemainder":

    1. This function has two parameters:
        - number
        - mod
    2. The function will return:
        - true: if "number" is evenly divisible by "mod" (no remainder)
        - false: if "number" is not evenly divisible by "mod" (has a remainder)

    3. Call your function like so:
        const result1 = noRemainder(10, 7); // result1 should be false
        const result2 = noRemainder(100, 10); // result2 should be true
*/
const noRemainder = (number, mod) => {
  if (number % mod === 0) {
    return true;
  }
  return false;
};

const result1 = noRemainder(10, 7);
console.log(result1); //? false
const result2 = noRemainder(100, 10);
console.log(result2); //? true
