'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// IMPORTANT (179): Converting and Checking Numbers
console.log('---Converting and Checking Numbers');

// In order languages, we have diff type of numbers like floats, int
console.log(23 === 23.0); // ?true

//  Base 10 -> 0 - 9 | 1/10 = 0.1. 3/10 = 3.33333333...infinity
//  Binary base 2  -> 0 1
console.log(0.1 + 0.2); //? 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //? false (an error in JS)

// convert string to number
console.log(Number('23')); //? 23
console.log(+'23'); //? 23 *(type coercion)

//* parsing (remove unnecessary symbols to return only numbers)
// thh string must start with a number
//  whitespace wont affect the returned number
console.log(Number.parseInt('30px', 10)); //? 30
console.log(Number.parseInt('px39', 10)); //NaN

console.log(Number.parseInt(' 2.5rem')); //? 2
console.log(Number.parseFloat(' 2.5rem')); //? 2.5

//* CHECK if is not a number
console.log(Number.isNaN(' 2.5rem')); //? false
console.log(Number.isNaN(' rem20')); //? false
console.log(Number.isNaN(+'20X')); //? true
console.log(Number.isNaN(23 / 0)); //? false (infinity)

//* checks if its a number
console.log(Number.isFinite(20)); //? true
console.log(Number.isFinite('20')); //? false
console.log(Number.isFinite(23 / 0)); //? false
console.log(Number.isFinite(+'20X')); //? false

console.log(Number.isInteger(23)); //? true
console.log(Number.isInteger('23')); //? false

// IMPORTANT (180) Math and Rounding
console.log('---Math and Rounding---');

console.log(Math.sqrt(25)); //? 5
// the same but more flexible
console.log(25 ** (1 / 2)); //? 5
console.log(25 ** (1 / 3)); //? 2.924017738212866

//* Math.max does type coercion but not parsing
console.log(Math.max(4, 18, 23, 11, 30)); //? 30
console.log(Math.max(4, 18, '23', 11, 30)); //? 30
console.log(Math.max(4, 18, '23px', 11, 30)); //? NaN

console.log(Math.min(4, 18, 23, 11, 30)); //? 4

//* calculate the area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2); //? 314.1592653589793

//* Get random number
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(10, 20)); // Possible values: 10, 11, 12, ..., 20
randomInt(5, 15); // Possible values: 5, 6, 7, ..., 15
randomInt(0, 5); // Possible values: 0, 1, 2, ..., 5

//* Rounding integers
// all these do type coercion
console.log(Math.trunc(23.3)); //? 23 *Removes the decimal part

console.log(Math.round(23.3)); //? 23 *Rounds to the nearest integer
console.log(Math.round(23.9)); //? 24

console.log(Math.ceil(23.3)); //? 24 *always round up
console.log(Math.ceil('23.9')); //? 24

console.log(Math.floor(23.3)); //? 23 *always round down
console.log(Math.floor(23.9)); //? 23

console.log(Math.trunc(-23.3)); //? -23
console.log(Math.floor(-23.3)); //? -24 *better since it covers negative values ((rounds down))

//* Rounding decimals
// strings, we have to add Number or `+` to make them Numbers
console.log((2.7).toFixed(0)); //? 3 *rounded up
console.log((2.7).toFixed(3)); //? 2.700
console.log((2.234).toFixed(2)); //? 2.23
console.log(+(2.234).toFixed(2)); //? 2.23

// IMPORTANT (181): The remainder operator
console.log('---the remainder operator---');

console.log(5 % 2); //? 1
console.log(8 % 2); //? 0

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //? true
console.log(isEven(23)); //? false
console.log(isEven(31)); //? false

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';

    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// IMPORTANT (182): Numeric Separators
console.log('---Numeric Separators---');

const diameter = 28_746_000_000;
console.log(diameter); //? 28746000000

const priceCents = 345_99;
console.log(priceCents); //? 34599

const transferFee = 15_00;
const transferFee1 = 1_500;
console.log(transferFee); //? 1500
console.log(transferFee1); //? 1500

const PI = 3.1415;
console.log(PI); //? 3.1415

console.log(+'230000'); //? 230000
// NOTE: Dont use underscores when you store a number from a string from an api or to an API.
console.log(parseInt('230_000')); //? 230

