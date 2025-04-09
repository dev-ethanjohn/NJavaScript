'use strict';

// IMPORTANT: (217): What is objective oriented programming?
console.log('---- What is objective oriented programming?------');

//* 📝 What Is Object-Oriented Programming (OOP)?
// Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.
// In OOP: Objects are self-contained units that encapsulate both data (properties) and behavior (methods).
// Objects model real-world entities or abstract concepts, making code more organized and maintainable.
//
//* ⚠️ Key Concepts of OOP:
// 1. Encapsulation: Combining data and behavior into a single unit (object).
// 2. Abstraction: Hiding internal details and exposing only necessary methods or properties.
// 3. Inheritance: Allowing new objects to inherit properties and methods from existing objects.
// 4. Polymorphism: Allowing different objects to respond differently to the same method call.
//
// ✅ Example of an OOP Approach:
// const user = {
// - Reusability: Makes it easier to reuse and extend functionality.
// - Maintainability: Reduces complexity by encapsulating logic within objects.
//
//* 💡 Benefits of OOP:
// - Modularity: Each object can be treated as a standalone component.
// - Scalability: Easy to add new features or modify existing ones without affecting other parts of the code.
//
//* 🚀 Best Practices:
// - Always encapsulate related data and behavior within objects.
// - Use methods to define behaviors and properties to store data.
// - Ensure objects are self-contained and interact through well-defined interfaces.
//
//* 📋 References:
// - [MDN Web Docs: Object-Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
//
//* 🌟 Summary:
// OOP helps organize code into logical units (objects), making it easier to manage and extend.
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//NOTE: 📝 **Classes and Instances (Traditional OOP)**
//
// In traditional Object-Oriented Programming (OOP), classes serve as blueprints for creating objects.
// A class defines the structure and behavior that all instances of that class will inherit.
// Instances are individual objects created from the class blueprint.
//
//* ⚠️Key Concepts**:
// 1. **Class**: Acts as a blueprint for creating objects.
//    - Contains shared properties and methods.
//    - Used to define the structure and behavior of objects.
//
// 2. **Instance**: An individual object created from the class.
//    - Each instance has its own unique data but shares the same behavior defined in the class.
//
//* ✅ **Example of a Class and Instances**:
// ```javascript
// // Define a class-like structure in JavaScript
// const User = function (username, password, email) {
//   this.username = username;
//   this.password = password;
//   this.email = email;
// };
//
// // Create instances from the class-like structure
// const user1 = new User('jonas', 'dk23s', 'hello@jonas.io');
// const user2 = new User('mary', 'qwerty23', 'mary@test.com');
// const user3 = new User('steven', '5p8dz32dd', 'steven@test.com');
// ```
//
//* ⚠️ **Why Use Classes?**
// - **Reusability**: Allows you to create multiple instances with consistent structure and behavior.
// - **Maintainability**: Makes it easier to manage and extend functionality across multiple instances.
//
//* 💡 **Benefits of Using Classes**:
// - **Consistency**: Ensures all instances follow the same structure.
// - **Scalability**: Easy to add new features or modify existing ones without affecting other parts of the code.
//
//* 🚀 **Best Practices**:
// - Always define classes as reusable templates for creating objects.
// - Use `new` to instantiate objects from the class.
// - Ensure each instance has its own unique data while sharing common behavior.
//
//* 📋 **References**:
// - [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
//
//* 🌟 **Summary**:
// Classes act as blueprints for creating objects, ensuring consistency and reusability across instances.
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//NOTE: 📝 **Principle 1: Abstraction**
//
// Abstraction is the process of hiding unnecessary details and exposing only what is relevant.
// It allows us to focus on high-level concepts without getting bogged down by low-level implementation details.
//
//* ⚠️ Key Points**:
// - Abstraction involves ignoring or hiding irrelevant details.
// - It provides a simplified view of complex systems, making them easier to understand and work with.
//
//* ✅ Example of Abstraction**:
// ```javascript
// // Real Phone (Detailed Implementation)
// const realPhone = {
//   charge() {},
//   volumeBtn() {},
//   screen() {},
//   verifyVolt() {},
//   vibrate() {},
//   soundSpeaker() {},
//   soundEar() {},
//   frontCamOn() {},
//   frontCamOff() {},
//   rearCamOn() {},
//   rearCamOff() {},
// };
//
// // Abstracted Phone (Simplified View)
// const abstractedPhone = {
//   charge() {},
//   volumeBtn() {},
//   screen() {},
// };
//
// // Question: Do we really need all these low-level details?
// ```
//
// *⚠️ Why Use Abstraction?**
// - Reduces complexity by hiding unnecessary details.
// - Focuses on essential features while ignoring irrelevant implementation specifics.
//
// *💡 Benefits of Abstraction**:
// - Makes code more maintainable and scalable.
// - Allows developers to work at a higher level of abstraction.
//
// *🚀 Best Practices**:
// - Always abstract away low-level details that don’t matter to the user or developer.
// - Focus on exposing only the necessary methods and properties.
//
// *📋 References**:
// - [MDN Web Docs: Abstraction](https://developer.mozilla.org/en-US/docs/Glossary/Abstraction)
//
// *🌟 Summary**:
// Abstraction simplifies complex systems by hiding unnecessary details, allowing developers to focus on the essentials.

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//NOTE: 📝 Principle 2: Encapsulation**
//
// Encapsulation is the practice of bundling data (properties) and behavior (methods) together within a class.
// It ensures that internal details are hidden from external access, providing controlled access to the object's state.
//
//* ⚠️ Key Points**:
// - Encapsulation hides internal implementation details while exposing only necessary methods or properties.
// - It prevents external code from accidentally manipulating internal properties or state.
// - Allows changes to the internal implementation without breaking external code.
//
//* ✅ Example of Encapsulation**:
// ```javascript
// const User = function (username, password, email) {
//   // Private properties
//   this.username = username;
//   this.password = password;
//   this.email = email;
//
//   // Public method
//   this.login = function (word) {
//     if (this.password === word) {
//       console.log('Login successful!');
//     } else {
//       console.log('Incorrect password.');
//     }
//   };
// };
//
// // Create an instance
// const user = new User('jonas', 'dk23s', 'hello@jonas.io');
//
// // Accessing public method
// user.login('dk23s'); // Login successful!
// ```
//
// *⚠️ Why Use Encapsulation?**
// - Prevents accidental modification of internal state.
// - Allows flexibility in changing internal implementation without affecting external code.
//
// *💡 Benefits of Encapsulation**:
// - Enhances security by hiding sensitive data.
// - Improves maintainability by controlling access to internal properties.
//
//* 🚀 Best Practices**:
// - Use private properties and methods where appropriate.
// - Expose only necessary public methods as part of the API.
//
// 📋 **References**:
// - [MDN Web Docs: Encapsulation](https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation)
//
// 🌟 **Summary**:
// Encapsulation keeps internal details hidden, ensuring controlled access to the object's state.
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//NOTE: 📝 Principle 3: Inheritance**
//
// Inheritance is the mechanism by which one class (child class) inherits properties and methods from another class (parent class).
// It forms a hierarchical relationship between classes, allowing reuse of common logic.
//
// *⚠️ Key Points**:
// - Child classes inherit all properties and methods from their parent class.
// - Child classes can add new properties and methods or override existing ones.
//
// *✅ Example of Inheritance**:
// ```javascript
// // Parent Class
// const User = function (username, password, email) {
//   this.username = username;
//   this.password = password;
//   this.email = email;
// };
//
// User.prototype.login = function () {
//   console.log('Logging in...');
// };
//
// // Child Class
// const Admin = function (username, password, email, permissions) {
//   User.call(this, username, password, email);
//   this.permissions = permissions;
// };
//
// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;
//
// Admin.prototype.deleteUser = function (user) {
//   console.log(`Deleting user: ${user}`);
// };
// ```
//
// *⚠️ Why Use Inheritance?**
// - Reuses common logic across related classes.
// - Models real-world relationships between classes.
//
// *💡 Benefits of Inheritance**:
// - Reduces code duplication.
// - Maintains a clear hierarchy of classes.
//
// *🚀 Best Practices**:
// - Use inheritance to model "is-a" relationships (e.g., `Admin` is a type of `User`).
// - Avoid deep inheritance hierarchies to maintain clarity and avoid complexity.
//
// 📋 **References**:
// - [MDN Web Docs: Inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
//
// 🌟 **Summary**:
// Inheritance allows child classes to reuse and extend functionality from parent classes, promoting code reusability and maintaining a clean class hierarchy.
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//NOTE: 📝 Principle 4: Polymorphism**
//
// Polymorphism allows objects of different classes to respond differently to the same method call.
// It enables methods with the same name but different implementations in parent and child classes.
//
// *⚠️Key Points**:
// - Child classes can override methods inherited from their parent class.
// - The same method name can have different implementations in different classes.
//
// *✅ Example of Polymorphism**:
// ```javascript
// // Parent Class
// const User = function (username, password, email) {
//   this.username = username;
//   this.password = password;
//   this.email = email;
// };
//
// User.prototype.login = function () {
//   console.log('Logging in...');
// };
//
// // Child Class 1: Admin
// const Admin = function (username, password, email, permissions) {
//   User.call(this, username, password, email);
//   this.permissions = permissions;
// };
//
// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;
//
// Admin.prototype.login = function () {
//   console.log('Admin logging in...');
// };
//
// // Child Class 2: Author
// const Author = function (username, password, email, posts) {
//   User.call(this, username, password, email);
//   this.posts = posts;
// };
//
// Author.prototype = Object.create(User.prototype);
// Author.prototype.constructor = Author;
//
// Author.prototype.login = function () {
//   console.log('Author logging in...');
// };
// ```
//
// *⚠️ Why Use Polymorphism?**
// - Allows different classes to implement the same method in unique ways.
// - Promotes flexibility and reusability by enabling dynamic behavior based on the object's type.
//
// *💡 Benefits of Polymorphism**:
// - Enhances code flexibility and maintainability.
// - Enables consistent interfaces across related classes.
//
// *🚀 Best Practices**:
// - Use polymorphism when multiple classes share a common interface but require different implementations.
// - Ensure that overridden methods maintain the same signature (parameters and return types).
//
// *📋 References**:
// - [MDN Web Docs: Polymorphism](https://developer.mozilla.org/en-US/docs/Glossary/Polymorphism)
//
// 🌟 **Summary**:
// Polymorphism allows child classes to provide their own implementation of methods inherited from the parent class, promoting flexibility and reusability.

