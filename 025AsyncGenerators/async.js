const asyncGenerator = async function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const asyncGeneratorObject = asyncGenerator();

console.log(asyncGenerator);
console.log(asyncGeneratorObject);

const asyncGeneratorExecutor = async () => {
  for await (const promise of asyncGeneratorObject) {
    console.log(promise);
  }
};

asyncGeneratorExecutor();

// [AsyncGeneratorFunction: asyncGenerator]
// Object [AsyncGenerator] {}
// 1
