/*
    1. Create an array called "practice" with the numbers 25-30 (inclusive)

    2. Create another array using map that squares each number in "practice"
    
    3. Print out both "practice" and the new mapped array
*/

const practice = [25, 26, 27, 28, 29, 30];
const newPractice = practice.map((num) => {
  return num * num;
});

console.log(newPractice); //? [ 625, 676, 729, 784, 841, 900 ]
