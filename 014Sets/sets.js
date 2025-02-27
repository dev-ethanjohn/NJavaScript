// Like array but only stores unique values

const mySet = new Set();

// NOTE: Add an item
mySet.add(23);
mySet.add(25);
mySet.add(30);

// duplicate! wont be added on the set
mySet.add(30);
console.log(mySet); //? Set(3) { 23, 25, 30 }

// this will be added cuz string !== int
mySet.add("30");
console.log(mySet); //? Set(4) { 23, 25, 30, '30' }

// NOTE: Delete an item
mySet.delete(25);
console.log(mySet); //? Set(3) { 23, 30, '30' }

// NOTE: Check if the item is there
console.log(mySet.has(25)); //?  false

// NOTE: Get the size/length
console.log(mySet.size); //? 3

//IMPORTANT: Sets are iterable objects, we use `for-of-loop` instead of for loop since sets doesn't have index-based access
