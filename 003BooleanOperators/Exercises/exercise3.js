/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    This is a very challenging problem set. Once you see the results,
    try to see if you can see WHY it works that way. This will come in
    very handy in the future.
*/

true && console.log("moo"); //"moo"
// NOTE: no output because we aren't assignt the return value to a variable or constant
false && console.log("moo moo?"); //[no output]
false || console.log("hello friend"); //"hello friend"
false || console.log("bye friend"); //bye friend
