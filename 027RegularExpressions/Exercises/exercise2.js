/*
    *Building on exercise 2

    1. Create a variable called "email" that points at:
       "monkey@trees.com"

    2. Create a variable called "emailPattern" that is
       a regular expression that will look for a string
       that ENDS with ".com" AND has ANY number of letters
       followed by the '@' char followed by ANY number of
       letters and ending with the "".com"

    3. Test "email" against "emailPattern" to see if
       it returns true/false using .test on "emailPattern"

    4. Find a match using .match on "email" with the
       "emailPattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/

// Step 1: Create a variable called "email"
const email = "monkey@trees.com";

// Step 2: Create a regex pattern that checks for a valid email ending with ".com"
const emailPattern = /^[a-zA-Z]+@[a-zA-Z]+\.(com)$/;

// Step 3: Use .test() to check if the pattern exists in "email"
const isValid = emailPattern.test(email);
console.log(isValid); // Expected output: true

// Step 4: Use .match() to find matches in "email"
const matchResult = email.match(emailPattern);
console.log(matchResult);

// Expected output:
// [
//   'monkey@trees.com',
//   'com',
//   index: 0,
//   input: 'monkey@trees.com',
//   groups: undefined
// ]

const improvedEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(improvedEmailPattern.test("monkey@trees.com")); // ✅ true
console.log(improvedEmailPattern.test("user.name@sub.domain.com")); // ✅ true
console.log(improvedEmailPattern.test("user123@work.net")); // ✅ true
console.log(improvedEmailPattern.test("user@.com")); // ❌ false (invalid domain)
console.log(improvedEmailPattern.test("user@com")); // ❌ false (TLD must be at least 2 letters)
