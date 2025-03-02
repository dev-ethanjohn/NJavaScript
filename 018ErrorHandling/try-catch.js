try {
  const message = "hello there!";
  console.log(message);
  throw new Error("error!");
} catch (error) {
  console.error(error);
  console.error("caught!");
}

console.log("Hi?");
/*
hello there!
Error: error!
    at Object.<anonymous> (/Users/ethanjohnpaguntalan/Library/Mobile Documents/com~apple~CloudDocs/APP SCREENS/100DAY/JavaScript-Nader/018ErrorHandling/try-catch.js:4:9)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
    at Module._load (node:internal/modules/cjs/loader:1021:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49
caught!
Hi?
*/
