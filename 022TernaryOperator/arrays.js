const numbers = [5, 10, 15, 20, 25];

const result = numbers.map((num) => {
  return num > 10 ? "Over" : "Under";
});

console.log(result); //? [ 'Under', 'Under', 'Over', 'Over', 'Over' ]
