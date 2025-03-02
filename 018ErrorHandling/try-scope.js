// GLOBAL SCOPE
// This variable is avaiable both for the try and the catch block
const message = "Hello";

try {
  // const message = "Hello";
  console.log(message);

  throw new Error("Oh no!");
} catch (error) {
  console.error(error);
  console.error(message);
}

console.log("Program complete!");

// NOTE: A Scope is an area where a variable exists

/*
Hello
Error: Oh no!
    at Object.<anonymous> (/Users/ethanjohnpaguntalan/Library/Mobile Documents/com~apple~CloudDocs/APP SCREENS/100DAY/JavaScript-Nader/018ErrorHandling/try-scope.js:8:9)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
    at Module._load (node:internal/modules/cjs/loader:1021:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49
Hello
Program complete!

*/
