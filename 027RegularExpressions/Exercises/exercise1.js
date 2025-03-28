/*
    1. Create a variable called "email" that points at:
       "monkey@trees.com"

    2. Create a variable called "emailPattern" that is
       a regular expression that will look for a string
       that ENDS with ".com"

    3. Test "email" against "emailPattern" to see if
       it returns true/false using .test on "emailPattern"

    4. Find a match using .match on "email" with the
       "emailPattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/

// ====================================
// REGULAR EXPRESSION: ENDING WITH ".COM"
// ====================================

// 1️⃣ Creating an email string to test
const email = "monkey@trees.com";

/**
 * 🔹 Email Explanation:
 * - This string represents an email address.
 * - We will check if it ends with ".com".
 */

// ====================================
// DEFINING A REGULAR EXPRESSION PATTERN
// ====================================

const emailPattern = /\.com$/;

/**
 * 🔹 Explanation of the Regular Expression:
 * - `\.com` → Matches ".com" literally (the `\.` escapes the dot to make it a literal dot).
 * - `$` → Ensures that ".com" appears at the END of the string.
 */

// ====================================
// TESTING THE REGULAR EXPRESSION
// ====================================

// ✅ Checking if the pattern exists at the end of the email
const test = emailPattern.test(email);
console.log(test); // true

/**
 * 🔹 Explanation:
 * - `.test()` returns `true` because "monkey@trees.com" ends with ".com".
 * - If the email was "monkey@trees.net", it would return `false`.
 */

// ====================================
// FINDING MATCHES WITH .match()
// ====================================

// ✅ Using `match()` to extract the matched portion
const match = email.match(emailPattern);
console.log(match);

/**
 * 🔹 Expected Output:
 * [
 *   '.com',
 *   index: 12,
 *   input: 'monkey@trees.com',
 *   groups: undefined
 * ]
 *
 * 🔹 Explanation:
 * - The match found is ".com" at index `12` (starting position of the match).
 * - `input` contains the original string.
 * - `groups` is `undefined` because no capturing groups were used.
 */

// ====================================
// BONUS: ISSUE WITH THIS PATTERN
// ====================================

/**
 * 🚨 ISSUE: This pattern does NOT validate emails correctly!
 *
 * - It ONLY checks if the string ends with ".com".
 * - It does NOT check if the rest of the string is a valid email format.
 * - "junkdata.com" would pass this test even though it's not an email.
 *
 * ✅ Better email validation regex:
 *   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
 *
 * - Ensures a proper email format: `username@domain.com`
 * - Checks that there is an "@" symbol.
 * - Validates domain extensions like ".com", ".net", ".org", etc.
 */

// ====================================
// KEY TAKEAWAYS
// ====================================

/**
 * ✅ `.test()` checks if a pattern exists, returning `true` or `false`.
 * ✅ `.match()` returns an array containing the matched portion.
 * ✅ `$` anchors the match to the END of the string.
 * ✅ This regex only verifies that a string ends with ".com", not that it’s a valid email.
 */

// 🚀 Try experimenting with different strings!

// ✅ A more robust regex for email validation
const emailPattern2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Test emails
const emails = [
  "monkey@trees.com", // ✅ Valid
  "user123@example.net", // ✅ Valid
  "test.email@domain.org", // ✅ Valid
  "invalid@domain", // ❌ Invalid (missing TLD)
  "noatsymbol.com", // ❌ Invalid (missing @)
  "user@.com", // ❌ Invalid (invalid domain)
  "user@com", // ❌ Invalid (TLD must be at least 2 characters)
];

// Loop through test emails and check validity
emails.forEach((email) => {
  console.log(`${email}: ${emailPattern2.test(email)}`);
});
