// IMPORTANT REGULAR OBJECTS
// keys in objects are only strings
// IMPORTANT: JavaScript stores objects by reference, not by value.
const animal = {
  id: 42,
  name: "Rowry",
  type: "Dog",
  // "num legs": 4,
  numLegs: 4,
};

//NOTE  access/modify/change the value
console.log(animal); //? { id: 42, name: 'Rowry', type: 'Dog' }
// ! Other syntax using named syntax
// animal["name"] = "Ron";
animal.name = "Ron";
console.log(animal.name); //? Ron

//NOTE delete property
delete animal.type;
console.log(animal); //? { id: 42, name: 'Ron', numLegs: 4 }

//NOTE Object `in` keyword
// Only looks for the membership of the KEY inside the object, i won't look for the VALUES.
console.log("name" in animal); //? true

//NOTE METHODS
// order is consistent
console.log(Object.keys(animal)); //?  [ 'id', 'name', 'numLegs' ]

console.log(Object.values(animal)); //? [ 42, 'Ron', 4 ]

console.log(Object.entries(animal));
/*
NOTE: Good so we can loop in array.
[ [ 'id', 42 ], [ 'name', 'Ron' ], [ 'numLegs', 4 ] ]
*/

// NAMING CONVENTION
/*
✅ Constants like configs: CONFIG, MAX_LIMIT
✅ Regular objects: user, personData, animal
✅ Class instances: newUser, appConfig
*/
