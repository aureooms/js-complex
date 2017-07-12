"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

// (a+ib)^{c+id} = e^{log_e(abs(a+ib))(c+id)+i arg(a+ib)(c+id)}
//               = e^{( c * \log_e(abs(a+ib)) - d * arg(a+ib) ) + i ( d * \log_e(abs(a+ib)) + c * arg(a+ib) ) }
exports.default = function (exp, abs, arg, loge, mul, sub, add) {
	return function (a, b, c, d) {
		var _log = loge(abs(a, b));
		var _arg = arg(a, b);
		return exp(sub(mul(c, _log), mul(d, _arg)), add(mul(d, _log), mul(c, _arg)));
	};
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvcG93LmpzIl0sIm5hbWVzIjpbImV4cCIsImFicyIsImFyZyIsImxvZ2UiLCJtdWwiLCJzdWIiLCJhZGQiLCJhIiwiYiIsImMiLCJkIiwiX2xvZyIsIl9hcmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7a0JBQ2UsVUFBRUEsR0FBRixFQUFRQyxHQUFSLEVBQWNDLEdBQWQsRUFBb0JDLElBQXBCLEVBQTJCQyxHQUEzQixFQUFpQ0MsR0FBakMsRUFBdUNDLEdBQXZDO0FBQUEsUUFBZ0QsVUFBRUMsQ0FBRixFQUFNQyxDQUFOLEVBQVVDLENBQVYsRUFBY0MsQ0FBZCxFQUFxQjtBQUNuRixNQUFNQyxPQUFPUixLQUFLRixJQUFJTSxDQUFKLEVBQU1DLENBQU4sQ0FBTCxDQUFiO0FBQ0EsTUFBTUksT0FBT1YsSUFBSUssQ0FBSixFQUFNQyxDQUFOLENBQWI7QUFDQSxTQUFPUixJQUFJSyxJQUFJRCxJQUFJSyxDQUFKLEVBQU1FLElBQU4sQ0FBSixFQUFnQlAsSUFBSU0sQ0FBSixFQUFNRSxJQUFOLENBQWhCLENBQUosRUFBa0NOLElBQUlGLElBQUlNLENBQUosRUFBTUMsSUFBTixDQUFKLEVBQWdCUCxJQUFJSyxDQUFKLEVBQU1HLElBQU4sQ0FBaEIsQ0FBbEMsQ0FBUDtBQUNBLEVBSmM7QUFBQSxDIiwiZmlsZSI6InBvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChhK2liKV57YytpZH0gPSBlXntsb2dfZShhYnMoYStpYikpKGMraWQpK2kgYXJnKGEraWIpKGMraWQpfVxuLy8gICAgICAgICAgICAgICA9IGVeeyggYyAqIFxcbG9nX2UoYWJzKGEraWIpKSAtIGQgKiBhcmcoYStpYikgKSArIGkgKCBkICogXFxsb2dfZShhYnMoYStpYikpICsgYyAqIGFyZyhhK2liKSApIH1cbmV4cG9ydCBkZWZhdWx0ICggZXhwICwgYWJzICwgYXJnICwgbG9nZSAsIG11bCAsIHN1YiAsIGFkZCApID0+ICggYSAsIGIgLCBjICwgZCApID0+IHtcblx0Y29uc3QgX2xvZyA9IGxvZ2UoYWJzKGEsYikpIDtcblx0Y29uc3QgX2FyZyA9IGFyZyhhLGIpIDtcblx0cmV0dXJuIGV4cChzdWIobXVsKGMsX2xvZyksbXVsKGQsX2FyZykpLCBhZGQobXVsKGQsX2xvZyksbXVsKGMsX2FyZykpKSA7XG59IDtcbiJdfQ==