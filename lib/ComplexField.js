'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Complex = require('./Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _COMPLEX_DEFAULT_DISPLAY = require('./COMPLEX_DEFAULT_DISPLAY');

var _COMPLEX_DEFAULT_DISPLAY2 = _interopRequireDefault(_COMPLEX_DEFAULT_DISPLAY);

var _jsError = require('@aureooms/js-error');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new _jsError.TypeError("Cannot call a class as a function"); } }

var ComplexField = function () {
	function ComplexField(name, representation) {
		_classCallCheck(this, ComplexField);

		this.name = name;
		this.base = representation;
	}

	_createClass(ComplexField, [{
		key: 'characteristic',
		value: function characteristic() {
			return this.$0();
		}
	}, {
		key: 'from',
		value: function from(object) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var is_negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


			if (object === null || object === undefined) return this.$0();

			switch (object.constructor.prototype) {

				case Number.prototype:
					if (base !== undefined) throw new _jsError.ValueError('ComplexField#from: using the base parameter does not make sense when passing a Number.');
					return this.from_number(object, is_negative);

				case String.prototype:
					if (base === undefined) base = _COMPLEX_DEFAULT_DISPLAY2.default;
					return this.from_string(object, base, is_negative);

				case Array.prototype:
					if (base === undefined) base = this.base;
					return this.from_digits(object, base, is_negative);

				case Boolean.prototype:
					if (base !== undefined) throw new _jsError.ValueError('ComplexField#from: using the base parameter does not make sense when passing a Boolean.');
					return this.from_number(+object, is_negative);

				case _Complex2.default.prototype:
					if (base !== undefined) throw new _jsError.ValueError('ComplexField#from: using the base parameter does not make sense when passing an Complex.');
					return new _Complex2.default(object.base, object.is_negative ^ is_negative, object.limbs);

				default:
					throw new _jsError.TypeError('ComplexField#from cannot handle ' + object.constructor.prototype);

			}
		}
	}, {
		key: 'from_number',
		value: function from_number(number) {
			var is_negative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


			if (number < 0) {
				is_negative = ~is_negative;
				number = -number;
			}

			var limbs = convert(0x20000000000000, this.base, [number], 0, 1);

			return new _Complex2.default(this.base, is_negative, limbs);
		}
	}, {
		key: 'from_string',
		value: function from_string(string) {
			var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
			var is_negative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


			if (string.length === 0) throw new _jsError.ValueError('ComplexField#from_string cannot parse empty string.');

			if (string[0] === '-') return this.from_string(string.slice(1), base, ~is_negative);

			if (string[0] === '+') return this.from_string(string.slice(1), base, is_negative);

			var limbs = parse(base, this.base, string);

			return new _Complex2.default(this.base, is_negative, limbs);
		}
	}, {
		key: 'from_digits',
		value: function from_digits(digits, base, is_negative) {

			var limbs = convert(base, this.base, digits.slice().reverse(), 0, digits.length);

			return new _Complex2.default(this.base, is_negative, limbs);
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.name;
		}
	}, {
		key: '$0',
		value: function $0() {
			return new _Complex2.default(this.base, 0, [0]);
		}
	}, {
		key: '$1',
		value: function $1() {
			return new _Complex2.default(this.base, 0, [1]);
		}
	}]);

	return ComplexField;
}();

