/* eslint-disable no-unused-vars */
const { Thermometer } = require('../src/thermometer');

test('Thermometer constructor', () => {
  const t0 = new Thermometer(0);
  expect(t0.celsius()).toBe(0);
});
