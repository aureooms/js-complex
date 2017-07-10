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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb2xhci9hcnJheS9jb21waWxlLmpzIl0sIm5hbWVzIjpbImNvbXBpbGUiLCJzeW1ib2wiLCJtdWwiLCJkaXYiLCJyZWFsIiwiaW1nIiwiY29uIiwiY29tcGxleCIsImJpbmFyeSIsInVuYXJ5Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLE87O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxPQUFULE9BTVhDLE1BTlcsRUFNRjtBQUFBLEtBSlpDLEdBSVksUUFKWkEsR0FJWTtBQUFBLEtBSk5DLEdBSU0sUUFKTkEsR0FJTTtBQUFBLEtBSFpDLElBR1ksUUFIWkEsSUFHWTtBQUFBLEtBSExDLEdBR0ssUUFITEEsR0FHSztBQUFBLEtBRlpDLEdBRVksUUFGWkEsR0FFWTs7O0FBRVosUUFBTzs7QUFFTixhQUFZLGVBQUtDLE9BRlg7QUFHTixTQUFRLGVBQUtDLE1BQUwsQ0FBYU4sR0FBYixDQUhGO0FBSU4sU0FBUSxlQUFLTSxNQUFMLENBQWFMLEdBQWIsQ0FKRjtBQUtOLFVBQVMsZUFBS0MsSUFBTCxDQUFXQSxJQUFYLENBTEg7QUFNTixTQUFRLGVBQUtDLEdBQUwsQ0FBVUEsR0FBVixDQU5GO0FBT04sU0FBUSxlQUFLSSxLQUFMLENBQVlILEdBQVo7O0FBUEYsRUFBUDtBQVdBIiwiZmlsZSI6ImNvbXBpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29yZSBmcm9tICcuL2NvcmUnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGlsZSAoIHtcblxuXHRtdWwgLCBkaXYgLFxuXHRyZWFsICwgaW1nICxcblx0Y29uXG5cbn0gLCBzeW1ib2wgKSB7XG5cblx0cmV0dXJuIHtcblxuXHRcdFwiY29tcGxleFwiIDogY29yZS5jb21wbGV4ICxcblx0XHRcIm11bFwiIDogY29yZS5iaW5hcnkoIG11bCApICxcblx0XHRcImRpdlwiIDogY29yZS5iaW5hcnkoIGRpdiApICxcblx0XHRcInJlYWxcIiA6IGNvcmUucmVhbCggcmVhbCApICxcblx0XHRcImltZ1wiIDogY29yZS5pbWcoIGltZyApICxcblx0XHRcImNvblwiIDogY29yZS51bmFyeSggY29uICkgLFxuXG5cdH0gO1xuXG59XG5cbiJdfQ==