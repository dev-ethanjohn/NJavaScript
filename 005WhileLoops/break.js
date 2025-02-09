let score = 0;

while (true) {
  // use backticks if you have template literals.
  console.log(`inside the loop! ${score + 1}`);

  if (score >= 3) {
    break;
  }

  score++;
}

console.log("Done!");
/*
inside the loop! 1
inside the loop! 2
inside the loop! 3
inside the loop! 4
Done!
*/
