/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create a Map called "store" with the following entries:
        - storeNumber -> 5
        - locationCity -> "Milan"
        - locationCountry -> "Italy"
        - products: [banana, apple, candy]

    3. Print out "store" to the terminal

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store Map
       to be 1.75..

    7. Print out both "store" and "banana"

    8. Change the price of the candy object directly to be 4.99

    9. Print out both "store" and "candy"
*/

const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const candy = { name: "candy", quantity: 1, price: 3.5 };

const store = new Map();

store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);

//* 4. Only print out all the product objects in "store"

const products = store.get("products");
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}
/* ANSWER
{ name: 'banana', quantity: 1, price: 1.95 }
{ name: 'apple', quantity: 1, price: 1.45 }
{ name: 'candy', quantity: 1, price: 3.5 }
*/

/*NOTE LESS EFFICIENT
for (let i = 0; i < store.get("products").length; i++) {
  console.log(store.get("products")[i]);
}
console.log(store);
*/

console.log(store);
/* ANSWER
Map(4) {
  'storeNumber' => 5,
  'locationCity' => 'Milan',
  'locationCountry' => 'Italy',
  'products' => [
    { name: 'banana', quantity: 1, price: 1.95 },
    { name: 'apple', quantity: 1, price: 1.45 },
    { name: 'candy', quantity: 1, price: 3.5 }
  ]
}
*/

//*   5. Only print out the 3rd product object in "store"
console.log(store.get("products")[products.length - 1]); //? { name: 'candy', quantity: 1, price: 3.5 }

//*    6. Change the price of the banana object through the store Map to be 1.75..
store.get("products")[0].price = 1.75;

//*    7. Print out both "store" and "banana"
console.log(store);
/* ANSWER
Map(4) {
  'storeNumber' => 5,
  'locationCity' => 'Milan',
  'locationCountry' => 'Italy',
  'products' => [
    { name: 'banana', quantity: 1, price: 1.75 }, 
    { name: 'apple', quantity: 1, price: 1.45 },
    { name: 'candy', quantity: 1, price: 3.5 }
  ]
}
*/
console.log(banana); //? { name: 'banana', quantity: 1, price: 1.75 }

//*   8. Change the price of the candy object directly to be 4.99
candy.price = 4.99;

//* Print out both "store" and "candy"
console.log(store);
/* ANSWER
Map(4) {
  'storeNumber' => 5,
  'locationCity' => 'Milan',
  'locationCountry' => 'Italy',
  'products' => [
    { name: 'banana', quantity: 1, price: 1.75 },
    { name: 'apple', quantity: 1, price: 1.45 },
    { name: 'candy', quantity: 1, price: 4.99 }
  ]
}
*/
console.log(candy); //? { name: 'candy', quantity: 1, price: 4.99 }
