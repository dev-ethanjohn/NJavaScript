/*
    1. Create a new Object and assign it to a variable
       called "store". Give it the following value:
       { name: null, stock: [
        { name: 'candy', quantity: 100 },
        { name: 'fruit', quantity: 7 },
        { name: 'toys', quantity: 23 }] }

    2. Create another new Object called "myStore" and assign
       it to an empty Object. Then, set it's name to:
       "My Wonderful Store"
    3. Set the prototype of "myStore" to be "store"

    4. Create another new Object called "yourStore" and assign
       it to an empty  Object. Then, set it's name to:
       "Not My Wonderful Store"
    5. Set the prototype of "yourStore" to be "store"

    6. Modify the quantity of fruit in "myStore" to be 300
    7. Log out the name and stock from "myStore"
    8. Log out the name and stock from "yourStore"

    9. What is happening and Why?
*/

const store = {
  name: null,
  stock: [
    { name: "candy", quantity: 100 },
    { name: "fruit", quantity: 7 },
    { name: "toys", quantity: 23 },
  ],
};

const myStore = {};
myStore.name = "My Wonderful Store";
console.log(myStore); //? { name: 'My Wonderful Store' }
Object.setPrototypeOf(myStore, store);

const yourStore = {};
yourStore.name = "Not My Wonderful Store";
console.log(yourStore); //? { name: 'Not My Wonderful Store' }
Object.setPrototypeOf(yourStore, store);

myStore.stock[1].quantity = 300;

// Step 7: Log "myStore" details
console.log(myStore.name); // "My Wonderful Store"
console.log(myStore.stock);
/*
[
  { name: 'candy', quantity: 100 },
  { name: 'fruit', quantity: 300 },  // Modified!
  { name: 'toys', quantity: 23 }
]
*/

// Step 8: Log "yourStore" details
console.log(yourStore.name); // "Not My Wonderful Store"
console.log(yourStore.stock);
/*
[
  { name: 'candy', quantity: 100 },
  { name: 'fruit', quantity: 300 },  // Also changed!
  { name: 'toys', quantity: 23 }
]
*/

// NOTE:
// What Happens When Object.setPrototypeOf(myStore, store);?
// This means myStore’s prototype is now the store object itself.
//* So, whenever you try to access a property in myStore, if it doesn’t exist in myStore, JavaScript looks for it in store (via the prototype chain).

console.log(Object.getOwnPropertyNames(store.__proto__));
console.log(Object.getOwnPropertyNames(myStore.__proto__));
console.log(Object.getOwnPropertyNames(yourStore.__proto__));
