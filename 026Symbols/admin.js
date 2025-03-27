// ==========================================
// SYMBOLS IN OBJECTS: HIDDEN BUT ACCESSIBLE
// ==========================================

// ✅ Defining an object with various property types
const character = {
  name: "ethan", // String key
  class: "axe", // String key
  quote: "I'll never do it!", // String key
  __admin__: false, // "Hidden" by convention, but still a normal string key
  [Symbol("admin")]: false, // ✅ Symbol key (hidden from iteration)
  [Symbol("age")]: 18, // ✅ Another Symbol key (also hidden)
  [4 + 5]: "age", // ✅ Computed property name (9)
};

// ==========================================
// ENUMERATING PROPERTIES
// ==========================================

// ✅ Object.keys() returns only string keys (ignores Symbols)
for (const key of Object.keys(character)) {
  console.log(key);
}
// Output:
// name
// class
// quote
// __admin__

// ❌ Notice: Symbols are NOT included in Object.keys() or for...in loops

// ==========================================
// ACCESSING SYMBOL PROPERTIES
// ==========================================

//* ✅ Symbols are hidden but still accessible directly
console.log(Object.getOwnPropertySymbols(character));
// Output: [ Symbol(admin), Symbol(age) ]

// ✅ We can access their values manually
const symbols = Object.getOwnPropertySymbols(character);
console.log(character[symbols[0]]); // false (Symbol("admin"))
console.log(character[symbols[1]]); // 18 (Symbol("age"))
