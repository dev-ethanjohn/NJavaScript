const fetchedData = async () => {
  // NOTE Anything that is returned in an async func is wrapped in a Promise
  return "Hello";
};

console.log(fetchedData()); //? Promise { 'Hello' }

// NOTE: Use the resolved returned value by handling the promise through (1).then() or async await

// (1) Using .then()
const result = fetchedData();
result
  .then((value) => {
    console.log(value); //? Hello
  })
  .catch((err) => {
    console.error(err);
  }); //catch error in vanilla promises

//(2) Using async await
const getData = async () => {
  const value = await fetchedData();
  console.log(value);
}; //? Hello
