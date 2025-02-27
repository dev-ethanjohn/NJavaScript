const animals = ["monkey", "dog", "koala", "tiger"];

const koala = animals[2];
console.log(koala); //? koala
// console.log(animals.length); //? 4

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
/*
? monkey
? dog
? koala
? tiger
*/

// NOTE ARRAY METHODS
// ADD new item at END of the Array
animals.push("lion");
console.log(animals.length); //? 5

// REMOVE an item from END of Array
animals.pop();
console.log(animals.length); //? 4

// ADD new item at START of Array
animals.unshift("llama");
console.log(animals); //? [ 'llama', 'monkey', 'dog', 'koala', 'tiger' ]

// REMOVE item from the START of Array
animals.shift();
console.log(animals); //? [ 'monkey', 'dog', 'koala', 'tiger' ]

// ACCESING the end of teh array
console.log(animals[animals.length - 1]); //? Tiger

// .splice() -> modify existing array
//  .slice() -> creates a shallow copy of a portion of the array
