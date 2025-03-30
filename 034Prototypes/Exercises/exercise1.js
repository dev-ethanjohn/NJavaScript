/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/

console.log(Object.getOwnPropertyNames(Object.__proto__));
// [
//   "length",
//   "name",
//   "arguments",
//   "caller",
//   "constructor",
//   "apply",
//   "bind",
//   "call",
//   "toString",
// ];

console.log(Object.getOwnPropertyNames(Object.prototype));
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

console.log(Object.getOwnPropertyNames(Array.prototype)); //* you're getting all methods of arrays.
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

console.log(Object.getOwnPropertyNames(Array.__proto__)); //*  you're getting function-specific methods (Function.prototype methods). This accesses Function.prototype, since Array itself is a constructor function.
// [
//   "length",
//   "name",
//   "arguments",
//   "caller",
//   "constructor",
//   "apply",
//   "bind",
//   "call",
//   "toString",
// ];

// NOTE: Array → Function.prototype → Object.prototype → null
console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));

// NOTE: Array.prototype → Object.prototype → null
console.log(Object.getOwnPropertyNames(Array.__proto__.__proto__)); //*This points to upwards to the object's prototype
