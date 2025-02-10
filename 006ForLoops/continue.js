for (let i = 0; i < 100; i += 10) {
  console.log(i);

  if (i === 20) {
    i += 20;
    continue;

    // other code
  }

  // this will not log 40 cuase we continue after      `i += 20;`
  console.log("Loop", i);

  if (i === 60) {
    break;
  }
}

console.log("Done!");

/*
0
Loop 0
10
Loop 10
20
50
Loop 50
60
Loop 60
Done!
*/
