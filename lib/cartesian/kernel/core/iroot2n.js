"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// l > 0
exports.default = function (cos, sin, pi, div2n, neg) {
  return function (l) {
    return [cos(div2n(pi, l - 1)), neg(sin(div2n(pi, l - 1)))];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvaXJvb3Qybi5qcyJdLCJuYW1lcyI6WyJjb3MiLCJzaW4iLCJwaSIsImRpdjJuIiwibmVnIiwibCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7a0JBQ2UsVUFBRUEsR0FBRixFQUFRQyxHQUFSLEVBQWNDLEVBQWQsRUFBbUJDLEtBQW5CLEVBQTJCQyxHQUEzQjtBQUFBLFNBQW9DO0FBQUEsV0FBTSxDQUFFSixJQUFLRyxNQUFPRCxFQUFQLEVBQVlHLElBQUksQ0FBaEIsQ0FBTCxDQUFGLEVBQStCRCxJQUFLSCxJQUFLRSxNQUFPRCxFQUFQLEVBQVlHLElBQUksQ0FBaEIsQ0FBTCxDQUFMLENBQS9CLENBQU47QUFBQSxHQUFwQztBQUFBLEMiLCJmaWxlIjoiaXJvb3Qybi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gbCA+IDBcbmV4cG9ydCBkZWZhdWx0ICggY29zICwgc2luICwgcGkgLCBkaXYybiAsIG5lZyApID0+IGwgID0+IFsgY29zKCBkaXYybiggcGkgLCBsIC0gMSApICkgLCBuZWcoIHNpbiggZGl2Mm4oIHBpICwgbCAtIDEgKSApICkgXSA7XG5cblxuXG4iXX0=