/*
    1. Given the class definitions below, predict
       what will be logged out with the code:

       class Animal {
        static knownMammals = [];
        mammal = false;
        eyes = 2;

        static isMammal() {}
        describe() {}
       }

       class Monkey extends Animal {
        static knownMonkeys = [];
        height;
        weight;

        static isCute() {}
        eatBanana() {}
       }

    2. What will this code print out:
       const animal = new Animal();
       console.log(Object.getOwnPropertyNames(animal))
       console.log(Object.getOwnPropertyNames(animal.__proto__))
       console.log(Object.getOwnPropertyNames(Animal))
       console.log(Object.getOwnPropertyNames(Animal.__proto__))

       const monkey = new Monkey();
       console.log(Object.getOwnPropertyNames(monkey))
       console.log(Object.getOwnPropertyNames(monkey.__proto__))
       console.log(Object.getOwnPropertyNames(Monkey))
       console.log(Object.getOwnPropertyNames(Monkey.__proto__))
*/

class Animal {
  static knownMammals = [];
  mammal = false;
  eyes = 2;

  static isMammal() {}
  describe() {}
}

class Monkey extends Animal {
  static knownMonkeys = [];
  height;
  weight;

  static isCute() {}
  eatBanana() {}
}

const animal = new Animal();
console.log(Object.getOwnPropertyNames(animal));
// ["mammal", "eyes"] - Instance properties

console.log(Object.getOwnPropertyNames(animal.__proto__));
// ["constructor", "describe"] - Prototype methods

console.log(Object.getOwnPropertyNames(Animal));
// ["length", "name", "prototype", "knownMammals", "isMammal"] - Static properties/methods

console.log(Object.getOwnPropertyNames(Animal.__proto__));
// ["constructor", "apply", "bind", "call", "toString", ...] - Inherited from Function.prototype

const monkey = new Monkey();
console.log(Object.getOwnPropertyNames(monkey));
// ["mammal", "eyes", "height", "weight"] - Inherits from Animal and adds own properties

console.log(Object.getOwnPropertyNames(monkey.__proto__));
// ["constructor", "eatBanana"] - Prototype methods in Monkey

console.log(Object.getOwnPropertyNames(Monkey));
// ["length", "name", "prototype", "knownMonkeys", "isCute"] - Static properties/methods in Monkey

console.log(Object.getOwnPropertyNames(Monkey.__proto__));
// ["length", "name", "prototype", "knownMammals", "isMammal"] - Inherits static properties from Animal

// Lessons Learned from the Exercise
//* */ Instance vs. Prototype Properties:
// Object.getOwnPropertyNames(instance): Lists directly assigned properties (instance variables).

// Object.getOwnPropertyNames(instance.__proto__): Lists prototype methods shared across instances.

// Static Properties & Methods Exist on the Class, Not the Instance:

// Object.getOwnPropertyNames(ClassName): Lists static properties and methods (e.g., Animal.isMammal() and Monkey.isCute()).

// Object.getOwnPropertyNames(ClassName.__proto__): Lists properties inherited from Function.prototype (e.g., ['length', 'name', 'prototype']).

// Instance vs. Class-Level Data Storage:

// Instance properties belong to each object separately (mammal, eyes, height, weight).

// Static properties belong to the class itself (static knownMammals = [];, static knownMonkeys = [];).

// Class Inheritance Behavior:

// Subclasses inherit instance properties and methods from their parent class (Monkey inherits mammal, eyes, and describe() from Animal).

// Static properties and methods are not inherited automatically (Monkey does not inherit Animal.knownMammals).

// Prototype Chain & Method Resolution:

//* Instance methods are stored in the prototype (describe() exists in Animal.prototype).
//* Static methods remain on the class itself (Animal.isMammal() and Monkey.isCute() are separate).
