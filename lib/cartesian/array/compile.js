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
		"stringify": _core2.default.unary(stringify)

	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4vYXJyYXkvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwic3ltYm9sIiwiJDAiLCIkMSIsInJvb3QybiIsImlyb290Mm4iLCJhZGQiLCJzdWIiLCJtdWwiLCJkaXYiLCJpbXVsIiwiZGl2MiIsImFicyIsImFyZyIsImNvbiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY29tcGxleCIsImJpbmFyeSIsInVuYXJ5Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLE87O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxPQUFULE9BVVhDLE1BVlcsRUFVRjtBQUFBLEtBUlpDLEVBUVksUUFSWkEsRUFRWTtBQUFBLEtBUlBDLEVBUU8sUUFSUEEsRUFRTztBQUFBLEtBUkZDLE1BUUUsUUFSRkEsTUFRRTtBQUFBLEtBUk9DLE9BUVAsUUFST0EsT0FRUDtBQUFBLEtBUFpDLEdBT1ksUUFQWkEsR0FPWTtBQUFBLEtBUE5DLEdBT00sUUFQTkEsR0FPTTtBQUFBLEtBUEFDLEdBT0EsUUFQQUEsR0FPQTtBQUFBLEtBUE1DLEdBT04sUUFQTUEsR0FPTjtBQUFBLEtBTlpDLElBTVksUUFOWkEsSUFNWTtBQUFBLEtBTFpDLElBS1ksUUFMWkEsSUFLWTtBQUFBLEtBSlpDLEdBSVksUUFKWkEsR0FJWTtBQUFBLEtBSk5DLEdBSU0sUUFKTkEsR0FJTTtBQUFBLEtBSFpDLEdBR1ksUUFIWkEsR0FHWTtBQUFBLEtBRlpDLEtBRVksUUFGWkEsS0FFWTtBQUFBLEtBRkpDLFNBRUksUUFGSkEsU0FFSTs7O0FBRVosUUFBTzs7QUFFTixhQUFZLGVBQUtDLE9BRlg7QUFHTixRQUFPZixFQUhEO0FBSU4sUUFBT0MsRUFKRDtBQUtOLFlBQVdDLE1BTEw7QUFNTixhQUFZQyxPQU5OO0FBT04sU0FBUSxlQUFLYSxNQUFMLENBQWFaLEdBQWIsQ0FQRjtBQVFOLFNBQVEsZUFBS1ksTUFBTCxDQUFhWCxHQUFiLENBUkY7QUFTTixTQUFRLGVBQUtXLE1BQUwsQ0FBYVYsR0FBYixDQVRGO0FBVU4sVUFBUyxlQUFLVSxNQUFMLENBQWFSLElBQWIsQ0FWSDtBQVdOLFNBQVEsZUFBS1EsTUFBTCxDQUFhVCxHQUFiLENBWEY7QUFZTixVQUFTLGVBQUtVLEtBQUwsQ0FBWVIsSUFBWixDQVpIO0FBYU4sU0FBUSxlQUFLUSxLQUFMLENBQVlQLEdBQVosQ0FiRjtBQWNOLFNBQVEsZUFBS08sS0FBTCxDQUFZTixHQUFaLENBZEY7QUFlTixTQUFRLGVBQUtNLEtBQUwsQ0FBWUwsR0FBWixDQWZGO0FBZ0JOLFdBQVVDLEtBaEJKO0FBaUJOLGVBQWMsZUFBS0ksS0FBTCxDQUFhSCxTQUFiOztBQWpCUixFQUFQO0FBcUJBIiwiZmlsZSI6ImNvbXBpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29yZSBmcm9tICcuL2NvcmUnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGlsZSAoIHtcblxuXHQkMCAsICQxICwgcm9vdDJuICwgaXJvb3QybiAsXG5cdGFkZCAsIHN1YiAsIG11bCAsIGRpdiAsXG5cdGltdWwgLFxuXHRkaXYyICxcblx0YWJzICwgYXJnICxcblx0Y29uICxcblx0cGFyc2UgLCBzdHJpbmdpZnlcblxufSAsIHN5bWJvbCApIHtcblxuXHRyZXR1cm4ge1xuXG5cdFx0XCJjb21wbGV4XCIgOiBjb3JlLmNvbXBsZXggLFxuXHRcdFwiJDBcIiA6ICQwICxcblx0XHRcIiQxXCIgOiAkMSAsXG5cdFx0XCJyb290Mm5cIiA6IHJvb3QybiAsXG5cdFx0XCJpcm9vdDJuXCIgOiBpcm9vdDJuICxcblx0XHRcImFkZFwiIDogY29yZS5iaW5hcnkoIGFkZCApICxcblx0XHRcInN1YlwiIDogY29yZS5iaW5hcnkoIHN1YiApICxcblx0XHRcIm11bFwiIDogY29yZS5iaW5hcnkoIG11bCApICxcblx0XHRcImltdWxcIiA6IGNvcmUuYmluYXJ5KCBpbXVsICkgLFxuXHRcdFwiZGl2XCIgOiBjb3JlLmJpbmFyeSggZGl2ICkgLFxuXHRcdFwiZGl2MlwiIDogY29yZS51bmFyeSggZGl2MiApICxcblx0XHRcImFic1wiIDogY29yZS51bmFyeSggYWJzICkgLFxuXHRcdFwiYXJnXCIgOiBjb3JlLnVuYXJ5KCBhcmcgKSAsXG5cdFx0XCJjb25cIiA6IGNvcmUudW5hcnkoIGNvbiApICxcblx0XHRcInBhcnNlXCIgOiBwYXJzZSAsXG5cdFx0XCJzdHJpbmdpZnlcIiA6IGNvcmUudW5hcnkgKCBzdHJpbmdpZnkgKVxuXG5cdH0gO1xuXG59XG5cbiJdfQ==