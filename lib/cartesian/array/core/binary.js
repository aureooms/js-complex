"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (kernel) {
  return function (_ref, _ref2) {
    var _ref4 = _slicedToArray(_ref, 2),
        a = _ref4[0],
        b = _ref4[1];

    var _ref3 = _slicedToArray(_ref2, 2),
        c = _ref3[0],
        d = _ref3[1];

    return kernel(a, b, c, d);
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vYXJyYXkvY29yZS9iaW5hcnkuanMiXSwibmFtZXMiOlsiYSIsImIiLCJjIiwiZCIsImtlcm5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBQ2U7QUFBQSxTQUFVO0FBQUE7QUFBQSxRQUFJQSxDQUFKO0FBQUEsUUFBUUMsQ0FBUjs7QUFBQTtBQUFBLFFBQWdCQyxDQUFoQjtBQUFBLFFBQW9CQyxDQUFwQjs7QUFBQSxXQUE4QkMsT0FBUUosQ0FBUixFQUFZQyxDQUFaLEVBQWdCQyxDQUFoQixFQUFvQkMsQ0FBcEIsQ0FBOUI7QUFBQSxHQUFWO0FBQUEsQyIsImZpbGUiOiJiaW5hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGtlcm5lbCA9PiAoIFsgYSAsIGIgXSAsIFsgYyAsIGQgXSApICA9PiBrZXJuZWwoIGEgLCBiICwgYyAsIGQgKSA7XG5cbiJdfQ==