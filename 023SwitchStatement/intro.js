const animal = "Monkey";

switch (animal) {
  case "Tiger": {
    console.log("You are a tiger!");
    break;
  }
  case "Koala":
  case "Monkey": {
    console.log("good animal!");
    break;
  }

  default: {
    console.log("Must be an alien!");
    break;
  }
}

console.log("All done!");

// NOTE: BETTER to always include break in every case
// good animal!
// All done!
