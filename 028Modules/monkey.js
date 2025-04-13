const monkey = {
  name: "Abu",
  species: "Capuchin",
  hobbies: ["stealing"],
};

const printMonkey = () => {
  console.log(monkey.name);
};

// *can export multiple objects
// export { monkey, printMonkey };

// *can rename
// export { monkey, printMonkey as PM };

// *default (can only be one in a file, but you can add multiple named exports). Export 1 variable in every module
export { monkey };
export default printMonkey; //* only 1
