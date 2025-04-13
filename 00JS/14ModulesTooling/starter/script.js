//* NOTE: BASIC IMPORT

// *IMPORTANT it is not advisable to mix DEFAULT and NAMED EXPORTS
// import addtoCard, {
//   totalQuantity as price,
//   toolPrice,
// } from './shoppingCart.js';

// console.log('Importing module');
// addtoCard('five bread', 5);
// console.log('Exporting module');
// console.log(toolPrice, price); //? 238 21

// *IMPORT ALL as Object

import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addtoCard('bread', 6);
ShoppingCart.addtoCard('banana', 2);
console.log(ShoppingCart.toolPrice); //? 238

// ShoppingCart.cart.forEach(item => console.log(item));  //* if you onl need to log out values and perform side effects (use forEach)
const productArrays = ShoppingCart.cart.map(item => item.product);
console.log(productArrays); //? ['bread', 'banana']

console.log(JSON.stringify(productArrays, null, 2));
