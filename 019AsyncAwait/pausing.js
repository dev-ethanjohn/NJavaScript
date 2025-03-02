const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });

  return timeout;
};

console.log("Program starting..."); //1st

const fetchedData = async () => {
  // NOTE: DEPENDENT OF EACH OTHER (async code)
  // IMPORTANT: SEQUENCIAL EXECUTION
  // console.log("Fetching 1st set of data"); //2nd
  // const result1 = await makeTimeout(2000);

  // console.log("Fetching 2nd set of data", result1); //4th
  // const result2 = await makeTimeout(2000);

  // console.log("Done fetching data!", result2); //5th

  // NOTE: INDEPENDENT OF EACH OTHER (syncrhonoys code)
  // IMPORTANT: PARALLEL EXECUTION
  console.log("Fetching 1st set of data"); //2nd
  const result1 = makeTimeout(2000);

  console.log("Fetching 2nd set of data", result1); //4th
  const result2 = makeTimeout(2000);

  const finalResult = await Promise.all([result1, result2]); //only async code

  console.log("Done fetching data!", finalResult); //5th
};

fetchedData();

console.log("Program completed!"); //3rd

/* NOTE: DEPENDENT
Program starting...
Fetching 1st set of data
Program completed!
Fetching 2nd set of data All done!   //after 2 sec
Done fetching data! All done!        //after 2 sec + 2sec (4sec)
*/

/* NOTE: INDEPENDENT
Program starting...
Fetching 1st set of data
Fetching 2nd set of data Promise { <pending> }
Program completed!
Done fetching data! [ 'All done!', 'All done!' ]  //after 2 sec
 */

// ✅ Use sequential execution (await separately) when operations depend on each other.
// ✅ Use Promise.all() when operations are independent and can run in parallel.
// ✅ JavaScript executes synchronous code first before handling asynchronous tasks in the event loop.

// This is a great way to optimize performance when dealing with multiple asynchronous operations! 🚀
