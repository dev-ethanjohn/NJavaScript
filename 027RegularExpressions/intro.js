// ====================================
// REGULAR EXPRESSION PATTERN MATCHING
// ====================================

// 1️⃣ Creating a sentence to search within
const sentence = "There once was a monkey who knew JS.";

// 2️⃣ Defining a regular expression pattern
const pattern = /w[abs]s/;

/**
 * 🔹 Explanation of the Regular Expression:
 * - `w`  → Matches the letter 'w'
 * *- `[abs]` → Matches any one of the letters 'a', 'b', or 's'
 * *- `[^abs]` -> Matches other than  'a', 'b', or 's'
 * *- `[a-c]` -> Matches between `a` to `c`
-> * - `s`  → Matches the letter 's'
 * - Effectively, the pattern looks for words that contain "was", "wbs", or "wss"
 */

// ====================================
// *TESTING THE REGULAR EXPRESSION
// ====================================
// ✅ Checking if the pattern exists in the sentence
const test = pattern.test(sentence);
console.log(test); // true

/**
 * 🔹 Explanation:
 * - `test()` returns `true` if there is at least one match in the string.
 * - Since "was" appears in "There once was a monkey who knew JS.", it returns `true`.
 */

// ====================================
// *FINDING MATCHES WITH .match()
// ====================================
// ✅ Using `match()` to find the first occurrence of the pattern
const match = sentence.match(pattern);
console.log(match);

/**
 * 🔹 Expected Output:
 * [
 *   'was',
 *   index: 12,
 *   input: 'There once was a monkey who knew JS.',
 *   groups: undefined
 * ]
 *
 * 🔹 Explanation:
 * - The first match found is `"was"`, starting at index `12`.
 * - `input` contains the original string.
 * - `groups` is `undefined` since no capturing groups were used.
 */

// ====================================
// KEY TAKEAWAYS
// ====================================

/**
 * ✅ `test()` checks if a pattern exists in a string, returning `true` or `false`.
 * ✅ `match()` returns an array with details of the first match found.
 * ✅ `index` shows where the match starts in the original string.
 * ✅ Regular expressions provide a powerful way to search and manipulate text.
 * ✅ Regular expressions are CASE-SENSITIVE.
 * ✅ To make it CASE-INSENSITIVE, use the `i` flag: ex: const patternInsensitive = /hello/i;
 */

// IMPORTANT: USECASES
// *✔ Form validation
// *✔ Searching and filtering
// *✔ Parsing URLs and text
// *✔ Highlighting words dynamically
// *✔ Replacing or modifying text

// NOTE: TEST EXPRESSIONS
// https://regex101.com/
