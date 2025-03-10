/*
    1. Create a Map called "mexico" with the following entries:
        - id -> 24
        - name -> "Mexico"
        - capital -> "Mexico City"
        - neighbours -> ["USA", "Guatemala", "Belize"]

    2. Print out "mexico" to the terminal

    3. Change "id" to be 25

    4. Add "Honduras" to the list of neighbours to "mexico"
    
    5. Print out "mexico" to the terminal again
*/

const mexico = new Map();

mexico.set("id", 24);
mexico.set("name", "Mexico");
mexico.set("capital", "Mexico");
mexico.set("neighbors", ["USA", "Guatemala", "Belize"]);

console.log(mexico);

console.log("-----AFTER CHANGES----------");
/* ANSWER
Map(4) {
  'id' => 24,
  'name' => 'Mexico',
  'capital' => 'Mexico',
  'neighbors' => 24
}
*/

mexico.set("id", 25);
mexico.get("neighbors").push("Honduras");
console.log(mexico);
/* ANSWER
Map(4) {
  'id' => 25,
  'name' => 'Mexico',
  'capital' => 'Mexico',
  'neighbors' => [ 'USA', 'Guatemala', 'Belize', 'Honduras' ]
}
*/
