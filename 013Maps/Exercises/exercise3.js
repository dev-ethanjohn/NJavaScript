/*
    1. Create a Map called "houseForSale" with the following entries:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the entry with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new entry: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

/*
    1. Create a Map called "houseForSale" with the following entries:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

*/
const houseForSale = new Map();
houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("built", "2012");
houseForSale.set("owner", { name: "Blake", age: 29 });
houseForSale.set("offers", [290000, 295000, 315000, 312000]);

console.log("----1----");

//*   2. Print out "houseForSale" to the terminal
console.log(houseForSale);
/* ANSWER   
Map(6) {
  'area' => 940,
  'value' => 320000,
  'streetName' => 'Fifth Street',
  'built' => '2012',
  'owner' => { name: 'Blake', age: 29 },
  'offers' => [ 290000, 295000, 315000, 312000 ]
}
*/

console.log("----2----");

//*    3. Delete the entry with the key "built"
houseForSale.delete("built");

console.log("----3----");

//*   4. Change the age of the owner to be 30 inside "houseForSale"
houseForSale.get("owner").age = 30;

console.log("----4----");

//*    5. Print out the maximum offerPrice (use reduce)
const maxOfferPrice = houseForSale.get("offers").reduce((max, offer) => {
  if (offer > max) {
    return offer;
  }

  return max;
}, 0);

console.log(maxOfferPrice);

console.log("----5----");

//*    6. Add a new entry: "sale price" -> 312000
houseForSale.set("sale price", 312000);

console.log("----6----");

//*   7. Print out "houseForSale" to the terminal
console.log(houseForSale);
//? ANSWER
/*
Map(6) {
  'area' => 940,
  'value' => 320000,
  'streetName' => 'Fifth Street',
  'owner' => { name: 'Blake', age: 30 },
  'offers' => [ 290000, 295000, 315000, 312000 ],
  'sale price' => 312000
}
*/
