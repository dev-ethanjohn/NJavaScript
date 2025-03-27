/*
    1. Create a generator function called "randomAmountFromRange"
       which has 3 parameters: amount, min, and max

    2. ^ This function will generate the amount of random numbers
       provided as an argument, between the min and max (inclusive)
       Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19

    3. Create a for...of loop that will loop through the following
       generator objects to test it:
       - randomAmountFromRange(3, 10, 20)
       - randomAmountFromRange(5, 100, 200)
       - randomAmountFromRange(10, 1000, 2000)
*/

function* randomAmountFromRange(amount, min, max) {
  for (let i = 0; i < amount; i++) {
    yield Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log("Random numbers from 10 to 20 (3 values):");
for (const num of randomAmountFromRange(3, 10, 20)) {
  console.log(num);
}

console.log("\nRandom numbers from 100 to 200 (5 values):");
for (const num of randomAmountFromRange(5, 100, 200)) {
  console.log(num);
}

console.log("\nRandom numbers from 1000 to 2000 (10 values):");
for (const num of randomAmountFromRange(10, 1000, 2000)) {
  console.log(num);
}

/*

Random numbers from 10 to 20 (3 values):
15
12
19

Random numbers from 100 to 200 (5 values):
134
187
156
101
198

Random numbers from 1000 to 2000 (10 values):
1785
1340
1921
1603
1429
1845
1092
1767
1543
1972
*/
