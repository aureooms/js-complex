"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Subtraction algorithm
 *
 * Returns the result of (a + bi) - (c + di).
 */

exports.default = function (base) {
  return function (a, b, c, d) {
    return [base(a, c), base(b, d)];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvc3ViLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwiYyIsImQiLCJiYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7Ozs7O2tCQU1lO0FBQUEsU0FBUSxVQUFFQSxDQUFGLEVBQU1DLENBQU4sRUFBVUMsQ0FBVixFQUFjQyxDQUFkO0FBQUEsV0FBc0IsQ0FBRUMsS0FBTUosQ0FBTixFQUFVRSxDQUFWLENBQUYsRUFBa0JFLEtBQU1ILENBQU4sRUFBVUUsQ0FBVixDQUFsQixDQUF0QjtBQUFBLEdBQVI7QUFBQSxDIiwiZmlsZSI6InN1Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBTdWJ0cmFjdGlvbiBhbGdvcml0aG1cbiAqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgKGEgKyBiaSkgLSAoYyArIGRpKS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlID0+ICggYSAsIGIgLCBjICwgZCApICA9PiBbIGJhc2UoIGEgLCBjICkgLCBiYXNlKCBiICwgZCApIF0gO1xuXG4iXX0=