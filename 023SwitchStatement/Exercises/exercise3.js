/*
    1. Create a variable called "points" that points at the Array:
       [3, 4, 1, 0, 1, 5, 6]

    2. Create a loop that loops over "points" and inside the loop use
       a switch statement that has these cases:
       - 0-2: print out only "Good try!"
       - 3-5: print out only "Very well done!"
       - Otherwise only print out "Wow, shooting for the moon!"

    3. Run the code and make sure the correct messages get printed out
*/
const points = [3, 4, 1, 0, 1, 5, 6];

for (const point of points) {
  switch (true) {
    case point >= 0 && point <= 2:
      console.log(`${point}: Good try!`);
      break;

    case point >= 3 && point <= 5:
      console.log(`${point}: Very well done!`);
      break;

    default:
      console.log(`${point}: Wow, shooting for the moon!`);
  }
}

// 3: Very well done!
// 4: Very well done!
// 1: Good try!
// 0: Good try!
// 1: Good try!
// 5: Very well done!
// 6: Wow, shooting for the moon!

// NOTE: switch (true) -> Allow range comparison for cases
