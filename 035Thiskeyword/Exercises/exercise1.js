/*
    1. Create the following Object and assign it to a variable
       named "book":
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }

    2. Call the list function on the book and explain the behaviour

    3. How would you make the "list" method temporarily (for one
       function call) log out this array instead:
       ["Draco", "Severus", "Voldemort"] ?

    HINT* What methods can we use on Functions to manipulate "this"?
*/

const book = {
  name: "Harry Potter",
  author: "J.K. Rowling",
  characters: {
    mainChars: ["Harry", "Ron", "Hermione"],
    list: function () {
      for (const char of this.mainChars) {
        console.log(char);
      }
    },
  },
};

book.characters.list();
// Harry;
// Ron;
// Hermione;

// NOTE: Explanation: we are calling the list function based off the the context of the characters object (left side before the `.`). That is why have access to the `mainChars` array. We use a loop to loop over the mainChars array and log out each individual element of the array

// 3. How would you make the "list" method temporarily (for one
//    function call) log out this array instead:
//    ["Draco", "Severus", "Voldemort"] ?

// * We could do this by overriding the value of the mainChars property
// * We could also create a new object and just refer it instead of directly putting the object inside the apply
book.characters.list.apply({ mainChars: ["Draco", "Severus", "Voldemort"] });

// IMPORTANT: ALTERNATIVES
// NOTE: Using call
book.characters.list.call({ mainChars: ["Draco", "Severus", "Voldemort"] });

// NOTE: using bind ✔ Creates a new function that always uses the new character lis
const newList = book.characters.list.bind({
  mainChars: ["Draco", "Severus", "Voldemort"],
});
newList(); // ✅ Logs: Draco, Severus, Voldemort
