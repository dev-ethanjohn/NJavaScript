/*
    1. Create an object called "houseForSale" with the following properties:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    // 2. Print out "houseForSale" to the terminal

    3. Delete the property with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new property: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

const houseForSale = {
  area: 940,
  value: 320000,
  streetName: "Fifth Street",
  built: "2012",
  owner: { name: "Blake", age: 29 },
  offers: [290000, 295000, 315000, 312000],
};

delete houseForSale.built;
console.log(houseForSale);
/* ANSWER
{
  area: 940,
  value: 320000,
  streetName: 'Fifth Street',
  owner: { name: 'Blake', age: 29 },
  offers: [ 290000, 295000, 315000, 312000 ]
}
*/
houseForSale.owner.age = 30;

//Print out the maximum offerPrice (use reduce)
const maxOfferPrice = houseForSale.offers.reduce((max, offer) => {
  if (max < offer) {
    return offer;
  }

  return max;
}, 0);

console.log(maxOfferPrice); //? 315000

houseForSale["sale price"] = 312000;

console.log(houseForSale);

/* ANSWER
{
  area: 940,
  value: 320000,
  streetName: 'Fifth Street',
  owner: { name: 'Blake', age: 30 },
  offers: [ 290000, 295000, 315000, 312000 ],
  'sale price': 312000
}
*/
