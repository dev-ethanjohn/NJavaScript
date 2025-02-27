/*
    1. Create a variable called "multiple" and initialize it to 5
    2. Create an array with the numbers 10-15 (inclusive)
    3. Loop through the array and on each iteration:
        - Multiply the number by the multiple and print out the result
        - As you're printing, use this format (example):
            10 x 5 = 50
            11 x 5 = 55
            ...
            15 x 5 = 75

    BONUS: Try to see if you can make it so that all you need to change
    is the "multiple" variable and the program still works correctly.
*/

const multiple = 5;
const nums = [10, 11, 12, 13, 14, 15];

for (let i = 0; i < nums.length; i++) {
  const product = nums[i] * multiple;

  console.log(`${nums[i]} x ${multiple} = ${product}`);
}

/*
10 x 5 = 50
11 x 5 = 55
12 x 5 = 60
13 x 5 = 65
14 x 5 = 70
15 x 5 = 75
*/
