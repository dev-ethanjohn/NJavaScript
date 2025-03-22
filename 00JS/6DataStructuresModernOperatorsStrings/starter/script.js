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
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  nameR: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    // no need to write function keyword with ES6
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destucturing the Object immediately.
  orderDeliver: function ({
    // old way of writing function
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
const { nameR, openingHourss, categories } = restaurant;
console.log(nameR, openingHourss, categories);

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
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays); //? {thu: {…}, fri: {…}}

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

// IMPORTANT: (116) Enhanced Object Literals
console.log('--- Enhanced Object Literals ---');

// IMPORTANT: (117) Optional Chaining (?.)
console.log('--- Optional Chaining (?.) ---');
// it is used to avoid errors when trying to access a property of an object that does not exist.
// it is used to check if a certain property exists in an object.
// it is used to avoid a long chain of properties.

// restaurant.openingHours.mon.open; // Error
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// with optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours.thu?.open); // 12
console.log(restaurant.openingHours?.fri?.open); // 11

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// Arrays
const users = [
  { name: 'Alice', email: 'ethan@io' },
  { name: 'Bob', email: 'bob@io' },
];

console.log(users[0]?.name ?? 'User array empty'); // Alice
console.log(users[2]?.name ?? 'User array empty'); // User array empty

// IMPORTANT: (118) Looping Objects: Object Keys, Values, and Entries
console.log('--- Looping Objects: Object Keys, Values, and Entries ---');

// PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties); //? ["thu", "fri", "sat"]

let openStr = `We are open on ${properties.length} days: `; //? We are open on 3 days

for (const day of Object.keys(openingHours)) {
  console.log(day);
  //? thu
  //? fri
  //? sat

  openStr += `${day}, `;
}

console.log(openStr);

// PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values); //? [{…}, {…}, {…}]
//? 0: {open: 12, close: 22}
//? 1: {open: 11, close: 23}
//? 2: {open: 0, close: 24}

// ENTIRE OBJECT (KEYS AND VALUES)
const entries = Object.entries(openingHours);
console.log(entries); //? (3) [Array(2), Array(2), Array(2)]
//? 0: ["thu", {…}]
//? 1: ["fri", {…}]
//? 2: ["sat", {…}]

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
//? On thu we open at 12 and close at 22
//? On fri we open at 11 and close at 23
//? On sat we open at 0 and close at 24

// IMPORTANT (120) Sets
console.log('--- Sets ---');
// Sets are a collection of unique values.
// Sets are iterable objects.
// Sets are used to store unique values of any type.
// Sets can store any type of values.
//  Order and index of elements is irrelevant.

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(new Set('Alice')); //{'A', 'l', 'i', 'c', 'e'}
console.log(orderSet); //? {"Pasta", "Pizza", "Risotto"}
console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet); //? {"Pasta", "Pizza", "Garlic Bread"}

// orderSet.clear();
// console.log(orderSet); //? {}

for (const order of orderSet) console.log(order);

// Use case
// 1. Remove duplicates
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; //convert to array
console.log(staffUnique); //? ['Waiter', 'Chef', 'Manager']
console.log(new Set(staff).size); //? 3

console.log(new Set('Alice').size); //? 5
console.log(new Set('Alice Schmedtmann').size); //? 13

// IMPORTANT (121) New Operations to Make Sets Useful
console.log('--- New Operations to Make Sets Useful ---');

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Interaction method ->
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods); //?  {'tomatoes', 'garlic'} -> *only return the common items present in both sets

console.log([...commonFoods]); //? ['tomatoes', 'garlic']

// Union method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

console.log(new Set([...italianFoods, ...mexicanFoods])); //* the same outpu as L561

// Difference method
const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log(uniqueItalian); //? {'pasta', 'gnocchi', 'olive oil', 'basil'} -> unique items only on 1st set

const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log(uniqueMexican); //? {'tortillas', 'beans', 'rice', 'avocado'} -> unique items only on 2st set

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods); //?  {'pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas', …} -> all unique items added together from 1st and 2nd set

console.log(italianFoods.isDisjointFrom(mexicanFoods)); //false

// IMPORTANT (122): Maps Fundamentals
console.log('---- Maps Fundamentals ----');
// keys can be any type vs. object where keys are always strings
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Liston, Portugal')); //? {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Liston, Portugal'}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name')); //? Classico Italiano
console.log(rest.get(true)); //? We are open

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //? We are open

console.log(rest.has('categories')); //? true
rest.delete(2);
console.log(rest); //? {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}

console.log(rest.size); //? 7
rest.clear();
console.log(rest.size); //? 0

rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size); //? 1

console.log(rest.get([1, 2])); //? undefined ()
//NOTE: Arrays, objects, and functions are reference types.
// Two objects with identical contents are still considered different if they are separate instances in memory.
// Similarly, [1, 2] creates a new array object each time, so rest.get([1, 2]) cannot find the original key.

//  to fix issue
const key = [1, 2];
rest.set(key, 'Test');
console.log(rest.get(key)); //? Test

const key2 = document.querySelector('h1'); // (DOM elements also special type of object - reference types)
rest.set(key2, 'Heading');
console.log(rest.get(key2)); //? Heading

// IMPORTANT (123):  Map iteration
const question = new Map([
  ['question', 'What is the best programming in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct! :D'],
  [false, 'Try again!'],
]);

console.log(question); //? {'question' => 'What is the best programming in the world?', 1 => 'C', 2 => 'Java', 3 => 'Javascript', 'correct' => 3, …}

// NOTE: convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); //? {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}

