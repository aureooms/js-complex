"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (kernel) {
  return function (_ref, _ref2) {
    var a = _ref.rho,
        b = _ref.theta;
    var c = _ref2.rho,
        d = _ref2.theta;
    return fromarray(kernel(a, b, c, d));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb2xhci9vYmplY3QvYmluYXJ5LmpzIl0sIm5hbWVzIjpbImEiLCJyaG8iLCJiIiwidGhldGEiLCJjIiwiZCIsImZyb21hcnJheSIsImtlcm5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUNlO0FBQUEsU0FBVTtBQUFBLFFBQVVBLENBQVYsUUFBSUMsR0FBSjtBQUFBLFFBQXNCQyxDQUF0QixRQUFjQyxLQUFkO0FBQUEsUUFBb0NDLENBQXBDLFNBQThCSCxHQUE5QjtBQUFBLFFBQWdESSxDQUFoRCxTQUF3Q0YsS0FBeEM7QUFBQSxXQUEwREcsVUFBV0MsT0FBUVAsQ0FBUixFQUFZRSxDQUFaLEVBQWdCRSxDQUFoQixFQUFvQkMsQ0FBcEIsQ0FBWCxDQUExRDtBQUFBLEdBQVY7QUFBQSxDIiwiZmlsZSI6ImJpbmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQga2VybmVsID0+ICggeyByaG8gOiBhICwgdGhldGEgOiBiIH0gLCB7IHJobyA6IGMgLCB0aGV0YSA6IGQgfSApICA9PiBmcm9tYXJyYXkoIGtlcm5lbCggYSAsIGIgLCBjICwgZCApICkgO1xuXG4iXX0=