// IMPORTANT: 218: OOP in Javascript
console.log('----OOP in Javascript----');

// ===========================================
// OOP IN JAVASCRIPT: PROTOTYPES EXPLAINED 🌟
// ===========================================

// --------------------------
//NOTE: CLASSICAL OOP (Classes) 📚
// --------------------------
// - In traditional OOP languages like Java or C++, we define classes.
// - A class acts as a blueprint, and we create instances (objects) from it.
// - Methods (behavior) are copied from the class to each instance.

class Animal {
  constructor(name) {
    this.name = name; // Each instance gets its own 'name' property
  }

  speak() {
    return `${this.name} makes a noise.`; // Method is copied to all instances
  }
}

const dog = new Animal('Buddy');
console.log(dog.speak()); // Output: "Buddy makes a noise."

// ⚠️ Key Takeaway:
// - In classical OOP, methods are COPIED into each instance, which can be memory-intensive.

// ---------------------------------
// NOTE: PROTOTYPE-BASED OOP IN JAVASCRIPT 🧩
// ---------------------------------
// - JavaScript does not use classical inheritance like Java/C++.
// - Instead, it uses "prototypal inheritance" (delegation).
// - Objects are linked to a prototype object, which contains shared methods.
// - Instead of copying methods, objects "inherit" them via prototype delegation.

