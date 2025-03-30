const alex = {
  name: "Alex",
  greet: function () {
    console.log(this);
    console.log(`${this.name} says hi!`);
  },

  arrowGreet: () => {
    console.log(`${this.name} says hi!`);
  },

  friend: {
    name: "Alex's friend",
    greet: function (...args) {
      console.log(this);
      console.log(args);
      console.log(`${this.name} says hi!`);
    },
  },
};

alex.greet(); //? Alex says hi!
alex.friend.greet(); //? Alex's friend says hi!

console.log("-----------");
alex.greet.call({ name: "Iron man", age: 40 }, "hello", 4); //*overriding
// { name: 'Iron man', age: 40 }
// Iron man says hi!

console.log("----------");
alex.friend.greet.call({ name: "Jason", age: 43 }, "hello", 4); //*overriding
// { name: 'Jason', age: 43 }
// [ 'hello', 4 ]
// Jason says hi!

// NOTE: `apply` words in the same way only you need to enclose the 2nd argument to a bracket. No further arguments , just 2

alex.friend.greet.apply({ name: "Claire", age: 17 }, [1, 2, 3, 4]);
// { name: 'Claire', age: 17 }
// [ 1, 2, 3, 4 ]
// Claire says hi!
