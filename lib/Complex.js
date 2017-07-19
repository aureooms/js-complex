'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ZeroDivisionError = require('./ZeroDivisionError');

var _ZeroDivisionError2 = _interopRequireDefault(_ZeroDivisionError);

var _COMPLEX_DEFAULT_DISPLAY = require('./COMPLEX_DEFAULT_DISPLAY');

var _COMPLEX_DEFAULT_DISPLAY2 = _interopRequireDefault(_COMPLEX_DEFAULT_DISPLAY);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Complex = function () {
	function Complex(representation, real, img) {
		_classCallCheck(this, Complex);

		this.representation = representation;
		this.real = real;
		this.img = img;
	}

	_createClass(Complex, [{
		key: 'move',
		value: function move(other) {
			other.representation = this.representation;
			other.real = this.real;
			other.img = this.img;
			return other;
		}
	}, {
		key: 'copy',
		value: function copy() {
			return new Complex(this.representation, this.real, this.img);
		}
	}, {
		key: 'toString',
		value: function toString() {
			var representation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _COMPLEX_DEFAULT_DISPLAY2.default;

			// TODO use proper representation conversion
			return this.representation.kernel.stringify(this.real, this.img);
		}
	}, {
		key: 'add',
		value: function add(other) {
			var _representation$kerne = this.representation.kernel.add(this.real, this.img, other.real, other.img),
			    _representation$kerne2 = _slicedToArray(_representation$kerne, 2),
			    real = _representation$kerne2[0],
			    img = _representation$kerne2[1];

			return new Complex(this.representation, real, img);
		}
	}, {
		key: 'iadd',
		value: function iadd(other) {
			// TODO optimize but be careful with side effects
			return this.add(other).move(this);
		}
	}, {
		key: 'sub',
		value: function sub(other) {
			var _representation$kerne3 = this.representation.kernel.sub(this.real, this.img, other.real, other.img),
			    _representation$kerne4 = _slicedToArray(_representation$kerne3, 2),
			    real = _representation$kerne4[0],
			    img = _representation$kerne4[1];

			return new Complex(this.representation, real, img);
		}
	}, {
		key: 'isub',
		value: function isub(other) {
			// TODO optimize but be careful with side effects
			return this.sub(other).move(this);
		}
	}, {
		key: 'mul',
		value: function mul(other) {
			var _representation$kerne5 = this.representation.kernel.mul(this.real, this.img, other.real, other.img),
			    _representation$kerne6 = _slicedToArray(_representation$kerne5, 2),
			    real = _representation$kerne6[0],
			    img = _representation$kerne6[1];

			return new Complex(this.representation, real, img);
		}
	}, {
		key: 'imul',
		value: function imul(other) {
			// TODO optimize but be careful with side effects
			return this.mul(other).move(this);
		}

		/**
   * Computes <code>this</code> raised to the <code>other</code>th power.
   *
   * @param {Complex} other The power to raise <code>this</code> to.
   * @return {Complex} <code>this ^ other</code>
   */

	}, {
		key: 'pow',
		value: function pow(other) {
			// TODO optimize for special cases
			var _representation$kerne7 = this.representation.kernel.pow(this.real, this.img, other.real, other.img),
			    _representation$kerne8 = _slicedToArray(_representation$kerne7, 2),
			    real = _representation$kerne8[0],
			    img = _representation$kerne8[1];

			return new Complex(this.representation, real, img);
		}
	}, {
		key: 'ipow',
		value: function ipow(other) {
			// TODO optimize but be careful with side effects
			return this.pow(x).move(this);
		}
	}, {
		key: 'square',
		value: function square() {
			// TODO optimize
			return this.mul(this);
		}
	}, {
		key: 'isquare',
		value: function isquare() {
			// TODO optimize but be careful with side effects
			return this.square().move(this);
		}
	}, {
		key: 'div',
		value: function div(other) {
			return this.__truediv__(other);
		}
	}, {
		key: 'idiv',
		value: function idiv(other) {
			// TODO optimize but be careful with side effects
			return this.div(other).move(this);
		}
	}, {
		key: 'mod',
		value: function mod(other) {
			throw new TypeError("can't mod complex numbers.");
		}
	}, {
		key: 'imod',
		value: function imod(other) {
			throw new TypeError("can't mod complex numbers.");
		}
	}, {
		key: 'divmod',
		value: function divmod(other) {
			throw new TypeError("can't take floor or mod of complex number.");
		}
	}, {
		key: '__truediv__',
		value: function __truediv__(other) {
			var _representation$kerne9 = this.representation.kernel.div(this.real, this.img, other.real, other.img),
			    _representation$kerne10 = _slicedToArray(_representation$kerne9, 2),
			    real = _representation$kerne10[0],
			    img = _representation$kerne10[1];

			return new Complex(this.representation, real, img);
		}
	}, {
		key: '__floordiv__',
		value: function __floordiv__(other) {
			throw new TypeError("can't take floor of complex number.");
		}
	}, {
		key: 'opposite',
		value: function opposite() {
			return new Complex(this.representation, this.representation.model.neg(this.real), this.representation.model.neg(this.img));
		}
	}, {
		key: 'conjugate',
		value: function conjugate() {
			return new Complex(this.representation, this.real, this.representation.model.neg(this.img));
		}
	}, {
		key: 'negate',
		value: function negate() {
			// TODO optimize but be careful with side effects
			// TODO what would be the name for in-place conjugate -_- ?
			return this.opposite().move(this);
		}
	}, {
		key: 'signum',
		value: function signum() {
			return this.iszero() ? this : this.divide_knowing_model_contains(this.abs());
		}
	}, {
		key: 'iszero',
		value: function iszero() {
			return this.representation.model.eq(this.representation.model.$0(), this.real) && this.representation.model.eq(this.representation.model.$0(), this.img);
		}
	}, {
		key: 'isone',
		value: function isone() {
			return this.representation.model.eq(this.representation.model.$1(), this.real) && this.representation.model.eq(this.representation.model.$0(), this.img);
		}
	}, {
		key: 'nonzero',
		value: function nonzero() {
			return !this.iszero();
		}
	}, {
		key: 'divides',
		value: function divides(other) {
			return other.mod(this).iszero();
		}
	}, {
		key: 'divide_knowing_divisible_by',
		value: function divide_knowing_divisible_by(other) {
			return this.div(other);
		}
	}, {
		key: 'divide_knowing_model_contains',
		value: function divide_knowing_model_contains(other) {
			var real = this.representation.model.div(this.real, other);
			var img = this.representation.model.div(this.img, other);
			return new Complex(this.representation, real, img);
		}
	}, {
		key: 'abs',
		value: function abs() {
			return this.representation.kernel.abs(this.real, this.img);
		}
	}, {
		key: 'cmp',
		value: function cmp(other) {
			// TODO could also be
			// throw TypeError: no ordering relation is defined for complex numbers
			return this.representation.model.increasing(this.abs(), other.abs());
		}
	}, {
		key: 'eq',
		value: function eq(other) {
			return this.representation.model.eq(this.real, other.real) && this.representation.model.eq(this.img, other.img);
		}
	}, {
		key: 'ne',
		value: function ne(other) {
			return !this.eq(other);
		}
	}, {
		key: 'ge',
		value: function ge(other) {
			return this.cmp(other) >= 0;
		}
	}, {
		key: 'gt',
		value: function gt(other) {
			return this.cmp(other) > 0;
		}
	}, {
		key: 'le',
		value: function le(other) {
			return this.cmp(other) <= 0;
		}
	}, {
		key: 'lt',
		value: function lt(other) {
			return this.cmp(other) < 0;
		}
	}]);

	return Complex;
}();