function AnimalProto(name) {
  this.name = name; // Instance property
}

// Adding method to the prototype
AnimalProto.prototype.speak = function () {
  return `${this.name} makes a noise.`; // Method is shared across all instances
};

const cat = new AnimalProto('Whiskers');
console.log(cat.speak()); // Output: "Whiskers makes a noise."

// ⚠️ Key Takeaway:
// - Methods are NOT copied into each instance. Instead, they are SHARED via the prototype.

// --------------------------------------
// NOTE: PROTOTYPAL INHERITANCE (DELEGATION) 🔗
// --------------------------------------
// - Objects in JavaScript inherit methods from their prototype.
// - They don’t get their own copies of the methods; instead, they delegate calls.
// - This saves memory and improves efficiency.

// Checking the prototype of an object
console.log(Object.getPrototypeOf(cat)); // Shows AnimalProto's prototype

// cat.speak() works because 'speak' is found in AnimalProto.prototype
// When JavaScript doesn’t find a property on the object itself, it looks in its prototype.

// *⚠️ Key Takeaway:
// - Prototype delegation allows dynamic behavior. If a method is updated in the prototype,
//   all instances automatically inherit the updated behavior.

// ----------------------
// EXAMPLE: Array Prototypes 📦
// ----------------------
// - JavaScript arrays inherit methods from Array.prototype.
// - Example: .map(), .filter(), .reduce() are prototype methods.

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // Using Array.prototype.map
console.log(doubled); // Output: [2, 4, 6]

