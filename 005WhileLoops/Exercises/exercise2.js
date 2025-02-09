/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

let count = 10;

while (count <= 40) {
  //   console.log(`count: ${count}`);

  if (count % 2 === 0) {
    console.log(`count: ${count}`);
  }

  count++;
}

console.log("Done");
