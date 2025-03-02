try {
  const user = {
    name: "Alex",
    age: 21,
    // profile: {
    //   colour: "blue",
    // },
  };

  console.log(user.profile.colour); // TYPEError, the profile is undefined

  console.log("do i get here?"); //! This wont log (all code after throw will be ignored!)
} catch (error) {
  console.log("something bad happened...");
  console.error(error);
}

/*
something bad happened...
TypeError: Cannot read properties of undefined (reading 'colour')
    at Object.<anonymous> (/Users/ethanjohnpaguntalan/Library/Mobile Documents/com~apple~CloudDocs/APP SCREENS/100DAY/JavaScript-Nader/018ErrorHandling/try-catch-object.js:10:28)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
    at Module._load (node:internal/modules/cjs/loader:1021:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49
*/
