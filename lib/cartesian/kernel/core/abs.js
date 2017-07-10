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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvYWJzLmpzIl0sIm5hbWVzIjpbInNxcnQiLCJwb3cyIiwiYWRkIiwiYSIsImIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O2tCQUllLFVBQUVBLElBQUYsRUFBU0MsSUFBVCxFQUFnQkMsR0FBaEI7QUFBQSxTQUF5QixVQUFFQyxDQUFGLEVBQU1DLENBQU47QUFBQSxXQUFjSixLQUFNRSxJQUFLRCxLQUFNRSxDQUFOLENBQUwsRUFBaUJGLEtBQU1HLENBQU4sQ0FBakIsQ0FBTixDQUFkO0FBQUEsR0FBekI7QUFBQSxDIiwiZmlsZSI6ImFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYWJzb2x1dGUgdmFsdWUgKG9yIG1vZHVsdXMgb3IgbWFnbml0dWRlKSBvZiB0aGUgY29tcGxleCBudW1iZXIgYSArIGJpLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0ICggc3FydCAsIHBvdzIgLCBhZGQgKSA9PiAoIGEgLCBiICkgID0+IHNxcnQoIGFkZCggcG93MiggYSApICwgcG93MiggYiApICkgKSA7XG5cbiJdfQ==