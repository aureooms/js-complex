"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (kernel) {
  return function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        a = _ref2[0],
        b = _ref2[1];

    return kernel(a, b);
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wb2xhci9hcnJheS9jb3JlL2ltZy5qcyJdLCJuYW1lcyI6WyJhIiwiYiIsImtlcm5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBQ2U7QUFBQSxTQUFVO0FBQUE7QUFBQSxRQUFJQSxDQUFKO0FBQUEsUUFBUUMsQ0FBUjs7QUFBQSxXQUFrQkMsT0FBUUYsQ0FBUixFQUFZQyxDQUFaLENBQWxCO0FBQUEsR0FBVjtBQUFBLEMiLCJmaWxlIjoiaW1nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBrZXJuZWwgPT4gKCBbIGEgLCBiIF0gKSAgPT4ga2VybmVsKCBhICwgYiApIDtcblxuIl19