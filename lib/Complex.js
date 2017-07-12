'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ZeroDivisionError = require('./ZeroDivisionError');

var _ZeroDivisionError2 = _interopRequireDefault(_ZeroDivisionError);

var _jsNumber = require('@aureooms/js-number');

var _COMPLEX_DEFAULT_CARTESIAN_KERNEL = require('./COMPLEX_DEFAULT_CARTESIAN_KERNEL');

var _COMPLEX_DEFAULT_CARTESIAN_KERNEL2 = _interopRequireDefault(_COMPLEX_DEFAULT_CARTESIAN_KERNEL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stringify = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.stringify,
    _add = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.add,
    _sub = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.sub,
    _mul = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.mul,
    div = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.div,
    _abs = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.abs,
    arg = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.arg,
    pow = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.pow,
    exp = _COMPLEX_DEFAULT_CARTESIAN_KERNEL2.default.exp;

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
			var representation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_DISPLAY_REPRESENTATION;

			return stringify(this.real, this.img);
		}
	}, {
		key: 'add',
		value: function add(other) {
			var _add2 = _add(this.real, this.img, other.real, other.img),
			    _add3 = _slicedToArray(_add2, 2),
			    real = _add3[0],
			    img = _add3[1];

			return Complex(this.representation, real, img);
		}
	}, {
		key: 'iadd',
		value: function iadd(other) {
			return this.add(other).move(this);
		}
	}, {
		key: 'sub',
		value: function sub(other) {
			var _sub2 = _sub(this.real, this.img, other.real, other.img),
			    _sub3 = _slicedToArray(_sub2, 2),
			    real = _sub3[0],
			    img = _sub3[1];

			return Complex(this.representation, real, img);
		}
	}, {
		key: 'isub',
		value: function isub(other) {
			return this.sub(other).move(this);
		}
	}, {
		key: 'mul',
		value: function mul(other) {
			var _mul2 = _mul(this.real, this.img, other.real, other.img),
			    _mul3 = _slicedToArray(_mul2, 2),
			    real = _mul3[0],
			    img = _mul3[1];

			return Complex(this.representation, real, img);
		}
	}, {
		key: 'imul',
		value: function imul(other) {
			// TODO optimize but be careful with side effects
			return this.mul(other).move(this);
		}

		/**
   * Computes <code>this</code> raised to the <code>x</code>th power.
   * <code>x</code> is a double smaller or equal to 2^53.
   *
   * @param {Number} x The power to raise <code>this</code> to.
   * @return {Integer} <code>this ^ x</code>
   */

	}, {
		key: 'pow',
		value: function pow(x) {
			return this.polar().pow(x.polar()).cartesian();
		}
	}, {
		key: 'ipow',
		value: function ipow(x) {
			// TODO optimize but be careful with side effects
			return this.pow(x).move(this);
		}
	}, {
		key: 'square',
		value: function square() {
			// TODO optimize but be careful with side effects
			return this.pow(2);
		}
	}, {
		key: 'isquare',
		value: function isquare() {
			// TODO optimize
			return this.ipow(2);
		}
	}, {
		key: 'div',
		value: function div(other) {
			return this.__truediv__(other);
		}
	}, {
		key: 'idiv',
		value: function idiv(other) {
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
			var _div = div(this.real, this.img, other.real, other.img),
			    _div2 = _slicedToArray(_div, 2),
			    real = _div2[0],
			    img = _div2[1];

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
			return new Complex(this.representation, ~this.is_negative, this.real, this.img);
		}
	}, {
		key: 'conjugate',
		value: function conjugate() {
			return new Complex(this.representation, ~this.is_negative, this.real, this.img);
		}
	}, {
		key: 'negate',
		value: function negate() {
			// TODO optimize but be careful with side effects
			return this.opposite().move(this);
		}
	}, {
		key: 'sign',
		value: function sign() {
			return this.iszero() ? 0 : this.is_negative ? -1 : 1;
		}
	}, {
		key: 'iszero',
		value: function iszero() {
			return _jz(this.real, this.img);
		}
	}, {
		key: 'isone',
		value: function isone() {
			if (this.is_negative) return false;
			return _eq(this.limbs, 0, this.limbs.length, [1], 0, 1);
		}
	}, {
		key: 'nonzero',
		value: function nonzero() {
			return !this.iszero();
		}
	}, {
		key: 'bin',
		value: function bin() {
			return this.toString(2);
		}
	}, {
		key: 'oct',
		value: function oct() {
			return this.toString(8);
		}
	}, {
		key: 'hex',
		value: function hex() {
			return this.toString(16);
		}
	}, {
		key: 'digits',
		value: function digits() {
			var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_DISPLAY_BASE;

			return convert(this.base, base, this.limbs, 0, this.limbs.length).reverse();
		}
	}, {
		key: 'bits',
		value: function bits() {
			return this.digits(2);
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
		key: 'abs',
		value: function abs() {
			return _abs(this.real, this.img);
		}
	}, {
		key: 'cmp',
		value: function cmp(other) {
			return (0, _jsNumber.increasing)(this.abs(), other.abs());
		}
	}, {
		key: 'eq',
		value: function eq(other) {
			return this.cmp(other) === 0;
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
	}, {
		key: 'ne',
		value: function ne(other) {
			return this.cmp(other) !== 0;
		}
	}]);

	return Complex;
}();

