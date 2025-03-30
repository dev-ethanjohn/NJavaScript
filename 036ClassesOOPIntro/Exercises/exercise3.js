/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

// Player Class (Spaceship)
class Player {
  constructor(x, y, hp, speed, ammo) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.speed = speed;
    this.ammo = ammo;
    this.score = 0;
    this.isAlive = true;
  }

  moveLeft() {
    this.x -= this.speed;
    console.log(`Player moved left to ${this.x}`);
  }

  moveRight() {
    this.x += this.speed;
    console.log(`Player moved right to ${this.x}`);
  }

  shoot() {
    if (this.ammo > 0) {
      this.ammo--;
      console.log(`Player shoots! Ammo left: ${this.ammo}`);
    } else {
      console.log("No ammo left!");
    }
  }

  takeDamage(amount) {
    this.hp -= amount;
    console.log(`Player took ${amount} damage! HP left: ${this.hp}`);
    if (this.hp <= 0) {
      this.isAlive = false;
      console.log("Player is dead!");
    }
  }

  respawn() {
    this.x = 50;
    this.hp = 100;
    this.isAlive = true;
    console.log("Player respawned!");
  }
}

// Enemy Class (Flying Alien)
class Enemy {
  constructor(x, y, hp, speed, attackPower) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.speed = speed;
    this.attackPower = attackPower;
    this.isAlive = true;
  }

  moveDown() {
    this.y += this.speed;
    console.log(`Enemy moved down to ${this.y}`);
  }

  attack(player) {
    if (this.isAlive) {
      console.log("Enemy attacks!");
      player.takeDamage(this.attackPower);
    }
  }

  takeDamage(amount) {
    this.hp -= amount;
    console.log(`Enemy took ${amount} damage! HP left: ${this.hp}`);
    if (this.hp <= 0) {
      this.die();
    }
  }

  die() {
    this.isAlive = false;
    console.log("Enemy destroyed!");
  }
}

// Example Gameplay
const player = new Player(50, 100, 100, 5, 10);
const enemy = new Enemy(50, 10, 20, 2, 10);

player.moveRight();
player.shoot();
enemy.moveDown();
enemy.attack(player);
player.takeDamage(15);
player.respawn();
