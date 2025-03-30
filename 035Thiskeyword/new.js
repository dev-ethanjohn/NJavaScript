function Hero(name) {
  this.name = name;
  this.greet = function () {
    console.log(this);
    console.log(`${this.name} says awesome!`);
  };
}

// *Create an object programmatically?
const storm = new Hero("Storm");
console.log(storm); //? Hero { name: 'Storm', greet: [Function (anonymous)] }

storm.greet();
// Hero { name: 'Storm', greet: [Function (anonymous)] }
// Storm says awesome!

storm.greet.call({ name: "CYCLOPES" });
// { name: 'CYCLOPES' }
// CYCLOPES says awesome!

console.log("----------------");

console.log(Object.getOwnPropertyNames(storm));
console.log(Object.getOwnPropertyNames(storm.__proto__));

//*  Heor => Object => Null
console.log(storm.__proto__.constructor.name); //? Hero
console.log(storm.__proto__.__proto__.constructor.name); //? Object
console.log(storm.__proto__.__proto__.__proto__); //? null
