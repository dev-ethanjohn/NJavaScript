/*
    1. Log out "Program started"
    2. Throw an Error Object with the message "Uh oh!"
    3. At the end of the program log out "Program complete!"
    4. Run the program and watch it crash

    5. Create a try/catch block that console.error's out 
       the error message
    6. Run the program again and see the difference
*/

// console.log("Program started");

// throw new Error("Uh no!");
// console.log("Program 1 complete!"); //! Will be ignored, and the whole program will crash as we didn't catch the error!

try {
  console.log("Program started");
  throw new Error("Uh no!");
} catch (err) {
  console.error(err);
}

console.log("Program 2 complete!");

/*
Program started
Error: Uh no!
    at Object.<anonymous> (/Users/ethanjohnpaguntalan/Library/Mobile Documents/com~apple~CloudDocs/APP SCREENS/100DAY/JavaScript-Nader/018ErrorHandling/Exercises/warmup.js:18:9)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
    at Module._load (node:internal/modules/cjs/loader:1021:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49
Program 2 complete!
*/
