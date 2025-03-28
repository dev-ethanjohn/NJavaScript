/*
    1. Create a variable called "phoneNumber" that points at:
       the string: "020-382-6940"

    2. Create a regular expression called "phonePattern" that
       is a regular expression that would match a phone number
       with the format above in "phoneNumber" (including dashes)

    3. Test "phoneNumber" against "phonePattern" to see if
       it returns true/false using .test on "phonePattern"

    4. Find a match using .match on "phoneNumber" with the
       "phonePattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/

// Step 1: Create a variable called "phoneNumber"
const phoneNumber = "020-382-6940";

// Step 2: Create a regex pattern to match the format: XXX-XXX-XXXX
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

// Step 3: Use .test() to check if "phoneNumber" matches the pattern
const isValid = phonePattern.test(phoneNumber);
console.log(isValid); // Expected output: true

// Step 4: Use .match() to find a match in "phoneNumber"
const matchResult = phoneNumber.match(phonePattern);
console.log(matchResult);

// Expected output:
// [
//   '020-382-6940',
//   index: 0,
//   input: '020-382-6940',
//   groups: undefined
// ]

const improvedPhonePattern =
  /^(\+?\d{1,3}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

console.log(improvedPhonePattern.test("020-382-6940")); // ✅ true
console.log(improvedPhonePattern.test("(020) 382-6940")); // ✅ true
console.log(improvedPhonePattern.test("020.382.6940")); // ✅ true
console.log(improvedPhonePattern.test("020 382 6940")); // ✅ true
console.log(improvedPhonePattern.test("+44 20-382-6940")); // ✅ true
console.log(improvedPhonePattern.test("382-6940")); // ❌ false (too short)
