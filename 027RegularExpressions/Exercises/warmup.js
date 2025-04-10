/*
    1. Create a variable called "quote" that points at:
       "What is this? A center for ants?"

    2. Create a variable called "pattern" that points at
       a regular expression to search for "ant" in a string

    3. Use the .test method on the "pattern" in step
       2 to check if "quote" has the pattern in it

    4. Use the .match method on the "quote" string to return
       a match for the "pattern" regexp

    5. Print out the results from steps 3 and 4
*/
const quote = "What is this? A center for ants?";

const pattern = /ant/;

const test = pattern.test(quote);
console.log(test); //? true

const match = quote.match(pattern);
console.log(match);

// [
//   'ant',
//   index: 27,
//   input: 'What is this? A center for ants?',
//   groups: undefined
// ]
