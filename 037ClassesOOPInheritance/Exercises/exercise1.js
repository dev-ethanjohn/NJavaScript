/*
    1. Create a class called "Shape" whose constructor
       takes one parameter:
       - colour
       Assign "colour" to the instance of Shape with a 
       default value of "Transparent"
       Add a "type" property to "this" with a default
       value of "Shape"

    2. Add a method to "Shape" called "describe" that
       will log out the following to the console:
       "A ${this.colour} ${this.type}"

    3. Create a class called "Square" whose constructor
       takes 2 parameters (Square has to extend Shape):
       - colour
       - sideLength
       Call the super constructor with "colour"
       Assign "sideLength" to the instance of "Square"
       Assign "Square" to the "type" property

    4. Add an "area" method to "Square" that will calculate
       and return the total area of the square.
       (Area of a square is: sideLength * sideLength)
    
    5. Create a class called "Rectangle" whose constructor
       takes 3 parameters (Rectangle has to extend Shape):
       - colour
       - width
       - height
       Call the super constructor with "colour"
       Assign all of these to the instance of "Rectangle"
       Assign "Rectangle" to the "type" property

    6. Add an "area" method to "Rectangle" that will calculate
       and return the total area of the square.
       (Area of a rectangle is: width * height)

    7. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       for ( const shape of [square, rectangle] ) shape.describe();
       // A blue square
       // A red rectangle
*/

//  1. Create a class called "Shape" whose constructor
//     takes one parameter:
//     - colour
//     Assign "colour" to the instance of Shape with a
//     default value of "Transparent"
//     Add a "type" property to "this" with a default
//     value of "Shape"

// The constructor is simply a function that initializes an instance of the class,

class Shape {
  // less flexible; unless is meant to be constant for all instances
  //   type = "Shape"; //*class field
  constructor(colour = "Transparent") {
    this.colour = colour;
    this.type = "Shape"; //* if subclasses need to modify type
  }

  describe() {
    console.log(`A ${this.colour} ${this.type}`);
  }
}

//NOTE: Why colour is in the parameter but type is in the constructor body?
//* colour is in the parameter → Because each instance is expected to have a different colour, and it makes sense for the user to define it when creating an instance.
//* type is in the constructor body → Because subclasses will override it, and we don’t want users to pass it manually every time.

class Square extends Shape {
  constructor(colour, sideLength) {
    super(colour);
    this.sideLength = sideLength;
    this.type = "Square"; //*reassigned
  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(colour, width, height) {
    super(colour);
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
  }
  area() {
    return this.width * this.height;
  }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
console.log(square.area()); //? 25
console.log(rectangle.area()); //? 30

for (const shape of [square, rectangle]) shape.describe();
// A blue Square
// A red Rectangle

const shapes = [square, rectangle];
shapes.forEach((shape) => shape.describe());
// A blue Square
// A red Rectangle
