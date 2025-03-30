Object.hello = () => {
  console.log("Hello world");
};

const animal = {
  type: "monkey",
};

// animal.hello(); //! TypeError
Object.hello(); //? Hello world

// To make the hello work
Object.prototype.hello = () => {
  console.log("hELLO FROM PROTOTYp");
};

animal.hello(); //? hELLO FROM PROTOTYp

console.log(Object.getOwnPropertyNames(Object));
// [
//   "length",
//   "name",
//   "prototype",
//   "assign",
//   "getOwnPropertyDescriptor",
//   "getOwnPropertyDescriptors",
//   "getOwnPropertyNames",
//   "getOwnPropertySymbols",
//   "hasOwn",
//   "is",
//   "preventExtensions",
//   "seal",
//   "create",
//   "defineProperties",
//   "defineProperty",
//   "freeze",
//   "getPrototypeOf",
//   "setPrototypeOf",
//   "isExtensible",
//   "isFrozen",
//   "isSealed",
//   "keys",
//   "entries",
//   "fromEntries",
//   "values",
//   "groupBy",
//   "hello",
// ];
console.log(Object.getOwnPropertyNames(animal)); //? [ 'type' ]

console.log(Object.getOwnPropertyNames(animal.__proto__));
// [
//   "constructor",
//   "__defineGetter__",
//   "__defineSetter__",
//   "hasOwnProperty",
//   "__lookupGetter__",
//   "__lookupSetter__",
//   "isPrototypeOf",
//   "propertyIsEnumerable",
//   "toString",
//   "valueOf",
//   "__proto__",
//   "toLocaleString",
//   "hello",
// ];
