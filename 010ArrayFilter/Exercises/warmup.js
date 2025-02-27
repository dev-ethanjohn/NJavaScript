/*
    1. Create an array called "practice" with the numbers 10-20 (inclusive)

    2. Create another array using filter that keeps the even numbers in "practice"
    
    3. Print out both "practice" and the new filtered array
*/

const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const newPractice = practice.filter((even) => {
  if (even % 2 === 0) {
    return even;
  }

  return false;
});

console.log(practice);
/*
[ 
  10, 11, 12, 13, 14,
  15, 16, 17, 18, 19,
  20
]
*/
console.log(newPractice); // ? [ 10, 12, 14, 16, 18, 20 ]