exports.default = Complex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wbGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBsZXgiLCJyZXByZXNlbnRhdGlvbiIsInJlYWwiLCJpbWciLCJvdGhlciIsImtlcm5lbCIsInN0cmluZ2lmeSIsImFkZCIsIm1vdmUiLCJzdWIiLCJtdWwiLCJwb3ciLCJ4Iiwic3F1YXJlIiwiX190cnVlZGl2X18iLCJkaXYiLCJUeXBlRXJyb3IiLCJtb2RlbCIsIm5lZyIsIm9wcG9zaXRlIiwiaXN6ZXJvIiwiZGl2aWRlX2tub3dpbmdfbW9kZWxfY29udGFpbnMiLCJhYnMiLCJlcSIsIiQwIiwiJDEiLCJtb2QiLCJpbmNyZWFzaW5nIiwiY21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUJBLE87QUFFcEIsa0JBQWNDLGNBQWQsRUFBK0JDLElBQS9CLEVBQXNDQyxHQUF0QyxFQUE0QztBQUFBOztBQUMzQyxPQUFLRixjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBOzs7O3VCQUVNQyxLLEVBQVE7QUFDZEEsU0FBTUgsY0FBTixHQUF1QixLQUFLQSxjQUE1QjtBQUNBRyxTQUFNRixJQUFOLEdBQWEsS0FBS0EsSUFBbEI7QUFDQUUsU0FBTUQsR0FBTixHQUFZLEtBQUtBLEdBQWpCO0FBQ0EsVUFBT0MsS0FBUDtBQUNBOzs7eUJBRVE7QUFDUixVQUFPLElBQUlKLE9BQUosQ0FBYSxLQUFLQyxjQUFsQixFQUFtQyxLQUFLQyxJQUF4QyxFQUErQyxLQUFLQyxHQUFwRCxDQUFQO0FBQ0E7Ozs2QkFFcUQ7QUFBQSxPQUEzQ0YsY0FBMkM7O0FBQ3JEO0FBQ0EsVUFBTyxLQUFLQSxjQUFMLENBQW9CSSxNQUFwQixDQUEyQkMsU0FBM0IsQ0FBc0MsS0FBS0osSUFBM0MsRUFBa0QsS0FBS0MsR0FBdkQsQ0FBUDtBQUNBOzs7c0JBRUtDLEssRUFBUTtBQUFBLCtCQUVVLEtBQUtI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QW9CSSxNQUFwQixDQUEyQmlCLEdBQTNCLENBQWdDLEtBQUtwQixJQUFyQyxFQUE0QyxLQUFLQyxHQUFqRCxDQUFQO0FBQ0E7OztzQkFFS0MsSyxFQUFRO0FBQ2I7QUFDQTtBQUNBLFVBQU8sS0FBS0gsY0FBTCxDQUFvQmdCLEtBQXBCLENBQTBCVSxVQUExQixDQUFzQyxLQUFLTCxHQUFMLEVBQXRDLEVBQW1EbEIsTUFBTWtCLEdBQU4sRUFBbkQsQ0FBUDtBQUNBOzs7cUJBRUlsQixLLEVBQVE7QUFDWixVQUFPLEtBQUtILGNBQUwsQ0FBb0JnQixLQUFwQixDQUEwQk0sRUFBMUIsQ0FBNkIsS0FBS3JCLElBQWxDLEVBQXdDRSxNQUFNRixJQUE5QyxLQUF1RCxLQUFLRCxjQUFMLENBQW9CZ0IsS0FBcEIsQ0FBMEJNLEVBQTFCLENBQTZCLEtBQUtwQixHQUFsQyxFQUF1Q0MsTUFBTUQsR0FBN0MsQ0FBOUQ7QUFDQTs7O3FCQUVJQyxLLEVBQVE7QUFDWixVQUFPLENBQUMsS0FBS21CLEVBQUwsQ0FBUW5CLEtBQVIsQ0FBUjtBQUNBOzs7cUJBRUlBLEssRUFBUTtBQUNaLFVBQU8sS0FBS3dCLEdBQUwsQ0FBVXhCLEtBQVYsS0FBcUIsQ0FBNUI7QUFDQTs7O3FCQUVJQSxLLEVBQVE7QUFDWixVQUFPLEtBQUt3QixHQUFMLENBQVV4QixLQUFWLElBQW9CLENBQTNCO0FBQ0E7OztxQkFFSUEsSyxFQUFRO0FBQ1osVUFBTyxLQUFLd0IsR0FBTCxDQUFVeEIsS0FBVixLQUFxQixDQUE1QjtBQUNBOzs7cUJBRUlBLEssRUFBUTtBQUNaLFVBQU8sS0FBS3dCLEdBQUwsQ0FBVXhCLEtBQVYsSUFBb0IsQ0FBM0I7QUFDQTs7Ozs7O2tCQXRNbUJKLE8iLCJmaWxlIjoiQ29tcGxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBaZXJvRGl2aXNpb25FcnJvciBmcm9tICcuL1plcm9EaXZpc2lvbkVycm9yJyA7XG5cbmltcG9ydCBDT01QTEVYX0RFRkFVTFRfRElTUExBWSBmcm9tICcuL0NPTVBMRVhfREVGQVVMVF9ESVNQTEFZJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBsZXgge1xuXG5cdGNvbnN0cnVjdG9yICggcmVwcmVzZW50YXRpb24gLCByZWFsICwgaW1nICkge1xuXHRcdHRoaXMucmVwcmVzZW50YXRpb24gPSByZXByZXNlbnRhdGlvbiA7XG5cdFx0dGhpcy5yZWFsID0gcmVhbCA7XG5cdFx0dGhpcy5pbWcgPSBpbWcgO1xuXHR9XG5cblx0bW92ZSAoIG90aGVyICkge1xuXHRcdG90aGVyLnJlcHJlc2VudGF0aW9uID0gdGhpcy5yZXByZXNlbnRhdGlvbiA7XG5cdFx0b3RoZXIucmVhbCA9IHRoaXMucmVhbCA7XG5cdFx0b3RoZXIuaW1nID0gdGhpcy5pbWcgO1xuXHRcdHJldHVybiBvdGhlciA7XG5cdH1cblxuXHRjb3B5ICggKSB7XG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLnJlcHJlc2VudGF0aW9uICwgdGhpcy5yZWFsICwgdGhpcy5pbWcgKSA7XG5cdH1cblxuXHR0b1N0cmluZyAoIHJlcHJlc2VudGF0aW9uID0gQ09NUExFWF9ERUZBVUxUX0RJU1BMQVkgKSB7XG5cdFx0Ly8gVE9ETyB1c2UgcHJvcGVyIHJlcHJlc2VudGF0aW9uIGNvbnZlcnNpb25cblx0XHRyZXR1cm4gdGhpcy5yZXByZXNlbnRhdGlvbi5rZXJuZWwuc3RyaW5naWZ5KCB0aGlzLnJlYWwgLCB0aGlzLmltZyApIDtcblx0fVxuXG5cdGFkZCAoIG90aGVyICkge1xuXG5cdFx0Y29uc3QgWyByZWFsICwgaW1nIF0gPSB0aGlzLnJlcHJlc2VudGF0aW9uLmtlcm5lbC5hZGQoIHRoaXMucmVhbCAsIHRoaXMuaW1nICwgb3RoZXIucmVhbCAsIG90aGVyLmltZyApIDtcblxuXHRcdHJldHVybiBuZXcgQ29tcGxleCggdGhpcy5yZXByZXNlbnRhdGlvbiAsIHJlYWwgLCBpbWcgKSA7XG5cblx0fVxuXG5cdGlhZGQgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMuYWRkKG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0c3ViICggb3RoZXIgKSB7XG5cblx0XHRjb25zdCBbIHJlYWwgLCBpbWcgXSA9IHRoaXMucmVwcmVzZW50YXRpb24ua2VybmVsLnN1YiggdGhpcy5yZWFsICwgdGhpcy5pbWcgLCBvdGhlci5yZWFsICwgb3RoZXIuaW1nICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLnJlcHJlc2VudGF0aW9uICwgcmVhbCAsIGltZyApIDtcblxuXHR9XG5cblx0aXN1YiAoIG90aGVyICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5zdWIob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRtdWwgKCBvdGhlciApIHtcblxuXHRcdGNvbnN0IFsgcmVhbCAsIGltZyBdID0gdGhpcy5yZXByZXNlbnRhdGlvbi5rZXJuZWwubXVsKCB0aGlzLnJlYWwgLCB0aGlzLmltZyAsIG90aGVyLnJlYWwgLCBvdGhlci5pbWcgKSA7XG5cblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHRoaXMucmVwcmVzZW50YXRpb24gLCByZWFsICwgaW1nICkgO1xuXG5cdH1cblxuXHRpbXVsICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLm11bChvdGhlcikubW92ZSh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wdXRlcyA8Y29kZT50aGlzPC9jb2RlPiByYWlzZWQgdG8gdGhlIDxjb2RlPm90aGVyPC9jb2RlPnRoIHBvd2VyLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0NvbXBsZXh9IG90aGVyIFRoZSBwb3dlciB0byByYWlzZSA8Y29kZT50aGlzPC9jb2RlPiB0by5cblx0ICogQHJldHVybiB7Q29tcGxleH0gPGNvZGU+dGhpcyBeIG90aGVyPC9jb2RlPlxuXHQgKi9cblx0cG93ICggb3RoZXIgKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBmb3Igc3BlY2lhbCBjYXNlc1xuXHRcdGNvbnN0IFsgcmVhbCAsIGltZyBdID0gdGhpcy5yZXByZXNlbnRhdGlvbi5rZXJuZWwucG93KCB0aGlzLnJlYWwgLCB0aGlzLmltZyAsIG90aGVyLnJlYWwgLCBvdGhlci5pbWcgKSA7XG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLnJlcHJlc2VudGF0aW9uICwgcmVhbCAsIGltZyApIDtcblx0fVxuXG5cdGlwb3cgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMucG93KHgpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzcXVhcmUgKCApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplXG5cdFx0cmV0dXJuIHRoaXMubXVsKHRoaXMpO1xuXHR9XG5cblx0aXNxdWFyZSAoICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5zcXVhcmUoKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0ZGl2ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuX190cnVlZGl2X18oIG90aGVyICkgO1xuXHR9XG5cblx0aWRpdiAoIG90aGVyICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5kaXYob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRtb2QgKCBvdGhlciApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCBcImNhbid0IG1vZCBjb21wbGV4IG51bWJlcnMuXCIgKSA7XG5cdH1cblxuXHRpbW9kICggb3RoZXIgKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJjYW4ndCBtb2QgY29tcGxleCBudW1iZXJzLlwiICkgO1xuXHR9XG5cblx0ZGl2bW9kICggb3RoZXIgKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJjYW4ndCB0YWtlIGZsb29yIG9yIG1vZCBvZiBjb21wbGV4IG51bWJlci5cIiApIDtcblx0fVxuXG5cdF9fdHJ1ZWRpdl9fICggb3RoZXIgKSB7XG5cdFx0Y29uc3QgWyByZWFsICwgaW1nIF0gPSB0aGlzLnJlcHJlc2VudGF0aW9uLmtlcm5lbC5kaXYoIHRoaXMucmVhbCAsIHRoaXMuaW1nICwgb3RoZXIucmVhbCAsIG90aGVyLmltZyApIDtcblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHRoaXMucmVwcmVzZW50YXRpb24gLCByZWFsICwgaW1nICkgO1xuXHR9XG5cblx0X19mbG9vcmRpdl9fICggb3RoZXIgKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJjYW4ndCB0YWtlIGZsb29yIG9mIGNvbXBsZXggbnVtYmVyLlwiICkgO1xuXHR9XG5cblx0b3Bwb3NpdGUgKCApIHtcblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHRoaXMucmVwcmVzZW50YXRpb24gLCB0aGlzLnJlcHJlc2VudGF0aW9uLm1vZGVsLm5lZyggdGhpcy5yZWFsICkgLCB0aGlzLnJlcHJlc2VudGF0aW9uLm1vZGVsLm5lZyggdGhpcy5pbWcgKSApIDtcblx0fVxuXG5cdGNvbmp1Z2F0ZSAoICkge1xuXHRcdHJldHVybiBuZXcgQ29tcGxleCggdGhpcy5yZXByZXNlbnRhdGlvbiAsIHRoaXMucmVhbCAsIHRoaXMucmVwcmVzZW50YXRpb24ubW9kZWwubmVnKCB0aGlzLmltZyApICkgO1xuXHR9XG5cblx0bmVnYXRlICggKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdC8vIFRPRE8gd2hhdCB3b3VsZCBiZSB0aGUgbmFtZSBmb3IgaW4tcGxhY2UgY29uanVnYXRlIC1fLSA/XG5cdFx0cmV0dXJuIHRoaXMub3Bwb3NpdGUoKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0c2lnbnVtICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXN6ZXJvKCkgPyB0aGlzIDogdGhpcy5kaXZpZGVfa25vd2luZ19tb2RlbF9jb250YWlucyggdGhpcy5hYnMoKSApIDtcblx0fVxuXG5cdGlzemVybyAoICkge1xuXHRcdHJldHVybiB0aGlzLnJlcHJlc2VudGF0aW9uLm1vZGVsLmVxKCB0aGlzLnJlcHJlc2VudGF0aW9uLm1vZGVsLiQwKCkgLCB0aGlzLnJlYWwgKSAmJlxuXHRcdHRoaXMucmVwcmVzZW50YXRpb24ubW9kZWwuZXEoIHRoaXMucmVwcmVzZW50YXRpb24ubW9kZWwuJDAoKSAsIHRoaXMuaW1nICkgO1xuXHR9XG5cblx0aXNvbmUgKCApIHtcblx0XHRyZXR1cm4gdGhpcy5yZXByZXNlbnRhdGlvbi5tb2RlbC5lcSggdGhpcy5yZXByZXNlbnRhdGlvbi5tb2RlbC4kMSgpICwgdGhpcy5yZWFsICkgJiZcblx0XHR0aGlzLnJlcHJlc2VudGF0aW9uLm1vZGVsLmVxKCB0aGlzLnJlcHJlc2VudGF0aW9uLm1vZGVsLiQwKCkgLCB0aGlzLmltZyApIDtcblx0fVxuXG5cdG5vbnplcm8gKCApIHtcblx0XHRyZXR1cm4gIXRoaXMuaXN6ZXJvKCk7XG5cdH1cblxuXHRkaXZpZGVzICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIG90aGVyLm1vZCggdGhpcyApLmlzemVybyggKSA7XG5cdH1cblxuXHRkaXZpZGVfa25vd2luZ19kaXZpc2libGVfYnkgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5kaXYoIG90aGVyICkgO1xuXHR9XG5cblx0ZGl2aWRlX2tub3dpbmdfbW9kZWxfY29udGFpbnMgKCBvdGhlciApIHtcblx0XHRjb25zdCByZWFsID0gdGhpcy5yZXByZXNlbnRhdGlvbi5tb2RlbC5kaXYoIHRoaXMucmVhbCAsIG90aGVyICkgO1xuXHRcdGNvbnN0IGltZyA9IHRoaXMucmVwcmVzZW50YXRpb24ubW9kZWwuZGl2KCB0aGlzLmltZyAsIG90aGVyICkgO1xuXHRcdHJldHVybiBuZXcgQ29tcGxleCggdGhpcy5yZXByZXNlbnRhdGlvbiAsIHJlYWwgLCBpbWcgKSA7XG5cdH1cblxuXHRhYnMgKCApIHtcblx0XHRyZXR1cm4gdGhpcy5yZXByZXNlbnRhdGlvbi5rZXJuZWwuYWJzKCB0aGlzLnJlYWwgLCB0aGlzLmltZyApIDtcblx0fVxuXG5cdGNtcCAoIG90aGVyICkge1xuXHRcdC8vIFRPRE8gY291bGQgYWxzbyBiZVxuXHRcdC8vIHRocm93IFR5cGVFcnJvcjogbm8gb3JkZXJpbmcgcmVsYXRpb24gaXMgZGVmaW5lZCBmb3IgY29tcGxleCBudW1iZXJzXG5cdFx0cmV0dXJuIHRoaXMucmVwcmVzZW50YXRpb24ubW9kZWwuaW5jcmVhc2luZyggdGhpcy5hYnMoKSAsIG90aGVyLmFicygpICkgO1xuXHR9XG5cblx0ZXEgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5yZXByZXNlbnRhdGlvbi5tb2RlbC5lcSh0aGlzLnJlYWwsIG90aGVyLnJlYWwpICYmIHRoaXMucmVwcmVzZW50YXRpb24ubW9kZWwuZXEodGhpcy5pbWcsIG90aGVyLmltZykgO1xuXHR9XG5cblx0bmUgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gIXRoaXMuZXEob3RoZXIpIDtcblx0fVxuXG5cdGdlICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApID49IDAgO1xuXHR9XG5cblx0Z3QgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPiAwIDtcblx0fVxuXG5cdGxlICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApIDw9IDAgO1xuXHR9XG5cblx0bHQgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5jbXAoIG90aGVyICkgPCAwIDtcblx0fVxuXG59XG4iXX0=