const movie = {
  title: "Dune",
  year: "2021",
  length: 155,
  book: true,
};

const { book, rating = 83, ...rest } = movie;

console.log(book); //? true
console.log(rating); //? 83
console.log(movie.rating); //? undefined   (we arent manipulating the movie object)

console.log(rest); //? { title: 'Dune', year: '2021', length: 155 }

// Destructuring help us pull up values from any iteratables

// NOTE:
//Destructuring Assignments -> (1)Arrays (2) Objects
//Desctructturing Binding Patterns -> (1) for..of loops (2) Function parameters (3) catch block
