/* eslint-disable no-useless-constructor */
/* eslint-disable getter-return */
/* eslint-disable class-methods-use-this */
/*
 * classes-02.js
 * Language: javascript
 * Test: tests/classes-02.test.js
 * Path: src/classes-02.js
 *
 * Create a Thermometer class
 * Using getters and setters - https://bit.ly/3DLVSuF (Javascript.info)
 * getters => access properties https://mzl.la/3p9oLwR
 * setters => change properties https://mzl.la/3vjPiZl
 * private class field => https://mzl.la/3vhtrC5
 *
 */

/**
 * @class Thermometer
 *
 * An instance of this class is a temperature that
 * is represented in celsius units (store it in a private class field)
 * The other unit values are calculated from the
 * stored celsius temperature
 *
 *
 */
class Thermometer {
  /**
   * @constructor
   * @param {number} celsius
   */
  constructor(celsius) {
    // write your code here
  }

  /*  -------- celsius -------------------*/
  /**
   * @getter celsius
   * @returns {number}
   * @public
   * @instance
   * @memberof Thermometer
   * @description
   * Returns the stored Celsius temperature
   * */
  get celsius() {
    // write your code here
  }

  /**
   * @setter celsius
   * @param {number} celsius
   * @public
   * @instance
   * @memberof Thermometer
   */
  set celsius(tempCelsius) {
    // write your code here
  }

  /*  -------- kelvin -------------------*/
  /**
   * @getter kelvin
   * @returns {number}
   * @public
   * @instance
   * @memberof Thermometer
   */
  get kelvin() {
    // write your code here
  }

  /**
   * @setter kelvin
   * @param {number} kelvin
   * @public
   * @instance
   * @memberof Thermometer
   */
  set kelvin(tempKelvin) {
    // write your code here
  }

  /*  -------- fahrenheit -------------------*/
  /**
   * @getter fahrenheit
   * @returns {number}
   * @public
   * @instance
   * @memberof Thermometer
   */
  get fahrenheit() {
    // write your code here
  }

  /**
   * @setter fahrenheit
   * @param {number} fahrenheit
   * @public
   * @instance
   * @memberof Thermometer
   * @description
   */
  set fahrenheit(tempFahrenheit) {
    // write your code here
  }

  /**
   * @method toString
   * @param {string} unit - 'C', 'K', 'F'
   * @returns {string} - the temperature in the specified unit
   * @public
   * @instance
   * @memberof Thermometer
   * @description
   * Example: Assuming an instance of this class is 0°C
   * toString('C') returns '0°C'
   * toString('K') returns '273.15K' - notice no ° symbol
   * toString('F') returns '32°C'
   * Any other value for unit returns the celsius value + '°C'
   *
   */
  toString(format) {
    // write your code here
  }
}

module.exports = {
  Thermometer,
};