// IMPORTANT (183): Working with BigInt
console.log('---Working with BigInt---');

//NOTE: Any int bigger than 9007199254740991 is not safe
console.log(2 ** 53 - 1); //? 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //? 9007199254740991

console.log(2328946294249240240268786402424n); //? 2328946294249240240268786402424n
console.log(BigInt(928293239273)); //? 928293239273n

// Operations
console.log(10000n + 10000n); //? 20000n
console.log(7927498247294824024n * 721492749124n); //? 5719632504116434181211560154976n
//console.log(Math.sqrt(16n)) //* won't work

// NOTE: we cant mix Integers with BigInt
// Exceptions
const huge = 27983276498264924720942424242424n;
const num = 23;
console.log(huge * BigInt(num)); //? 643615359460093268581675757575752n *Have to convert first from number to BigInt

console.log(20n > 15); //? true
console.log(20n === 20); //? false

console.log(huge + ' is REALLY BIG!'); //? 27983276498264924720942424242424 is REALLY BIG! *this is mixed but because of type coercion with string

// Division
console.log(10n / 3n); //? 3n *returns the closest BigInt
console.log(10 / 3); //? 3.3333333333333335

// IMPORTANT (184): Creating Dates
console.log('---Creating Dates---');

// Create a date
const now = new Date();
console.log(now); //? Tue Mar 25 2025 20:46:57 GMT+0800 (Philippine Standard Time) *sample at thh time of logging

console.log(new Date('Aug 02 2020 18:05:41')); //? Sun Aug 02 2020 18:05:41 GMT+0800 (Philippine Standard Time)

console.log(new Date('December 24, 2015')); //? Thu Dec 24 2015 00:00:00 GMT+0800 (Philippine Standard Time)

console.log(new Date(account1.movementsDates[0])); //? Tue Nov 19 2019 05:31:17 GMT+0800 (Philippine Standard Time)

//  10 === November (month index starts at 0)
console.log(new Date(2037, 10, 19, 15, 23, 5)); //? Thu Nov 19 2037 15:23:05 GMT+0800 (Philippine Standard Time)
console.log(new Date(2037, 10, 33)); //? Thu Dec 03 2037 00:00:00 GMT+0800 (Philippine Standard Time) *It autocorrects and jumps to next date in excess

console.log(new Date(0)); //? Thu Jan 01 1970 08:00:00 GMT+0800 (Philippine Standard Time)
// 3 days later
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //? Sun Jan 04 1970 08:00:00 GMT+0800 (Philippine Standard Time)

// Working with date object
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //? Thu Nov 19 2037 15:23:00 GMT+0800 (Philippine Standard Time)
console.log(future.getFullYear()); //? 2037
console.log(future.getMonth()); //? 10
console.log(future.getDate()); //? 19
console.log(future.getDay()); //? 4 *Thursday is 5th day (4) of the week as getDay starts from 0
console.log(future.getHours()); // ?15
console.log(future.getMinutes()); // ?23
console.log(future.getSeconds()); // ?0
console.log(future.toISOString()); //? 2037-11-19T07:23:00.000Z
console.log(future.getTime()); //? 2142228180000 *total miliseconds

console.log(new Date(2142228180000)); //? Thu Nov 19 2037 15:23:00 GMT+0800 (Philippine Standard Time)

console.log(Date.now()); //? 1742907499829
future.setFullYear(2040);
console.log(future); //? Mon Nov 19 2040 15:23:00 GMT+0800 (Philippine Standard Time)

// IMPORTANT (187): Operations with Dates
console.log('---Operations with Dates');

const future2 = new Date(2037, 10, 19, 15, 23, 5);
console.log(+future); //? 2236922580000 *in milliseconds

const calcDaysPassed = (date1, date2) => {
  return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
};

const days1 = calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 29));
console.log(days1); //? 10 *in days

const getDateMessage = day => {
  if (day === 0) {
    return 'Today';
  } else if (day === 1) {
    return 'Yesterday';
  } else if (day <= 7) {
    return `${day} days ago`;
  } else {
    return 'More than a week ago';
  }
};

console.log(getDateMessage(days1)); //? More than a week ago

// IMPORTANT (188): Internationalizing Dates (Intl)
console.log('----Internationalizing Dates (Intl)----');

