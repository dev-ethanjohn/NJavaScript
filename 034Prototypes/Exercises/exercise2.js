/*
    1. Create a new Object and assign it to a variable
       called "fakeArray". Give it the following value:
       { "0": "Zero", "1": "One", "2": "Two", length: 3}

    2. Set the prototype of "fakeArray" to be Array.prototype

    3. Use the map method on "fakeArray" to log out each item
       in the array.

    4. What is happening here and why does this work?
*/
const fakeArray = {
  0: "Zero",
  1: "One",
  2: "Two",
  length: 3,
};

console.log(Object.getOwnPropertyNames(fakeArray)); //? [ '0', '1', '2', 'length' ]

// IMPORTANT: Make fakeArray inherit all array methods
Object.setPrototypeOf(fakeArray, Array.prototype);

// * call() isnt required if we set the Prototype
console.log(fakeArray.map((item) => item)); //? ["Zero", "One", "Two"]

//  *With .call() (Prototype Not Set)
// NOTE: UNCOMMENT to check result
// const result = Array.prototype.map.call(fakeArray, (item) => item);
// console.log(result); // ["Zero", "One", "Two"]
