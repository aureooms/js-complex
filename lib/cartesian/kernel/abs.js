"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Computes the absolute value (or modulus or magnitude) of the complex number a + bi.
 */

exports.default = function (sqrt, pow2, add) {
  return function (a, b) {
    return sqrt(add(pow2(a), pow2(b)));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2Ficy5qcyJdLCJuYW1lcyI6WyJzcXJ0IiwicG93MiIsImFkZCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztrQkFJZSxVQUFFQSxJQUFGLEVBQVNDLElBQVQsRUFBZ0JDLEdBQWhCO0FBQUEsU0FBeUIsVUFBRUMsQ0FBRixFQUFNQyxDQUFOO0FBQUEsV0FBY0osS0FBTUUsSUFBS0QsS0FBTUUsQ0FBTixDQUFMLEVBQWlCRixLQUFNRyxDQUFOLENBQWpCLENBQU4sQ0FBZDtBQUFBLEdBQXpCO0FBQUEsQyIsImZpbGUiOiJhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQ29tcHV0ZXMgdGhlIGFic29sdXRlIHZhbHVlIChvciBtb2R1bHVzIG9yIG1hZ25pdHVkZSkgb2YgdGhlIGNvbXBsZXggbnVtYmVyIGEgKyBiaS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoIHNxcnQgLCBwb3cyICwgYWRkICkgPT4gKCBhICwgYiApICA9PiBzcXJ0KCBhZGQoIHBvdzIoIGEgKSAsIHBvdzIoIGIgKSApICkgO1xuXG4iXX0=