// Internationalizing Dates (Intl)

// 1. Basic Date Formatting
const date = new Date('2024-03-26');

// Using Intl.DateTimeFormat for localized date formatting
console.log('US English Date Format:');
console.log(new Intl.DateTimeFormat('en-US').format(date));
// Output: 3/26/2024

console.log('UK English Date Format:');
console.log(new Intl.DateTimeFormat('en-GB').format(date));
// Output: 26/03/2024

console.log('Japanese Date Format:');
console.log(new Intl.DateTimeFormat('ja-JP').format(date));
// Output: 2024/3/26

// 2. Customizing Date Formatting Options
console.log('\nCustom Date Formatting:');
const fullDateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log('Full Date in French:');
console.log(new Intl.DateTimeFormat('fr-FR', fullDateOptions).format(date));
// Output: mardi 26 mars 2024

console.log('Full Date in Arabic:');
console.log(new Intl.DateTimeFormat('ar-EG', fullDateOptions).format(date));
// Output: الثلاثاء، 26 مارس، 2024

// 3. Combining Date and Time Formatting
const dateTimeOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'UTC',
};

console.log('\nDate and Time in Different Locales:');
const now2 = new Date();

console.log('German:');
console.log(new Intl.DateTimeFormat('de-DE', dateTimeOptions).format(now2));

console.log('Chinese:');
console.log(new Intl.DateTimeFormat('zh-CN', dateTimeOptions).format(now2));

// 4. Relative Time Formatting
console.log('\nRelative Time Formatting:');
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

console.log(rtf.format(-1, 'day')); // yesterday
console.log(rtf.format(1, 'day')); // tomorrow
console.log(rtf.format(-2, 'week')); // 2 weeks ago
console.log(rtf.format(3, 'month')); // in 3 months

// 5. Advanced Example: Parsing and Formatting
function localizeDate(date, locale, options = {}) {
  const defaultOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return new Intl.DateTimeFormat(locale, mergedOptions).format(date);
}

// Usage example
const specialDate = new Date('2024-12-25');
console.log('\nLocalizing Christmas:');
console.log('US English:', localizeDate(specialDate, 'en-US'));
console.log('Spanish:', localizeDate(specialDate, 'es-ES'));
console.log('Arabic:', localizeDate(specialDate, 'ar-EG'));

// Bonus: Supporting Multiple Locales
const supportedLocales = ['en-US', 'fr-FR', 'ja-JP', 'ar-EG', 'zh-CN'];
supportedLocales.forEach(locale => {
  console.log(`\nDate in ${locale}:`);
  console.log(localizeDate(new Date(), locale));
});

// For Dynamic Locale *based on browser
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};
const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// IMPORTANT (189): Internationalizing numbers (Intl)
console.log('---Internationalizing numbers (Intl)----');

const options2 = {
  style: 'unit',
  unit: 'mile-per-hour',
};

const currOptions = {
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false,
};

const num2 = 2378232323.23;
console.log('US:', new Intl.NumberFormat('en-US', options2).format(num2)); //? US: 2,378,232,323.23 mph
console.log('Germany:', new Intl.NumberFormat('de-DE', options2).format(num2)); //? Germany: 2.378.232.323,23 mi/h
console.log('Syria:', new Intl.NumberFormat('ar-SY', options2).format(num2)); //? Syria: ٢٬٣٧٨٬٢٣٢٬٣٢٣٫٢٣ ميل/س
console.log(
  'Browser:',
  new Intl.NumberFormat(navigator.language, options2).format(num2)
); //? Browser: 2,378,232,323.23 mph

console.log('US:', new Intl.NumberFormat('en-US', currOptions).format(num2)); //? US: €2,378,232,323.23
console.log(
  'Germany:',
  new Intl.NumberFormat('de-DE', currOptions).format(num2)
); //? Germany: 2.378.232.323,23 €
console.log(
  'Browser:',
  new Intl.NumberFormat(navigator.language, currOptions).format(num2)
); //? Browser: €2,378,232,323.23

// IMPORTANT (190): Timers: setTimeout and setInterval
console.log('---Timers: setTimeout and setInterval----');

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza! with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);
console.log('WAITING');

// if tehre is a spinach, do not execute the timeout
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//*setInterval (on repeat timer)
// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000);
