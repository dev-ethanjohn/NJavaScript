const mySet = new Set();

mySet.add("hello");
mySet.add("monkey");
mySet.add("monkey");
mySet.add(10);
mySet.add(true);

console.log(mySet); //? Set(4) { 'hello', 'monkey', 10, true }

for (const item of mySet) {
  console.log(item);
}

/*
hello
monkey
10
true
*/
