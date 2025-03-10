/*
    1. Create a try block that does the following:
        - Create a variable called "number" and initialize
          it to the number 1337
        - Add a random number between 0-1000 to "number"
        - Logs out "number"
        - If number is less than 2000:
            - Throws an Error Object with the message: "You lose!"
        - Otherwise, log out "You win!" with no throw/error
    2. Create a catch block that catches the error and logs it
    3. Inside the catch block, log out "number" as well

    4. What is the issue with this setup/code?
    5. How can we fix it so we can access "number" in the catch?
*/

let number = 1337;
const randomNum = Math.floor(Math.random() * 1001);
number += randomNum;

try {
  if (number < 2000) {
    throw new Error("You lose!");
  } else {
    console.log("You win!");
  }
  console.log(number);
} catch (err) {
  console.error(`${err} ${number} is less than 2000`);
  console.log(number);
}

/*
Error: You lose! 1651 is less than 2000
1651
*/
