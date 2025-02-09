/*
    1. What happens when you add 2 strings together?
    2. What about when you add a number to a string?
    3. How about when you add booleans together?

    Try to think about how these behaviours might work,
    as well as why it might happen.
*/

// string concatenation

// 1. String concatenation
console.log("Ethan" + " John"); //Ethan John

// 2. The number will be converted to a string
console.log("Ethan is " + 24); // Ethan is 24

// 3. 1 = true,  0 = false
console.log(true + true); // 2
console.log(true + false); // 1
console.log(false + true); // 1
console.log(false + false); // 0
