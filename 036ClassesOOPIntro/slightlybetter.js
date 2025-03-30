const createPlayer = (namePlayer, hp, mp, items) => {
  return {
    namePlayer: namePlayer,
    hp: hp,
    mp: mp,
    items: items,
  };
};

const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"]);
hanSolo.hp = 150;
console.log(hanSolo); //? { namePlayer: 'Han Solo', hp: 150, mp: 10, items: [ 'Blaster' ] }

const darthVader = createPlayer("Darth Vader", 200, 50, ["Saber"]);
console.log(darthVader); //? { namePlayer: 'Darth Vader', hp: 200, mp: 50, items: [ 'Saber' ] }
