const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
};

console.log(countryPop); //? { Germany: 83, Brazil: 212, Egypt: 102 }

const copy = {
  //BETTER
  Japan: 124,
  ...countryPop,
  Philippines: 112,
  Vietnam: 99,
  Germany: 84,
};

console.log(countryPop);

console.log(copy);
/* //IMPORTANT We can override property by duplicating the key and set a new value. The new value must precede the previous one for override to work
{
  Japan: 124,
  Germany: 84,      //NOTE: Override 
  Brazil: 212,
  Egypt: 102,
  Philippines: 112,
  Vietnam: 99
}
*/

console.log("---using loop----");
// NOTE: USING LOOP
const countryPopExtended = {};
for (const entry of Object.entries(countryPop)) {
  //LONGER
  const country = entry[0];
  const pop = entry[1];

  countryPopExtended[country] = pop;
}

console.log(countryPopExtended); //? { Germany: 83, Brazil: 212, Egypt: 102 }
countryPopExtended["Philippines"] = 112;
console.log(countryPopExtended); //? { Germany: 83, Brazil: 212, Egypt: 102, Philippines: 112 }
