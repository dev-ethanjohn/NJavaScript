/*
    1. Create an array called 'countries' of the following strings:
        ["France", "South Africa", "Brazil", "United States", "Sweden"]

    2. Filter over 'countries' and keep only the countries that have
       a blank space in their name (South Africa and United States)

    3. Print out both arrays

    HINT: Google for "javascript string contains"
*/

const countries = [
  "France",
  "South Africa",
  "Brazil",
  "United States",
  "Sweden",
];

// check google for string contains
const newCountries = countries.filter((country) => {
  if (country.includes(" ")) {
    return true;
  }

  return false;
});

console.log(newCountries); //? ["South Africa", "United States"];
