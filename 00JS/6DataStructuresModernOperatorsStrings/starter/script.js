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
