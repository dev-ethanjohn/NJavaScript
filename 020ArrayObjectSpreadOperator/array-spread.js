//IMPORTANT: ITERABLES
// String, Array, Map, Set

//Spread Operator -> array, object, function argument
//NOTE: We are creating a copy

const array = [10, 20, 30, 40, 50];

const arrayCopy = [];
for (const value of array) {
  arrayCopy.push(value);
}

arrayCopy.push(60);

console.log(array); //?[ 10, 20, 30, 40, 50 ]
console.log(arrayCopy); //? [ 10, 20, 30, 40, 50, 60 ]  SEPARATE COPY

const arrayCopy2 = [...arrayCopy];
arrayCopy2.push("copy");
console.log(arrayCopy2);
/*
[
  10,     20,
  30,     40,
  50,     60,
  'copy'
]
*/

const arrayCopy3 = [7, 8, 9, ...arrayCopy2, 1, 2, 3];
console.log(arrayCopy3);
/*
[
  7,      8,  9,
  10,     20, 30,
  40,     50, 60,
  'copy', 1,  2,
  3
]
*/
