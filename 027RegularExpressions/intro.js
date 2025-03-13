const sentence = "There once was a monkey who knew JS.";

const pattern = /w[abs]s/;

const test = pattern.test(sentence);
console.log(test); // ? true

const match = sentence.match(pattern);
console.log(match);
// [
//   'monkey',
//   index: 17,
//   input: 'There once was a monkey who knew JS.',
//   groups: undefined
// ]
