Object.prototype.greet = function () {
  //! Do not add something on the Object prototypes (global object prototype) (1) iT COULD override existing functionalities (2) It will be accessible to all objects thus causing potnetial errors
  console.log(this); // *the oBject itself
  console.log(`${this.name} says hello there!`);
};

const ethan = {
  name: "Ethan",
};

const thor = {};

ethan.greet();
thor.greet();

//IMPORTANT The this keyword in JavaScript is not statically bound to the object where it is declared. Instead, its value is determined by how a function is called. The context (value of this) depends on the calling object, not the function's declaration.

//* this is not tied to where a function is defined, but where and how it is called.

//* In regular functions, this depends on the caller.

//* In constructor functions, this refers to the new object created.

//* In arrow functions, this is lexically inherited.

//* You can manually bind this using call, apply, or bind.
