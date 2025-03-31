// Super Class
class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
}

// Sub class
class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    // alwways after the super constructor
    this.shield = shield;
    console.log(super.constructor);
    console.log(this);
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
);
console.log(warrior);
// Warrior {
//   name: 'Gengis Khan',
//   hp: 500,
//   mp: 50,
//   items: [ 'Saber' ],
//   shield: 'Leather Shield'
// }
