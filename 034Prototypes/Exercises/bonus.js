/*
    1. Create the following  function:

       function Person(name) {
         this.name = name;
       }
    
    2. Create an instance of person in 2 ways:
       const cleo = Person("Cleo")
       const taylor = new Person("Taylor")

    3. Log out the own property names of each of these
       variables. What happens?

    4. Log out just taylor's own property names. Does this
       work? Why?

    5. Log out the prototype of cleo and taylor. What is
       happening? What about just taylor?
*/

// Step 1: Define the Person function
function Person(name) {
  this.name = name;
}

// Step 2: Create instances in two ways
const cleo = Person("Cleo"); // ❌ Wrong usage (without `new`)
const taylor = new Person("Taylor"); // ✅ Correct usage (with `new`)

// Step 3: Log own property names
try {
  console.log(Object.getOwnPropertyNames(cleo)); // ❌ Error: cleo is undefined
} catch (error) {
  console.error("Error accessing cleo properties:", error.message);
}
console.log(Object.getOwnPropertyNames(taylor)); // ✅ ["name"]

// Step 4: Log just taylor's own property names
console.log(Object.keys(taylor)); // ✅ ["name"]

// Step 5: Log the prototypes
try {
  console.log(Object.getPrototypeOf(cleo)); // ❌ Error: cleo is undefined
} catch (error) {
  console.error("Error accessing cleo prototype:", error.message);
}
console.log(Object.getPrototypeOf(taylor)); // ✅ Person.prototype

console.log(Person.prototype); // ✅ { constructor: Person }
console.log(taylor.__proto__); // ✅ Person.prototype

// Step 6: Add a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};

// Step 7: Call the prototype method
taylor.greet(); // ✅ "Hello, I'm Taylor"
