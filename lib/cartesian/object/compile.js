"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = compile;

var _core = require("./core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(_ref, symbol) {
	var $0 = _ref.$0,
	    $1 = _ref.$1,
	    root2n = _ref.root2n,
	    iroot2n = _ref.iroot2n,
	    add = _ref.add,
	    sub = _ref.sub,
	    mul = _ref.mul,
	    div = _ref.div,
	    imul = _ref.imul,
	    div2 = _ref.div2,
	    abs = _ref.abs,
	    arg = _ref.arg,
	    con = _ref.con,
	    parse = _ref.parse,
	    stringify = _ref.stringify,
	    exp = _ref.exp,
	    pow = _ref.pow;


	return {

		"complex": _core2.default.complex,
		"$0": _core2.default.$($0),
		"$1": _core2.default.$($1),
		"root2n": _core2.default.root2n(root2n),
		"iroot2n": _core2.default.root2n(iroot2n),
		"add": _core2.default.binary(add),
		"sub": _core2.default.binary(sub),
		"mul": _core2.default.binary(mul),
		"imul": _core2.default.binary(imul),
		"div": _core2.default.binary(div),
		"div2": _core2.default.unary(div2),
		"abs": _core2.default.unary(abs),
		"arg": _core2.default.unary(arg),
		"con": _core2.default.unary(con),
		"parse": _core2.default.parse(parse),
		"stringify": _core2.default.stringify(stringify),
		"exp": _core2.default.unary(exp),
		"pow": _core2.default.binary(pow)

	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vb2JqZWN0L2NvbXBpbGUuanMiXSwibmFtZXMiOlsiY29tcGlsZSIsInN5bWJvbCIsIiQwIiwiJDEiLCJyb290Mm4iLCJpcm9vdDJuIiwiYWRkIiwic3ViIiwibXVsIiwiZGl2IiwiaW11bCIsImRpdjIiLCJhYnMiLCJhcmciLCJjb24iLCJwYXJzZSIsInN0cmluZ2lmeSIsImV4cCIsInBvdyIsImNvbXBsZXgiLCIkIiwiYmluYXJ5IiwidW5hcnkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsTzs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLE9BQVQsT0FXWEMsTUFYVyxFQVdGO0FBQUEsS0FUWkMsRUFTWSxRQVRaQSxFQVNZO0FBQUEsS0FUUEMsRUFTTyxRQVRQQSxFQVNPO0FBQUEsS0FURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsS0FUT0MsT0FTUCxRQVRPQSxPQVNQO0FBQUEsS0FSWkMsR0FRWSxRQVJaQSxHQVFZO0FBQUEsS0FSTkMsR0FRTSxRQVJOQSxHQVFNO0FBQUEsS0FSQUMsR0FRQSxRQVJBQSxHQVFBO0FBQUEsS0FSTUMsR0FRTixRQVJNQSxHQVFOO0FBQUEsS0FQWkMsSUFPWSxRQVBaQSxJQU9ZO0FBQUEsS0FOWkMsSUFNWSxRQU5aQSxJQU1ZO0FBQUEsS0FMWkMsR0FLWSxRQUxaQSxHQUtZO0FBQUEsS0FMTkMsR0FLTSxRQUxOQSxHQUtNO0FBQUEsS0FKWkMsR0FJWSxRQUpaQSxHQUlZO0FBQUEsS0FIWkMsS0FHWSxRQUhaQSxLQUdZO0FBQUEsS0FISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsS0FGWkMsR0FFWSxRQUZaQSxHQUVZO0FBQUEsS0FGTkMsR0FFTSxRQUZOQSxHQUVNOzs7QUFFWixRQUFPOztBQUVOLGFBQVksZUFBS0MsT0FGWDtBQUdOLFFBQU8sZUFBS0MsQ0FBTCxDQUFRbEIsRUFBUixDQUhEO0FBSU4sUUFBTyxlQUFLa0IsQ0FBTCxDQUFRakIsRUFBUixDQUpEO0FBS04sWUFBVyxlQUFLQyxNQUFMLENBQWFBLE1BQWIsQ0FMTDtBQU1OLGFBQVksZUFBS0EsTUFBTCxDQUFhQyxPQUFiLENBTk47QUFPTixTQUFRLGVBQUtnQixNQUFMLENBQWFmLEdBQWIsQ0FQRjtBQVFOLFNBQVEsZUFBS2UsTUFBTCxDQUFhZCxHQUFiLENBUkY7QUFTTixTQUFRLGVBQUtjLE1BQUwsQ0FBYWIsR0FBYixDQVRGO0FBVU4sVUFBUyxlQUFLYSxNQUFMLENBQWFYLElBQWIsQ0FWSDtBQVdOLFNBQVEsZUFBS1csTUFBTCxDQUFhWixHQUFiLENBWEY7QUFZTixVQUFTLGVBQUthLEtBQUwsQ0FBWVgsSUFBWixDQVpIO0FBYU4sU0FBUSxlQUFLVyxLQUFMLENBQVlWLEdBQVosQ0FiRjtBQWNOLFNBQVEsZUFBS1UsS0FBTCxDQUFZVCxHQUFaLENBZEY7QUFlTixTQUFRLGVBQUtTLEtBQUwsQ0FBWVIsR0FBWixDQWZGO0FBZ0JOLFdBQVUsZUFBS0MsS0FBTCxDQUFZQSxLQUFaLENBaEJKO0FBaUJOLGVBQWMsZUFBS0MsU0FBTCxDQUFpQkEsU0FBakIsQ0FqQlI7QUFrQk4sU0FBUSxlQUFLTSxLQUFMLENBQVlMLEdBQVosQ0FsQkY7QUFtQk4sU0FBUSxlQUFLSSxNQUFMLENBQWFILEdBQWI7O0FBbkJGLEVBQVA7QUF1QkEiLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3JlIGZyb20gJy4vY29yZScgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21waWxlICgge1xuXG5cdCQwICwgJDEgLCByb290Mm4gLCBpcm9vdDJuICxcblx0YWRkICwgc3ViICwgbXVsICwgZGl2ICxcblx0aW11bCAsXG5cdGRpdjIgLFxuXHRhYnMgLCBhcmcgLFxuXHRjb24gLFxuXHRwYXJzZSAsIHN0cmluZ2lmeSAsXG5cdGV4cCAsIHBvdyAsXG5cbn0gLCBzeW1ib2wgKSB7XG5cblx0cmV0dXJuIHtcblxuXHRcdFwiY29tcGxleFwiIDogY29yZS5jb21wbGV4ICxcblx0XHRcIiQwXCIgOiBjb3JlLiQoICQwICkgLFxuXHRcdFwiJDFcIiA6IGNvcmUuJCggJDEgKSAsXG5cdFx0XCJyb290Mm5cIiA6IGNvcmUucm9vdDJuKCByb290Mm4gKSAsXG5cdFx0XCJpcm9vdDJuXCIgOiBjb3JlLnJvb3QybiggaXJvb3QybiApICxcblx0XHRcImFkZFwiIDogY29yZS5iaW5hcnkoIGFkZCApICxcblx0XHRcInN1YlwiIDogY29yZS5iaW5hcnkoIHN1YiApICxcblx0XHRcIm11bFwiIDogY29yZS5iaW5hcnkoIG11bCApICxcblx0XHRcImltdWxcIiA6IGNvcmUuYmluYXJ5KCBpbXVsICkgLFxuXHRcdFwiZGl2XCIgOiBjb3JlLmJpbmFyeSggZGl2ICkgLFxuXHRcdFwiZGl2MlwiIDogY29yZS51bmFyeSggZGl2MiApICxcblx0XHRcImFic1wiIDogY29yZS51bmFyeSggYWJzICkgLFxuXHRcdFwiYXJnXCIgOiBjb3JlLnVuYXJ5KCBhcmcgKSAsXG5cdFx0XCJjb25cIiA6IGNvcmUudW5hcnkoIGNvbiApICxcblx0XHRcInBhcnNlXCIgOiBjb3JlLnBhcnNlKCBwYXJzZSApICxcblx0XHRcInN0cmluZ2lmeVwiIDogY29yZS5zdHJpbmdpZnkgKCBzdHJpbmdpZnkgKSAsXG5cdFx0XCJleHBcIiA6IGNvcmUudW5hcnkoIGV4cCApICxcblx0XHRcInBvd1wiIDogY29yZS5iaW5hcnkoIHBvdyApICxcblxuXHR9IDtcblxufVxuXG4iXX0=