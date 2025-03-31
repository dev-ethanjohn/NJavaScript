// Super Class
class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  // class method
  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}

// Sub class
class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    //* alwways after the super constructor
    this.shield = shield;
    super.speak("Hmmm");
    // NOTE: use `super` on the methods of the parent class
  }
}

const player = new Player("Player", 100, 50, ["banana"]);
console.log(player);
// Player {
// name: 'Player',
// hp: 100,
// mp: 50,
// items: [ 'banana' ]
// }

const warrior = new Warrior(
  "Gengis Khan",
  500,
  50,
  ["Saber"],
  "Leather Shield"
); //? Gengis Khan says: Hmmm *runs immediately

console.log(warrior);
// Warrior {
//   name: 'Gengis Khan',
//   hp: 500,
//   mp: 50,
//   items: [ 'Saber' ],
//   shield: 'Leather Shield'
// }

warrior.speak("Hello"); //? Gengis Khan says: Hello

console.log(Object.getOwnPropertyNames(Player.prototype)); //? [ 'constructor', 'speak' ] *These are the 2 methods
console.log(Object.getOwnPropertyNames(Player)); //? [ 'length', 'name', 'prototype' ]

console.log(warrior instanceof Player); //? true
console.log(warrior instanceof Warrior); //? true
console.log(warrior instanceof Array); //? false
console.log(warrior instanceof Object); //? true *Everything inherits from Object

// IMPORTANT
// *warrior's prototype -> Player
// *Player's prototype -> Object
// *Object's prototype -> null

console.log(warrior.__proto__ === Warrior.prototype); // true
console.log(Warrior.prototype.__proto__ === Player.prototype); // true
console.log(Player.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
