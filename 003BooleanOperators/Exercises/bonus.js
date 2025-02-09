/*
    First, lookup how logical AND, OR and NULLISH assignment work
    using Google. Then try the following examples.

    What would each of the following variables evaluate to:

    1. let username = "";
       username &&= "tiger";

    2. let vip = 0;
       vip ||= 3;

    3. let loggedIn = null;
       loggedIn ??= 0;

    Log each of the values out to see the results.

    This is very very challenging, it might take several tries
    or coming back to it in the future when it's more relevant.
*/

/*==== SOLUTION 1 ====*/
/* SHORTHAND */
let username = "";

/* LONGHAND */
if (username) {
  username = "tiger";
}

// NOTE:
/*
? &&= assigns only if the left side is truthy.
*/

console.log((username &&= "tiger"));
// ""

//IMPORTANT: OTHER EXAMPLES
username = 23;
console.log((username &&= "Twenty Three")); //Twenty Three

//
//
//
//
//
/*==== SOLUTION 2 ====*/
let vip = 0;
console.log((vip ||= 3)); //3

/* LONGHAND */
if (!vip) {
  vip = 3;
}

// NOTE:
/*
? ||= assigns only if the left side is falsy.
*/

//
//
//
//
//
/*==== SOLUTION 3 ====*/
let loggedIn = null;
console.log((loggedIn ??= 0)); //0

/* LONGHAND */
if (loggedIn === null || loggedIn === undefined) {
  loggedIn = 0;
}

// NOTE:
/*
? ??= assigns only if the left side is null or undefined.
*/
