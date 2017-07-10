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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vb2JqZWN0L3VuYXJ5LmpzIl0sIm5hbWVzIjpbImEiLCJyZWFsIiwiYiIsImltZyIsImtlcm5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFDZTtBQUFBLFNBQVU7QUFBQSxRQUFXQSxDQUFYLFFBQUlDLElBQUo7QUFBQSxRQUFxQkMsQ0FBckIsUUFBZUMsR0FBZjtBQUFBLFdBQStCLHlCQUFXQyxPQUFRSixDQUFSLEVBQVlFLENBQVosQ0FBWCxDQUEvQjtBQUFBLEdBQVY7QUFBQSxDIiwiZmlsZSI6InVuYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyb21hcnJheSBmcm9tICcuL2Zyb21hcnJheScgO1xuZXhwb3J0IGRlZmF1bHQga2VybmVsID0+ICggeyByZWFsIDogYSAsIGltZyA6IGIgfSApICA9PiBmcm9tYXJyYXkoIGtlcm5lbCggYSAsIGIgKSApIDtcbiJdfQ==