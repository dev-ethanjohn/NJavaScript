const myMap = new Map();

myMap.set("name", "Nader");
myMap.set("age", 20);
myMap.set("friend", "Mr monkey");

for (const item of myMap) {
  console.log(item);
  // console.log(item[0], item[1]);
}

/* 
[ 'name', 'Nader' ]
[ 'age', 20 ]
[ 'friend', 'Mr monkey' ]
*/

// NOTE: We can even do better using DESTRUCTURING
