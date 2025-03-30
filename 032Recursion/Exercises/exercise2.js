/*
    1. Create a function called "flatten" that will take
       a single Array as an argument

    2. The function will return a flattened version of the Array
       no matter the nested levels

    3. Solve this using recursion

    Examples:    
        console.log(flatten([1, 2, 3]));
        // [ 1, 2, 3 ]

        console.log(flatten([1, 2, 3, [1, 2, 3]]));
        // [ 1, 2, 3, 1, 2, 3 ]

        console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
        // [1, 4, 5, 6, 7,8, 9, 2, 3]

    HINT: Look up "how to check if something is an Array in js"
          on Google/MDN
    HINT2: What are the base-cases and what do we want to return?
*/

const flatten = (arr) => {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      // If the item is an array, recursively flatten it and concatenate
      result = result.concat(flatten(item));
    } else {
      // Otherwise, add the item to the result array
      result.push(item);
    }
  }

  return result;
};

// Test cases
console.log(flatten([1, 2, 3])); // [1, 2, 3]
console.log(flatten([1, 2, 3, [1, 2, 3]])); // [1, 2, 3, 1, 2, 3]
console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3])); // [1, 4, 5, 6, 7, 8, 9, 2, 3]
console.log(flatten([[1, 2], [3, [4, [5, 6]]], 7])); // [1, 2, 3, 4, 5, 6, 7]

const flatten2 = (arr) => {
  // Base case: if the array is empty, return an empty array
  if (arr.length === 0) return [];

  // Extract the first element
  const first = arr[0];

  // Recursive case
  if (Array.isArray(first)) {
    // If the first element is an array, flatten it recursively and concatenate with the rest
    return [...flatten2(first), ...flatten2(arr.slice(1))];
  } else {
    // If it's not an array, keep it and process the rest
    return [first, ...flatten2(arr.slice(1))];
  }
};

// Test cases
console.log(flatten2([1, 2, 3])); // [1, 2, 3]
console.log(flatten2([1, 2, 3, [1, 2, 3]])); // [1, 2, 3, 1, 2, 3]
console.log(flatten2([1, [4, 5, 6, [7, 8, 9]], 2, 3])); // [1, 4, 5, 6, 7, 8, 9, 2, 3]
console.log(flatten2([[1, 2], [3, [4, [5, 6]]], 7])); // [1, 2, 3, 4, 5, 6, 7]
