class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}

class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
  }

  // OVERRIDE
  speak(phrase) {
    console.log(`${phrase}!!!`);
  }
}

class Wizard extends Player {
  constructor(name, hp, mp, items, wand) {
    super(name, hp, mp, items);
    this.wand = wand;
  }
  // OVERRIDE
  speak(phrase) {
    console.log(`${phrase} magical`);
  }
}

class Bartender extends Player {
  constructor(name, hp, mp, items, mug) {
    super(name, hp, mp, items);
    this.mug = mug;
  }

  // WILL use `speak` from super class's `speak`
}

// NOTE: CLASS INSTANTIATIONS
const warrior = new Warrior(
  "Genghis Khan",
  500,
  50,
  ["Saber"],
  "Leather Shield"
);

const wizard = new Wizard("Gandalf", 150, 300, ["Pointy Hat"], "Elder Wand");
const bartender = new Bartender(
  "Moe",
  220,
  180,
  ["Apron", "Napkin"],
  "Crystal Mug"
);

// NOTE: POLYMORPHISM
const players = [warrior, wizard, bartender];
for (const player of players) {
  player.speak("I am speaking");
}
