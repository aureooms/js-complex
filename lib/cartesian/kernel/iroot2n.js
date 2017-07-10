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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2lyb290Mm4uanMiXSwibmFtZXMiOlsiY29zIiwic2luIiwicGkiLCJkaXYybiIsIm5lZyIsImwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO2tCQUNlLFVBQUVBLEdBQUYsRUFBUUMsR0FBUixFQUFjQyxFQUFkLEVBQW1CQyxLQUFuQixFQUEyQkMsR0FBM0I7QUFBQSxTQUFvQztBQUFBLFdBQU0sQ0FBRUosSUFBS0csTUFBT0QsRUFBUCxFQUFZRyxJQUFJLENBQWhCLENBQUwsQ0FBRixFQUErQkQsSUFBS0gsSUFBS0UsTUFBT0QsRUFBUCxFQUFZRyxJQUFJLENBQWhCLENBQUwsQ0FBTCxDQUEvQixDQUFOO0FBQUEsR0FBcEM7QUFBQSxDIiwiZmlsZSI6Imlyb290Mm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGwgPiAwXG5leHBvcnQgZGVmYXVsdCAoIGNvcyAsIHNpbiAsIHBpICwgZGl2Mm4gLCBuZWcgKSA9PiBsICA9PiBbIGNvcyggZGl2Mm4oIHBpICwgbCAtIDEgKSApICwgbmVnKCBzaW4oIGRpdjJuKCBwaSAsIGwgLSAxICkgKSApIF0gO1xuXG5cblxuIl19