// The 'map' method is NOT inside the numbers array itself.
// It is inherited from Array.prototype.

console.log(Object.getPrototypeOf(numbers)); // Shows Array.prototype

// *⚠️ Key Takeaway:
// - Built-in objects like Arrays, Strings, and Objects leverage prototypes to share methods.

// --------------------------------------------
// NOTE: SUMMARY: Key Differences Between Class & Prototype 🌟
// --------------------------------------------
// 1. Classes create instances that COPY methods to each object.
//    - Memory-intensive but straightforward.
// 2. Prototypes allow objects to SHARE methods via delegation.
//    - Memory-efficient and flexible.
// 3. Prototypal inheritance is more dynamic and flexible than classical OOP.
//    - You can modify prototypes at runtime, enabling powerful patterns like monkey-patching.

// *💡 Benefits of Prototypes:
// - Efficient memory usage by sharing methods.
// - Dynamic behavior through runtime modifications.
// - Flexible and extensible design.

// *🚀 Best Practices:
// - Use prototypes for shared methods to optimize performance.
// - Avoid deep prototype chains to maintain clarity and performance.
// - Leverage built-in prototypes (e.g., Array.prototype, Object.prototype) effectively.

// 📋 References:
// - [MDN Web Docs: Prototypal Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
// - [MDN Web Docs: Object.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

// 🌟 Final Thoughts:
// Prototypes are central to JavaScript's implementation of OOP, enabling efficient sharing of methods and properties among objects.

// 📝 **3 Ways of Implementing Prototypal Inheritance in JavaScript**
//
// JavaScript supports prototypal inheritance, which allows objects to inherit properties and methods from their prototypes.
// Here are three common ways to implement prototypal inheritance:

// -------------------------
// 1. Constructor Functions 🏗️
// -------------------------
// - A constructor function is a function used to create objects.
// - Methods are added to the prototype of the constructor function, making them shared across all instances.

function Animal2(name) {
  this.name = name; // Instance property
}

// Add methods to the prototype
Animal2.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

const dog2 = new Animal2('Buddy');
console.log(dog2.speak()); // Output: "Buddy makes a noise."

// ⚠️ Key Takeaway:
// - Constructor functions are the traditional way to implement prototypal inheritance in JavaScript

// -------------------------
// NOTE: 2. ES6 Classes 🌟
// -------------------------
// - ES6 classes provide a modern syntax for creating objects and defining prototypes.
// - Under the hood, ES6 classes work exactly like constructor functions with prototypes.

