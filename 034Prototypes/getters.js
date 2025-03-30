const animal = {
  type: "monkey",
  numLegs: 2,
};

console.log(animal.__proto__);

console.log(Object.getPrototypeOf(animal));
console.log(Object.getOwnPropertyNames(animal)); //? [ 'type', 'numLegs' ] *Array
console.log(`Keys: ${Object.keys(animal)}`); //? Keys: type,numLegs  *string

console.log(Object.entries(animal)); //? [ [ 'type', 'monkey' ], [ 'numLegs', 2 ] ]

console.log(Object.getOwnPropertyNames(animal.__proto__));
// [
//   'constructor',
//   '__defineGetter__',
//   '__defineSetter__',
//   'hasOwnProperty',
//   '__lookupGetter__',
//   '__lookupSetter__',
//   'isPrototypeOf',
//   'propertyIsEnumerable',
//   'toString',
//   'valueOf',
//   '__proto__',
//   'toLocaleString'
// ]

//* Therefore we can do the ff:
console.log(animal.valueOf()); //? { type: 'monkey', numLegs: 2 }
// the same as above
console.log(animal); //?  { type: 'monkey', numLegs: 2 }

// Create a new property on the Object prototype
Object.prototype.speak = () => {
  console.log("Hi from prototype, I am speaking now.");
};

const animal2 = {
  type: "cat",
};

animal.speak(); //? Hi from prototype, I am speaking now.
animal2.speak(); //? Hi from prototype, I am speaking now. *Can still access the `speak` property from the Object prototype; if there is no `speak` property in the animal2 object.

// NOTE: every object created will have now access to the `speak` property
// NOTE: now advible, do not modify or add something on the prototype object.
