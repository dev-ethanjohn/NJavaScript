"use strict";

// Create one player array for each team (variables 'players1' and 'players2')
// The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// Create an array 'allPlayers' containing all players of both teams (22 players)
// During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// Based on the game.odds below, create one variable for each odd (called 'team1', 'draw' and 'team2')
// Write a function 'printGoals' that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

//Test data for challenge 1
// Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then call the function again with players from game.scored

const game = {
  team1: "Bayern Munich",
  team: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.25,
  },
};

//Solution
// const player1 = [];
// const player2 = [];
const [player1, player2] = game.players;
const [gk, ...fieldsPlayers] = player1;

const allPlayers = [...player1, ...player2];
console.log(allPlayers);
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];

const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...allPlayers) {
  console.log(`${allPlayers.length} goals were scored`);
};

printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 (${game.team1}) is more likely to win`);
team1 > team2 && console.log(`Team 2 (${game.team2}) is more likely to win`);
