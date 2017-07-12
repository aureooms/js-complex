'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compile = require('./cartesian/kernel/compile');

var _compile2 = _interopRequireDefault(_compile);

var _COMPLEX_DEFAULT_DISPLAY = require('./COMPLEX_DEFAULT_DISPLAY');

var _COMPLEX_DEFAULT_DISPLAY2 = _interopRequireDefault(_COMPLEX_DEFAULT_DISPLAY);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = _COMPLEX_DEFAULT_DISPLAY2.default.model,
    symbol = _COMPLEX_DEFAULT_DISPLAY2.default.symbol;
exports.default = (0, _compile2.default)(model, symbol);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DT01QTEVYX0RFRkFVTFRfQ0FSVEVTSUFOX0tFUk5FTC5qcyJdLCJuYW1lcyI6WyJtb2RlbCIsInN5bWJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRVFBLEsscUNBQUFBLEs7SUFBUUMsTSxxQ0FBQUEsTTtrQkFFRCx1QkFBU0QsS0FBVCxFQUFpQkMsTUFBakIsQyIsImZpbGUiOiJDT01QTEVYX0RFRkFVTFRfQ0FSVEVTSUFOX0tFUk5FTC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21waWxlIGZyb20gJy4vY2FydGVzaWFuL2tlcm5lbC9jb21waWxlJyA7XG5pbXBvcnQgQ09NUExFWF9ERUZBVUxUX0RJU1BMQVkgZnJvbSAnLi9DT01QTEVYX0RFRkFVTFRfRElTUExBWScgO1xuXG5jb25zdCB7IG1vZGVsICwgc3ltYm9sIH0gPSBDT01QTEVYX0RFRkFVTFRfRElTUExBWSA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBpbGUoIG1vZGVsICwgc3ltYm9sICkgO1xuIl19