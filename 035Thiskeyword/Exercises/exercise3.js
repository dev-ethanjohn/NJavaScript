/*
    1. Create a function called "Person". It will have 3
       parameters: name, age, and favouriteFood. (function
       syntax, not arrow function!)

    2. Inside of Person, directly set these values:
       this.name = name;
       this.age = age;
       this.favouriteFood = favouriteFood
       (no return value is needed)

    3. Create a the following two variables:
       const avery = Person("Avery", 20, "Dark Chocolate");
       const jackie = new Person("Jackie", 35, "Sourdough Bread");

    4. Log out "avery" and "jackie" and explain what you see

    5. Log out the entire prototype chain of "jackie" (one by one)

    6. How would you explain what is happening when we use the
       "new" operator with a function in JS?
*/

// 1. Create the Person function
function Person(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

// 3. Create two variables, one using "new" and one without it
const avery = Person("Avery", 20, "Dark Chocolate"); // ❌ Incorrect usage
const jackie = new Person("Jackie", 35, "Sourdough Bread"); // ✅ Correct usage

// 4. Log out "avery" and "jackie"
console.log(avery); // ❌ undefined
console.log(jackie); // ✅ Person { name: 'Jackie', age: 35, favouriteFood: 'Sourdough Bread' }

// 5. Log out the prototype chain of "jackie"
console.log(jackie.__proto__.constructor.name); // Person ✅ Person.prototype
console.log(jackie.__proto__.__proto__.constructor.name); // Object ✅ Object.prototype
console.log(jackie.__proto__.__proto__.__proto__); // ✅ null (end of prototype chain)

console.log(Object.getOwnPropertyNames(jackie));
//? [ 'name', 'age', 'favouriteFood' ]
console.log(Object.getOwnPropertyNames(Person));
//? [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
console.log(Object.getOwnPropertyNames(Person.name));
//? [ '0', '1', '2', '3', '4', '5', 'length' ]