class AnimalClass {
  constructor(name) {
    this.name = name; // Instance property
  }

  speak() {
    return `${this.name} makes a noise.`; // Method is shared across all instances
  }
}

const cat2 = new AnimalClass('Whiskers');
console.log(cat2.speak()); // Output: "Whiskers makes a noise."

// *⚠️ Key Takeaway:
// - ES6 classes are syntactic sugar over constructor functions.
// - They simplify the syntax but behave the same way under the hood.

// -------------------------
// NOTE: 3. Object.create() 🛠️
// -------------------------
// - `Object.create()` is a built-in method that creates a new object linked to a specified prototype.
// - It's the most straightforward way to implement prototypal inheritance.

const animalPrototype = {
  speak: function () {
    return `${this.name} makes a noise.`;
  },
};

const bird = Object.create(animalPrototype);
bird.name = 'Polly';
console.log(bird.speak()); // Output: "Polly makes a noise."

// *⚠️ Key Takeaway:
// - `Object.create()` provides direct control over the prototype chain.
// - It's useful when you want fine-grained control over inheritance.

// ---------------------------------
// NOTE: Comparing the Three Approaches 🤔
// ---------------------------------
// 1. **Constructor Functions**: Traditional and flexible.
// 2. **ES6 Classes**: Modern syntax, easier to read and write.
// 3. **Object.create()**: Direct and explicit, great for advanced use cases.

// *⚠️ Important Notes:
// - All three approaches support the four pillars of OOP (Abstraction, Encapsulation, Inheritance, Polymorphism).
// - The choice depends on your specific needs and coding style.

// 📋 References:
// - [MDN Web Docs: Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
// - [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

// 🌟 Final Thoughts:
// Prototypal inheritance in JavaScript is powerful and flexible. Choose the approach that best fits your project's requirements!

// IMPORTANT 219: Constructor Functions and the new Operator
console.log('------Constructor Functions and the new Operator-------');

// We can use constructor functions to programmatically create objects
// only function declaration and function expression (arrow function doesnt have `this`)
const Person = function (firstName, birthYear) {
  //  Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //! Never create a method inside a constructor function
  // *This will affect performance as each instance can now carry the the method even though the might/wouldnt need it.
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // }
};

// OBJECT CREATION
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automaticaly return {}
const jonas = new Person('Jonas', 1991);
console.log(jonas); //? Person {firstName: 'Jonas', birthYear: 1991}

const matilda = new Person('Matilda', 2017);
const ethan = new Person('Ethan', 2000);
console.log(matilda, ethan);

const jay = 'Jay';

console.log(jonas instanceof Person); //? true

// IMPORTANT 220: Prototypes
console.log('----Prototypes-----');

//* Method added to the prototype
// Each function in JS has a property of `prototype`; including constructor functions
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); //? 46
console.log(Object.getOwnPropertyNames(jonas.__proto__)); //? ['constructor', 'calcAge']
console.log(Object.getOwnPropertyNames(jonas.__proto__.__proto__));

matilda.calcAge(); //? 20
ethan.calcAge(); //? 37

console.log(jonas.__proto__);
//* The Person.prototye is not the prototype of Person. But it is gonna used as the prototype of the objects created w/ Person constructor function
console.log(jonas.__proto__ === Person.prototype); //? true
console.log(Person.prototype.isPrototypeOf(jonas)); //? true
console.log(Person.prototype.isPrototypeOf(matilda)); //? true
console.log(Person.prototype.isPrototypeOf(ethan)); //? true

console.log(Person.prototype); //? {calcAge: ƒ}
console.log(Person.prototype.constructor.name); //? Person

//* Property added to the prototype
Person.prototype.species = 'Home sapiens';
console.log(ethan); //? Person { firstName: 'Ethan', birthYear: 2000 }
console.log(jonas.__proto__); //? {species: 'Home sapiens', calcAge: ƒ}

