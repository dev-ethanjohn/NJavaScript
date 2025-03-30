/*
    1. Create a function called "fizzbuzz" that takes two
       number arguments: "startNum" and "endNum"
    2. The function will count from "startNum" to the "endNum"
       incrementing by 1 each time and do the following:
    3. If the number is:
       - Divisible by 3: Print "Fizz" followed by the number
       - Divisible by 5: Print "Buzz" followed by the number
       - Divisible by both 3 AND 5:
         - Print "FizzBuzz" followed by the number (no fizz or buzz)
       - In all other cases, just print the number itself
        
    3. You must solve this using recursion
    4. Test it with different start and end values

    HINT: What is the base-case vs the "regular" cases here?
*/

const fizzbuzz = (startNum, endNum) => {
  // base
  if (startNum > endNum) {
    return;
  }

  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log(`FizzBuzz: ${startNum}`);
  } else if (startNum % 3 === 0) {
    console.log(`Fizz: ${startNum}`);
  } else if (startNum % 5 === 0) {
    console.log(`Buzz: ${startNum}`);
  } else {
    console.log(startNum);
  }

  fizzbuzz(startNum + 1, endNum);
};

fizzbuzz(1, 15);

/*
1
2
Fizz: 3
4
Buzz: 5
Fizz: 6
7
8
Fizz: 9
Buzz: 10
11
Fizz: 12
13
14
FizzBuzz: 15
*/

// /**
//  * Recursively generates an array for FizzBuzz numbers from startNum to endNum.
// const fizzbuzz = (startNum, endNum, result = []) => {
//   // Base case: Stop recursion when startNum exceeds endNum
//   if (startNum > endNum) {
//     return result;
//   }

//   // Determine FizzBuzz value
//   let value;
//   if (startNum % 3 === 0 && startNum % 5 === 0) {
//     value = `FizzBuzz: ${startNum}`;
//   } else if (startNum % 3 === 0) {
//     value = `Fizz: ${startNum}`;
//   } else if (startNum % 5 === 0) {
//     value = `Buzz: ${startNum}`;
//   } else {
//     value = startNum;
//   }

//   // Recursive call with updated array
//   return fizzbuzz(startNum + 1, endNum, [...result, value]);
// };

// // Test the function
// const resultArray = fizzbuzz(1, 15);
// console.log(resultArray);
