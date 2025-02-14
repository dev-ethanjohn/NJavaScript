/*
    Write a function called "chill" that does the following:
    1. Prints out at the start: "Doing some chilling:"
    2. Then, prints out:
        "Chill... 1"
        "Chill... 2"
        "Chill... 3"
        ...
        "Chill... 10"
    3. Then finally prints out: "That was ice cold!""

    When you're done, call the function once.
*/
const chill = (count) => {
  for (i = 0; i < count; i++) {
    console.log(`Chill... ${i + 1}`);
  }
  console.log("That was ice cold!");
};

chill(10);
/*
Chill... 1
Chill... 2
Chill... 3
Chill... 4
Chill... 5
Chill... 6
Chill... 7
Chill... 8
Chill... 9
Chill... 10
That was ice cold!
*/
