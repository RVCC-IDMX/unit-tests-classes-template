/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable constructor-super */
/*
 * square.js
 * Language: javascript
 * Test: tests/square.test.js
 * Path: src/square.js
 *
 * Create a square class
 *
 */

/*
 * Define a Square class that has the following properties:
 *  1) Inherits (extends) from the Polygon class
 *  2) A constructor that accepts the square's side length
 *     a) calls  the super class constructor with a 4-element array
 *       using the square's side length
 *       https://mzl.la/2Z5y8my
 *     b) sets the private property called name to 'Square'
 *        https://mzl.la/3vhtrC5
 *  3) By default, has the methods inherited from Polygon
 *    a) count()
 *    b) perimeter()
 *    c) sayName()
 *  4) A method called isValid() that returns true
 *    if the length of the square's side is a number > 0
 *  5) A method called area() that returns the area of the square
 *
 * hint: as well as passing the 4-element array to
 * the super class constructor, you can store side in this class
 * to use with its methods - isValid() and area()
 */

/* --------------Important Step Below ------------ */
// import the polygon class using the CommonJS require() function
// See triangle.js for an example of how to import a file

/**
 * Square class
 * @class Square class extends Polygon
 * @constructor Square constructor function
 * @param {array} sides
 */

class Square extends Polygon {
  /**
   * @constructor
   * @param {number} side - the length of a side
   * must use super() to call the parent class constructor
   * hint: this constructor gets 1 number as an argument
   * and calls the parent class constructor with an array of  4 numbers
   */

  /**
   * @constructor
   * @param {number} side - the length of a side of the square
   */
  constructor(side) {
    // write your code here
  }

  /**
   * @method isValid
   * @returns {boolean} true if the side length is a number > 0
   */
  isValid() {
    // write your code here
  }

  /**
   * @method sideLength - return the side length
   * @returns {number} the side length
   */
  sideLength() {
    // write your code here
  }

  /**
   * @method area - return the area of the square
   * @returns {number} the area of the square if
   * the side length is a number > 0
   * otherwise return 0
   */
  area() {
    // write your code here
  }
}

module.exports = {
  Square,
};
