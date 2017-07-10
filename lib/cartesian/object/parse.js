'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fromarray = require('./fromarray');

var _fromarray2 = _interopRequireDefault(_fromarray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (kernel) {
  return function (s, i, j) {
    return (0, _fromarray2.default)(kernel(s, i, j));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vb2JqZWN0L3BhcnNlLmpzIl0sIm5hbWVzIjpbInMiLCJpIiwiaiIsImtlcm5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFDZTtBQUFBLFNBQVUsVUFBRUEsQ0FBRixFQUFNQyxDQUFOLEVBQVVDLENBQVY7QUFBQSxXQUFrQix5QkFBV0MsT0FBUUgsQ0FBUixFQUFZQyxDQUFaLEVBQWdCQyxDQUFoQixDQUFYLENBQWxCO0FBQUEsR0FBVjtBQUFBLEMiLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbWFycmF5IGZyb20gJy4vZnJvbWFycmF5JyA7XG5leHBvcnQgZGVmYXVsdCBrZXJuZWwgPT4gKCBzICwgaSAsIGogKSAgPT4gZnJvbWFycmF5KCBrZXJuZWwoIHMgLCBpICwgaiApICkgO1xuIl19