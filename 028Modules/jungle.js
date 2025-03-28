// import { monkey, printMonkey } from "./monkey.js"; //ES6 Modules
// import { PM, monkey } from "./monkey.js";

// import printMonkey, { monkey as monkeyobject } from "./monkey.js" 👍 THE SAME
import { monkey as monkeyobject, default as printMonkey } from "./monkey.js"; //*THE SAME as above
// const printMonkey = require('monkey.js'); commonjs *only avail on nodejs

printMonkey(); //? A
// PM(); //? Abu
console.log(monkeyobject); //? { name: 'Abu', species: 'Capuchin', hobbies: [ 'stealing' ] }
