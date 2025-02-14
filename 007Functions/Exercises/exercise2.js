/*
    Write a function called "login":

    1. The function has 2 parameters:
        - username: this should be a string
        - password: this should be a string too

    2. Return true in the following cases:
        - username is "admin" (any password, doesn't matter)
        - username is "monkey" and password is "123"
        - username is "moomoo" and password is "farm"

    3. In all other cases, return false

    4. Test the function like so:
     - const test = login('hello', 'meow'); // "test" should be false
     - const test2 = login('admin', 'lol'); // "test2" should be true
     - const test3 = login('monkey', '123'); // "test3" should be true
     - const test4 = login('moomoo', 'farm'); // "test4" should be true
     - const test5 = login('moomoo', 'moo'); // "test5" should be false
*/

const login = (username, password) => {
  if (
    username === "admin" ||
    (username === "monkey" && password === "123") ||
    (username === "moomoo" && password === "farm")
  ) {
    return true;
  }

  return false;
};

const test = login("hello", "meow");
const test2 = login("admin", "lol");
const test3 = login("monkey", "123");
const test4 = login("moomoo", "farm");
const test5 = login("moomoo", "moo");
console.log(test); //? false
console.log(test2); //? true
console.log(test3); //? true
console.log(test4); //? true
console.log(test5); //? false
