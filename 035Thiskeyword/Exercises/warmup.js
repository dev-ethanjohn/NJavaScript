/*
    1. Create the following Object and assign it to a variable
       named "pet":
       { name: "Nemo", type: "fish", age: 2 }

    2. Add a 'sayHello' function to the Object prototype. When
       called, it should log out the Object's name,
       type and age to match the following example:
       "Nemo is a fish and is 2 years old. Nemo says hi!"

       ^ This would be logged if we did pet.sayHello();

    3. Create another pet with different property values
       to make sure it works as well.
*/

const pet = {
  name: "Nemo",
  type: "fish",
  age: 2,
};

// * It works but not recommded to change anything on the Object.property
Object.prototype.sayHello = function () {
  console.log(`${this.name} is a ${this.type} and is ${this.age} years old`);
  console.log(`${this.name} says hi!`);
};

pet.sayHello();
// Nemo is a fish and is 2 years old
// Nemo says hi!
