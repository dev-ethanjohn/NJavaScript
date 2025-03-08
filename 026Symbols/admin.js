const character = {
  name: "ethan",
  class: "axe",
  quote: "I'll never do it!",
  __admin__: false,
  [Symbol("admin")]: false,
  [Symbol("age")]: 18,
  [4 + 5]: "age",
};

for (const key of Object.keys(character)) {
  console.log(key);
}
// name
// class
// quote
// __admin__
// !(We do not get logged)

// NOTE: Symbols is hidden yet accessible.
// The Symbol property is not enumerable, which is why it doesn't appear in Object.keys() or for...in loops.

console.log(Object.getOwnPropertySymbols(character)); //? [ Symbol(admin), Symbol(age) ]
