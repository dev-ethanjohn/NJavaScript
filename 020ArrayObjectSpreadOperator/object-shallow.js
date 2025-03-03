const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: {
    pop: 38,
  },
};

const countryPopCopy = { ...countryPop };
// the same
console.log(countryPop); //? { Germany: 83, Brazil: 212, Egypt: 102, Canada: { pop: 38 } }
console.log(countryPopCopy); //? { Germany: 83, Brazil: 212, Egypt: 102, Canada: { pop: 38 } }

console.log("--------------");
countryPop.Canada.capital = "Ottawa";

console.log(countryPop);
/*
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: { pop: 38, capital: 'Ottawa' }
}
*/
console.log(countryPopCopy);
/* NOTE: STILL pointing to the same object (countryPop),
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: { pop: 38, capital: 'Ottawa' }
}
*/

console.log("----Deep copy---");
const copy = structuredClone(countryPop);
countryPop.Canada.capital = "Toronto";

console.log(countryPop);
/*
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: { pop: 38, capital: 'Toronto' }
}s
*/
console.log(copy);
/* NOTE: this doesnt change cause we only change the countryPop's capital to Toronto, and not in this separate copy. 
{
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: { pop: 38, capital: 'Ottawa' }
}
*/

// IMPORTANT: WHy is this?
// JavaScript optimizes memory usage by using references for reference types (objects, arrays, functions, etc.) instead of creating new copies every time.
/*
Efficiency: Copying large objects would be memory-intensive and slow.
Performance: Referencing existing objects avoids unnecessary duplication.
Consistency: If multiple variables point to the same object, changes reflect across all references.
*/

const obj1 = { name: "Alice", age: 25 };
const obj2 = obj1; // Reference, NOT a new object

obj2.age = 30;

console.log(obj1); // { name: "Alice", age: 30 }
console.log(obj2); // { name: "Alice", age: 30 } (same reference)

//NOTE: Numbers, strings, and booleans are stored separately in memory. Each new assignment creates a copy. Primitives Are Copied by Value
