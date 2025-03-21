'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const restaurant = {
  nameR: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destucturing the Object immediately.
  orderDeliver: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(obj);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}` //called at line 140
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

[secondary, main] = [main, secondary];
console.log(main, secondary);

const [primaryMenu, secondaryMenu] = restaurant.order(2, 0);
console.log(primaryMenu, secondaryMenu); //Garlic Bread Pizza

// NESTED Array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // (2) [5, 6]

// Do destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// DEFAULT VALUES
// Setting default values is useful particular when cases we dont know the array like dealing with APIs, where we dont know the data we are getting.
const [p = 1, q = 1, r = 2] = [8, 9];
console.log(p, q, r); //? 8 9 2

// (108) Destructuring Objects
console.log('--- Destructuring Objects ---');

// NOTE: REFER TO LINE 37 above
const { nameR, openingHours, categories } = restaurant;
console.log(nameR, openingHours, categories);

// Changing the variable names
const {
  nameR: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values
// empty array as default value if the property is not present in the object
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj); // wrapping in () to avoid syntax error
// This causes a syntax error because JavaScript interprets { a, b } as a block statement , not an object literal. Inside a block, = is not valid syntax.
// this works because we are not declaring a new variable but we are assigning a new value to the existing variable
console.log(a, b); // 23 7

// NESTED OBJECT
const user = {
  userName: 'Alice',
  address: {
    city: 'New York',
    zip: 10001,
  },
};

const {
  userName,
  address: { city, zip },
} = user;

console.log(userName, city, zip); // Output: Alice New York 10001

// NOTE:
// passing an object of options
restaurant.orderDeliver({
  time: '22:30',
  address: 'Viva del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); //? Order received! Garlic Bread and Risotto will be delivered to Viva del Sole, 21 at 22:30

//IMPORTANT: (109) Spread Operator
console.log('--- Spread Operator ---');
// Spread Operator is used to expand an array or object or any iterable into individual elements.
// Spread Operator is used where we would write values separated by commas.
// Spread creates a shallow copy of the array or object.
// Spread Operator is used in function calls and in array literals.

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]  //? Not a good way to do this

// Using Spread Operator
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9 // logs each element of the array

// Spread Operator can be used in all iterables like arrays, strings, maps, sets, etc.
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocchi"]

// NOTE: 2 use cases of Spread Operator
// 1. Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// 2. Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2); //? ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Alice';
const letters = [...str, ' ', 'S.'];
console.log(letters); //? ["A", "l", "i", "c", "e", " ", "S."]
console.log(...str); //? A l i c e
// console.log(`${...str} Schmedtmann`); // SyntaxError: Unexpected token '...'

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //? Here is your delicious pasta with a, s, d
restaurant.orderPasta(...ingredients); //? Here is your delicious pasta with a, s, d (BETTER SOLUTION)

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Alice' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.nameR = 'Ristorante Roma';
console.log(restaurantCopy.nameR); // Ristorante Roma (changed)
console.log(restaurant.nameR); // Classico Italiano (unchanged)

// NOTE: NESTED OBJECTS/ARRAYS
const originalArray = [1, 2, [3, 4]];

console.log('Original Array: ', originalArray);
// Create a shallow copy using the spread operator
const copy = [...originalArray];
console.log(copy); // [1, 2, [3, 4]]
// Modify a top-level element in the copy
copy[0] = 10;
console.log(originalArray[0]); // 1 (unchanged)
console.log(copy[0]); // 10 (changed)
// Modify a nested element in the copy
copy[2][0] = 30;
console.log(originalArray[2][0]); // 30 (changed!)
console.log(copy[2][0]); // 30 (changed)

// Create a shallow copy using the spread operator
const originalObject = {
  a: 1,
  b: { c: 2 },
};
console.log('originalObject', originalObject);
const copiedObject = { ...originalObject };
console.log(copiedObject); // { a: 1, b: { c: 2 } }
// Modify a top-level property in the copy
originalObject.a = 10;
console.log(originalObject.a); // 1 (unchanged)
console.log(originalObject.a); // 10 (changed)
// Modify a nested property in the copy
originalObject.b.c = 20;
console.log(originalObject.b.c); // 20 (changed!)
console.log(originalObject.b.c); // 20 (changed)

// IMPORTANT: (110) Rest Pattern and Parameters

const arrAy = [1, 2, ...[3, 4]];

// Rest is opposite of Spread. It packs elements into an array and usually at the left side of the assignment operator.
// Rest is used in function parameters and destructuring.
// Rest collects multiple elements and condenses them into an array.
// NOTE: Rest must be the last element.
const [c, d, ...others] = [1, 2, 3, 4, 5];
console.log(c, d, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood); // Pizza Risotto ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Rest in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //? {thu: {…}, fri: {…}}

// Rest in function parameters
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const sum1 = add(2, 3); // [2, 3]
const sum2 = add(5, 3, 7, 2); // [5, 3, 7, 2]

console.log(sum1, sum2); //? 5 17
// Spread -> Expand, Rest -> Compress

const x = [27, 5, 3];
const sum3 = add(...x); // [27, 5, 3]
console.log(sum3); //? 35

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
//1? mushrooms
//2? ["onions", "olives", "spinach"]

restaurant.orderPizza('mushrooms');
//1? mushrooms
//2? []

// IMPORTANT (111) Short Circuiting (&& and ||)
console.log('--- Short Circuiting (&& and ||) ---');
//  Return the first truthy value.
//  logical operators can use any data type and return any data type.
//  They do short-circuiting, which means they can use any data type and return any data type.
//  They can return any data type, not only boolean.
console.log('--- OR ---');
console.log(3 || 'Alice'); // 3
console.log('' || 'Alice'); // Alice
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// practical use
// using ternary operator
// restaurant.numGuests = 10;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10 (default value)

//  using short-circuiting (if all are falsy, it returns the last value)
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10 (default value)

console.log('--- AND ---');
//  Return the first falsy value.
// if all are truthy, it returns the last value.
console.log(0 && 'Alice'); // 0
console.log(7 && 'Alice'); // Alice

console.log('Hello' && 23 && null && 'Alice'); // null

// practice use
// using if-else
if (restaurant.orderPizza) {
  //more explicit
  restaurant.orderPizza('mushrooms', 'spinach');
}

// using short-circuiting (if all are truthy, it returns the last value)
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //if truthy,call the function

// IMPORTANT (112) The Nullish Coalescing Operator (??)
console.log('--- The Nullish Coalescing Operator (??) ---');
// it works with nullish values: null and undefined (NOT 0 or ''). We assume that 0 and '' are valid values.
// it is used to set default values.
restaurant.numGuests = 0;
const guestsCorreect = restaurant.numGuests ?? 10;
console.log(guestsCorreect); // 0

// IMPORTANT (113) Logical assignment Operators
console.log('--- Logical assignment Operators ---');

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Perla',
  owner: 'Giovanni',
};

// if the property is not present, it will be set to 10
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// using logical nullish (setting default values)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1); //? {name: "Capri", numGuests: 23}
console.log(rest2); //? {name: "La Perla", owner: "Giovanni", numGuests: 10}

// using local add
rest1.owner ||= 'anonymous';
rest2.owner ||= 'anonymous';
console.log(rest1); //? {name: 'Capri', numGuests: 0, owner: 'anonymous'}
console.log(rest2); //? {name: 'La Perla', owner: 'Giovanni', numGuests: 10}

// IMPORTANT: (115) Looping Arrays: The for-of Loop
// for of loop
console.log('--- Looping Arrays: The for-of Loop ---');

const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu3) console.log(item);
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

for (const [i, el] of menu3.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto
