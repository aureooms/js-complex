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
		"$0": $0,
		"$1": $1,
		"root2n": root2n,
		"iroot2n": iroot2n,
		"add": _core2.default.binary(add),
		"sub": _core2.default.binary(sub),
		"mul": _core2.default.binary(mul),
		"imul": _core2.default.binary(imul),
		"div": _core2.default.binary(div),
		"div2": _core2.default.unary(div2),
		"abs": _core2.default.unary(abs),
		"arg": _core2.default.unary(arg),
		"con": _core2.default.unary(con),
		"parse": parse,
		"stringify": _core2.default.unary(stringify),
		"exp": _core2.default.unary(exp),
		"pow": _core2.default.binary(pow)

	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vYXJyYXkvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwic3ltYm9sIiwiJDAiLCIkMSIsInJvb3QybiIsImlyb290Mm4iLCJhZGQiLCJzdWIiLCJtdWwiLCJkaXYiLCJpbXVsIiwiZGl2MiIsImFicyIsImFyZyIsImNvbiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXhwIiwicG93IiwiY29tcGxleCIsImJpbmFyeSIsInVuYXJ5Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLE87O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxPQUFULE9BV1hDLE1BWFcsRUFXRjtBQUFBLEtBVFpDLEVBU1ksUUFUWkEsRUFTWTtBQUFBLEtBVFBDLEVBU08sUUFUUEEsRUFTTztBQUFBLEtBVEZDLE1BU0UsUUFURkEsTUFTRTtBQUFBLEtBVE9DLE9BU1AsUUFUT0EsT0FTUDtBQUFBLEtBUlpDLEdBUVksUUFSWkEsR0FRWTtBQUFBLEtBUk5DLEdBUU0sUUFSTkEsR0FRTTtBQUFBLEtBUkFDLEdBUUEsUUFSQUEsR0FRQTtBQUFBLEtBUk1DLEdBUU4sUUFSTUEsR0FRTjtBQUFBLEtBUFpDLElBT1ksUUFQWkEsSUFPWTtBQUFBLEtBTlpDLElBTVksUUFOWkEsSUFNWTtBQUFBLEtBTFpDLEdBS1ksUUFMWkEsR0FLWTtBQUFBLEtBTE5DLEdBS00sUUFMTkEsR0FLTTtBQUFBLEtBSlpDLEdBSVksUUFKWkEsR0FJWTtBQUFBLEtBSFpDLEtBR1ksUUFIWkEsS0FHWTtBQUFBLEtBSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLEtBRlpDLEdBRVksUUFGWkEsR0FFWTtBQUFBLEtBRk5DLEdBRU0sUUFGTkEsR0FFTTs7O0FBRVosUUFBTzs7QUFFTixhQUFZLGVBQUtDLE9BRlg7QUFHTixRQUFPakIsRUFIRDtBQUlOLFFBQU9DLEVBSkQ7QUFLTixZQUFXQyxNQUxMO0FBTU4sYUFBWUMsT0FOTjtBQU9OLFNBQVEsZUFBS2UsTUFBTCxDQUFhZCxHQUFiLENBUEY7QUFRTixTQUFRLGVBQUtjLE1BQUwsQ0FBYWIsR0FBYixDQVJGO0FBU04sU0FBUSxlQUFLYSxNQUFMLENBQWFaLEdBQWIsQ0FURjtBQVVOLFVBQVMsZUFBS1ksTUFBTCxDQUFhVixJQUFiLENBVkg7QUFXTixTQUFRLGVBQUtVLE1BQUwsQ0FBYVgsR0FBYixDQVhGO0FBWU4sVUFBUyxlQUFLWSxLQUFMLENBQVlWLElBQVosQ0FaSDtBQWFOLFNBQVEsZUFBS1UsS0FBTCxDQUFZVCxHQUFaLENBYkY7QUFjTixTQUFRLGVBQUtTLEtBQUwsQ0FBWVIsR0FBWixDQWRGO0FBZU4sU0FBUSxlQUFLUSxLQUFMLENBQVlQLEdBQVosQ0FmRjtBQWdCTixXQUFVQyxLQWhCSjtBQWlCTixlQUFjLGVBQUtNLEtBQUwsQ0FBYUwsU0FBYixDQWpCUjtBQWtCTixTQUFRLGVBQUtLLEtBQUwsQ0FBWUosR0FBWixDQWxCRjtBQW1CTixTQUFRLGVBQUtHLE1BQUwsQ0FBYUYsR0FBYjs7QUFuQkYsRUFBUDtBQXdCQSIsImZpbGUiOiJjb21waWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvcmUgZnJvbSAnLi9jb3JlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBpbGUgKCB7XG5cblx0JDAgLCAkMSAsIHJvb3QybiAsIGlyb290Mm4gLFxuXHRhZGQgLCBzdWIgLCBtdWwgLCBkaXYgLFxuXHRpbXVsICxcblx0ZGl2MiAsXG5cdGFicyAsIGFyZyAsXG5cdGNvbiAsXG5cdHBhcnNlICwgc3RyaW5naWZ5ICxcblx0ZXhwICwgcG93ICxcblxufSAsIHN5bWJvbCApIHtcblxuXHRyZXR1cm4ge1xuXG5cdFx0XCJjb21wbGV4XCIgOiBjb3JlLmNvbXBsZXggLFxuXHRcdFwiJDBcIiA6ICQwICxcblx0XHRcIiQxXCIgOiAkMSAsXG5cdFx0XCJyb290Mm5cIiA6IHJvb3QybiAsXG5cdFx0XCJpcm9vdDJuXCIgOiBpcm9vdDJuICxcblx0XHRcImFkZFwiIDogY29yZS5iaW5hcnkoIGFkZCApICxcblx0XHRcInN1YlwiIDogY29yZS5iaW5hcnkoIHN1YiApICxcblx0XHRcIm11bFwiIDogY29yZS5iaW5hcnkoIG11bCApICxcblx0XHRcImltdWxcIiA6IGNvcmUuYmluYXJ5KCBpbXVsICkgLFxuXHRcdFwiZGl2XCIgOiBjb3JlLmJpbmFyeSggZGl2ICkgLFxuXHRcdFwiZGl2MlwiIDogY29yZS51bmFyeSggZGl2MiApICxcblx0XHRcImFic1wiIDogY29yZS51bmFyeSggYWJzICkgLFxuXHRcdFwiYXJnXCIgOiBjb3JlLnVuYXJ5KCBhcmcgKSAsXG5cdFx0XCJjb25cIiA6IGNvcmUudW5hcnkoIGNvbiApICxcblx0XHRcInBhcnNlXCIgOiBwYXJzZSAsXG5cdFx0XCJzdHJpbmdpZnlcIiA6IGNvcmUudW5hcnkgKCBzdHJpbmdpZnkgKSAsXG5cdFx0XCJleHBcIiA6IGNvcmUudW5hcnkoIGV4cCApICxcblx0XHRcInBvd1wiIDogY29yZS5iaW5hcnkoIHBvdyApICxcblxuXG5cdH0gO1xuXG59XG5cbiJdfQ==