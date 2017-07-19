'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new _jsError.TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
		this.representation = representation;
	}

	_createClass(ComplexField, [{
		key: 'characteristic',
		value: function characteristic() {
			return this.$0();
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.name;
		}
	}, {
		key: 'from',
		value: function from(object) {
			var representation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;


			if (object === null || object === undefined) return this.$0();

			switch (object.constructor.prototype) {

				case Number.prototype:
					if (representation !== undefined) throw new _jsError.ValueError('ComplexField#from: using the representation parameter does not make sense when passing a Number.');
					return this.from_number(object);

				case String.prototype:
					if (representation === undefined) representation = _COMPLEX_DEFAULT_DISPLAY2.default;
					return this.from_string(object, representation);

				case Array.prototype:
					if (representation === undefined) representation = this.representation;
					return new _Complex2.default(representation, object[0], object[1]);

				case Boolean.prototype:
					if (representation !== undefined) throw new _jsError.ValueError('ComplexField#from: using the representation parameter does not make sense when passing a Boolean.');
					var _representation$model = representation.model,
					    $0 = _representation$model.$0,
					    $1 = _representation$model.$1;

					return new _Complex2.default(representation, object ? $1() : $0(), $0());

				case _Complex2.default.prototype:
					if (representation !== undefined) throw new _jsError.ValueError('ComplexField#from: using the representation parameter does not make sense when passing an Complex.');
					return new _Complex2.default(object.representation, object.real, object.img);

				case Object.prototype:
					return new _Complex2.default(representation, object.real, object.img);

				default:
					throw new _jsError.TypeError('ComplexField#from cannot handle ' + object.constructor.prototype);

			}
		}
	}, {
		key: 'from_number',
		value: function from_number(number) {

			var real = this.representation.model.parse(number);
			var img = this.representation.model.$0();

			return new _Complex2.default(this.representation, real, img);
		}
	}, {
		key: 'from_string',
		value: function from_string(string) {
			var representation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _COMPLEX_DEFAULT_DISPLAY2.default;


			if (string.length === 0) throw new _jsError.ValueError('ComplexField#from_string cannot parse empty string.');

			var _representation$kerne = representation.kernel.parse(string, 0, string.length),
			    _representation$kerne2 = _slicedToArray(_representation$kerne, 2),
			    real = _representation$kerne2[0],
			    img = _representation$kerne2[1];

			// TODO should convert representations


			return new _Complex2.default(representation, real, img);
		}
	}, {
		key: '$0',
		value: function $0() {
			return new _Complex2.default(this.representation, 0, 0);
		}
	}, {
		key: '$1',
		value: function $1() {
			return new _Complex2.default(this.representation, 1, 0);
		}
	}, {
		key: '$j',
		value: function $j() {
			return new _Complex2.default(this.representation, 0, 1);
		}
	}]);

	return ComplexField;
}();

