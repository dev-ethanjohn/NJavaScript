/*
    1. Create the following function:

    function Person(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }

    2. Add the following to the Person prototype:
        Person.prototype.greet = function() {
            console.log(`${this.name} says hello!`);
        }

    2. Create a function called "SuperHero" that
       has the same 3 parameters as Person, but
       adds a fourth one called: "overpowered"

    3. Inside the "SuperHero" function, set up all the
       properties on to the "this" Object just like in
       Person, with the addition of "overpowered".

    5. Set the Prototype of "SuperHero" to be "Person"
       (This can be done in 2 ways)

    6. Create an instance of Person and SuperHero:
       const anya = new Person("Anya", 40, "Sour Keys")
       const batman = new SuperHero("Bruce", 55, "Steak", false)

    7. Log out the prototype chains of each of these Objects
    8. Can you call "greet" on batman? Why?
    9. What properties are on each Object? Why?

    BONUS: Did we just create Object Oriented Programming?
*/

// Constructor function for Person
function Person(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

// Adding greet method to Person prototype
Person.prototype.greet = function () {
  console.log(`${this.name} says hello!`);
};

// Constructor function for SuperHero
function SuperHero(name, age, favouriteFood, overpowered) {
  Person.call(this, name, age, favouriteFood); // Call Person constructor
  this.overpowered = overpowered;
}

// Setting up SuperHero prototype to inherit from Person
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;

// Creating instances
const anya = new Person("Anya", 40, "Sour Keys");
const batman = new SuperHero("Bruce", 55, "Steak", false);

// Checking prototype chains
console.log(anya.__proto__ === Person.prototype); // true
console.log(batman.__proto__ === SuperHero.prototype); // true
console.log(SuperHero.prototype.__proto__ === Person.prototype); // true

// Calling greet method from Person
batman.greet(); // "Bruce says hello!"

// Logging out instances
console.log(anya); // Person { name: 'Anya', age: 40, favouriteFood: 'Sour Keys' }
console.log(batman); // SuperHero { name: 'Bruce', age: 55, favouriteFood: 'Steak', overpowered: false }
