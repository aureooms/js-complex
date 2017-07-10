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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vb2JqZWN0L2NvcmUvcGFyc2UuanMiXSwibmFtZXMiOlsicyIsImkiLCJqIiwia2VybmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUNlO0FBQUEsU0FBVSxVQUFFQSxDQUFGLEVBQU1DLENBQU4sRUFBVUMsQ0FBVjtBQUFBLFdBQWtCLHlCQUFXQyxPQUFRSCxDQUFSLEVBQVlDLENBQVosRUFBZ0JDLENBQWhCLENBQVgsQ0FBbEI7QUFBQSxHQUFWO0FBQUEsQyIsImZpbGUiOiJwYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcm9tYXJyYXkgZnJvbSAnLi9mcm9tYXJyYXknIDtcbmV4cG9ydCBkZWZhdWx0IGtlcm5lbCA9PiAoIHMgLCBpICwgaiApICA9PiBmcm9tYXJyYXkoIGtlcm5lbCggcyAsIGkgLCBqICkgKSA7XG4iXX0=