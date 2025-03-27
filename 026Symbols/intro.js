// ====================================
// SYMBOLS IN JAVASCRIPT: UNIQUE PRIMITIVE TYPES
// ====================================

// 1️⃣ Symbols are unique and immutable primitive values.
// - They are often used for object property keys to avoid name collisions.
// - They can also be used to create private (weakly encapsulated) properties in objects.

// ✅ Creating a basic symbol
const mySymbol = Symbol(); // A unique symbol without a description

// ✅ Creating a named symbol (for debugging purposes)
const namedSymbol = Symbol("monkey"); // A unique symbol with a description

// ====================================
// LOGGING SYMBOLS
// ====================================

console.log(mySymbol); // Logs: Symbol()
console.log(namedSymbol); // Logs: Symbol(monkey)

// ====================================
// SYMBOL UNIQUENESS CHECK
// ====================================

// ✅ Every Symbol() call creates a brand new unique symbol
console.log(Symbol() === mySymbol); // ❌ false (Each Symbol() is unique)
console.log(Symbol("monkey") === namedSymbol); // ❌ false (Even with the same description, Symbols are unique)

// ✅ However, a Symbol always equals itself
console.log(mySymbol === mySymbol); // ✅ true

// ✅ Symbol descriptions are used for debugging but don’t affect uniqueness
console.log(mySymbol.description); // undefined (no description given)
console.log(namedSymbol.description); // "monkey" (retrieves the description)
