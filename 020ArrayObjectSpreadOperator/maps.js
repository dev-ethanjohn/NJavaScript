const myMap = new Map();

myMap.set("Monkey", 5);
myMap.set("Tiger", 5);
myMap.set("Elephant", 5);

console.log(myMap); // ? Map(3) { 'Monkey' => 5, 'Tiger' => 5, 'Elephant' => 5 }

// NOTE: USING SPREAD OPERATOR

const copy = [...myMap, "boo!"];
console.log(copy); //? [ [ 'Monkey', 5 ], [ 'Tiger', 5 ], [ 'Elephant', 5 ], 'boo!' ]