//NOTE: Own Properties vs. Prototype Properties:

//* Own Properties: These are properties that are directly attached to the object itself. In the case of ethan, firstName and birthYear are its own properties.
//* Prototype Properties: These are properties that are not directly on the object but are inherited from its prototype. In this case, calcAge and species are on the prototype (Person.prototype).

//NOTE: The Prototype Chain:

//*(1) When you try to access a property on an object, JavaScript first looks for that property directly on the object itself (its own properties).
//*(2) If the property is not found, JavaScript then looks in the object's prototype (the object that __proto__ points to).
//*(3) If the property is still not found, JavaScript continues up the prototype chain (the prototype's prototype, and so on) until it either finds the property or reaches the end of the chain (which is null).

// ===================================================
// Demonstrating Access to All Four Properties
// ===================================================

console.log('--- Accessing firstName (Own Property) ---');
console.log(jonas.firstName); // Output: Jonas
console.log(matilda.firstName); // Output: Matilda
console.log(ethan.firstName); // Output: Ethan

console.log('\n--- Accessing birthYear (Own Property) ---');
console.log(jonas.birthYear); // Output: 1991
console.log(matilda.birthYear); // Output: 2017
console.log(ethan.birthYear); // Output: 2000

console.log('\n--- Accessing calcAge (Prototype Method) ---');
jonas.calcAge(); // Output: 46
matilda.calcAge(); // Output: 20
ethan.calcAge(); // Output: 37

console.log('\n--- Accessing species (Prototype Property) ---');
console.log(jonas.species); // Output: Homo Sapiens
console.log(matilda.species); // Output: Homo Sapiens
console.log(ethan.species); // Output: Homo Sapiens

console.log('\n--- Demonstrating the Prototype Chain ---');
console.log(jonas.hasOwnProperty('firstName')); // Output: true (it's an own property)
console.log(jonas.hasOwnProperty('calcAge')); // Output: false (it's on the prototype)
console.log(jonas.hasOwnProperty('species')); // Output: false (it's on the prototype)
console.log(Person.prototype.hasOwnProperty('species')); // Output: true (it's on the prototype)
console.log(Person.prototype.hasOwnProperty('calcAge')); // Output: true (it's on the prototype)

console.log('\n--- Demonstrating that calcAge is a function ---');
console.log(typeof jonas.calcAge); // Output: function

console.log('\n--- Demonstrating that species is a string ---');
console.log(typeof jonas.species); // Output: string

console.log('\n--- Demonstrating that firstName is a string ---');
console.log(typeof jonas.firstName); // Output: string

console.log('\n--- Demonstrating that birthYear is a number ---');
console.log(typeof jonas.birthYear); // Output: number

console.log('\n--- Demonstrating that all of them are accessible ---');
console.log(
  `${jonas.firstName} is a ${jonas.species} and is ${
    2037 - jonas.birthYear
  } years old`
); // Output: Jonas is a Homo Sapiens and is 46 years old
console.log(
  `${matilda.firstName} is a ${matilda.species} and is ${
    2037 - matilda.birthYear
  } years old`
); // Output: Matilda is a Homo Sapiens and is 20 years old
console.log(
  `${ethan.firstName} is a ${ethan.species} and is ${
    2037 - ethan.birthYear
  } years old`
); // Output: Ethan is a Homo Sapiens and is 37 years old

// IMPORTANT: 221: Prototpal Inheritance and the Prototype Chain
console.log('-----Prototpal Inheritance and the Prototype Chain-------');

// IMPORTANT: 221: Prototpal Inheritance on BuiltIn object
console.log('-----Prototpal Inheritance on BuiltIn object-------');
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); //? null

console.dir(Person.prototype.constructor); //? Person(firstName, birthYear)

const arr = [1, 2, 3, 2, 3, 4, 5, 8];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //? true
console.log(arr.__proto__.__proto__);

// ! NOt recommended to add a method on any built in Objects like Array/ especiall Global Object
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); //? [1, 2, 3, 4, 5, 8]

