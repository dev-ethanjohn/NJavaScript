console.log('Exporting module');

//* Variables in the global scope of a module are not private —they are scoped to the module itself. This means they are accessible within the same module but not outside of it unless explicitly exported.
// shoppingCart.js
const shippingCost = 110;
const cart = [];

const addtoCard = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const toolPrice = 238;
const totalQuantity = 21;

export { toolPrice, totalQuantity };
// export default addtoCard;
export { addtoCard, cart };