exports.default = ComplexField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wbGV4RmllbGQuanMiXSwibmFtZXMiOlsiQ29tcGxleEZpZWxkIiwibmFtZSIsInJlcHJlc2VudGF0aW9uIiwiYmFzZSIsIiQwIiwib2JqZWN0IiwidW5kZWZpbmVkIiwiaXNfbmVnYXRpdmUiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIk51bWJlciIsImZyb21fbnVtYmVyIiwiU3RyaW5nIiwiZnJvbV9zdHJpbmciLCJBcnJheSIsImZyb21fZGlnaXRzIiwiQm9vbGVhbiIsImxpbWJzIiwibnVtYmVyIiwiY29udmVydCIsInN0cmluZyIsImxlbmd0aCIsInNsaWNlIiwicGFyc2UiLCJkaWdpdHMiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxZO0FBRXBCLHVCQUFjQyxJQUFkLEVBQXFCQyxjQUFyQixFQUFzQztBQUFBOztBQUNyQyxPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLRSxJQUFMLEdBQVlELGNBQVo7QUFDQTs7OzttQ0FFa0I7QUFDbEIsVUFBTyxLQUFLRSxFQUFMLEVBQVA7QUFDQTs7O3VCQUVNQyxNLEVBQThDO0FBQUEsT0FBckNGLElBQXFDLHVFQUE5QkcsU0FBOEI7QUFBQSxPQUFsQkMsV0FBa0IsdUVBQUosQ0FBSTs7O0FBRXBELE9BQUtGLFdBQVcsSUFBWCxJQUFtQkEsV0FBV0MsU0FBbkMsRUFBK0MsT0FBTyxLQUFLRixFQUFMLEVBQVA7O0FBRS9DLFdBQVNDLE9BQU9HLFdBQVAsQ0FBbUJDLFNBQTVCOztBQUVDLFNBQUtDLE9BQU9ELFNBQVo7QUFDQyxTQUFLTixTQUFTRyxTQUFkLEVBQTBCLE1BQU0sd0JBQWUsd0ZBQWYsQ0FBTjtBQUMxQixZQUFPLEtBQUtLLFdBQUwsQ0FBa0JOLE1BQWxCLEVBQTJCRSxXQUEzQixDQUFQOztBQUVELFNBQUtLLE9BQU9ILFNBQVo7QUFDQyxTQUFLTixTQUFTRyxTQUFkLEVBQTBCSDtBQUMxQixZ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ZmlsZSI6IkNvbXBsZXhGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wbGV4IGZyb20gJy4vQ29tcGxleCcgO1xuaW1wb3J0IENPTVBMRVhfREVGQVVMVF9ESVNQTEFZIGZyb20gJy4vQ09NUExFWF9ERUZBVUxUX0RJU1BMQVknIDtcbmltcG9ydCB7IFR5cGVFcnJvciAsIFZhbHVlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGxleEZpZWxkIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgLCByZXByZXNlbnRhdGlvbiApIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIDtcblx0XHR0aGlzLmJhc2UgPSByZXByZXNlbnRhdGlvbiA7XG5cdH1cblxuXHRjaGFyYWN0ZXJpc3RpYyAoICkge1xuXHRcdHJldHVybiB0aGlzLiQwKCkgO1xuXHR9XG5cblx0ZnJvbSAoIG9iamVjdCAsIGJhc2UgPSB1bmRlZmluZWQgLCBpc19uZWdhdGl2ZSA9IDAgKSB7XG5cblx0XHRpZiAoIG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCApIHJldHVybiB0aGlzLiQwKCk7XG5cblx0XHRzd2l0Y2ggKCBvYmplY3QuY29uc3RydWN0b3IucHJvdG90eXBlICkge1xuXG5cdFx0XHRjYXNlIE51bWJlci5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIGJhc2UgIT09IHVuZGVmaW5lZCApIHRocm93IG5ldyBWYWx1ZUVycm9yKCdDb21wbGV4RmllbGQjZnJvbTogdXNpbmcgdGhlIGJhc2UgcGFyYW1ldGVyIGRvZXMgbm90IG1ha2Ugc2Vuc2Ugd2hlbiBwYXNzaW5nIGEgTnVtYmVyLicpIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9udW1iZXIoIG9iamVjdCAsIGlzX25lZ2F0aXZlICkgO1xuXG5cdFx0XHRjYXNlIFN0cmluZy5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIGJhc2UgPT09IHVuZGVmaW5lZCApIGJhc2UgPSBDT01QTEVYX0RFRkFVTFRfRElTUExBWSA7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZyb21fc3RyaW5nKCBvYmplY3QgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSA7XG5cblx0XHRcdGNhc2UgQXJyYXkucHJvdG90eXBlIDpcblx0XHRcdFx0aWYgKCBiYXNlID09PSB1bmRlZmluZWQgKSBiYXNlID0gdGhpcy5iYXNlIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9kaWdpdHMoIG9iamVjdCAsIGJhc2UgLCBpc19uZWdhdGl2ZSApIDtcblxuXHRcdFx0Y2FzZSBCb29sZWFuLnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggYmFzZSAhPT0gdW5kZWZpbmVkICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoJ0NvbXBsZXhGaWVsZCNmcm9tOiB1c2luZyB0aGUgYmFzZSBwYXJhbWV0ZXIgZG9lcyBub3QgbWFrZSBzZW5zZSB3aGVuIHBhc3NpbmcgYSBCb29sZWFuLicpIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9udW1iZXIoICtvYmplY3QgLCBpc19uZWdhdGl2ZSApIDtcblxuXHRcdFx0Y2FzZSBDb21wbGV4LnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggYmFzZSAhPT0gdW5kZWZpbmVkICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoJ0NvbXBsZXhGaWVsZCNmcm9tOiB1c2luZyB0aGUgYmFzZSBwYXJhbWV0ZXIgZG9lcyBub3QgbWFrZSBzZW5zZSB3aGVuIHBhc3NpbmcgYW4gQ29tcGxleC4nKSA7XG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcGxleCggb2JqZWN0LmJhc2UgLCBvYmplY3QuaXNfbmVnYXRpdmUgXiBpc19uZWdhdGl2ZSAsIG9iamVjdC5saW1icyApIDtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgQ29tcGxleEZpZWxkI2Zyb20gY2Fubm90IGhhbmRsZSAke29iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGV9YCkgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmcm9tX251bWJlciAoIG51bWJlciAsIGlzX25lZ2F0aXZlID0gMCApIHtcblxuXHRcdGlmICggbnVtYmVyIDwgMCApIHtcblx0XHRcdGlzX25lZ2F0aXZlID0gfmlzX25lZ2F0aXZlIDtcblx0XHRcdG51bWJlciA9IC1udW1iZXIgO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxpbWJzID0gY29udmVydCggMHgyMDAwMDAwMDAwMDAwMCAsIHRoaXMuYmFzZSAsIFsgbnVtYmVyIF0gLCAwICwgMSApIDtcblxuXHRcdHJldHVybiBuZXcgQ29tcGxleCggdGhpcy5iYXNlICwgaXNfbmVnYXRpdmUgLCBsaW1icyApIDtcblxuXHR9XG5cblx0ZnJvbV9zdHJpbmcgKCBzdHJpbmcgLCBiYXNlID0gMTAgLCBpc19uZWdhdGl2ZSA9IDAgICkge1xuXG5cdFx0aWYgKCBzdHJpbmcubGVuZ3RoID09PSAwICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoICdDb21wbGV4RmllbGQjZnJvbV9zdHJpbmcgY2Fubm90IHBhcnNlIGVtcHR5IHN0cmluZy4nICkgO1xuXG5cdFx0aWYgKCBzdHJpbmdbMF0gPT09ICctJyApIHJldHVybiB0aGlzLmZyb21fc3RyaW5nKCBzdHJpbmcuc2xpY2UoMSkgLCBiYXNlICwgfmlzX25lZ2F0aXZlICkgO1xuXG5cdFx0aWYgKCBzdHJpbmdbMF0gPT09ICcrJyApIHJldHVybiB0aGlzLmZyb21fc3RyaW5nKCBzdHJpbmcuc2xpY2UoMSkgLCBiYXNlICwgaXNfbmVnYXRpdmUgKSA7XG5cblx0XHRjb25zdCBsaW1icyA9IHBhcnNlKCBiYXNlICwgdGhpcy5iYXNlICwgc3RyaW5nICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLmJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkgO1xuXG5cdH1cblxuXHRmcm9tX2RpZ2l0cyAoIGRpZ2l0cyAsIGJhc2UgLCBpc19uZWdhdGl2ZSApIHtcblxuXHRcdGNvbnN0IGxpbWJzID0gY29udmVydCggYmFzZSAsIHRoaXMuYmFzZSAsIGRpZ2l0cy5zbGljZSgpLnJldmVyc2UoKSAsIDAgLCBkaWdpdHMubGVuZ3RoICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLmJhc2UgLCBpc19uZWdhdGl2ZSAsIGxpbWJzICkgO1xuXG5cdH1cblxuXHR0b1N0cmluZyAoICkge1xuXHRcdHJldHVybiB0aGlzLm5hbWUgO1xuXHR9XG5cblx0JDAgKCApIHtcblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHRoaXMuYmFzZSAsIDAgLCBbIDAgXSApIDtcblx0fVxuXG5cdCQxICggKSB7XG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLmJhc2UgLCAwICwgWyAxIF0gKSA7XG5cdH1cblxufVxuIl19