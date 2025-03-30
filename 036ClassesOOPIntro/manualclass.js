class Player {
  //* Class constructor
  // *can't create a method inside the constructor
  constructor(name, hp, mp, items) {
    // exists on each instance of the a Player Object
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    // this.age = 20;
  }

  //* class method
  //* This means, speak is now part of Player's prototype
  speak(phrase) {
    console.log(`Player ${this.name} says: ${phrase}`);
  }

  age = 20; //* part of the instance
}

//*
const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
console.log(hanSolo); //? Player { name: 'Han Solo', hp: 100, mp: 10, items: [ 'Blaster' ] }
console.log(Object.getOwnPropertyNames(hanSolo)); //?[ 'name', 'hp', 'mp', 'items' ]
console.log(Object.getOwnPropertyNames(hanSolo.__proto__)); //? [ 'constructor', 'speak' ]

const ethan = new Player("Ethan", 10, 5, ["Computer"]);
console.log(ethan);
console.log(Object.getOwnPropertyNames(ethan));
console.log(Object.getOwnPropertyNames(ethan.__proto__));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTANT
//NOTE: simulate classes like
function AnotherPlayer(name, hp, mp, items) {
  // * contructor that is part of AnotherPlayer's prototype
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
  // this.speak = function (phrase) {
  //   console.log(`Player ${this.name} says: ${phrase}`);
  // };
}

//* PART of AnotherPlayer's prototype
AnotherPlayer.prototype.speak = function (phrase) {
  console.log(`Player ${this.name} says: ${phrase}`);
};

//*
const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);
console.log(darthVader); //? AnotherPlayer {}
console.log(Object.getOwnPropertyNames(darthVader)); //? []
console.log(Object.getOwnPropertyNames(darthVader.__proto__)); //? [ 'constructor' ]

//* Call the class method
hanSolo.speak("Never tell me the odds!"); //? Player Han Solo says: Never tell me the odds!
ethan.speak(); //? Player Ethan says: undefined
darthVader.speak("hsjdhskdhsdk"); //? Player Darth Vader says: hsjdhskdhsdk

// ✅ Checking the prototype chain
console.log(hanSolo.__proto__ === Player.prototype); //? true
console.log(hanSolo.speak === ethan.speak); //? true *(they share the same method)
