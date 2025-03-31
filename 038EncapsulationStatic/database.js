class Database {
  #token = "abc123"; // !instance property (hidden)
  constructor() {
    // this.#token = "xyz"; //* to access private
  }

  saveData(data) {
    //? method (stored in prototype)
    this.#initDBConnection();
    this.#authorize();
    this.#updateQuery();
    // console.log(this.#token); //* to access the private
  }

  #initDBConnection() {} //! hidden
  #authorize() {} // !hidden
  #updateQuery() {} // !hidden
}

const db = new Database();
console.log(db);
console.log(db.token);
// db.token = "superhappy!";
// console.log(db);

console.log(Object.getOwnPropertyNames(db)); // [ 'token' ]
console.log(Object.getOwnPropertyNames(db.__proto__));
// ["constructor", "saveData", "initDBConnection", "authorize", "updateQuery"];

console.log(db.token);
console.log(db);

// NOTE: Only in the Class that these private fields or methods are accessible where they are defined.

class CustomDB extends Database {
  #token = "1223344";

  saveData(data) {
    // super.#initDBConnection() //! cannot be accessed
  }
}
