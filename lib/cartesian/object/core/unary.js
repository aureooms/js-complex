'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fromarray = require('./fromarray');

var _fromarray2 = _interopRequireDefault(_fromarray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (kernel) {
  return function (_ref) {
    var a = _ref.real,
        b = _ref.img;
    return (0, _fromarray2.default)(kernel(a, b));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vb2JqZWN0L2NvcmUvdW5hcnkuanMiXSwibmFtZXMiOlsiYSIsInJlYWwiLCJiIiwiaW1nIiwia2VybmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUNlO0FBQUEsU0FBVTtBQUFBLFFBQVdBLENBQVgsUUFBSUMsSUFBSjtBQUFBLFFBQXFCQyxDQUFyQixRQUFlQyxHQUFmO0FBQUEsV0FBK0IseUJBQVdDLE9BQVFKLENBQVIsRUFBWUUsQ0FBWixDQUFYLENBQS9CO0FBQUEsR0FBVjtBQUFBLEMiLCJmaWxlIjoidW5hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbWFycmF5IGZyb20gJy4vZnJvbWFycmF5JyA7XG5leHBvcnQgZGVmYXVsdCBrZXJuZWwgPT4gKCB7IHJlYWwgOiBhICwgaW1nIDogYiB9ICkgID0+IGZyb21hcnJheSgga2VybmVsKCBhICwgYiApICkgO1xuIl19