/*
    1. Create an array called "points" with the following values:
       [10, 20, 10, 30, 15, 15, 35, 60, 10]

    2. How can you print out all the UNIQUE points inside "points"?
*/

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const seen = new Set();
// const dupl = []; //*If we want to store the unique values in another array

for (let i = 0; i < points.length; i++) {
  const point = points[i];

  if (!seen.has(point)) {
    // dupl.push(point);
    console.log(point);
  }
  seen.add(point);
}

// console.log(dupl); //? [ 10, 20, 30, 15, 35, 60 ]
console.log(seen); //? Set(6) { 10, 20, 30, 15, 35, 60 }

//NOTE: SHORTCUT to store unique values in another Set
const newSet = new Set(points);
console.log(newSet); //? Set(6) { 10, 20, 30, 15, 35, 60 }

// NOTE: SHORTCUT to store unique values in another array
const newArray = [...new Set(points)];
console.log(newArray); //? [ 10, 20, 30, 15, 35, 60 ]
// Careful if there are objects non primitives inside set and when we spread it, objects are referenced types thus, it is only shallow

// IMPORTANT
// Example 2: Objects Are Not Deduplicated
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Alice" }];

const uniqueUsers = [...new Set(users)];

console.log(uniqueUsers);
// [
//   { name: "Alice" },
//   { name: "Bob" },
//   { name: "Alice" }  ❌ (Not removed, different reference)
// ]
// 👉 Each object has a different memory reference, so Set does not remove duplicates.

// Example 3: Ensuring Unique Objects Based on a Key
// If we want to remove duplicate objects based on a property (e.g., name)

const uniqueUsersByName = [
  ...new Map(users.map((user) => [user.name, user])).values(),
];

console.log(uniqueUsersByName);
// [
//   { name: "Alice" },
//   { name: "Bob" }
// ]
// 👉 Uses a Map to store unique objects by name.
