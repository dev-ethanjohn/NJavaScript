// does not mutate existing array.
//  result -> reduced to a single value
// always provide an initial value; otherwise JS will use the [0] of the array as teh initial value

const cities = ["london", "vancouver", "mumbai", "new york"];

const concatCities = cities.reduce((result, city) => {
  return result + city;
}, "");

console.log(concatCities); //? londonvancouvermumbainew york

console.log("------------------------");

const nums = [5, 10, 15, 20, 25];

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log(sum); //? 75

const sum2 = nums.reduce((result, number) => {
  if (number < 20) {
    return result + number;
  }

  // make sure to always have returned value if condition failed. Can be false or the last result before it fails.
  return result;
}, sum);

// cleaner syntax
/*
const sum2 = nums.reduce((result, number) => result + number, sum);
*/

console.log(sum2); //? 105

console.log("------------------------");

const cities2 = ["london", "vancouver", "mumbai", "new york"];

const concatCities2 = cities2.reduce((concatStrings, city) => {
  // return city; -> "new york" THE LAST

  if (city === "vancouver") {
    return concatStrings;
  }

  return concatStrings + city + "-";
}, "");

console.log(concatCities2); //? london-mumbai-new york-

console.log("------------------------");

const nums2 = [5, 10, 15, 20, 25];

const reduced = nums2.reduce((result, number) => {
  result.push(number * 2);
  return result;
}, []);

console.log(reduced); //? [ 10, 20, 30, 40, 50 ]
