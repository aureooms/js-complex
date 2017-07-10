"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = compile;

var _core = require("./core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(_ref, symbol) {
	var add = _ref.add,
	    sub = _ref.sub,
	    mul = _ref.mul,
	    div = _ref.div,
	    neg = _ref.neg,
	    cos = _ref.cos,
	    sin = _ref.sin;


	return {

		"mul": _core2.default.mul(mul, add),
		"div": _core2.default.div(div, sub),
		"real": _core2.default.real(mul, cos),
		"img": _core2.default.img(mul, sin),
		"con": _core2.default.con(neg)

	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb2xhci9rZXJuZWwvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwic3ltYm9sIiwiYWRkIiwic3ViIiwibXVsIiwiZGl2IiwibmVnIiwiY29zIiwic2luIiwicmVhbCIsImltZyIsImNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxPOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsT0FBVCxPQU1YQyxNQU5XLEVBTUY7QUFBQSxLQUpaQyxHQUlZLFFBSlpBLEdBSVk7QUFBQSxLQUpOQyxHQUlNLFFBSk5BLEdBSU07QUFBQSxLQUpBQyxHQUlBLFFBSkFBLEdBSUE7QUFBQSxLQUpNQyxHQUlOLFFBSk1BLEdBSU47QUFBQSxLQUhaQyxHQUdZLFFBSFpBLEdBR1k7QUFBQSxLQUZaQyxHQUVZLFFBRlpBLEdBRVk7QUFBQSxLQUZOQyxHQUVNLFFBRk5BLEdBRU07OztBQUVaLFFBQU87O0FBRU4sU0FBUSxlQUFLSixHQUFMLENBQVVBLEdBQVYsRUFBZ0JGLEdBQWhCLENBRkY7QUFHTixTQUFRLGVBQUtHLEdBQUwsQ0FBVUEsR0FBVixFQUFnQkYsR0FBaEIsQ0FIRjtBQUlOLFVBQVMsZUFBS00sSUFBTCxDQUFXTCxHQUFYLEVBQWlCRyxHQUFqQixDQUpIO0FBS04sU0FBUSxlQUFLRyxHQUFMLENBQVVOLEdBQVYsRUFBZ0JJLEdBQWhCLENBTEY7QUFNTixTQUFRLGVBQUtHLEdBQUwsQ0FBVUwsR0FBVjs7QUFORixFQUFQO0FBVUEiLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3JlIGZyb20gJy4vY29yZScgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21waWxlICgge1xuXG5cdGFkZCAsIHN1YiAsIG11bCAsIGRpdiAsXG5cdG5lZyAsXG5cdGNvcyAsIHNpblxuXG59ICwgc3ltYm9sICkge1xuXG5cdHJldHVybiB7XG5cblx0XHRcIm11bFwiIDogY29yZS5tdWwoIG11bCAsIGFkZCApICxcblx0XHRcImRpdlwiIDogY29yZS5kaXYoIGRpdiAsIHN1YiApICxcblx0XHRcInJlYWxcIiA6IGNvcmUucmVhbCggbXVsICwgY29zICkgLFxuXHRcdFwiaW1nXCIgOiBjb3JlLmltZyggbXVsICwgc2luICkgLFxuXHRcdFwiY29uXCIgOiBjb3JlLmNvbiggbmVnICkgLFxuXG5cdH0gO1xuXG59XG5cbiJdfQ==