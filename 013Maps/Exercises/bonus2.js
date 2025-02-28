/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       out the INDEX of that value as well as the INDEX
       of where it was first found in "numbers"

    3. In this case, we will print:
       4 2

       (4 is where the duplicate index was)
       (2 is the index where it first appeared (stored in the Map).

    HINT: Use a Map to keep track of number->index pairs

    *This is very challenging and is a common interview question
*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const seen = new Map();

for (let i = 0; 1 < numbers.length; i++) {
  const num = numbers[i];

  if (seen.has(num)) {
    //*checks if there is any duplicate
    console.log(i, seen.get(num)); //current index, first stored index of num
    break;
  }

  seen.set(num, i); //normal Map storing
}

console.log(seen); // Stores unique numbers as keys with their first occurrence index

//NOTE: ANSWER 4 2
// ? Map(4) { 10 => 0, 20 => 1, 15 => 2, 30 => 3 }