const h1 = document.querySelector('h1');

// IMPORTANT (222): ES6 Classes
console.log('----ES6 Classes----');

// class expression
const PersonClEx = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // NOTE: Methods inside the class (but outside the constructor) are added to Person.prototype, not inside the object itself. Objects created using new Person() inherit from Person.prototype.The class itself (Person) does not have sayHello() as a direct property—only instances do via prototype inheritance.
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //* If the property name already exists, prepend "_" to avoid naming conflicts.
  //* The setter method validates the input before assigning it to _fullName.
  //* The getter method returns the value stored in _fullName.
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`${name} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  // *Static methdos only accessible through its Class (instanced of such class cannot access it)
  static hey() {
    console.log('Hey there static!');
  }
}

const ethanOb = new PersonCl('Ethan John', 1998);
console.log(ethanOb); //? PersonCl {fullName: 'Ethan John', birthYear: 1998}
// *the instance inherited calcAge from Person.prototype
// *calcAge() is not inside ethanOb itself but inside PersonCl.prototype.
// *First, it checks ethanOb itself (no method found).
// *Then, it looks up ethanOb.__proto__, which is PersonCl.prototype, and finds calcAge().
ethanOb.calcAge(); //? 39
console.log(ethanOb.age); //? 39

console.log(ethanOb.__proto__ === PersonCl.prototype); //? true

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};

ethanOb.greet(); //?Hey Ethan John

const john = new PersonCl('John', 2000);
console.log(john); //? John is not a full name!

// NOTE:
// * Classes are not hoisted
// * Classes are first-class citizens
// *Body of the classes are executed in strict mode

// IMPORTANT 225: Setters and Getters
console.log('-----Setters and Getters----');

const account = {
  owner: 'Ethan',
  movements: [120, 400, 200, 130],

  // *getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // * setter (1 param only)
  set latest(mov) {
    this.movements.push(mov);
  },
};

// we don't call the method
console.log(account.latest); //? 130
account.latest = 50;

console.log(account.movements); //?  [120, 400, 200, 130, 50]

//* Setters and getters are not required and are not used frequently in everyday coding.
//* However, they are useful when we need to validate or modify a property
//* before assigning it or when we want to control how a property is accessed.
//* A common use case is validating data when setting a property value.

// IMPORTANT: 226 Static Methods
console.log('------Static Methods----');

// NOTE: convert an array list structure to an array using `Array.from()`

Person.hey = function () {
  console.log('Hey there! 😊');
};

Person.hey(); //? Hey there! 😊
// ethanOb.hey(); //! This won't work cause instance doesnt have this hey() method on its prototype; this is only available as a property on the Person class itself

PersonCl.hey(); //? Hey there static!

// IMPORTANT: 227: Object.create
console.log('-------Object.create-------');

// NOTE; this is straightforwward but less used in production
const PersonProto = {
  calcAge() {
    //* this method is now the prototype of the instance
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); //? 35

console.log(steven.__proto__ === PersonProto); //? true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); //? 58

// IMPORTANT: 229: Inheritance between "class": constructpr functions
console.log('------ Inheritance between "class": constructpr functions-----');

const PersonHuman = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonHuman.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  PersonHuman.call(this, firstName, birthYear);
  this.course = course;
};

//* We need to link this connrection first before adding methods to the Student Prototype
Student.prototype = Object.create(PersonHuman.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2010, 'Computer Science');
console.log(mike);
mike.introduce(); //? My name is Mike and I study Computer Science
mike.calcAge(); //? 27

console.log(mike.__proto__); //? PersonHuman {introduce: ƒ}
console.log(mike.__proto__.__proto__); //? {calcAge: ƒ}

console.log(mike instanceof Student); //? true
console.log(mike instanceof PersonHuman); //? true
console.log(mike instanceof Object); //? true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //? Student(firstName, birthYear, course)

//* ✅ Constructor functions define reusable object blueprints.
//* ✅ .call() allows calling a parent constructor inside a child constructor.
//* ✅ Object.create() ensures the child class correctly inherits from the parent.
//* ✅ Methods should be added after linking the prototype to avoid overwriting.
//* ✅ The constructor reference should be manually corrected.

//NOTE: This approach mimics class-based inheritance before ES6 class syntax was introduced! 🚀
// IMPORTANT: 233: Inheritance betwen classes and es6 classes
console.log('------Inheritance between classes and es6 classes-----');

class Students extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old`);
  }
}