exports.default = Complex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wbGV4LmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeSIsImFkZCIsInN1YiIsIm11bCIsImRpdiIsImFicyIsImFyZyIsInBvdyIsImV4cCIsIkNvbXBsZXgiLCJyZXByZXNlbnRhdGlvbiIsInJlYWwiLCJpbWciLCJvdGhlciIsIkRFRkFVTFRfRElTUExBWV9SRVBSRVNFTlRBVElPTiIsIm1vdmUiLCJ4IiwicG9sYXIiLCJjYXJ0ZXNpYW4iLCJpcG93IiwiX190cnVlZGl2X18iLCJUeXBlRXJyb3IiLCJpc19uZWdhdGl2ZSIsIm9wcG9zaXRlIiwiaXN6ZXJvIiwiX2p6IiwiX2VxIiwibGltYnMiLCJsZW5ndGgiLCJ0b1N0cmluZyIsImJhc2UiLCJERUZBVUxUX0RJU1BMQVlfQkFTRSIsImNvbnZlcnQiLCJyZXZlcnNlIiwiZGlnaXRzIiwibW9kIiwiY21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7SUFHQ0EsUyw4Q0FBQUEsUztJQUNBQyxJLDhDQUFBQSxHO0lBQ0FDLEksOENBQUFBLEc7SUFDQUMsSSw4Q0FBQUEsRztJQUNBQyxHLDhDQUFBQSxHO0lBQ0FDLEksOENBQUFBLEc7SUFDQUMsRyw4Q0FBQUEsRztJQUNBQyxHLDhDQUFBQSxHO0lBQ0FDLEcsOENBQUFBLEc7O0lBR29CQyxPO0FBRXBCLGtCQUFjQyxjQUFkLEVBQStCQyxJQUEvQixFQUFzQ0MsR0FBdEMsRUFBNEM7QUFBQTs7QUFDM0MsT0FBS0YsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQTs7Ozt1QkFFTUMsSyxFQUFRO0FBQ2RBLFNBQU1ILGNBQU4sR0FBdUIsS0FBS0EsY0FBNUI7QUFDQUcsU0FBTUYsSUFBTixHQUFhLEtBQUtBLElBQWxCO0FBQ0FFLFNBQU1ELEdBQU4sR0FBWSxLQUFLQSxHQUFqQjtBQUNBLFVBQU9DLEtBQVA7QUFD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Q0E7OztxQkFFSUEsSyxFQUFRO0FBQ1osVUFBTyxLQUFLdUIsR0FBTCxDQUFVdkIsS0FBVixNQUFzQixDQUE3QjtBQUNBOzs7Ozs7a0JBM01tQkosTyIsImZpbGUiOiJDb21wbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFplcm9EaXZpc2lvbkVycm9yIGZyb20gJy4vWmVyb0RpdmlzaW9uRXJyb3InIDtcblxuaW1wb3J0IHsgaW5jcmVhc2luZyB9IGZyb20gJ0BhdXJlb29tcy9qcy1udW1iZXInIDtcblxuaW1wb3J0IENPTVBMRVhfREVGQVVMVF9DQVJURVNJQU5fS0VSTkVMIGZyb20gJy4vQ09NUExFWF9ERUZBVUxUX0NBUlRFU0lBTl9LRVJORUwnIDtcblxuY29uc3Qge1xuXHRzdHJpbmdpZnkgLFxuXHRhZGQgLFxuXHRzdWIgLFxuXHRtdWwgLFxuXHRkaXYgLFxuXHRhYnMgLFxuXHRhcmcgLFxuXHRwb3cgLFxuXHRleHAgLFxufSA9IENPTVBMRVhfREVGQVVMVF9DQVJURVNJQU5fS0VSTkVMIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGxleCB7XG5cblx0Y29uc3RydWN0b3IgKCByZXByZXNlbnRhdGlvbiAsIHJlYWwgLCBpbWcgKSB7XG5cdFx0dGhpcy5yZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uIDtcblx0XHR0aGlzLnJlYWwgPSByZWFsIDtcblx0XHR0aGlzLmltZyA9IGltZyA7XG5cdH1cblxuXHRtb3ZlICggb3RoZXIgKSB7XG5cdFx0b3RoZXIucmVwcmVzZW50YXRpb24gPSB0aGlzLnJlcHJlc2VudGF0aW9uIDtcblx0XHRvdGhlci5yZWFsID0gdGhpcy5yZWFsIDtcblx0XHRvdGhlci5pbWcgPSB0aGlzLmltZyA7XG5cdFx0cmV0dXJuIG90aGVyIDtcblx0fVxuXG5cdGNvcHkgKCApIHtcblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHRoaXMucmVwcmVzZW50YXRpb24gLCB0aGlzLnJlYWwgLCB0aGlzLmltZyApIDtcblx0fVxuXG5cdHRvU3RyaW5nICggcmVwcmVzZW50YXRpb24gPSBERUZBVUxUX0RJU1BMQVlfUkVQUkVTRU5UQVRJT04gKSB7XG5cdFx0cmV0dXJuIHN0cmluZ2lmeSggdGhpcy5yZWFsICwgdGhpcy5pbWcgKSA7XG5cdH1cblxuXHRhZGQgKCBvdGhlciApIHtcblxuXHRcdGNvbnN0IFsgcmVhbCAsIGltZyBdID0gYWRkKCB0aGlzLnJlYWwgLCB0aGlzLmltZyAsIG90aGVyLnJlYWwgLCBvdGhlci5pbWcgKSA7XG5cblx0XHRyZXR1cm4gQ29tcGxleCggdGhpcy5yZXByZXNlbnRhdGlvbiAsIHJlYWwgLCBpbWcgKSA7XG5cblx0fVxuXG5cdGlhZGQgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5hZGQob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzdWIgKCBvdGhlciApIHtcblxuXHRcdGNvbnN0IFsgcmVhbCAsIGltZyBdID0gc3ViKCB0aGlzLnJlYWwgLCB0aGlzLmltZyAsIG90aGVyLnJlYWwgLCBvdGhlci5pbWcgKSA7XG5cblx0XHRyZXR1cm4gQ29tcGxleCggdGhpcy5yZXByZXNlbnRhdGlvbiAsIHJlYWwgLCBpbWcgKSA7XG5cblx0fVxuXG5cdGlzdWIgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5zdWIob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRtdWwgKCBvdGhlciApIHtcblxuXHRcdGNvbnN0IFsgcmVhbCAsIGltZyBdID0gbXVsKCB0aGlzLnJlYWwgLCB0aGlzLmltZyAsIG90aGVyLnJlYWwgLCBvdGhlci5pbWcgKSA7XG5cblx0XHRyZXR1cm4gQ29tcGxleCggdGhpcy5yZXByZXNlbnRhdGlvbiAsIHJlYWwgLCBpbWcgKSA7XG5cblx0fVxuXG5cdGltdWwgKCBvdGhlciApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplIGJ1dCBiZSBjYXJlZnVsIHdpdGggc2lkZSBlZmZlY3RzXG5cdFx0cmV0dXJuIHRoaXMubXVsKG90aGVyKS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXB1dGVzIDxjb2RlPnRoaXM8L2NvZGU+IHJhaXNlZCB0byB0aGUgPGNvZGU+eDwvY29kZT50aCBwb3dlci5cblx0ICogPGNvZGU+eDwvY29kZT4gaXMgYSBkb3VibGUgc21hbGxlciBvciBlcXVhbCB0byAyXjUzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge051bWJlcn0geCBUaGUgcG93ZXIgdG8gcmFpc2UgPGNvZGU+dGhpczwvY29kZT4gdG8uXG5cdCAqIEByZXR1cm4ge0ludGVnZXJ9IDxjb2RlPnRoaXMgXiB4PC9jb2RlPlxuXHQgKi9cblx0cG93ICggeCApIHtcblx0XHRyZXR1cm4gdGhpcy5wb2xhciggKS5wb3coIHgucG9sYXIoICkgKS5jYXJ0ZXNpYW4oICkgO1xuXHR9XG5cblx0aXBvdyAoIHggKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLnBvdyh4KS5tb3ZlKHRoaXMpO1xuXHR9XG5cblx0c3F1YXJlICggKSB7XG5cdFx0Ly8gVE9ETyBvcHRpbWl6ZSBidXQgYmUgY2FyZWZ1bCB3aXRoIHNpZGUgZWZmZWN0c1xuXHRcdHJldHVybiB0aGlzLnBvdygyKTtcblx0fVxuXG5cdGlzcXVhcmUgKCApIHtcblx0XHQvLyBUT0RPIG9wdGltaXplXG5cdFx0cmV0dXJuIHRoaXMuaXBvdygyKTtcblx0fVxuXG5cdGRpdiAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLl9fdHJ1ZWRpdl9fKCBvdGhlciApIDtcblx0fVxuXG5cdGlkaXYgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gdGhpcy5kaXYob3RoZXIpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRtb2QgKCBvdGhlciApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCBcImNhbid0IG1vZCBjb21wbGV4IG51bWJlcnMuXCIgKSA7XG5cdH1cblxuXHRpbW9kICggb3RoZXIgKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJjYW4ndCBtb2QgY29tcGxleCBudW1iZXJzLlwiICkgO1xuXHR9XG5cblx0ZGl2bW9kICggb3RoZXIgKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJjYW4ndCB0YWtlIGZsb29yIG9yIG1vZCBvZiBjb21wbGV4IG51bWJlci5cIiApIDtcblx0fVxuXG5cdF9fdHJ1ZWRpdl9fICggb3RoZXIgKSB7XG5cdFx0Y29uc3QgWyByZWFsICwgaW1nIF0gPSBkaXYoIHRoaXMucmVhbCAsIHRoaXMuaW1nICwgb3RoZXIucmVhbCAsIG90aGVyLmltZyApIDtcblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHRoaXMucmVwcmVzZW50YXRpb24gLCByZWFsICwgaW1nICkgO1xuXHR9XG5cblx0X19mbG9vcmRpdl9fICggb3RoZXIgKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJjYW4ndCB0YWtlIGZsb29yIG9mIGNvbXBsZXggbnVtYmVyLlwiICkgO1xuXHR9XG5cblx0b3Bwb3NpdGUgKCApIHtcblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHRoaXMucmVwcmVzZW50YXRpb24gLCB+dGhpcy5pc19uZWdhdGl2ZSAsIHRoaXMucmVhbCAsIHRoaXMuaW1nICkgO1xuXHR9XG5cblx0Y29uanVnYXRlICggKSB7XG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLnJlcHJlc2VudGF0aW9uICwgfnRoaXMuaXNfbmVnYXRpdmUgLCB0aGlzLnJlYWwgLCB0aGlzLmltZyApIDtcblx0fVxuXG5cdG5lZ2F0ZSAoICkge1xuXHRcdC8vIFRPRE8gb3B0aW1pemUgYnV0IGJlIGNhcmVmdWwgd2l0aCBzaWRlIGVmZmVjdHNcblx0XHRyZXR1cm4gdGhpcy5vcHBvc2l0ZSgpLm1vdmUodGhpcyk7XG5cdH1cblxuXHRzaWduICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXN6ZXJvKCkgPyAwIDogdGhpcy5pc19uZWdhdGl2ZSA/IC0xIDogMSA7XG5cdH1cblxuXHRpc3plcm8gKCApIHtcblx0XHRyZXR1cm4gX2p6KCB0aGlzLnJlYWwgLCB0aGlzLmltZyApIDtcblx0fVxuXG5cdGlzb25lICggKSB7XG5cdFx0aWYgKCB0aGlzLmlzX25lZ2F0aXZlICkgcmV0dXJuIGZhbHNlIDtcblx0XHRyZXR1cm4gX2VxKCB0aGlzLmxpbWJzICwgMCAsIHRoaXMubGltYnMubGVuZ3RoICwgWyAxIF0gLCAwICwgMSApIDtcblx0fVxuXG5cdG5vbnplcm8gKCApIHtcblx0XHRyZXR1cm4gIXRoaXMuaXN6ZXJvKCk7XG5cdH1cblxuXHRiaW4gKCApIHtcblx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggMiApIDtcblx0fVxuXG5cdG9jdCAoICkge1xuXHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCA4ICkgO1xuXHR9XG5cblx0aGV4ICggKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoIDE2ICkgO1xuXHR9XG5cblx0ZGlnaXRzICggYmFzZSA9IERFRkFVTFRfRElTUExBWV9CQVNFICkge1xuXHRcdHJldHVybiBjb252ZXJ0KCB0aGlzLmJhc2UgLCBiYXNlICwgdGhpcy5saW1icyAsIDAgLCB0aGlzLmxpbWJzLmxlbmd0aCApLnJldmVyc2UoICkgO1xuXHR9XG5cblx0Yml0cyAoICkge1xuXHRcdHJldHVybiB0aGlzLmRpZ2l0cyggMiApIDtcblx0fVxuXG5cdGRpdmlkZXMgKCBvdGhlciApIHtcblx0XHRyZXR1cm4gb3RoZXIubW9kKCB0aGlzICkuaXN6ZXJvKCApIDtcblx0fVxuXG5cdGRpdmlkZV9rbm93aW5nX2RpdmlzaWJsZV9ieSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmRpdiggb3RoZXIgKSA7XG5cdH1cblxuXHRhYnMgKCApIHtcblx0XHRyZXR1cm4gYWJzKCB0aGlzLnJlYWwgLCB0aGlzLmltZyApIDtcblx0fVxuXG5cdGNtcCAoIG90aGVyICkge1xuXHRcdHJldHVybiBpbmNyZWFzaW5nKCB0aGlzLmFicygpICwgb3RoZXIuYWJzKCkgKSA7XG5cdH1cblxuXHRlcSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSA9PT0gMCA7XG5cdH1cblxuXHRnZSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSA+PSAwIDtcblx0fVxuXG5cdGd0ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApID4gMCA7XG5cdH1cblxuXHRsZSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSA8PSAwIDtcblx0fVxuXG5cdGx0ICggb3RoZXIgKSB7XG5cdFx0cmV0dXJuIHRoaXMuY21wKCBvdGhlciApIDwgMCA7XG5cdH1cblxuXHRuZSAoIG90aGVyICkge1xuXHRcdHJldHVybiB0aGlzLmNtcCggb3RoZXIgKSAhPT0gMCA7XG5cdH1cblxufVxuIl19