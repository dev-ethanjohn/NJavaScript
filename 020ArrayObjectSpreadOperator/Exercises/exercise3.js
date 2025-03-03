/*
    1. Create a variable called "superhero" that points at this Object:
        {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
            happy: false, enemies: ["Joker", "Catwoman", "Bane"],
            bestMovie: {title: "The Dark Knight", rating: 95}   }

    2. How would you create a COPY of the Object pointed to by
       "superhero" INCLUDING COPIES of "enemies" and "bestMovie".

    3. Once you've created a total copy, modify the following:
       - add "Poison Ivy" to the copy's array of "enemies"
       - add { year: 2008 } to the copy's "bestMovie" Object

    4. Print out both "superhero" and it's copy to ensure that
       "superhero"'s "enemies" and "bestMovie" were NOT modified.

    *This can be done MANY different ways but is also quite challenging!
*/

const superhero = {
  name: "Bruce Wayne",
  alias: "Batman",
  universe: "DC",
  happy: false,
  enemies: ["Joker", "Catwoman", "Bane"],
  bestMovie: { title: "The Dark Knight", rating: 95 },
};

const copySuperHero = {
  ...superhero, // shallow copy of top-level properties
  enemies: [...superhero.enemies], // new array (not referenced)
  bestMovie: { ...superhero.bestMovie }, // new object (not referenced)
};

copySuperHero.enemies.push("Poison Ivy");
copySuperHero.bestMovie.year = 2008;

console.log(superhero);
// {
//   name: 'Bruce Wayne',
//   alias: 'Batman',
//   universe: 'DC',
//   happy: false,
//   enemies: [ 'Joker', 'Catwoman', 'Bane' ],
//   bestMovie: { title: 'The Dark Knight', rating: 95 }
// }
console.log(copySuperHero);
// {
//   name: 'Bruce Wayne',
//   alias: 'Batman',
//   universe: 'DC',
//   happy: false,
//   enemies: [ 'Joker', 'Catwoman', 'Bane', 'Poison Ivy' ],
//   bestMovie: { title: 'The Dark Knight', rating: 95, year: 2008 }
// }
