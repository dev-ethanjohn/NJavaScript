// NOTE
/* ! JS FALSY VALUES
? false
? 0
? ""
? null
? undefined
? NaN (not a number)
*/

console.log("-----&&------");

// if its true on the left, the 2nd will be assigned.
let test1 = true && "bananas";
// if left is falsy, no need to check the 2nd, and immediately short circuits the falsy as assigned value
let test2 = false && "oranges";
let test3 = 0 && "oranges";

console.log(test1); // bananas
console.log(test2); // false
console.log(test3); // 0

console.log("-----||------");

// Always return the 1st truthy value
// or the last falsy value if all are falsy.
let test4 = true || "bananas";
let test5 = false || "oranges";
let test6 = 0 || "oranges";

console.log(test4); // true
console.log(test5); // oranges
console.log(test6); // oranges

console.log("-----??------");
//NOTE: it allows `0` and `""` to be truthy
// NOTE: ONLY check for the `null` or `undefined`.
let test7 = true ?? "bananas";
let test8 = false ?? "oranges";
let test9 = 0 ?? "oranges";

let test10 = undefined ?? 0;

console.log(test7); // true
console.log(test8); // false
console.log(test9); // 0
console.log(test10); // 0
