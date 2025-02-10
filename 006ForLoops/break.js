for (let i = 0; i < 100; i += 5) {
  console.log(i);

  if (i === 25) {
    console.log("Ha! gotcha");
    break;
  }

  // have more control when we break the loop based off diff conditions
  if (i === 15) {
    break;
  }

  console.log("Loop:", i);
}

console.log("15!");

/*
0
Loop: 0
5
Loop: 5
10
Loop: 10
15
15!
*/
