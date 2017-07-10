"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// l > 0
exports.default = function (cos, sin, pi, div2n) {
  return function (l) {
    return [cos(div2n(pi, l - 1)), sin(div2n(pi, l - 1))];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL3Jvb3Qybi5qcyJdLCJuYW1lcyI6WyJjb3MiLCJzaW4iLCJwaSIsImRpdjJuIiwibCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7a0JBQ2UsVUFBRUEsR0FBRixFQUFRQyxHQUFSLEVBQWNDLEVBQWQsRUFBbUJDLEtBQW5CO0FBQUEsU0FBOEI7QUFBQSxXQUFNLENBQUVILElBQUtHLE1BQU9ELEVBQVAsRUFBWUUsSUFBSSxDQUFoQixDQUFMLENBQUYsRUFBK0JILElBQUtFLE1BQU9ELEVBQVAsRUFBWUUsSUFBSSxDQUFoQixDQUFMLENBQS9CLENBQU47QUFBQSxHQUE5QjtBQUFBLEMiLCJmaWxlIjoicm9vdDJuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBsID4gMFxuZXhwb3J0IGRlZmF1bHQgKCBjb3MgLCBzaW4gLCBwaSAsIGRpdjJuICkgPT4gbCAgPT4gWyBjb3MoIGRpdjJuKCBwaSAsIGwgLSAxICkgKSAsIHNpbiggZGl2Mm4oIHBpICwgbCAtIDEgKSApIF0gO1xuXG5cblxuIl19