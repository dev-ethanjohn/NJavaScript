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
];

const modded = companies.reduce((result, company, i) => {
  if (company.startsWith("a")) {
    return result;
  }

  if (i === companies.length - 1) {
    return result + company;
  }

  return result + company + "-";
}, "");

console.log(modded); //? tesla-spacex-meta-google-ibm
