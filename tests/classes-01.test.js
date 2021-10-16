/* eslint-disable no-unused-vars */
const {
  Polygon,
  Triangle,
  Square,
} = require('../src/classes-01');

test('polygon', () => {
  const threeSidedPolygon = new Polygon([3, 4, 5]);
  expect(typeof threeSidedPolygon).toBe('object');
  expect(threeSidedPolygon.sides).toEqual([3, 4, 5]);
  expect(threeSidedPolygon.countSides()).toEqual([3, 4, 5]);
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
