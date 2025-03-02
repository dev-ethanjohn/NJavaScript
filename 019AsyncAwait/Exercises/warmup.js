/*
    1. Create a function called "fetchPokemon" that returns 
       a Promise that resolves with the value :
       { data: {name: "Pickachu", power: 20} } after 2 seconds
    2. Print out "Program starting..."
    
    3. Create an async function that uses await to wait for
       the data to comes back from "fetchPokemon" then log out
       the data

    4. Call the async function you created
    5. Log out "Program complete!"

    After your're done the above ^:
    6. Change "fetchPokemon" to reject after 2 seconds instead
       with a new Error Object with the message "Danger, danger!"
    7. How can you modify your async function to catch this error?
*/

const fetchPokemon = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ data: { name: "Pickachu", power: 20 } });
      reject(new Error("Danger, danger!"));
    }, ms);
  });
};

console.log("Program starting..."); //1st

const fetchPromise = async () => {
  try {
    const result = await fetchPokemon(2000);
    console.log(result); //3rd
  } catch (err) {
    console.error(err);
    console.log("Done");
  }
};

fetchPromise();

console.log("Program complete"); //2nd
/* NOTE: RESOLVE
Program starting...
Program complete                             //2sec
{ data: { name: 'Pickachu', power: 20 } }
*/

/*NOTE: REJECT
Program starting...
Program complete
Error: Danger, danger!                       //2sec
    at Timeout._onTimeout (/Users/ethanjohnpaguntalan/Library/Mobile Documents/com~apple~CloudDocs/APP SCREENS/100DAY/JavaScript-Nader/019AsyncAwait/Exercises/warmup.js:24:14)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
Done
*/
