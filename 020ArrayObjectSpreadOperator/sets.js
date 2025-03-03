const mySet = new Set();

mySet.add("Batman");
mySet.add("Robin");
mySet.add("Batman");
mySet.add("Superman");
mySet.add("Wonderwoman");

console.log(mySet); //? Set(4) { 'Batman', 'Robin', 'Superman', 'Wonderwoman' }

// NOTE: USING SPREAD
const copy = [...mySet, "Batman"];
console.log(copy); // ? [ 'Batman', 'Robin', 'Superman', 'Wonderwoman', 'Batman' ](Converted to an Array)
