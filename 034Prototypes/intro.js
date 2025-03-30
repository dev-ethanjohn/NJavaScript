// Prototypes
// 1. [[ Prototype ]]
// 2. __proto__
// 3. .prototype

const animal = {
  type: "monkey",
};

// toString() does not exists in the animal object as a key but it doesnt return an error, instead return [object Object]. Why?
console.log(animal.toString()); //? [object Object]

console.log(animal.hasOwnProperty("type")); //? true
