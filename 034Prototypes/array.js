const animal = {
  type: "monkey",
  __proto__: Array.prototype, //* We changed it to array
};

console.log(animal); //? Array { type: 'monkey' }
console.log(Object.getOwnPropertyNames(animal)); //? [ 'type' ]
console.log(Object.getOwnPropertyNames(animal.__proto__));
// *Now you can access all array prototype methods
// [
//   "length",
//   "constructor",
//   "at",
//   "concat",
//   "copyWithin",
//   "fill",
//   "find",
//   "findIndex",
//   "findLast",
//   "findLastIndex",
//   "lastIndexOf",
//   "pop",
//   "push",
//   "reverse",
//   "shift",
//   "unshift",
//   "slice",
//   "sort",
//   "splice",
//   "includes",
//   "indexOf",
//   "join",
//   "keys",
//   "entries",
//   "values",
//   "forEach",
//   "filter",
//   "flat",
//   "flatMap",
//   "map",
//   "every",
//   "some",
//   "reduce",
//   "reduceRight",
//   "toLocaleString",
//   "toString",
//   "toReversed",
//   "toSorted",
//   "toSpliced",
//   "with",
// ];
