/*
    1. Create a function called "palindrome" that will take
       a single String as an argument

    2. The function will return true if the String is a palindrome
       or false if it's not

    3. A String is a palindrome if it reads the same start-end
       as it does end-start

    4. Examples of palindromes:
       - racecar
       - level
       - mom
       - kayak

    5. Solve this using recursion instead of loops

    HINT: What are the base-cases? (I thought of 4)
*/

const palindrome = (str) => {
  // base
  if (str[0] !== str[str.length - 1]) return false;

  if (str.length === 0) return true;
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  //   recursive
  return palindrome(str.substring(1, str.length - 1));
};

const result = palindrome("racecar");
console.log(result);
