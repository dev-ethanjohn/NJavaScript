/*
    1. Create a function called "goGetCandies" which will
       return a Promise Object that resolves to the value:
       { candy: "sour keys", quantity: 10 }
       This should take 2 seconds

    2. Create another function called "sellCandies" that
       will take a candy Object like above ^ and return
       a Number that is 25 * quantity. This will be 
       how much (in cents) we get for our candies. However,
       make this function take 3 seconds to do this math
       (return a Promise with a setTimeout with the answer).

    3. Write an async function that uses await to:
       1. Get the candy object from goGetCandies()
       2. Passes it to "sellCandies" and waits for the response
       3. Prints out how much money we made from our sale

    4. Do the same steps as #3 but with vanilla Promises.

    Q1: Which of these 2 methods do you prefer?
    Q2: Which of these 2 methods is easier to read?
*/

const goGetCandies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quantity: 10 });
    }, 2000);
  });
};

const sellCandies = (candy) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(25 * candy.quantity);
    }, 3000);
  });
};

console.log("Starting process...");
const firstTimeStamp = Date.now();

// NOTE: USING ASYNC AWAIT
const getCandyQuantity = async () => {
  // NOTE: THIS IS SEQUENCIAL EXECUTION,
  try {
    const candy = await goGetCandies();
    console.log("Got candies:", candy.quantity);
    const secondTimeStamp = Date.now();
    const timeToGetCandies = (secondTimeStamp - firstTimeStamp) / 1000;
    console.log(`Time after getting candies: [${timeToGetCandies}]`);

    const moneyEarned = await sellCandies(candy);
    console.log("Money earned:", moneyEarned, "cents");

    const endTimeStamp = Date.now();

    const totalTimeElapsed = (endTimeStamp - firstTimeStamp) / 1000;
    console.log(`Total time elapse: [${totalTimeElapsed}]`);
  } catch (err) {
    // IMPORTANT WE CAN wrap this inside a trycatchblock
    console.error(err);
  }
};

getCandyQuantity();
console.log("Process started...");

/*
Starting process...
Process started...
Got candies: 10
Time after getting candies: [2.01]
Money earned: 250 cents
Total time elapse: [5.013]
*/

// NOTE: USING VANILLA PROMISES
goGetCandies()
  .then((candy) => {
    console.log("Got candies:", candy.quantity);

    const secondTimeStamp = Date.now();
    const timeToGetCandies = (secondTimeStamp - firstTimeStamp) / 1000;
    console.log(`Time after getting candies: [${timeToGetCandies}s]`);

    return sellCandies(candy);
  })
  .then((moneyEarned) => {
    console.log("Money earned:", moneyEarned, "cents");

    const endTimeStamp = Date.now();
    const totalTimeElapsed = (endTimeStamp - firstTimeStamp) / 1000;
    console.log(`Total time elapsed: [${totalTimeElapsed}s]`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("Process started...");