console.log(Object.entries(openingHours));
console.log(question.get('question')); //? What is the best programming in the world?

// Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// NOTE: UNCOMMENT if you need to use prompt
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
//? correct! :D

// Convert map to array
console.log([...question]); //? (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]); //? (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// IMPORTANT (124): Which Data Structure to Use?
// I. Sources of Data
// 1. From the program itself: Sets for unique values, arrays for ordered values, status messages, etc.
// 2. From the UI: Maps for DOM elements, arrays for order of events, Data input from users or data written in DOM (e.g. forms, tasks in todo app): Arrays or Maps.
// 3. From external sources: Arrays for ordered data, Maps for data that needs a key-value pair, Sets for unique values. Data fetched from web APIs (e.g. recipe obects, JSON data): Arrays or Maps.

// We need data structures to store data so that we can retrieve it later.
// 1. Simple lists = Arrays or Sets
// 2. Key-Value pairs = Objects or Maps

// Data from web APIs is usually in JSON format, which means it is an object.
// 1. When we need order -> Array
// 2. When we need a key-value pair -> Object

// Other built in data structures
// 1. WeakMap
// 2. WeakSet

// Other non built in data structures
// 1. Stacks
// 2. Queues
// 3. Linked Lists
// 4. Trees
// 5. Graphs
// 6. Hash Tables

// ARRAYS
// 1. When you need ordered list of values (might have duplicates)
// 2. When you need to manipulate data (add, remove, etc.)

// SETS
// 1. When you need to work with unique values
// 2. When high-performance is important
// 3. Use to remove duplicates from arrays

// OBJECTS
// 1. More traditional key/value store
// 2. When you need to include functions (methods)
// 3. When you don't need order
// 4. When you need to quickly look up values using keys with .notation or [] notation
// 5. Used when working with JSON (can convert to map)

// MAPS
// 1. Better performance than objects for large datasets
// 2. Keys can have any data type
// 3. Easy to iterate
// 4. Easy to compute size
// 5. Use when you simply need to map key-value pairs
// 6. Use when you need keys that are not strings

// IMPORTANT (126): Working with Strings - Part 1
console.log('--- Working with Strings - Part 1 ---');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //? A
console.log(plane[1]); //? 3
console.log(plane[2]); //? 2
console.log('B737'.length); //? 4

console.log(airline.indexOf('r')); //? 6
console.log(airline.lastIndexOf('r')); //? 10
console.log(airline.indexOf('Portugal')); //? 8
console.log(airline.indexOf('portugal')); //? -1 *(case sensitive)

console.log(airline.slice(4)); //? Air Portugal
console.log(airline.slice(4, 7)); //? Air *(start, end)
console.log(airline.slice(0, airline.indexOf(' '))); //? TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //? Portugal

console.log(airline.slice(-2)); //? al
console.log(airline.slice(1, -1)); //? AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :(');
  else console.log('You got lucky!');
};

checkMiddleSeat('11B'); //? You got the middle seat :(
checkMiddleSeat('23C'); //? You got lucky!
checkMiddleSeat('3E'); //? You got the middle seat :(

console.log(new String('Alice')); //? [String: 'Alice']
console.log(typeof new String('Alice')); //? object
// NOTE: Slice does not mutate the original string.
// Javascript converts string primitive to string object when we call a method on it. This is called boxing.
// Strings are immutable, so methods like slice always return a new string.

// IMPORTANT (127): Working with Strings - Part 2
console.log('--- Working with Strings - Part 2 ---');

console.log(airline.toLowerCase()); //? tap air portugal
console.log(airline.toUpperCase()); //? TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = 'aLiCe';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //? Alice

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // removes white spaces
console.log(trimmedEmail); //hello@jonas.io
// -> *shortcut
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //hello@jonas.io

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$

// replace all
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// Regular Expression
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320')); // true
console.log(plane2.startsWith('Airb')); // true
console.log(plane2.endsWith('neo')); // true

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
} //? Part of the NEW Airbus family

//NOTE: Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife'); //? You are not allowed on board
checkBaggage('Socks and camera'); //? Welcome aboard!
checkBaggage('Got some snacks and a gun for protection'); //? You are not allowed on board

// IMPORTANT (128): Working with Strings - Part 3
console.log('--- Working with Strings - Part 3 ---');

// Split and Join
console.log('a+very+nice+string'.split('+')); //? ["a", "very", "nice", "string"]
console.log('Alice Schmedtmann'.split(' ')); //? ["Alice", "Schmedtmann"]

const [firstName, lastName] = 'Alice Schmedtmann'.split(' ');
console.log(firstName, lastName); //? Alice Schmedtmann

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //join method is used to join the elements of an array into a string.
console.log(newName); //? Mr. Alice SCHMEDTMANN

// Capitalize first letter of each word
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis'); //? Jessica Ann Smith Davis
capitalizeName('alice schmedtmann'); //? Alice Schmedtmann

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //? +++++++++++Go to gate 23!
console.log('Jonas'.padStart(23, '+')); //? ++++++++++++++++++Jonas
console.log(message.padStart(25, '+').padEnd(35, '+')); //? +++++++++++Go to gate 23!++++++++++

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(98267412898263)); //? **********8263
console.log(maskCreditCard('268997281')); //? *****7281

// repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(3)); // Bad weather... All departures delayed... Bad weather... All departures delayed... Bad weather... All departures delayed...

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5); //? There are 5 planes in line ✈✈✈✈✈
planesInLine(3); //? There are 3 planes in line ✈✈✈
planesInLine(12); //? There are 12 planes in line ✈✈✈✈✈✈✈✈✈✈✈✈
