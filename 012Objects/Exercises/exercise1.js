/*
    1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new property: colour -> "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/

const myPet = {
  name: "Sudo",
  type: "Dog",
  breed: "Poodle",
  age: 7,
  friends: ["Bit", "Byte", "Data"],
};

console.log(myPet);

//NOTE: Using dot notation
myPet.colour = "Black";
console.log(myPet);

/* ANSWER
{
  name: 'Sudo',
  type: 'Dog',
  breed: 'Poodle',
  age: 7,
  friends: [ 'Bit', 'Byte', 'Data' ],
  colour: 'Black'
}
*/

// Object.defineProperty(myPet, "colour", {
//   value: "Black",
//   enumerable: true,
// });
// console.log(myPet);

// OTHER WAYs to add property such as (1) bracket notation (2) Object.assign() (3) Spread operator (4) Object.defineProperty()

myPet.breed = "Beagle";
myPet.friends.pop("Data");

console.log(myPet);
/* ANSWER
{
  name: 'Sudo',
  type: 'Dog',
  breed: 'Beagle',
  age: 7,
  friends: [ 'Bit', 'Byte' ],
  colour: 'Black'
}
*/

myPet.friends.push("Chip");
console.log(myPet);

/* ANSWER
{
  name: 'Sudo',
  type: 'Dog',
  breed: 'Beagle',
  age: 7,
  friends: [ 'Bit', 'Byte', 'Chip' ],
  colour: 'Black'
}
*/
