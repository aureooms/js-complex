"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = compile;

var _core = require("./core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(_ref, symbol) {
	var mul = _ref.mul,
	    div = _ref.div,
	    real = _ref.real,
	    img = _ref.img,
	    con = _ref.con;


	return {

		"complex": _core2.default.complex,
		"mul": _core2.default.binary(mul),
		"div": _core2.default.binary(div),
		"real": _core2.default.real(real),
		"img": _core2.default.img(img),
		"con": _core2.default.unary(con)

	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb2xhci9vYmplY3QvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwic3ltYm9sIiwibXVsIiwiZGl2IiwicmVhbCIsImltZyIsImNvbiIsImNvbXBsZXgiLCJiaW5hcnkiLCJ1bmFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxPOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsT0FBVCxPQU1YQyxNQU5XLEVBTUY7QUFBQSxLQUpaQyxHQUlZLFFBSlpBLEdBSVk7QUFBQSxLQUpOQyxHQUlNLFFBSk5BLEdBSU07QUFBQSxLQUhaQyxJQUdZLFFBSFpBLElBR1k7QUFBQSxLQUhMQyxHQUdLLFFBSExBLEdBR0s7QUFBQSxLQUZaQyxHQUVZLFFBRlpBLEdBRVk7OztBQUVaLFFBQU87O0FBRU4sYUFBWSxlQUFLQyxPQUZYO0FBR04sU0FBUSxlQUFLQyxNQUFMLENBQWFOLEdBQWIsQ0FIRjtBQUlOLFNBQVEsZUFBS00sTUFBTCxDQUFhTCxHQUFiLENBSkY7QUFLTixVQUFTLGVBQUtDLElBQUwsQ0FBV0EsSUFBWCxDQUxIO0FBTU4sU0FBUSxlQUFLQyxHQUFMLENBQVVBLEdBQVYsQ0FORjtBQU9OLFNBQVEsZUFBS0ksS0FBTCxDQUFZSCxHQUFaOztBQVBGLEVBQVA7QUFXQSIsImZpbGUiOiJjb21waWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvcmUgZnJvbSAnLi9jb3JlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBpbGUgKCB7XG5cblx0bXVsICwgZGl2ICxcblx0cmVhbCAsIGltZyAsXG5cdGNvblxuXG59ICwgc3ltYm9sICkge1xuXG5cdHJldHVybiB7XG5cblx0XHRcImNvbXBsZXhcIiA6IGNvcmUuY29tcGxleCAsXG5cdFx0XCJtdWxcIiA6IGNvcmUuYmluYXJ5KCBtdWwgKSAsXG5cdFx0XCJkaXZcIiA6IGNvcmUuYmluYXJ5KCBkaXYgKSAsXG5cdFx0XCJyZWFsXCIgOiBjb3JlLnJlYWwoIHJlYWwgKSAsXG5cdFx0XCJpbWdcIiA6IGNvcmUuaW1nKCBpbWcgKSAsXG5cdFx0XCJjb25cIiA6IGNvcmUudW5hcnkoIGNvbiApICxcblxuXHR9IDtcblxufVxuXG4iXX0=