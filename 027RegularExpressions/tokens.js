/**
 * ===================================
 * REGULAR EXPRESSION PATTERNS & TOKENS
 * ===================================
 */

// 🔹 Sample string for testing
const sampleText = "Hello123 World!";

// 🔹 Using different regex patterns

// 1️⃣  Match ANY single character (except newline)
const dotPattern = /./g;
const test1 = dotPattern.test(sampleText);
console.log(test1); //? true
console.log(sampleText.match(dotPattern));
// [
//   'H', 'e', 'l', 'l',
//   'o', '1', '2', '3',
//   ' ', 'W', 'o', 'r',
//   'l', 'd', '!'
// ]

// 2️⃣  Match ZERO or ONE occurrence of "o"
const questionPattern = /o?/g;
console.log(sampleText.match(questionPattern));
/**
 * Output:
 * Matches "o" where it appears and an empty string where it doesn’t.
 */

// 3️⃣  Match ZERO or MORE occurrences of "l"
const starPattern = /l*/g;
console.log(sampleText.match(starPattern));
/**
 * Output:
 * Matches "ll" in "Hello" and empty strings in other places.
 */

// 4️⃣  Match ONE or MORE occurrences of "l"
const plusPattern = /l+/g;
console.log(sampleText.match(plusPattern));
/**
 * Output:
 * Matches "ll" in "Hello" but skips single "l".
 */

// 5️⃣  Match ANY word character (\w) or NON-word character (\W)
const wordCharPattern = /\w/g;
console.log(sampleText.match(wordCharPattern));
/**
 * Output:
 * Matches letters (H, e, l, l, o, 1, 2, 3, W, o, r, l, d).
 */

const nonWordCharPattern = /\W/g;
console.log(sampleText.match(nonWordCharPattern));
/**
 * Output:
 * Matches spaces and punctuation (like "!").
 */

// 6️⃣  Match ANY digit character (\d) or NON-digit character (\D)
const digitPattern = /\d/g;
console.log(sampleText.match(digitPattern));
/**
 * Output:
 * Matches numbers (1, 2, 3).
 */

const nonDigitPattern = /\D/g;
console.log(sampleText.match(nonDigitPattern));
/**
 * Output:
 * Matches all non-digit characters (letters, spaces, punctuation).
 */

/**
 * ===================================
 * ✅ SUMMARY:
 * -----------------------------------
 * - `.`  → Matches ANY character except newline.
 * - `?`  → Matches ZERO or ONE of the preceding character.
 * - `*`  → Matches ZERO or MORE of the preceding character.
 * - `+`  → Matches ONE or MORE of the preceding character.
 * - `\w` → Matches any word character (letters, numbers, underscore).
 * - `\W` → Matches any NON-word character (spaces, punctuation).
 * - `\d` → Matches any digit (0-9).
 * - `\D` → Matches any NON-digit character.
 */

const sentence = "There once was a muney who knew JavaScript...";

const pattern = /m[\w]nk*ey/;

const exists = pattern.test(sentence); //? true
