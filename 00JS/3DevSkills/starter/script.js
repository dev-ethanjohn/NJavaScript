// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

const calcAge = birthYear => 2037 - birthYear;
console.log();

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 9, 5];

// amplitude is the different between the highest and lowest temperature

const calcTemoAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTemoAmplitude(temperatures);
console.log(amplitude);

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
const array3 = array1.concat(array2);
console.log(array3); //
