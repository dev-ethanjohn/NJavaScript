/*
    1. Create an variable called "points" that points at this array:
       [10, 15, 20, 30, 5]

    2. Create another variable called "pointsCopy" that creates a
       copy of "points" using the spread operator, but also adds
       2 extra values at the end: 50 and 75

    3. Print out both "pointsCopy" and "points"
*/

const points = [10, 15, 20, 30, 5];

const pointsCopy = [...points, 50, 75];

console.log(points); //? [ 10, 15, 20, 30, 5 ]
console.log(pointsCopy);
/*
[
  10, 15, 20, 30,
   5, 50, 75
]
*/
