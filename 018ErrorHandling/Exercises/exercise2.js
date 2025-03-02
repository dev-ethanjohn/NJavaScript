/*
    1. Assign the following object to a variable called "user":
        { name: "Misha", age: 22, settings: {colour: "blue"} }
    2. Log out "Creating user..."
    3. Try to log out: user.profile.colour
    4. Log out "User created!"
    5. Run the code and observe the behaviour

    6. How would you fix this code (without changing steps 1-4
       or the user Object)? Also, add any appropriate logging 
       you feel makes sense.
*/
const user = {
  name: "Misha",
  age: 22,
  settings: { colour: "blue" },
  //   profile: { colour: "red" },
};

console.log("Creating user...");

console.log("User colour:", user.profile?.colour ?? "Default colour");

try {
  // NOTE: THE try block should only wrap the *RISKY code -> Encapsualtion
  if (!user.profile) {
    throw new Error("User profile is missing!");
  }
  console.log(user.profile.colour); // ❌ This will still cause an error
} catch (error) {
  console.error("Caught error:", error.message); //? Caught error: User profile is missing!
}

/*
Creating user...
User colour: Default colour
Caught error: User profile is missing!
*/
