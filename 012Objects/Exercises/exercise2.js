/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create an object called "store" with the following properties:
        - storeNumber -> 5
        - locationCity -> "Milan"
        - locationCountry -> "Italy"
        - products: [banana, apple, candy]

    3. Print out "store" to the terminal

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store object
       to be 1.75..

    7. Print out both "store" and "banana"

*/

const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const candy = { name: "candy", quantity: 1, price: 3.5 };

const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};

console.log(store);

/* ANSWER
{
  storeNumber: 5,
  locationCity: 'Milan',
  locationCountry: 'Italy',
  products: [
    { name: 'banana', quantity: 1, price: 1.95 },
    { name: 'apple', quantity: 1, price: 1.45 },
    { name: 'candy', quantity: 1, price: 3.5 }
  ]
}
*/

console.log("-------------");

for (let i = 0; i < store.products.length; i++) {
  console.log(store.products[i]);
}

/*
{ name: 'banana', quantity: 1, price: 1.95 }
{ name: 'apple', quantity: 1, price: 1.45 }
{ name: 'candy', quantity: 1, price: 3.5 }
*/

// NOTE:  arr.at(-1) is cleaner than arr[arr.length - 1]
console.log(store.products.at(-1)); //? { name: 'candy', quantity: 1, price: 3.5 }

// store.products[0].price = 1.75;
banana.price = 1.75;

console.log(store);
/* ANSWER
{
  storeNumber: 5,
  locationCity: 'Milan',
  locationCountry: 'Italy',
  products: [
    { name: 'banana', quantity: 1, price: 1.75 },
    { name: 'apple', quantity: 1, price: 1.45 },
    { name: 'candy', quantity: 1, price: 3.5 }
  ]
}
*/
console.log("Updated Banana price: ");
console.log(banana.price); //? 1.75

// NOTE: BETTER WAY
const bananaInStore = store.products.find(
  (product) => product.name === "banana"
);

if (bananaInStore) {
  bananaInStore.price = 1.75;
}

console.log("After using find():");
console.log(store.products[0]); // ? { name: 'banana', quantity: 1, price: 1.75 }
console.log(banana); // ? { name: 'banana', quantity: 1, price: 1.75 }

// NOTE: EVEN better
store.products.forEach((product) => {
  if (product.name === "banana") {
    product.price = 1.75;
  }
});

console.log("\nAfter using forEach():");
console.log(store.products[0]); //? { name: 'banana', quantity: 1, price: 1.75 }
console.log(banana); //? { name: 'banana', quantity: 1, price: 1.75 }
