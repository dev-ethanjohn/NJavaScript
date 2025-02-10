/*
    Create a for loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

//  for even
for (num = 10; num <= 40; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

console.log("-----------------");

// for odd
for (num = 10; num <= 40; num++) {
  if (num % 2 === 1) {
    console.log(num);
  }
}
