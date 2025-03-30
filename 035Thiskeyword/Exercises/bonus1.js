/*
    1. Create the following 2 functions:

    function ThisPerson(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }

    function ProtoPerson(name, age, favouriteFood) {
        return { // short-hand property initialization:
            name,
            age,
            favouriteFood,
        };
    }

    2. What is the difference between the following 2 instances?:
       const thisPerson = new ThisPerson("This", 0, "cookies");
       const protoPerson = ProtoPerson("Proto", 1, "?")

    3. How would you modify the ProtoPerson function to have it
       return the same thing as the ThisPerson function, but
       WITHOUT us having to use the "new" keyword still?

    *HINT: Think of how you'd modify/setup the prototype chain
*/

// Constructor function using "this"
function ThisPerson(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

// Factory function returning an object
function ProtoPerson(name, age, favouriteFood) {
  const instance = {
    name,
    age,
    favouriteFood,
  };

  instance.__proto__ = ProtoPerson.prototype;
  return instance;
}

// 2️⃣ Creating instances
const thisPerson = new ThisPerson("This", 0, "cookies");
const protoPerson = ProtoPerson("Proto", 1, "?");

console.log(thisPerson); // ✅ ThisPerson { name: 'This', age: 0, favouriteFood: 'cookies' }
console.log(protoPerson); // ✅ { name: 'Proto', age: 1, favouriteFood: '?' }

// 3️⃣ Checking prototype chains
console.log(thisPerson.__proto__ === ThisPerson.prototype); // ✅ true
console.log(protoPerson.__proto__ === ProtoPerson.prototype); // ✅ true (default object prototype)

console.log(thisPerson.__proto__.constructor.name);
console.log(thisPerson.__proto__.__proto__.constructor.name);

console.log(protoPerson.__proto__.constructor.name);
console.log(protoPerson.__proto__.__proto__.constructor.name);

// ThisPerson;
// Object;
// ProtoPerson;
// Object;
