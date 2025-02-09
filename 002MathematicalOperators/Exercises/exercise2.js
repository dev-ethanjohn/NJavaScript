/*
    1. Create a let variable called "points" and print it out
    2. Assign "points" the number 20 and print it out
    3. Add 15 to "points" and print it out

    Question1: What are all the ways you can achieve step 3 above?
    Question2: What would happen if you tried to do this with a const variable?
*/

let points;
console.log(points); //undefined

points = 20;
console.log(points); //20

points += 15; //35
console.log(points);

//  1. Using the short hand addition operator  +=
//  2. We can't have uninitiazied variables, also We can't reassign once we declared it with const.
