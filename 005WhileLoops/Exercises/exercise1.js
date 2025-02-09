/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    3. After 3 loop iterations, change "loggedIn" to be true.
    4. After the loops is done print out: "Sucessfully logged in!"

    HINT1: Be careful for an infinite loop!
    HINT2: Use CMD+C or CTRL+C to get out of an infinite loop in node
*/

let loggedIn = false;
let counter = 0;

// *while not logged in
while (!loggedIn) {
  console.log(`Incorrect login credentials: ${counter + 1}`);

  if (counter === 2) {
    loggedIn = true;
    // We would only use break in an infinite while loop (while (true) {})
    // break;
  }

  counter++;
}

console.log("Successfully logged in!");
