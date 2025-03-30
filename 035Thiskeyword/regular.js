const alex = {
  name: "Alex",
  greet: function () {
    console.log(`${this.name} says hi!`);
  },

  arrowGreet: () => {
    console.log(`${this.name} says hi!`);
  },

  friend: {
    name: "Alex's friend",
    greet: function () {
      console.log(`${this.name} says hi!`);
    },
  },
};

// `this` is dynamic. It's own scope is in the function itself. We do not know where and what the `this` refers to unless is it bind with anything that is LEFT to it.
// The `this` context refers to what is LEFT before the `.` before it is called

alex.greet(); //? Alex says hi!
alex.arrowGreet(); //? undefined says hi!

alex.friend.greet(); //? Alex's friend says hi!

//* We can use `.call()` on any function in JS; it is a property that exist on the prototype for every single function
console.log(Object.getOwnPropertyNames(Function.prototype));
// [
//   "length",
//   "name",
//   "arguments",
//   "caller",
//   "constructor",
//   "apply",
//   "bind",
//   "call",
//   "toString",
// ];
