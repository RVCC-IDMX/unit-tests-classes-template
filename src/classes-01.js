/*
 * classes-01.js
 * Language: javascript
 * Test: tests/classes-01.test.js
 * Path: src/classes-01.js
 *
 * Create a polygon class
 *
 */
/*
 * Define a Polygon class that has the following properties:
 *  1) A constructor that takes an array of integer values describing
 *  the lengths of the polygon’s sides.
 *  2) A countSides() method that returns the number of sides.
 *  3) A perimeter() method that returns the polygon’s perimeter.
 *
 */

/**
 * Polygon class
 * @class Thermometer
 * @constructor Thermometer constructor function
 * @param {array} sides - array of integer values describing the lengths of the polygon’s sides
 */
 // write your code here
 class Polygon {
   constructor(sides) {
     // write your code here
   }
   countSides() {
     // write your code here
   }
   perimeter() {
     // write your code here
   }
 }

/*
 * Define a Triangle class that has the following properties:
 *  1) Inherits (extends) from the Polygon class.
 *  2) Has countSides() and perimeter() methods from Polygon.
 *  3) Has an isValid() method that returns true if the triangle
 *  can be formed from the lengths of the sides. Otherwise, it
 *  returns false.
 *
 * The sum of the lengths of any two sides of a triangle is greater
 *  than the length of the third side.
 *  If you take the three sides of a triangle and add them in pairs,
 *  the sum is greater than (not equal to) the third side. If that is
 *  not true, then it is not possible to construct a triangle with
 *  the given side lengths.
 *
 */

/**
 * Triangle class
 * @class Triangle class extends Polygon
 * @constructor Triangle constructor function
 * @param {array} sides
 */
// write your code here
class Triangle extends Polygon {
  constructor(sides) {
     // write your code here
  }
  isValid() {
     // write your code here
  }


}

/*
 * Define a Square class that has the following properties:
 *  1) Inherits (extends) from the Polygon class.
 *  2) Has countSides() and perimeter() methods from Polygon.
 *  3) Has an isValid() method that returns true if the square
 *  can be formed from the lengths of the sides. Otherwise, it
 *  returns false.
 *  4) Has a sideLength() method that returns the length of a side.
 *  5) Has an area() method that returns the area of the square.
 *
 * The sum of the lengths of any two sides of a square is equal
 *  to the length of the third side.
 */

  /**
    * Square class
    * @class Square class extends Polygon
    * @constructor Square constructor function
    * @param {array} sides
    */
// write your code here

class Square extends Polygon {
  constructor(sides) {
     // write your code here
  }
  isValid() {
     // write your code here
  }
  sideLength() {
     // write your code here
  }
  area() {
     // write your code here
  }
}



module.exports = {
  Polygon,
  Triangle,
  Square,
};
