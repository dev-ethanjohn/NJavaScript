/*
    1. Create a Map called "myConsole"
    
    2. Assign "myConsole" the key "log" with a value that is
       an arrow function.

       This arrow function will have one parameter called "message"

       The function will just console.log out the "message"

    3. Call the function with a message. How does this compare to Objects?

    4. Add the following key-value pairs to the map:
        -  1  : "number one"
        - "1" : "string one"

    5. Print out each of the 2 values for the keys you just added.
       How does this differ from an Object?
*/

const myConsole = new Map();

myConsole.set("log", (message) => {
  console.log(message);
});

//*  3. Call the function with a message. How does this compare to Objects?
myConsole.get("log")("hello");
// NOTE: Answer:Objects can also store functions however it has less flexibility. In Maps, (1) you can store values with keys that are non-strings, (2) it maintains insertion order (3) provide better performance for larger data sets.

// IMPORTANT:
/* INSERTION ORDER
-> using Map()
const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

console.log([...myMap]); 
- Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
- NOTE: Keys are returned in the order they were inserted.

-> using Objects (no problem with order when we have string keys)
const myObject = {};
myObject["b"] = 2;
myObject["c"] = 3;
myObject["a"] = 1;

console.log(Object.entries(myObject));
- Output: [ [ 'b', 2 ], [ 'c', 3 ], [ 'a', 1 ] ]
- Keys usually maintain order, but numeric keys behave differently!

[ ] using Objects that have numeric keys
const obj = {};
obj[3] = "three";
obj[1] = "one";
obj[2] = "two";
obj["a"] = "letter a";

console.log(Object.entries(obj)); 
- Output: [ [ '1', 'one' ], [ '2', 'two' ], [ '3', 'three' ], [ 'a', 'letter a' ] ]
- NOTE: Numeric keys are sorted in ascending order, while string keys remain in insertion order.
*/

/*
 4. Add the following key-value pairs to the map:
        -  1  : "number one"
        - "1" : "string one"
*/
myConsole.set(1, "number one");
myConsole.set("1", "string one");

//*   5. Print out each of the 2 values for the keys you just added.  How does this differ from an Object?
console.log(myConsole.get(1)); //? number one
console.log(myConsole.get("1")); //? string one

//NOTE: This is differnt from Object because in objects, the keys are always pressumed to be strings, but in Map we can put any data structure as a key, therefore retaining its original type.
