/*
 * classes-02.js
 * Language: javascript
 * Test: tests/classes-02.test.js
 * Path: src/classes-02.js
 *
 * Create a Thermometer class
 * Using getters and setters
 * getters => access properties
 * setters => change properties
 *
 */

/**
 * @class Thermometer
 * An instance of this class represents a temperature that
 * is represented in Celsius (store it in a private property)
 * The other units are calculated from the stored Celsius temperature
 */
// write your code here
class Thermometer {
     // write your code here

  /**
   * @constructor
   * @param {*} celsius
   */
  constructor(celsius) {
     // write your code here
  }

  /**
   * @method toString
   * @param {string} unit - 'C', 'K', 'F'
   * @returns {string} - the temperature in the specified unit
   * Assuming an instance of this class has 0°C
   * toString('C') outputs '0°C'
   * toString('K') outputs '273.15K'
   * toString('F') outputs '32°C'
   *
   */
  toString(format) {
     // write your code here
  }

  set celsius(tempCelsius) {
     // write your code here
  }

  get celsius() {
     // write your code here
  }

  get kelvin() {
     // write your code here
  }

  set kelvin(tempKelvin) {
     // write your code here
  }

  get fahrenheit() {
     // write your code here
  }

  set fahrenheit(tempFahrenheit) {
     // write your code here
  }

}

console.log(' \nSet the temp to 0°C');
const t0 = new Thermometer(0);
console.log(t0.toString('C'));
console.log(t0.toString('K'));
console.log(t0.toString('F'));

console.log(' \nNow change the temperature to 212 fahrenheit');
t0.fahrenheit = 212;

console.log(`The typeof t0.celsius is a ${typeof t0.celsius} - ${t0.toString('C')}`)
console.log(`The typeof t0.kelvin is a ${typeof t0.kelvin} - ${t0.toString('K')}`)
console.log(`The typeof t0.fahrenheit is a ${typeof t0.fahrenheit} - ${t0.toString('F')}`)

console.log(' \nNow change the temperature again to 640 kelvin');
t0.kelvin = 640;
console.log(`The typeof t0.celsius is a ${typeof t0.celsius} - ${t0.toString('C')}`)
console.log(`The typeof t0.kelvin is a ${typeof t0.kelvin} - ${t0.toString('K')}`)
console.log(`The typeof t0.fahrenheit is a ${typeof t0.fahrenheit} - ${t0.toString('F')}`)

module.exports = {
Thermometer
};
