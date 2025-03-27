/*
    1. Create an async Generator function that has a single
       parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will
       yield a Promise that resolves after 100ms that:
       - If the letter is a vowel (aeiou) then resolve with a "*"
       - Otherwise resolve with the letter, but uppercased

    2. Create the generator object by calling the function ^
       with a value of "Monkeys are the coolest animal!"

    3. Use a for-await-of loop to loop through the generator

    *There are MANY ways to check if a string has any of several letters
*/

// ====================================
// ASYNC GENERATOR FUNCTION: MASKING VOWELS
// ====================================

// 1️⃣ Create an async generator function that processes a sentence letter by letter.
const maskVowelsGenerator = async function* (sentence) {
  for (const letter of sentence) {
    yield new Promise((resolve) => {
      setTimeout(() => {
        // Check if the letter is a vowel (case insensitive)
        const isVowel = "aeiouAEIOU".includes(letter);
        resolve(isVowel ? "*" : letter.toUpperCase()); // Replace vowels with "*" else uppercase
      }, 100);
    });
  }
};

// 2️⃣ Create the generator object by calling the function
const sentence = "Monkeys are the coolest animal!";
const maskedGenerator = maskVowelsGenerator(sentence);

// ====================================
// EXECUTING THE ASYNC GENERATOR
// ====================================

// 3️⃣ Use a `for-await-of` loop to iterate over the generator
const revealMaskedSentence = async () => {
  let transformedSentence = "";

  for await (const maskedLetter of maskedGenerator) {
    transformedSentence += maskedLetter; // Append each transformed letter
    console.log(maskedLetter); // Logs each character one by one after 100ms
  }

  console.log(`\nFinal Transformed Sentence:\n${transformedSentence}`);
};

// ✅ Start the generator execution
revealMaskedSentence();
