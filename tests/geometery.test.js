/* eslint-disable no-unused-vars */
const { Polygon } = require('../src/polygon');
const { Triangle } = require('../src/triangle');
const { Square } = require('../src/square');

test('polygon', () => {
  const threeSidedPolygon = new Polygon([3, 4, 5]);
  expect(typeof threeSidedPolygon).toBe('object');
  expect(threeSidedPolygon.sides).toEqual([3, 4, 5]);
  expect(threeSidedPolygon.count()).toEqual([3, 4, 5]);
  expect(threeSidedPolygon.perimeter()).toBe(12);
  //
  const fiveSidedPolygon = new Polygon([3, 4, 5, 6, 7]);
  expect(typeof fiveSidedPolygon).toBe('object');
  expect(typeof fiveSidedPolygon.perimeter()).toBe('number');
  expect(fiveSidedPolygon.perimeter()).toBe(25);
});

test('Triangle', () => {
  const triangle = new Triangle(3, 4, 5);
  const t0 = new Triangle(1, 4, 5);
  expect(typeof triangle).toBe('object');
  expect(triangle.perimeter()).toBe(12);
  expect(triangle.isValid()).toBe(true);
  expect(t0.isValid()).toBe(false);
});

test('Square', () => {
  const square1 = new Square([3, 3, 3, 3]);
  expect(typeof square1).toBe('object');
  expect(square1.perimeter()).toBe(12);
  expect(square1.isValid()).toBe(true);
  //
  const square2 = new Square([3, 3, 3, 4]);
  expect(typeof square2).toBe('object');
  expect(square2.perimeter()).toBe(13);
  expect(square2.isValid()).toBe(false);
});