exports.default = ComplexField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wbGV4RmllbGQuanMiXSwibmFtZXMiOlsiQ29tcGxleEZpZWxkIiwibmFtZSIsInJlcHJlc2VudGF0aW9uIiwiJDAiLCJvYmplY3QiLCJ1bmRlZmluZWQiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIk51bWJlciIsImZyb21fbnVtYmVyIiwiU3RyaW5nIiwiZnJvbV9zdHJpbmciLCJBcnJheSIsIkJvb2xlYW4iLCJtb2RlbCIsIiQxIiwicmVhbCIsImltZyIsIk9iamVjdCIsIm51bWJlciIsInBhcnNlIiwic3RyaW5nIiwibGVuZ3RoIiwia2VybmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFk7QUFFcEIsdUJBQWNDLElBQWQsRUFBcUJDLGNBQXJCLEVBQXNDO0FBQUE7O0FBQ3JDLE9BQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0E7Ozs7bUNBRWtCO0FBQ2xCLFVBQU8sS0FBS0MsRUFBTCxFQUFQO0FBQ0E7Ozs2QkFFWTtBQUNaLFVBQU8sS0FBS0YsSUFBWjtBQUNBOzs7dUJBRU1HLE0sRUFBc0M7QUFBQSxPQUE3QkYsY0FBNkIsdUVBQVpHLFNBQVk7OztBQUU1QyxPQUFLRCxXQUFXLElBQVgsSUFBbUJBLFdBQVdDLFNBQW5DLEVBQStDLE9BQU8sS0FBS0YsRUFBTCxFQUFQOztBQUUvQyxXQUFTQyxPQUFPRSxXQUFQLENBQW1CQyxTQUE1Qjs7QUFFQyxTQUFLQyxPQUFPRCxTQUFaO0FBQ0MsU0FBS0wsbUJBQW1CRyxTQUF4QixFQUFvQyxNQUFNLHdCQUFlLGtHQUFmLENBQU47QUFDcEMsWUFBTyxLQUFLSSxXQUFMLENBQWtCTCxNQUFsQixDQUFQOztBQUVELFNBQUtNLE9BQU9ILFNBQVo7QUFDQyxTQUFLTCxtQkFBbUJHLFNBQXhCLEVBQW9DSDtBQUNwQyxZQUFPLEtBQUtTLFdBQUwsQ0FBa0JQLE1BQWxCLEVBQTJCRixjQUEzQixDQUFQOztBQUVELFNBQUtVLE1BQU1MLFNBQVg7QUFDQyxTQUFLTCxtQkFBbUJHLFNBQXhCLEVBQW9DSCxpQkFBaUIsS0FBS0EsY0FBdEI7QUFDcEMsWUFBTyxzQkFBYUEsY0FBYixFQUE4QkUsT0FBTyxDQUFQLENBQTlCLEVBQTBDQSxPQUFPLENBQVAsQ0FBMUMsQ0FBUDs7QUFFRCxTQUFLUyxRQUFRTixTQUFiO0FBQ0MsU0FBS0wsbUJBQW1CRyxTQUF4QixFQUFvQyxNQUFNLHdCQUFlLG1HQUFmLENBQU47QUFEckMsaUNBRXFCSCxlQUFlWSxLQUZwQztBQUFBLFNBRVNYLEVBRlQseUJBRVNBLEVBRlQ7QUFBQSxTQUVjWSxFQUZkLHlCQUVjQSxFQUZkOztBQUdDLFlBQU8sc0JBQWFiLGNBQWIsRUFBOEJFLFNBQVNXLElBQVQsR0FBZ0JaLElBQTlDLEVBQXFEQSxJQUFyRCxDQUFQOztBQUVELFNBQUssa0JBQVFJLFNBQWI7QUFDQyxTQUFLTCxtQkFBbUJHLFNBQXhCLEVBQW9DLE1BQU0sd0JBQWUsb0dBQWYsQ0FBTjtBQUNwQyxZQUFPLHNCQUFhRCxPQUFPRixjQUFwQixFQUFxQ0UsT0FBT1ksSUFBNUMsRUFBbURaLE9BQU9hLEdBQTFELENBQVA7O0FBRUQsU0FBS0MsT0FBT1gsU0FBWjtBQUNDLFlBQU8sc0JBQWFMLGNBQWIsRUFBOEJFLE9BQU9ZLElBQXJDLEVBQTRDWixPQUFPYSxHQUFuRCxDQUFQOztBQUVEO0FBQ0MsV0FBTSw0REFBaURiLE9BQU9FLFdBQVAsQ0FBbUJDLFNBQXBFLENBQU47O0FBM0JGO0FBK0JBOzs7OEJBRWFZLE0sRUFBUzs7QUFFdEIsT0FBTUgsT0FBTyxLQUFLZCxjQUFMLENBQW9CWSxLQUFwQixDQUEwQk0sS0FBMUIsQ0FBaUNELE1BQWpDLENBQWI7QUFDQSxPQUFNRixNQUFNLEtBQUtmLGNBQUwsQ0FBb0JZLEtBQXBCLENBQTBCWCxFQUExQixFQUFaOztBQUVBLFVBQU8sc0JBQWEsS0FBS0QsY0FBbEIsRUFBbUNjLElBQW5DLEVBQTBDQyxHQUExQyxDQUFQO0FBRUE7Ozs4QkFFYUksTSxFQUFvRDtBQUFBLE9BQTNDbkIsY0FBMkM7OztBQUVqRSxPQUFLbUIsT0FBT0MsTUFBUCxLQUFrQixDQUF2QixFQUEyQixNQUFNLHdCQUFnQixxREFBaEIsQ0FBTjs7QUFGc0MsK0JBSTFDcEIsZUFBZXFCLE1BQWYsQ0FBc0JILEtBQXRCLENBQTZCQyxNQUE3QixFQUFzQyxDQUF0QyxFQUEwQ0EsT0FBT0MsTUFBakQsQ0FKMEM7QUFBQTtBQUFBLE9BSXpETixJQUp5RDtBQUFBLE9BSWxEQyxHQUprRDs7QUFNakU7OztBQUNBLFVBQU8sc0JBQWFmLGNBQWIsRUFBOEJjLElBQTlCLEVBQXFDQyxHQUFyQyxDQUFQO0FBRUE7Ozt1QkFFTTtBQUNOLFVBQU8sc0JBQWEsS0FBS2YsY0FBbEIsRUFBbUMsQ0FBbkMsRUFBdUMsQ0FBdkMsQ0FBUDtBQUNBOzs7dUJBRU07QUFDTixVQUFPLHNCQUFhLEtBQUtBLGNBQWxCLEVBQW1DLENBQW5DLEVBQXVDLENBQXZDLENBQVA7QUFDQTs7O3VCQUVNO0FBQ04sVUFBTyxzQkFBYSxLQUFLQSxjQUFsQixFQUFtQyxDQUFuQyxFQUF1QyxDQUF2QyxDQUFQO0FBQ0E7Ozs7OztrQkFsRm1CRixZIiwiZmlsZSI6IkNvbXBsZXhGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wbGV4IGZyb20gJy4vQ29tcGxleCcgO1xuaW1wb3J0IENPTVBMRVhfREVGQVVMVF9ESVNQTEFZIGZyb20gJy4vQ09NUExFWF9ERUZBVUxUX0RJU1BMQVknIDtcbmltcG9ydCB7IFR5cGVFcnJvciAsIFZhbHVlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGxleEZpZWxkIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgLCByZXByZXNlbnRhdGlvbiApIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIDtcblx0XHR0aGlzLnJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb24gO1xuXHR9XG5cblx0Y2hhcmFjdGVyaXN0aWMgKCApIHtcblx0XHRyZXR1cm4gdGhpcy4kMCgpIDtcblx0fVxuXG5cdHRvU3RyaW5nICggKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZSA7XG5cdH1cblxuXHRmcm9tICggb2JqZWN0ICwgcmVwcmVzZW50YXRpb24gPSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiAoIG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCApIHJldHVybiB0aGlzLiQwKCk7XG5cblx0XHRzd2l0Y2ggKCBvYmplY3QuY29uc3RydWN0b3IucHJvdG90eXBlICkge1xuXG5cdFx0XHRjYXNlIE51bWJlci5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIHJlcHJlc2VudGF0aW9uICE9PSB1bmRlZmluZWQgKSB0aHJvdyBuZXcgVmFsdWVFcnJvcignQ29tcGxleEZpZWxkI2Zyb206IHVzaW5nIHRoZSByZXByZXNlbnRhdGlvbiBwYXJhbWV0ZXIgZG9lcyBub3QgbWFrZSBzZW5zZSB3aGVuIHBhc3NpbmcgYSBOdW1iZXIuJykgO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mcm9tX251bWJlciggb2JqZWN0ICkgO1xuXG5cdFx0XHRjYXNlIFN0cmluZy5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIHJlcHJlc2VudGF0aW9uID09PSB1bmRlZmluZWQgKSByZXByZXNlbnRhdGlvbiA9IENPTVBMRVhfREVGQVVMVF9ESVNQTEFZIDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZnJvbV9zdHJpbmcoIG9iamVjdCAsIHJlcHJlc2VudGF0aW9uICkgO1xuXG5cdFx0XHRjYXNlIEFycmF5LnByb3RvdHlwZSA6XG5cdFx0XHRcdGlmICggcmVwcmVzZW50YXRpb24gPT09IHVuZGVmaW5lZCApIHJlcHJlc2VudGF0aW9uID0gdGhpcy5yZXByZXNlbnRhdGlvbiA7XG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcGxleCggcmVwcmVzZW50YXRpb24gLCBvYmplY3RbMF0gLCBvYmplY3RbMV0gKSA7XG5cblx0XHRcdGNhc2UgQm9vbGVhbi5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIHJlcHJlc2VudGF0aW9uICE9PSB1bmRlZmluZWQgKSB0aHJvdyBuZXcgVmFsdWVFcnJvcignQ29tcGxleEZpZWxkI2Zyb206IHVzaW5nIHRoZSByZXByZXNlbnRhdGlvbiBwYXJhbWV0ZXIgZG9lcyBub3QgbWFrZSBzZW5zZSB3aGVuIHBhc3NpbmcgYSBCb29sZWFuLicpIDtcblx0XHRcdFx0Y29uc3QgeyAkMCAsICQxIH0gPSByZXByZXNlbnRhdGlvbi5tb2RlbCA7XG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcGxleCggcmVwcmVzZW50YXRpb24gLCBvYmplY3QgPyAkMSgpIDogJDAoKSAsICQwKCkgKSA7XG5cblx0XHRcdGNhc2UgQ29tcGxleC5wcm90b3R5cGUgOlxuXHRcdFx0XHRpZiAoIHJlcHJlc2VudGF0aW9uICE9PSB1bmRlZmluZWQgKSB0aHJvdyBuZXcgVmFsdWVFcnJvcignQ29tcGxleEZpZWxkI2Zyb206IHVzaW5nIHRoZSByZXByZXNlbnRhdGlvbiBwYXJhbWV0ZXIgZG9lcyBub3QgbWFrZSBzZW5zZSB3aGVuIHBhc3NpbmcgYW4gQ29tcGxleC4nKSA7XG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcGxleCggb2JqZWN0LnJlcHJlc2VudGF0aW9uICwgb2JqZWN0LnJlYWwgLCBvYmplY3QuaW1nICkgO1xuXG5cdFx0XHRjYXNlIE9iamVjdC5wcm90b3R5cGUgOlxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHJlcHJlc2VudGF0aW9uICwgb2JqZWN0LnJlYWwgLCBvYmplY3QuaW1nICkgO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBDb21wbGV4RmllbGQjZnJvbSBjYW5ub3QgaGFuZGxlICR7b2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZX1gKSA7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZyb21fbnVtYmVyICggbnVtYmVyICkge1xuXG5cdFx0Y29uc3QgcmVhbCA9IHRoaXMucmVwcmVzZW50YXRpb24ubW9kZWwucGFyc2UoIG51bWJlciApIDtcblx0XHRjb25zdCBpbWcgPSB0aGlzLnJlcHJlc2VudGF0aW9uLm1vZGVsLiQwKCkgO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLnJlcHJlc2VudGF0aW9uICwgcmVhbCAsIGltZyApIDtcblxuXHR9XG5cblx0ZnJvbV9zdHJpbmcgKCBzdHJpbmcgLCByZXByZXNlbnRhdGlvbiA9IENPTVBMRVhfREVGQVVMVF9ESVNQTEFZICkge1xuXG5cdFx0aWYgKCBzdHJpbmcubGVuZ3RoID09PSAwICkgdGhyb3cgbmV3IFZhbHVlRXJyb3IoICdDb21wbGV4RmllbGQjZnJvbV9zdHJpbmcgY2Fubm90IHBhcnNlIGVtcHR5IHN0cmluZy4nICkgO1xuXG5cdFx0Y29uc3QgWyByZWFsICwgaW1nIF0gPSByZXByZXNlbnRhdGlvbi5rZXJuZWwucGFyc2UoIHN0cmluZyAsIDAgLCBzdHJpbmcubGVuZ3RoICkgO1xuXG5cdFx0Ly8gVE9ETyBzaG91bGQgY29udmVydCByZXByZXNlbnRhdGlvbnNcblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHJlcHJlc2VudGF0aW9uICwgcmVhbCAsIGltZyApIDtcblxuXHR9XG5cblx0JDAgKCApIHtcblx0XHRyZXR1cm4gbmV3IENvbXBsZXgoIHRoaXMucmVwcmVzZW50YXRpb24gLCAwICwgMCApIDtcblx0fVxuXG5cdCQxICggKSB7XG5cdFx0cmV0dXJuIG5ldyBDb21wbGV4KCB0aGlzLnJlcHJlc2VudGF0aW9uICwgMSAsIDAgKSA7XG5cdH1cblxuXHQkaiAoICkge1xuXHRcdHJldHVybiBuZXcgQ29tcGxleCggdGhpcy5yZXByZXNlbnRhdGlvbiAsIDAgLCAxICkgO1xuXHR9XG5cbn1cbiJdfQ==