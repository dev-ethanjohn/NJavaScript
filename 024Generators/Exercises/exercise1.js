/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/
function* randomNumber() {
  while (true) {
    yield Math.trunc(Math.random() * 100);
  }
}

const randomGenerator = randomNumber();

for (let i = 0; i < 10; i++) {
  console.log(randomGenerator.next().value);
}

//* could also use while
// let count = 0;
// while (count < 10) {
//   console.log(randomGenerator.next().value);
//   count++;
// }

//* could also use for of with if else
// let index = 0;
// for (const number of randomNumber()) {
//   console.log(number);
//   index++;
//   if (index >= 10) break; // Stops after 10 iterations
// }

/*
81
46
26
83
13
39
65
48
38
4
*/
