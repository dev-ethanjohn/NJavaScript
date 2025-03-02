/*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why?
    8. How could you speed it up?
*/

const fetchFast = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fast Done!");
    }, ms);
  });
};

const fetchSlow = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow Done");
    }, ms);
  });
};

console.log("Program starting...");
const firstTimeStamp = Date.now();

const fetchedData = async () => {
  // PARALLEL EXECUTION for speedup, since fetchSlow is not dependent on fetchFast
  const fastResult = fetchFast(2000);
  const slowResult = fetchSlow(6000);
  console.log("FastResult:", fastResult);
  console.log("SlowResult:", slowResult);

  const shorted = await Promise.all([fastResult, slowResult]);
  console.log(shorted[0], shorted[1]);

  const secondTimeStamp = Date.now();
  const timeElapsed = (secondTimeStamp - firstTimeStamp) / 1000;
  console.log(timeElapsed);
};

/*
Program starting...
FastResult: Promise { <pending> }
SlowResult: Promise { <pending> }
Program complete!
Fast Done! Slow Done                   //after 6 seconds
6.004
*/

//NOTE: SHORTHAND USING ARRAY DESTRUCTURING

// const fetchedData = async () => {
//   console.log("Fetching data...");

//   const [fastResult, slowResult] = await Promise.all([
//     fetchFast(2000),
//     fetchSlow(6000),
//   ]);

//   console.log(fastResult, slowResult);
// };

fetchedData();

console.log("Program complete!");
