const player = {
  name: "?",
  hp: 100,
  mp: 0,
  items: [],
};

const hanSolo = player;
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.items = ["Blaster"];

const darthVader = player;

console.log(hanSolo); //? { name: 'Han Solo', hp: 80, mp: 0, items: [ 'Blaster' ] }
console.log(darthVader); //? { name: 'Han Solo', hp: 80, mp: 0, items: [ 'Blaster' ] }
