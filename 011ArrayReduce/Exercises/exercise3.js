/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create an new array called "caps" that:
        - maps over "items" and capitalizes each item

    3. Create a const called "concat" that:
        - uses reduce to concatenate all the strings in "caps"
          using a space to separate each item

    4. Print out "items", "caps" and "concat"

    BONUS: Can you do steps 1-3 in one line?
*/

const items = ["light", "banana", "phone", "book", "mouse"];
const caps = items.map((item) => {
  return item.toUpperCase();
});
const concat = caps.reduce((result, cap) => {
  return result ? result + " " + cap : cap;
}, "");

console.log(items); //? [ 'light', 'banana', 'phone', 'book', 'mouse' ]
console.log(caps); //? [ 'LIGHT', 'BANANA', 'PHONE', 'BOOK', 'MOUSE' ]
console.log(concat); //?  LIGHT BANANA PHONE BOOK MOUSE

// NOTE: In one line
const cappedString = ["light", "banana", "phone", "book", "mouse"]
  .map((item) => item.toUpperCase())
  .reduce((result, cappedItem) =>
    result ? result + " " + cappedItem : cappedItem
  );

console.log(cappedString); //? LIGHT BANANA PHONE BOOK MOUSE

// NOTE: USING JOIN
const cappedStringUsingJoin = ["light", "banana", "phone", "book", "mouse"]
  .map((item) => item.toUpperCase())
  .join(" ");

console.log(cappedStringUsingJoin); //? LIGHT BANANA PHONE BOOK MOUSE
