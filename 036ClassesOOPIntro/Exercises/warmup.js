/*
    1. Create a class called "Animal"

    2. Allow us to pass in 2 properties/fields to the
       Animal constructor which get set to the instance:
       - type (String)
       - name (String)

    3. Create two instances of the Animal class of your
       choice passing in different "type" and "name" for each

    4. Print out both animal instances

    5. Change the "name" of one of your animals and print it
       out again.

    *HINT: "this" will refer to the instance inside the class
*/

class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

const cat = new Animal("cat", "Ana");
const dog = new Animal("dog", "Chou");

console.log(cat);
console.log(dog);
// Animal { type: 'cat', name: 'Ana' }
// Animal { type: 'dog', name: 'Chou' }

cat.name = "Claire";
console.log(cat);
// Animal { type: 'cat', name: 'Claire' }

// NOTE:
//* Why is name not referenced?
//* When you create an instance of a class, JavaScript directly assigns instance properties (this.name) to the new object, not the prototype. This means each object has its own copy of name.

//* name is an instance property, so it's stored inside each object instead of the prototype.
//* The prototype is only used for shared methods to save memory (e.g., methods like .speak()).
//! If name were on the prototype, all animals would share the same name, which is not desirable.

//* What is referenced?
//* Only methods should go on the prototype because they don't change per instance.
