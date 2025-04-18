/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ^
*/
const planets = ["Mercury", "Venus", "Earth", "Mars"];

planets.push("Jupiter");
console.log(planets); //? [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter' ]

planets.unshift("Sun");
console.log(planets); //? [ 'Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter' ]

planets.pop();
planets.pop();
console.log(planets); //? [ 'Sun', 'Mercury', 'Venus', 'Earth' ]

planets.shift();
planets.shift();
console.log(planets); //? [ 'Venus', 'Earth' ]
