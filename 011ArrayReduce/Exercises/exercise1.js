/*
    1. Create an array called 'companies' of the following strings:
        ["apple", "tesla", "spacex", "amazon", "meta", "google"]

    2. Create a const called "modded" that reduces the "companies"
       array to a string of companies that DO NOT start with the
       letter 'a', separated by dashes

    3. Print out "companies" and "modded"

    "modded" should be: "tesla-spacex-meta-google-"

    BONUS: How can you get rid of the trailing '-' ?
    TIP: Look up reduce on Google using docs like MDN
*/

const companies = [
  "apple",
  "tesla",
  "spacex",
  "amazon",
  "meta",
  "google",
  "ibm",
  "asa",
  "jess",
];

const modded = companies.reduce((result, company) => {
  if (!company.startsWith("a")) {
    console.log(result);
    // If result is truthy (meaning it already contains some values), we append "-" and the company to it.
    // If result is falsy (meaning it's still an empty string ""), we start with the company name without adding a "-" at the beginning.
    return result ? result + "-" + company : company;
  }

  return result;
}, "");

console.log(modded); //? tesla-spacex-meta-google-ibm-jess

// NOTE: CLEANER using filter , then convert to 1 liner string
// .join(" ") is explicitly designed to return a string, not an array.
// It's used to concatenate array elements into a single string.
const modded2 = companies
  .filter((company) => {
    return !company.startsWith("a");
  })
  .join("-");

console.log(modded2); //? tesla-spacex-meta-google-ibm-jess
