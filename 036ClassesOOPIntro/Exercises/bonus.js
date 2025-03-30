/*
    Let's see how a "Factory" class/function might work

    1. Create a class called "EnemyFactory"

    2. Make the following work to produce the output shown:

    const factory = new EnemyFactory();
    const flying = factory.generateFlyingEnemy("batman");
    flying.fly(); // batman can fly!

    const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
    swimming.swim(); // aquaman can swim!

    * What is the difference between these two? When might you
      even use this? Where are the property keys of each of these:
      - EnemyFactory
      - factory
      - factory.__proto__
      - flying.__proto__
      - swimming.__proto__
*/

// EnemyFactory class
class EnemyFactory {
  // Instance method (requires an instance of the class)
  generateFlyingEnemy(name) {
    return {
      name: name,
      fly() {
        console.log(`${this.name} can fly!`);
      },
    };
  }

  // Static method (called directly on the class, without an instance)
  static generateSwimmingEnemy(name) {
    return {
      name: name,
      swim() {
        console.log(`${this.name} can swim!`);
      },
    };
  }
}

// Example usage
const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy("batman");
flying.fly(); // batman can fly!

const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
swimming.swim(); // aquaman can swim!

// In frontend development, factory functions/classes are commonly used for:
// Generating reusable objects dynamically (e.g., UI elements, animations)
// Abstracting complex object creation logic (e.g., API response formatting)
// Managing dependency injection (e.g., services in a state management system)
// Game development in JavaScript/Canvas/WebGL (e.g., creating enemies, projectiles)
// Testing & mocking data (e.g., generating fake user objects)

// In React, you don’t typically use class-based factories for UI components. Instead:
// You use functional components and custom hooks.
// Data factories are useful when generating structured objects or dummy data.
// Class-based factories may be useful when managing state-heavy logic.
