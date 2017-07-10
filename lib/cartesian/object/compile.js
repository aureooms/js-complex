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
	    stringify = _ref.stringify;


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
		"stringify": _core2.default.stringify(stringify)

	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vb2JqZWN0L2NvbXBpbGUuanMiXSwibmFtZXMiOlsiY29tcGlsZSIsInN5bWJvbCIsIiQwIiwiJDEiLCJyb290Mm4iLCJpcm9vdDJuIiwiYWRkIiwic3ViIiwibXVsIiwiZGl2IiwiaW11bCIsImRpdjIiLCJhYnMiLCJhcmciLCJjb24iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNvbXBsZXgiLCIkIiwiYmluYXJ5IiwidW5hcnkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsTzs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLE9BQVQsT0FVWEMsTUFWVyxFQVVGO0FBQUEsS0FSWkMsRUFRWSxRQVJaQSxFQVFZO0FBQUEsS0FSUEMsRUFRTyxRQVJQQSxFQVFPO0FBQUEsS0FSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsS0FST0MsT0FRUCxRQVJPQSxPQVFQO0FBQUEsS0FQWkMsR0FPWSxRQVBaQSxHQU9ZO0FBQUEsS0FQTkMsR0FPTSxRQVBOQSxHQU9NO0FBQUEsS0FQQUMsR0FPQSxRQVBBQSxHQU9BO0FBQUEsS0FQTUMsR0FPTixRQVBNQSxHQU9OO0FBQUEsS0FOWkMsSUFNWSxRQU5aQSxJQU1ZO0FBQUEsS0FMWkMsSUFLWSxRQUxaQSxJQUtZO0FBQUEsS0FKWkMsR0FJWSxRQUpaQSxHQUlZO0FBQUEsS0FKTkMsR0FJTSxRQUpOQSxHQUlNO0FBQUEsS0FIWkMsR0FHWSxRQUhaQSxHQUdZO0FBQUEsS0FGWkMsS0FFWSxRQUZaQSxLQUVZO0FBQUEsS0FGSkMsU0FFSSxRQUZKQSxTQUVJOzs7QUFFWixRQUFPOztBQUVOLGFBQVksZUFBS0MsT0FGWDtBQUdOLFFBQU8sZUFBS0MsQ0FBTCxDQUFRaEIsRUFBUixDQUhEO0FBSU4sUUFBTyxlQUFLZ0IsQ0FBTCxDQUFRZixFQUFSLENBSkQ7QUFLTixZQUFXLGVBQUtDLE1BQUwsQ0FBYUEsTUFBYixDQUxMO0FBTU4sYUFBWSxlQUFLQSxNQUFMLENBQWFDLE9BQWIsQ0FOTjtBQU9OLFNBQVEsZUFBS2MsTUFBTCxDQUFhYixHQUFiLENBUEY7QUFRTixTQUFRLGVBQUthLE1BQUwsQ0FBYVosR0FBYixDQVJGO0FBU04sU0FBUSxlQUFLWSxNQUFMLENBQWFYLEdBQWIsQ0FURjtBQVVOLFVBQVMsZUFBS1csTUFBTCxDQUFhVCxJQUFiLENBVkg7QUFXTixTQUFRLGVBQUtTLE1BQUwsQ0FBYVYsR0FBYixDQVhGO0FBWU4sVUFBUyxlQUFLVyxLQUFMLENBQVlULElBQVosQ0FaSDtBQWFOLFNBQVEsZUFBS1MsS0FBTCxDQUFZUixHQUFaLENBYkY7QUFjTixTQUFRLGVBQUtRLEtBQUwsQ0FBWVAsR0FBWixDQWRGO0FBZU4sU0FBUSxlQUFLTyxLQUFMLENBQVlOLEdBQVosQ0FmRjtBQWdCTixXQUFVLGVBQUtDLEtBQUwsQ0FBWUEsS0FBWixDQWhCSjtBQWlCTixlQUFjLGVBQUtDLFNBQUwsQ0FBaUJBLFNBQWpCOztBQWpCUixFQUFQO0FBcUJBIiwiZmlsZSI6ImNvbXBpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29yZSBmcm9tICcuL2NvcmUnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGlsZSAoIHtcblxuXHQkMCAsICQxICwgcm9vdDJuICwgaXJvb3QybiAsXG5cdGFkZCAsIHN1YiAsIG11bCAsIGRpdiAsXG5cdGltdWwgLFxuXHRkaXYyICxcblx0YWJzICwgYXJnICxcblx0Y29uICxcblx0cGFyc2UgLCBzdHJpbmdpZnlcblxufSAsIHN5bWJvbCApIHtcblxuXHRyZXR1cm4ge1xuXG5cdFx0XCJjb21wbGV4XCIgOiBjb3JlLmNvbXBsZXggLFxuXHRcdFwiJDBcIiA6IGNvcmUuJCggJDAgKSAsXG5cdFx0XCIkMVwiIDogY29yZS4kKCAkMSApICxcblx0XHRcInJvb3QyblwiIDogY29yZS5yb290Mm4oIHJvb3QybiApICxcblx0XHRcImlyb290Mm5cIiA6IGNvcmUucm9vdDJuKCBpcm9vdDJuICkgLFxuXHRcdFwiYWRkXCIgOiBjb3JlLmJpbmFyeSggYWRkICkgLFxuXHRcdFwic3ViXCIgOiBjb3JlLmJpbmFyeSggc3ViICkgLFxuXHRcdFwibXVsXCIgOiBjb3JlLmJpbmFyeSggbXVsICkgLFxuXHRcdFwiaW11bFwiIDogY29yZS5iaW5hcnkoIGltdWwgKSAsXG5cdFx0XCJkaXZcIiA6IGNvcmUuYmluYXJ5KCBkaXYgKSAsXG5cdFx0XCJkaXYyXCIgOiBjb3JlLnVuYXJ5KCBkaXYyICkgLFxuXHRcdFwiYWJzXCIgOiBjb3JlLnVuYXJ5KCBhYnMgKSAsXG5cdFx0XCJhcmdcIiA6IGNvcmUudW5hcnkoIGFyZyApICxcblx0XHRcImNvblwiIDogY29yZS51bmFyeSggY29uICkgLFxuXHRcdFwicGFyc2VcIiA6IGNvcmUucGFyc2UoIHBhcnNlICkgLFxuXHRcdFwic3RyaW5naWZ5XCIgOiBjb3JlLnN0cmluZ2lmeSAoIHN0cmluZ2lmeSApXG5cblx0fSA7XG5cbn1cblxuIl19