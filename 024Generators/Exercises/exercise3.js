/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create an variable called
       "groceries" that points at:
       ["Avocado", "Cookie", "Milk", "Soup", "Soda"]

       The generator will yield a random grocery from "groceries"
       and also remove that grocery item from the list of "groceries"
       Eg: const groceries = groceryList();
           groceries.next() => "Cookie"
           groceries.next() => "Soup"

    3. Create 2 generator Objects by calling each of the 2
       generator functions above ^

    4. Create a regular for loop that will loop 5 times and calls
       .next() on each of the generator Objects ^ to print out a
       random number followed by a random grocery:
       Eg: 5 Avocado
           10 Soup
*/

function* getRandomNumber() {
  for (let i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * 10) + 1; //random bet 1-10
  }
}

// 2️⃣ Create a generator function that picks and removes random groceries from the list
function* groceryList() {
  let groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];

  while (groceries.length > 0) {
    // Select a random index from the remaining groceries
    const randomIndex = Math.floor(Math.random() * groceries.length);
    // Remove the selected grocery from the array and yield it
    const removedItem = groceries.splice(randomIndex, 1)[0];
    yield removedItem;
  }
}

// 3️⃣ Create generator objects by calling the generator functions
const randomNumberGenerator = getRandomNumber();
const groceryGenerator = groceryList();

// 4️⃣ Use a regular for loop to call `.next()` on each generator object
for (let i = 0; i < 5; i++) {
  const randomNumber = randomNumberGenerator.next().value; // Get next random number
  const randomGrocery = groceryGenerator.next().value; // Get next grocery item

  console.log(randomNumber, randomGrocery);
}

/*
random output:
   7 Cookie
   3 Avocado
   10 Milk
   4 Soda
   1 Soup
*/
