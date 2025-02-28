// For Of Loop is use with iteratable objects like arrays/sets
//you can use break/continue
// you can't access the index
// we cant manipuate string array unlike regular for loop, unless not primitive types

const chars = ["Frodo", "Haryy", "Thanos"];

// Manipulate the arry
for (let i = 0; i < chars.length; i++) {
  chars[i] = chars[i].toUpperCase();
}

console.log(chars); //? [ 'FRODO', 'HARYY', 'THANOS' ]

// use the manipulated array
for (const favChar of chars) {
  console.log(favChar);
}

/*
FRODO
HARYY
THANOS
*/

// READ AND print over the iteration.
console.log(chars); // ? ["FRODO", "HARYY", "THANOS"];

console.log("-------------------");
//NOTE: Using temporary modification
const message = "Hi";

for (const char of message) {
  // will temporarily make each char to UpperCase
  console.log(char.toUpperCase());
}
/*
H
I
*/

console.log(message); //? Hi -> THE TEMPORARY UPPERCASED Not saved back to Message

console.log("-----For of Maps-----");
