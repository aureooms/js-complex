'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fromarray = require('./fromarray');

var _fromarray2 = _interopRequireDefault(_fromarray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (kernel) {
  return function (_ref, _ref2) {
    var a = _ref.real,
        b = _ref.img;
    var c = _ref2.real,
        d = _ref2.img;
    return (0, _fromarray2.default)(kernel(a, b, c, d));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vb2JqZWN0L2NvcmUvYmluYXJ5LmpzIl0sIm5hbWVzIjpbImEiLCJyZWFsIiwiYiIsImltZyIsImMiLCJkIiwia2VybmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUNlO0FBQUEsU0FBVTtBQUFBLFFBQVdBLENBQVgsUUFBSUMsSUFBSjtBQUFBLFFBQXFCQyxDQUFyQixRQUFlQyxHQUFmO0FBQUEsUUFBb0NDLENBQXBDLFNBQTZCSCxJQUE3QjtBQUFBLFFBQThDSSxDQUE5QyxTQUF3Q0YsR0FBeEM7QUFBQSxXQUF3RCx5QkFBV0csT0FBUU4sQ0FBUixFQUFZRSxDQUFaLEVBQWdCRSxDQUFoQixFQUFvQkMsQ0FBcEIsQ0FBWCxDQUF4RDtBQUFBLEdBQVY7QUFBQSxDIiwiZmlsZSI6ImJpbmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcm9tYXJyYXkgZnJvbSAnLi9mcm9tYXJyYXknIDtcbmV4cG9ydCBkZWZhdWx0IGtlcm5lbCA9PiAoIHsgcmVhbCA6IGEgLCBpbWcgOiBiIH0gLCB7IHJlYWwgOiBjICwgaW1nIDogZCB9ICkgID0+IGZyb21hcnJheSgga2VybmVsKCBhICwgYiAsIGMgLCBkICkgKSA7XG4iXX0=