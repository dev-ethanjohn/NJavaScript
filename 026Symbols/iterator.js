const character = {
  name: "ethan",
  class: "axe",
  quote: "I'll never do it!",
  __admin__: false,
  // the value must be an iterator
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// Object is not an iterator, but we can loop over a symbol using a generator (which is an iterator)
for (const value of character) {
  console.log(value);
  // 1
  // 2
  // 3
}

// NOTE: By defining a generator function under the Symbol.iterator property, you've effectively made the character object iterable — meaning it can be used in a for...of loop.

const dataLoader = {
  data: [10, 20, 30, 40, 50],
  [Symbol.iterator]: function* () {
    for (const item of this.data) {
      yield item;
    }
  },
};

for (const value of dataLoader) {
  console.log(value);
}
// 10
// 20
// 30
// 40
// 50
