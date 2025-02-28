/*
    1. Create an array called "points" with the following values:
       [10, 20, 10, 30, 15, 15, 35, 60, 10]

    2. How can you print out all the UNIQUE points inside "points"?
*/

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const seen = new Set();
// const dupl = []; //*If we want to store the unique values in another array

for (let i = 0; i < points.length; i++) {
  const point = points[i];

  if (!seen.has(point)) {
    // dupl.push(point);
    console.log(point);
  }
  seen.add(point);
}

// console.log(dupl); //? [ 10, 20, 30, 15, 35, 60 ]
console.log(seen); //? Set(6) { 10, 20, 30, 15, 35, 60 }

//NOTE: SHORTCUT to store unique values in another Set
const newSet = new Set(points);
console.log(newSet); //? Set(6) { 10, 20, 30, 15, 35, 60 }

// NOTE: SHORTCUT to store unique values in another array
const newArray = [...new Set(points)];
console.log(newArray); //? [ 10, 20, 30, 15, 35, 60 ]
