"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (base, add) {
  return function (a, b, c, d) {
    return [base(a, c), add(b, d)];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb2xhci9rZXJuZWwvbXVsLmpzIl0sIm5hbWVzIjpbImJhc2UiLCJhZGQiLCJhIiwiYiIsImMiLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQ2UsVUFBRUEsSUFBRixFQUFTQyxHQUFUO0FBQUEsU0FBa0IsVUFBRUMsQ0FBRixFQUFNQyxDQUFOLEVBQVVDLENBQVYsRUFBY0MsQ0FBZDtBQUFBLFdBQXNCLENBQUVMLEtBQU1FLENBQU4sRUFBVUUsQ0FBVixDQUFGLEVBQWtCSCxJQUFLRSxDQUFMLEVBQVNFLENBQVQsQ0FBbEIsQ0FBdEI7QUFBQSxHQUFsQjtBQUFBLEMiLCJmaWxlIjoibXVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCAoIGJhc2UgLCBhZGQgKSA9PiAoIGEgLCBiICwgYyAsIGQgKSAgPT4gWyBiYXNlKCBhICwgYyApICwgYWRkKCBiICwgZCApIF0gO1xuXG4iXX0=