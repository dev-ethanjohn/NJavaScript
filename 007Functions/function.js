// 2 Types of Function

//  > FUNCTION DECLARATION
// NOTE [0] Regular Function
function printHello() {}

// NOTE [1] ARROW FUNCTION (es6) Modern JS
const printHello2 = () => {
  console.log('"Hello!');
};

//  > FUNCTION CALL
printHello2(); //? "Hello!

// --------------------------------- //

const sayHello = (name, num) => {
  for (let i = 0; i < num; i++) {
    console.log(`${name}: ${i}`);
  }
};

sayHello("Ethan", 3);
/* 
? Ethan: 0
? Ethan: 1
? Ethan: 2
*/

const sum = (num1, num2) => {
  console.log("Ethan");
  num1 +
    num2; /* Adding return here will perform this operation and have the value be avaiable for use when called */
  // ! func without return will return `undefined`
};

//! not providing argument when you defined the parameter, will return NaN
const result = sum(12, 3); //? Ethan
console.log(result); // ? undefined

const sum2 = (num1, num2) => {
  return num1 + num2;
};

console.log(sum2()); // ?NaN
