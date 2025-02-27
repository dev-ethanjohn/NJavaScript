//[0] ARRAY filter is part of functional programming concepts
//[1] Higher order methods
//[2] Creates a new array

const cities = ["madrid", "vancouver", "mumbai", "new york"];

const mCities = cities.filter((city) => {
  return city.startsWith("m");
});

// truthy will be returned
console.log(mCities); //? [ 'madrid', 'mumbai' ]
console.log(cities); //? [ 'madrid', 'vancouver', 'mumbai', 'new york' ]

const nums = [5, 6, 7, 8, 9, 10];

const evenNumbers = nums.filter((num) => {
  if (num % 2 === 0) {
    // anything truthy will return something
    // return 100 -> will still work
    return true;
  }

  return false;
});

console.log(evenNumbers); // ? [ 6, 8, 10 ]
