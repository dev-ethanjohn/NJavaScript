/*
    1. Create an array called "items" with the following values:
        - {name: "banana", quantity: 1, price: 1.95}
        - {name: "apple", quantity: 1, price: 1.45}
        - {name: "banana", quantity: 10, price: 0.05}
        - {name: "candy", quantity: 1, price: 3.50}

    2. Create a second array called "results" that starts off empty

    3. Create a Set called "duplicates"

    4. Add all the Objects in "items" to "results" in order, while
       skipping over any duplicate-named objects you encounter
       within "items" (In this example, only add the first banana item)

    5. Print out "results" - it should be:
    [
        {name: "banana", quantity: 1, price: 1.95},
        {name: "apple", quantity: 1, price: 1.45},
        {name: "candy", quantity: 1, price: 3.50}
    ]

    HINT: Use to the Set to keep track of duplicates
*/

const items = [
  { name: "banana", quantity: 1, price: 1.95 },
  { name: "apple", quantity: 1, price: 1.45 },
  { name: "banana", quantity: 10, price: 0.05 },
  { name: "candy", quantity: 1, price: 3.5 },
];

const result = [];
const duplicates = new Set();
// const newSet = new Set();

/*
4. Add all the Objects in "items" to "results" in order, while
       skipping over any duplicate-named objects you encounter
       within "items" (In this example, only add the first banana item)
*/

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  if (!duplicates.has(item.name)) {
    duplicates.add(item.name); //NOTE:  Tracks seen seen names
    result.push(item);
    // newSet.add(item);
  }
}

console.log(duplicates); //? Set(3) { 'banana', 'apple', 'candy' }
console.log(result);
// console.log(newSet);

/* ANSWER
[
  { name: 'banana', quantity: 1, price: 1.95 },
  { name: 'apple', quantity: 1, price: 1.45 },
  { name: 'candy', quantity: 1, price: 3.5 }
]
*/

// NOTE: FUCTION APPROACH USING reduce
const duplicates2 = new Set();
const result2 = items.reduce((acc, item) => {
  if (!duplicates2.has(item.name)) {
    // ✅ Correct check
    duplicates2.add(item.name);
    acc.push(item);
  }

  return acc;
}, []);

console.log(result2);
// [
//   { name: "banana", quantity: 1, price: 1.95 },
//   { name: "apple", quantity: 1, price: 1.45 },
//   { name: "candy", quantity: 1, price: 3.5 },
// ];

// NOTE: MORE FUNCTIONAL APPROACH
const result3 = Array.from(
  new Map(items.map((item) => [item.name, item])).values()
);

console.log(result3);

// NOTE: USING SPREAD
const result4 = [...new Map(items.map((item) => [item.name, item])).values()];

console.log(result4);
