//[0] ARRAY map is part of functional programming concepts
//[1] Higher order methods
//[2] Creates a new array
//[3] Always return a way when using array

const cities = ["london", "paris", "manila"];

//?[2]
const bigCities = cities.map((city) => {
  return city.toUpperCase();
});

console.log(bigCities[1]); //? PARIS

for (let i = 0; i < bigCities.length; i++) {
  console.log(bigCities[i]);
}
/*
? LONDON
? PARIS
? MANILA
 */
