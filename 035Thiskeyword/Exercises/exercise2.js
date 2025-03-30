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

    2. Make it so if we do: book.characters.list()
       It will always use this Array of mainChars permanently:
       ["Draco", "Severus", "Voldemort"]

       ^ Do not modify "mainChars", you can only change "list"
         Also, you cannot modify the "list" function itself

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

// Create a new object with the permanent mainChars
const newContext = { mainChars: ["Draco", "Severus", "Voldemort"] };

// Store the bound function in a variable
const listWithNewContext = book.characters.list.bind(newContext);

// Calling the new function
listWithNewContext();
/*
Draco
Severus
Voldemort
*/

// Calling the original book.characters.list() still uses the original mainChars
book.characters.list();
/*
Harry
Ron
Hermione
*/
