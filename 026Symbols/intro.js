// Symbols are guaranteed unique primitive types
// Hidden from most Object/Class iterations (weak encapsulation / infomation hiding)
// able to be shared/registered globally
const mySymbol = Symbol();
const namedSymbol = Symbol("monkey");

console.log(mySymbol);
console.log(namedSymbol);
// Symbol();
// Symbol(monkey);

console.log(Symbol() === mySymbol); //?false
console.log(Symbol("monkey") === namedSymbol); //?false
console.log(mySymbol === mySymbol); //?true
console.log(mySymbol.description); //? undefined
console.log(namedSymbol); //? Symbol(monkey)
