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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvcm9vdDJuLmpzIl0sIm5hbWVzIjpbImNvcyIsInNpbiIsInBpIiwiZGl2Mm4iLCJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtrQkFDZSxVQUFFQSxHQUFGLEVBQVFDLEdBQVIsRUFBY0MsRUFBZCxFQUFtQkMsS0FBbkI7QUFBQSxTQUE4QjtBQUFBLFdBQU0sQ0FBRUgsSUFBS0csTUFBT0QsRUFBUCxFQUFZRSxJQUFJLENBQWhCLENBQUwsQ0FBRixFQUErQkgsSUFBS0UsTUFBT0QsRUFBUCxFQUFZRSxJQUFJLENBQWhCLENBQUwsQ0FBL0IsQ0FBTjtBQUFBLEdBQTlCO0FBQUEsQyIsImZpbGUiOiJyb290Mm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGwgPiAwXG5leHBvcnQgZGVmYXVsdCAoIGNvcyAsIHNpbiAsIHBpICwgZGl2Mm4gKSA9PiBsICA9PiBbIGNvcyggZGl2Mm4oIHBpICwgbCAtIDEgKSApICwgc2luKCBkaXYybiggcGkgLCBsIC0gMSApICkgXSA7XG5cblxuXG4iXX0=