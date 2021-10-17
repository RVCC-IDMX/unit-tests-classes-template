/* eslint-disable no-unused-vars */
const { Polygon } = require('../src/polygon');
const { Triangle } = require('../src/triangle');
const { Rectangle } = require('../src/rectangle');
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
  const triangle = new Triangle([3, 4, 5]);
  expect(typeof triangle).toBe('object');
  expect(triangle.perimeter()).toBe(12);
  expect(triangle.isValid()).toBe(true);
  //
  const t0 = new Triangle([1, 4, 5]);
  expect(t0.isValid()).toBe(false);
});

test('Rectangle', () => {
  const rectangle = new Rectangle(3, 4);
  expect(typeof rectangle).toBe('object');
  expect(rectangle.perimeter()).toBe(14);
});

test('Square', () => {
  const square1 = new Square(12);
  expect(typeof square1).toBe('object');
  expect(square1.perimeter()).toBe(48);
  expect(square1.isValid()).toBe(true);
  expect(square1.area()).toBe(144);
  expect(square1.getSide()).toBe(12);
  //
  const square2 = new Square(0);
  expect(typeof square2).toBe('object');
  expect(square2.perimeter()).toBe(13);
  expect(square2.isValid()).toBe(false);
});
