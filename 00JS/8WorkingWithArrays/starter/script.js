'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// IMPORTANT: (147) Simple Array Methods
console.log('----Simple Array Methods----');

// *SLICE -> extract part of an array without changing the original array
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); //?  ['c', 'd', 'e'] *starting at index 2
console.log(arr.slice(2, 4)); //? ['c', 'd']
console.log(arr.slice(-2)); //? ['d', 'e'] (last 2 element)
console.log(arr.slice(-1)); //? ['e'] (last 2 element)
console.log(arr.slice(1, -2)); //?  ['b', 'c']

console.log(arr.slice()); //? ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); //? ['a', 'b', 'c', 'd', 'e']

// *SPLICE -> extract part of an array changing the original array
// usecase1: remove the last item in the array
// usecase2: delete 1 /more element from the array

// console.log(arr.splice(2)); //? ['c', 'd', 'e']

arr.splice(-1);
// console.log(arr); //? ['a', 'b'] *losses what was extracted

console.log(arr); //? ['a', 'b', 'c', 'd'] *last item was removed

arr.splice(1, 2); // (start, number of element forward)

console.log(arr); //? ['a', 'd'] *b and c deleted

// *REVERSE
// mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2); //?  ['j', 'i', 'h', 'g', 'j']
console.log(arr2.reverse()); //?  ['j', 'g', 'h', 'i', 'j']
console.log(arr2); //?  ['j', 'g', 'h', 'i', 'j']

// *CONCAT
// used to concat 2 arrays
// doesnt mutate the original array
const letters = arr.concat(arr2);
console.log(letters); //?  ['a', 'b', 'c', 'd', 'e', 'j', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); //?  ['a', 'b', 'c', 'd', 'e', 'j', 'g', 'h', 'i', 'j']

// *JOIN
// make the array to string
console.log(letters.join('-')); //? a-b-c-d-e-j-g-h-i-j

// IMPORTANT: (148) The New at Method
console.log('----The New at Method');

const arr3 = [23, 11, 64];
console.log(arr3[0]); //? 23
console.log(arr3.at(0)); //? 23

// *getting last element of array
console.log(arr3[arr3.length - 1]); //? 64
console.log(arr3.slice(-1)[0]); //? 64
console.log(arr3.at(-1)); //? 64 *more ituitive
console.log(arr3.at(-2)); //? 11

console.log('ethan'.at(2)); //? h
console.log('ethan'.at(-1)); //? n

// IMPORTANT (149): Looping Arrays: forEach
console.log('----Looping Arrays: forEach----');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); // converts to absolute value
  }
}

console.log('-----FOR EACH-----');
// parameter 0: current index
// parameter 1: index

// You can't have break/continue
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`); // converts to absolute value
  }
});

// IMPORTANT: (150): forEach with Maps and Sets
console.log('----forEach with Maps and Sets----');

//  *MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// *SET
const currenciesUnique = new Set(['USD', 'GBP', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// IMPORTANT (155): The map method
console.log('---The map method---');

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// *using functional programming
const movementsUSD = movements2.map(mov => mov * eurToUsd);

console.log(movements); //? [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementsUSD); //? [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

// *using for of loop
const movementsUSDFor = [];
for (const mov of movements) {
  movementsUSDFor.push(mov * eurToUsd);
}
console.log(movementsUSDFor); //?  [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

const movementsDescriptions = movements2.map((mov, i, arr) => {
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;

  // NOTE: forEach creates sideEffects
});

console.log(movementsDescriptions);
