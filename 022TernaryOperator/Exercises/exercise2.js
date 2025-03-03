/*
    1. Create a variable called "wizards" that points at the array:
       ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"]

    2. Map over "wizards" to create a new array that does the following:
      - If the name contains the letter "n" return the name but with
        all the "n"'s replaced with a "*" character
      - Otherwise return the name, but upper-cased
      - Use a regular if/else statement for this
   
    3. Repeat step 2 but with a ternary expression

    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/

const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"];

// const result = wizards.map((wiz) => {
//   if (wiz.includes("n")) {
//     return wiz.replace(/n/g, "*");
//   } else {
//     return wiz.toUpperCase();
//   }
// });

//NOTE: Using ternary

const result = wizards.map((wiz) =>
  wiz.includes("n") ? wiz.replace(/n/g, "*") : wiz.toUpperCase()
);

console.log(result); //? [ 'Ga*dalf', 'VOLDEMORT', 'HARRY', 'JAFAR', 'Saruma*', 'Merli*' ]

// IMPORTANT
// /n/g → The g flag ensures that all occurrences of 'n' are replaced.
// replace('n', '*') (without regex) would only replace the first occurrence, so we need the regex.
