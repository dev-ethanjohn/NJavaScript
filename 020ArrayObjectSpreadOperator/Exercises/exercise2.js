/*
    1. Create a variable called "animal" that points at this Object:
        { name: "Koala", kingdom: "Australia", cute: true, 
          friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] }

    2. Create a variable called "koala" that points at a COPY of
       "animal" using the spread operator for Objects, but add the
       following property as well: "tail": false 

    3. Print out both "animal" as well as "koala"

    4. Change "cute" to be false inside of "animal". Print out both
       "animal" and "koala" again and observe the change. Does this
       make sense?

    5. Add a "cute" property initialized to be false inside of the
       "kangaroo" object, inside of the "friends" array in "animal".
       Print out both "animal" and "koala" again and observe the change.
       Does this make sense?
*/

const animal = {
  name: "Koala",
  kingdom: "Australia",
  cute: true,
  friends: [{ name: "Kangaroo", kingdom: "Australia" }],
};

const koala = { ...animal, tail: false };

console.log(animal);
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: true,
//   friends: [ { name: 'Kangaroo', kingdom: 'Australia' } ]
// }
console.log(koala);
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: true,
//   friends: [ { name: 'Kangaroo', kingdom: 'Australia' } ],
//   tail: false
// }

animal.cute = false;

console.log("--------after change--------");

console.log(animal);
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: false,                   //CHANGED
//   friends: [ { name: 'Kangaroo', kingdom: 'Australia' } ]
// }
console.log(koala);
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: true,
//   friends: [ { name: 'Kangaroo', kingdom: 'Australia' } ],
//   tail: false
// }

// NOTE: since we change the primitive Bool value, so is not referenced.

animal.friends[0].cute = false;
console.log("--------after 2nd change--------");
console.log(animal);
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: false,
//   friends: [ { name: 'Kangaroo', kingdom: 'Australia', cute: false } ]
// }
console.log(koala);
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: true,
//   friends: [ { name: 'Kangaroo', kingdom: 'Australia', cute: false } ],
//   tail: false
// }

// NOTE: The array friends in animal referenced the same array as koala. Thus, changing the object inside the array from one variable changes both

//  If an array or object is copied using the spread operator (...), the top-level copy is shallow, meaning nested objects/arrays are still referenced.

// 💡 To fully separate them, use deep copy techniques like JSON.parse(JSON.stringify(obj)) or structuredClone(obj). 🚀

koala.friends.push({ maa: "Koala" });

console.log(animal); //still will have the same friends array as koala
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: false,
//   friends: [
//     { name: 'Kangaroo', kingdom: 'Australia', cute: false },
//     { maa: 'Koala' }
//   ]
// }
console.log(koala); //still will have the same friends array as animal
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: false,
//   friends: [
//     { name: 'Kangaroo', kingdom: 'Australia', cute: false },
//     { maa: 'Koala' }
//   ]
// }

//NOTE? Creating a New Array Inside
const newKoala = { ...animal, friends: [...animal.friends] };

// newkoala friends will be independent
newKoala.friends.push({ name: "Panda" });

console.log(animal);
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: false,
//   friends: [
//     { name: 'Kangaroo', kingdom: 'Australia', cute: false },
//     { maa: 'Koala' }
//   ]
// }
console.log(newKoala);
// {
//   name: 'Koala',
//   kingdom: 'Australia',
//   cute: false,
//   friends: [
//     { name: 'Kangaroo', kingdom: 'Australia', cute: false },
//     { maa: 'Koala' },
//     { name: 'Panda' }
//   ]
// }

console.log("---Modifying object inside array");
// NOTE: MODIFIING EXISTING INNER OBJECT/ARRAY

newKoala.friends[0].name = "Lion";
console.log(animal.friends);
// [{ name: "Lion", kingdom: "Australia", cute: false }, { maa: "Koala" }];

console.log(newKoala.friends);
// [
//   { name: "Lion", kingdom: "Australia", cute: false },
//   { maa: "Koala" },
//   { name: "Panda" },
// ];

// IMPORTANT
// ✔️ Spreading an object ({ ...obj }) only copies top-level properties—nested objects are still referenced.
// ✔️ Spreading an array ([...arr]) creates a new array, but its objects are still referenced.
// ✔️ Adding a new object (push({ name: "Panda" })) creates a truly new object, so it doesn't affect the original.
// ✔️ To fully copy everything (deep copy), we need map() or JSON.parse(JSON.stringify(obj)).

const animal2 = {
  name: "Koala",
  kingdom: "Australia",
  cute: false,
  friends: [
    { name: "Kangaroo", kingdom: "Australia", cute: false },
    { name: "Koala" },
  ],
};

console.log("----DEEP COPY-----");

const newKoala2 = {
  ...animal2,
  friends: animal2.friends.map((friend) => ({ ...friend })), // Deep copy each friend
};
newKoala2.friends[0].name = "Lion";

console.log(animal2.friends);
// [ { name: 'Kangaroo', kingdom: 'Australia' } ] ✅ Unchanged!

console.log(newKoala2.friends);
// [ { name: 'Lion', kingdom: 'Australia' } ] ✅ Only newKoala changed!
