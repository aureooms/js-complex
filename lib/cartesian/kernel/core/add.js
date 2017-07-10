"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Addition algorithm.
 *
 * Returns the result of (a + bi) + (c + di).
 */

exports.default = function (base) {
  return function (a, b, c, d) {
    return [base(a, c), base(b, d)];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvYWRkLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwiYyIsImQiLCJiYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7Ozs7O2tCQU1lO0FBQUEsU0FBUSxVQUFFQSxDQUFGLEVBQU1DLENBQU4sRUFBVUMsQ0FBVixFQUFjQyxDQUFkO0FBQUEsV0FBc0IsQ0FBRUMsS0FBTUosQ0FBTixFQUFVRSxDQUFWLENBQUYsRUFBa0JFLEtBQU1ILENBQU4sRUFBVUUsQ0FBVixDQUFsQixDQUF0QjtBQUFBLEdBQVI7QUFBQSxDIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBBZGRpdGlvbiBhbGdvcml0aG0uXG4gKlxuICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIChhICsgYmkpICsgKGMgKyBkaSkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgYmFzZSA9PiAoIGEgLCBiICwgYyAsIGQgKSAgPT4gWyBiYXNlKCBhICwgYyApICwgYmFzZSggYiAsIGQgKSBdIDtcblxuIl19