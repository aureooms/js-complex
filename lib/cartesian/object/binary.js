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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vb2JqZWN0L2JpbmFyeS5qcyJdLCJuYW1lcyI6WyJhIiwicmVhbCIsImIiLCJpbWciLCJjIiwiZCIsImtlcm5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFDZTtBQUFBLFNBQVU7QUFBQSxRQUFXQSxDQUFYLFFBQUlDLElBQUo7QUFBQSxRQUFxQkMsQ0FBckIsUUFBZUMsR0FBZjtBQUFBLFFBQW9DQyxDQUFwQyxTQUE2QkgsSUFBN0I7QUFBQSxRQUE4Q0ksQ0FBOUMsU0FBd0NGLEdBQXhDO0FBQUEsV0FBd0QseUJBQVdHLE9BQVFOLENBQVIsRUFBWUUsQ0FBWixFQUFnQkUsQ0FBaEIsRUFBb0JDLENBQXBCLENBQVgsQ0FBeEQ7QUFBQSxHQUFWO0FBQUEsQyIsImZpbGUiOiJiaW5hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbWFycmF5IGZyb20gJy4vZnJvbWFycmF5JyA7XG5leHBvcnQgZGVmYXVsdCBrZXJuZWwgPT4gKCB7IHJlYWwgOiBhICwgaW1nIDogYiB9ICwgeyByZWFsIDogYyAsIGltZyA6IGQgfSApICA9PiBmcm9tYXJyYXkoIGtlcm5lbCggYSAsIGIgLCBjICwgZCApICkgO1xuIl19