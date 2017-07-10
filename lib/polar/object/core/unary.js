"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (kernel) {
  return function (_ref) {
    var a = _ref.rho,
        b = _ref.theta;
    return fromarray(kernel(a, b));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wb2xhci9vYmplY3QvY29yZS91bmFyeS5qcyJdLCJuYW1lcyI6WyJhIiwicmhvIiwiYiIsInRoZXRhIiwiZnJvbWFycmF5Iiwia2VybmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQ2U7QUFBQSxTQUFVO0FBQUEsUUFBVUEsQ0FBVixRQUFJQyxHQUFKO0FBQUEsUUFBc0JDLENBQXRCLFFBQWNDLEtBQWQ7QUFBQSxXQUFnQ0MsVUFBV0MsT0FBUUwsQ0FBUixFQUFZRSxDQUFaLENBQVgsQ0FBaEM7QUFBQSxHQUFWO0FBQUEsQyIsImZpbGUiOiJ1bmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQga2VybmVsID0+ICggeyByaG8gOiBhICwgdGhldGEgOiBiIH0gKSAgPT4gZnJvbWFycmF5KCBrZXJuZWwoIGEgLCBiICkgKSA7XG5cbiJdfQ==