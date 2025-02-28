const myMap = new Map();
console.log(myMap); //? Map(0) {}

// NOTE: Method to set the keys value pairs
myMap.set("name", "Ethan");
myMap.set("age", 24);
console.log(myMap); //? Map(2) { 'name' => 'Ethan', 'age' => 24 }

// NOTE: Get a key
const age = myMap.get("age");
console.log(age); //? 24

//NOTE: Modify/change a value
myMap.set("age", 25);
console.log(myMap.get("age")); //? 25

// CHECK the avaiable key
console.log(myMap.has("age")); // true

// ---------------------------------
console.log(myMap.size); //? 2

// NOTE: Delete a key-value pair
myMap.delete("age");
console.log(myMap); //? Map(1) { 'name' => 'Ethan' }

// NOTE: We can iterate a Map using for...of loop

// IMPORTANT
/*
- Use an Object when you have structured data with fixed keys.
- Use a Map when you need a flexible key-value store with better performance for dynamic keys.

*/
