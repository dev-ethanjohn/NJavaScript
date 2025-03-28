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
