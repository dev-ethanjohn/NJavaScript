'use strict';

// IMPORTANT (133): Default Parameters
console.log('--- Default Parameters ---');

const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger //dynamic default value (can use param before it)
) {
  // ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //? {flightNum: 'LH123', numPassenger: 1, price: 199}
createBooking('LH123', 2); //? {flightNum: 'LH123', numPassenger: 2, price: 398}
createBooking('LH123', 3, 800); //? {flightNum: 'LH123', numPassenger: 3, price: 800}

createBooking('LH123', undefined, 1000); //? {flightNum: 'LH123', numPassenger: 1, price: 1000}
createBooking('LH123', 2, undefined); //? {flightNum: 'LH123', numPassenger: 2, price: 398}
