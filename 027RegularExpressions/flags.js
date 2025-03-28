// ====================================
// ANCHORS AND FLAGS IN REGULAR EXPRESSIONS
// ====================================

// 1️⃣ Creating a sentence to search within
const sentence = "Hi there! This is a regex test. HI again!";

// 2️⃣ Defining regular expressions with anchors and flags
const startPattern = /^Hi/; // Matches 'Hi' at the start of the string
const endPattern = /test\.$/; // Matches 'test.' at the end of the string
const caseInsensitivePattern = /hi/i; // Case-insensitive match for 'hi'
const globalPattern = /hi/g; // Matches all occurrences of 'hi'
const globalCaseInsensitivePattern = /hi/gi; // Matches all 'hi' occurrences, case-insensitive

/**
 * 🔹 Explanation of the Regular Expressions:
 * - `^Hi`  → Matches 'Hi' only if it appears at the start of the string
 * - `test\.$` → Matches 'test.' only if it appears at the end of the string
 * - `/hi/i` → Matches 'hi', 'Hi', 'hI', etc. (case-insensitive)
 * - `/hi/g` → Finds all occurrences of 'hi' in the string
 * - `/hi/gi` → Finds all 'hi' occurrences, ignoring case
 */

// ====================================
// * TESTING THE REGULAR EXPRESSIONS
// ====================================

// ✅ Checking matches using `test()`
console.log(startPattern.test(sentence)); // true
console.log(endPattern.test(sentence)); // true
console.log(caseInsensitivePattern.test(sentence)); // true
console.log(globalPattern.test(sentence)); // true
console.log(globalCaseInsensitivePattern.test(sentence)); // true

/**
 * 🔹 Explanation:
 * - `test()` returns `true` if a match is found in the string.
 * - Since our sentence starts with 'Hi', ends with 'test.', and contains variations of 'hi', all return `true`.
 */

// ====================================
// * FINDING MATCHES WITH .match()
// ====================================

// ✅ Using `match()` to retrieve matches
console.log(sentence.match(globalPattern)); // ['Hi', 'hi']
console.log(sentence.match(globalCaseInsensitivePattern)); // ['Hi', 'hi', 'HI']

/**
 * 🔹 Expected Output:
 * - `globalPattern` finds all exact 'hi' matches.
 * - `globalCaseInsensitivePattern` finds 'Hi', 'hi', and 'HI'.
 */

// ====================================
// KEY TAKEAWAYS
// ====================================

/**
 * ✅ `^` marks the start of a string.
 * ✅ `$` marks the end of a string.
 * ✅ `i` flag makes the search case-insensitive.
 * ✅ `g` flag finds all occurrences in a string.
 * ✅ Combining `gi` makes the search both global and case-insensitive.
 */

// IMPORTANT: USE CASES
// *✔ Form validation (email, phone numbers, etc.)
// *✔ Searching and filtering text dynamically
// *✔ Parsing and extracting information from strings
// *✔ Highlighting words in a document
// *✔ Replacing or modifying text in bulk

// NOTE: TEST EXPRESSIONS
// https://regex101.com/

const sentenceFlag = "There once was a muney who knew JavaScript...";
const patternFlag = /\.\.\./; //*matches exactly the 3 dots
const patternFlag2 = /.../; //* matches the first 3 dots of the sentence

const testFlag = patternFlag.test(sentenceFlag);
console.log(testFlag); //? true

const matchFlag = sentenceFlag.match(patternFlag);
console.log(matchFlag);
// [
//   '...',
//   index: 42,
//   input: 'There once was a muney who knew JavaScript...',
//   groups: undefined
// ]

const matchFlag2 = sentenceFlag.match(patternFlag2);
console.log(matchFlag2);
// [
//   'The',
//   index: 0,
//   input: 'There once was a muney who knew JavaScript...',
//   groups: undefined
// ]
