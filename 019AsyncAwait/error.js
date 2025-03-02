const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("All done!");
      reject("There was an error!");
    }, ms);
  });

  return timeout;
};

const causeError = async () => {
  try {
    const result = await makeTimeout(2000);
    console.log(result);
  } catch (err) {
    console.log("we are in the erro case all done");
    console.error(err);
  }
};

console.log("Program started");
causeError();
console.log("Program Done");

/*
Program started
Program Done
we are in the erro case all done   //2sec
There was an error!  
*/
