/**
 * Class Utils demonstrates the difference between:
 * - Static properties and methods (belong to the class itself)
 * - Instance properties and methods (belong to the instance)
 */
class Utils {
  // Static property (belongs to the class itself)
  static description = "Awesome utilities";

  // Instance property (belongs to each instance of Utils)
  description = "Another description?";

  // Static method (can be called on the class, not on instances)
  static caps(str) {
    return str.toUpperCase();
  }

  // Instance method (can be called on instances, not on the class itself)
  lower(str) {
    return str.toLowerCase();
  }
}

// Accessing static properties and methods
console.log(Utils.description); // "Awesome utilities"
console.log(Utils.caps); // [Function: caps]
console.log(Utils.caps("helele")); // "HELELE"

// Checking properties of the Utils class (static properties/methods are part of the class itself)
console.log(Object.getOwnPropertyNames(Utils));
// Output: [ 'length', 'name', 'prototype', 'caps', 'description' ]
// - 'length', 'name', 'prototype' are default properties of a function/class
// - 'caps' and 'description' are explicitly defined static members

// Creating an instance of Utils
const utils = new Utils();
console.log(utils); // Utils { description: 'Another description?' }

// Checking properties of the instance prototype (instance methods are part of prototype)
console.log(Object.getOwnPropertyNames(utils.__proto__));
// Output: [ 'constructor', 'lower' ]

// Adding an instance method dynamically
Utils.prototype.camelCaseStr = () => {};
console.log(Object.getOwnPropertyNames(utils.__proto__));
// Output: [ 'constructor', 'lower', 'camelCaseStr' ]
// - 'camelCaseStr' was added dynamically

// Adding a static property dynamically
Utils.hello = "hello";
console.log(Object.getOwnPropertyNames(Utils));
// Output: [ 'length', 'name', 'prototype', 'caps', 'description', 'hello' ]
// - 'hello' was added dynamically to the class itself

/**
 * Key Takeaways:
 * - Static members (properties/methods) are part of the class, not its instances.
 * - Instance members belong to the instances and exist in the prototype chain.
 * - Object.getOwnPropertyNames(Utils) lists static members.
 * - Object.getOwnPropertyNames(utils.__proto__) lists instance methods.
 */