const ethanJohn = new Students('Ethan John', 2000, 'Computer Science');
ethanJohn.introduce(); //? My name is Ethan John and I study Computer Science
ethanJohn.calcAge(); //? I'm 37 years old
console.log(ethanJohn instanceof Students); //? true
console.log(ethanJohn instanceof PersonCl); //? true
console.log(ethanJohn instanceof Object); //? true

// Importamt: 234: Inheritance on classes: object.create
console.log('------Inheritance on classes: object.create-----');

const PersonProto2 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven2 = Object.create(PersonProto2);

// PersonProto2 is the prototype of StevenProto
const StudentProto = Object.create(PersonProto2);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// StudentProto is the prototype of jay2
const jay2 = Object.create(StudentProto);
jay2.init('Jay', '2010', 'Computer Science');
jay2.introduce(); //? My name is Jay and I study Computer Science
jay2.calcAge(); //? 27

// IMPORTANT: 335: Another class example
console.log('------Another class example-----');

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // *Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Ethan', 'USD', 1111);
const acc2 = new Account('Matilda', 'EUR', 2222);
const acc3 = new Account('Steven', 'USD', 3333);

// * NOTE *Best to create methods inside the prototype, intead of directly manipulating the properties outside the object
// acc1.movements.push(250);
// acc1.movements.push(500);
// acc1.movements.push(-300);
acc1.deposit(250);
acc1.deposit(500);
acc1.withdraw(300);
acc1.requestLoan(1000);
acc1.approveLoan(1000); //? true

console.log(acc1); //? Account {owner: 'Ethan', currency: 'USD', pin: 1111, movements: Array(3), locale: 'en-US'}

console.log(acc1.pin);

//IMPORTANT: 236: Encapsulation: Protected Properties and Methods
console.log('------Encapsulation: Protected Properties and Methods-----');
// NOTE: Encapsulation is the bundling of data and methods that operate on that data within one unit.
// It restricts direct access to some of the object's components.
// Encapsulation is a fundamental concept in OOP that helps to protect the internal state of an object.
// It allows the internal representation of an object to be hidden from the outside.
// This is achieved through the use of private properties and methods.
// Encapsulation helps to prevent unintended interference and misuse of the object's data.
// It allows for controlled access to the object's state and behavior.

// 1. pUBLIC fields -> present on all the instances but not on the Prototype.
// 2. Private fields
// 3. public methods
// 4. private methods
// 5. static versions of these 4

class Account2 {
  locale = navigator.language; //public field
  bank = 'Bankist';
  // * "private" means this cannot be read or mutated outside of the class
  #movements = []; // private field
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.pin = pin;
    // this.movements = [];

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // *Public interface API
  getMovements() {
    return this.#movements;
    //not chainable
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  // static methods only accessible on the class and not on the instance
  // you can set this to private with #
  static test() {
    console.log('Test');
  }
}

const account1 = new Account2('Ethan', 'USD', 1111);
console.log(account1);
// {
//     "locale": "en-US",
//     "bank": "Bankist",
//     "owner": "Ethan",
//     "currency": "USD",
//     "pin": 1111,
//     "movements": []
// }

// account1.test(); // !Uncaught TypeError: account1.test is not a function
Account2.test(); //? Test

// IMPORTANT: 237: Chaining methods
console.log('----Chaining methods----');

account1
  .deposit(300)
  .withdraw(100)
  .withdraw(200)
  .requestLoan(25000)
  .withdraw(3000)
  .getMovements(); //*reads

console.log(account1);
