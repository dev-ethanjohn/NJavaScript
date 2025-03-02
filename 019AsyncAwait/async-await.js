// NOTE: THIS runs asyncronously

const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });

  return timeout;
};

console.log("Program starting..."); //1st

// NOTE: USING PROMISES
makeTimeout(1000)
  .then((result) => {
    //3rd
    console.log(`from .then(): ${result}`);
  })
  .then(() => {
    return "ehllo"; //this is wrapped also in a promise
  });

//NOTE: USING ASYNC-AWAIT
const fetchTimeout = async () => {
  const result = await makeTimeout(2000);
  console.log(`from async-await: ${result}`);
};

// IMPORTANT: we nan call the async function multiple times!
// fetchTimeout();
fetchTimeout();

// console.log(makeTimeout(1000)); //?Promise { <pending> }
// ⬇️
console.log("Program completed!"); //2nd

/*
Program starting...
Program completed!
from .then(): All done!      //after 1 sec
from async-await: All done!  //after 1 sec + 1sec (2sec)
 */
