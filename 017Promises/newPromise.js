// ONCE the promise is in pending; One can either be RESOLVED or REJECTED
// Whichever state is used first

const myPromise = new Promise((resolve, reject) => {
  // basically we are scheduling this code to be executed in the future
  setTimeout(() => {
    console.log("hello world");
    // resolve("Here is your ice cream");
    reject("Sorry, no ice cream for you!");
  }, 1000);
});

myPromise
  .then((resolvedValue) => {
    console.log("promise seems to be done");
    console.log(resolvedValue);
    console.log(myPromise);
    return "yo"; //chain promise
  })
  .then((anotherValue) => {
    console.log(anotherValue);
  })
  .catch((error) => {
    console.log(error);
    console.log(myPromise);
  });

console.log("Hello?");
console.log(myPromise);

/* NOTE: RESOLVED
Hello?
Promise { <pending> }
hello world
promise seems to be done
Here is your ice cream
Promise { 'Here is your ice cream' }
yo
*/

/* NOTE: REJECTED
Hello?
Promise { <pending> }
hello world
Sorry, no ice cream for you!
Promise { <rejected> 'Sorry, no ice cream for you!' }
*/
