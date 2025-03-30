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

// *bind to permanently
const boundGreet = alex.friend.greet.bind({ name: "Freya", age: 30 });
// console.log(boundGreet());
// boundGreet();

console.log("-------Reassign-------");

// *Reassign
alex.friend.greet = alex.friend.greet.bind({ name: "Freya", age: 30 });
alex.friend.greet(1, 2, 3);
// { name: 'Freya', age: 30 }
// [ 1, 2, 3 ]
// Freya says hi!
