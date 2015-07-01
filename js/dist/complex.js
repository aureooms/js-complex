'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/cartesian */
		(function (exports) {

			/* js/src/cartesian/array */
			(function (exports) {

				/* js/src/cartesian/array/binary.js */

				var binary = function binary(kernel) {
					return function (_ref, _ref3) {
						var _ref2 = _slicedToArray(_ref, 2);

						var a = _ref2[0];
						var b = _ref2[1];

						var _ref32 = _slicedToArray(_ref3, 2);

						var c = _ref32[0];
						var d = _ref32[1];
						return kernel(a, b, c, d);
					};
				};

				exports.binary = binary;

				/* js/src/cartesian/array/complex.js */

				var complex = function complex(a, b) {
					return [a, b];
				};

				exports.complex = complex;

				/* js/src/cartesian/array/one.js */

				var one = function one(kernel) {
					return kernel;
				};

				exports.one = one;

				/* js/src/cartesian/array/parse.js */

				var parse = function parse(kernel) {
					return kernel;
				};

				exports.parse = parse;

				/* js/src/cartesian/array/stringify.js */

				var stringify = function stringify(kernel) {
					return function (_ref4) {
						var _ref42 = _slicedToArray(_ref4, 2);

						var a = _ref42[0];
						var b = _ref42[1];
						return kernel(a, b);
					};
				};

				exports.stringify = stringify;

				/* js/src/cartesian/array/unary.js */

				var unary = function unary(kernel) {
					return function (_ref5) {
						var _ref52 = _slicedToArray(_ref5, 2);

						var a = _ref52[0];
						var b = _ref52[1];
						return kernel(a, b);
					};
				};

				exports.unary = unary;
			})(exports['array'] = {});
			/* js/src/cartesian/kernel */
			(function (exports) {

				/* js/src/cartesian/kernel/abs.js */

				/**
     * Computes the absolute value (or modulus or magnitude) of the complex number a + bi.
     */

				var abs = function abs(sqrt, pow2, add) {
					return function (a, b) {
						return sqrt(add(pow2(a), pow2(b)));
					};
				};

				exports.abs = abs;

				/* js/src/cartesian/kernel/add.js */

				/**
     * Addition algorithm.
     *
     * Returns the result of (a + bi) + (c + di).
     */

				var add = function add(base) {
					return function (a, b, c, d) {
						return [base(a, c), base(b, d)];
					};
				};

				exports.add = add;

				/* js/src/cartesian/kernel/arg.js */

				/**
     * Computes the argument of the complex number a + bi.
     */

				var arg = function arg(atan2) {
					return function (a, b) {
						return atan2(b, a);
					};
				};

				exports.arg = arg;

				/* js/src/cartesian/kernel/conj.js */

				/**
     * Conjugate for cartesian representation
     */

				var conj = function conj(neg) {
					return function (a, b) {
						return [a, neg(b)];
					};
				};

				exports.conj = conj;

				/* js/src/cartesian/kernel/div.js */

				/**
     * Division algorithm
     */

				var div = function div(base, pow2, mul, add, sub) {
					return function (a, b, c, d) {

						var tmp = add(pow2(c), pow2(d));

						var real = base(add(mul(a, c), mul(b, d)), tmp);
						var img = base(sub(mul(b, c), mul(a, d)), tmp);

						return [real, img];
					};
				};

				exports.div = div;

				/* js/src/cartesian/kernel/mul.js */

				/**
     * Multiplication algorithm
     */

				var mul = function mul(base, add, sub) {
					return function (a, b, c, d) {
						return [sub(base(a, c), base(b, d)), add(base(a, d), base(b, c))];
					};
				};

				exports.mul = mul;

				/* js/src/cartesian/kernel/parse.js */

				/**
     * Parse
     *
     * /!\ DOES NOT CURRENTLY KNOW WHAT
     *     WOULD BE THE BEST IMPLEMENTATION
     */

				var parse = function parse(base, zero, one, minusone, symbol) {

					return function (s, i, j) {

						var aj = undefined,
						    bi = undefined,
						    dflt = undefined;

						if (i === j) {
							return [zero(), zero()];
						}

						var ai = i;

						var c = s[i];

						for (;;) {

							if (c === symbol) {
								if (ai === i) {
									return [zero(), one()];
								} else if (ai === i - 1) {
									if (s[ai] === '-') {
										return [zero(), minusone()];
									} else if (s[ai] === '+') {
										return [zero(), one()];
									} else {
										return [zero(), base(s, ai, i)];
									}
								} else {
									return [zero(), base(s, ai, i)];
								}
							}

							++i;

							if (i >= j) {
								return [base(s, ai, j), zero()];
							}

							c = s[i];

							if (c === '+') {
								dflt = one;
								aj = i;
								bi = i;
								break;
							} else if (c === '-') {
								dflt = minusone;
								aj = i;
								bi = i;
								break;
							}
						}

						for (;;) {

							++i;
							c = s[i];

							if (c === symbol) {
								if (bi === i - 1) {
									return [base(s, ai, aj), dflt()];
								} else {
									return [base(s, ai, aj), base(s, bi, i)];
								}
							}
						}
					};
				};

				exports.parse = parse;

				/* js/src/cartesian/kernel/stringify.js */

				/**
     * Stringify
     */

				var stringify = function stringify(base, eq, gt, zero, one, minusone, symbol) {

					return function (a, b) {

						var azero = eq(a, zero);

						var bzero = eq(b, zero);

						if (azero && bzero) {
							return '0';
						}

						var out = '';

						if (!azero) {

							out += base(a);

							if (gt(b, zero)) {
								out += '+';
							}
						}

						if (!bzero) {

							if (eq(b, minusone)) {
								out += '-';
							} else if (!eq(b, one)) {
								out += base(b);
							}

							out += symbol;
						}

						return out;
					};
				};

				exports.stringify = stringify;

				/* js/src/cartesian/kernel/sub.js */

				/**
     * Subtraction algorithm
     *
     * Returns the result of (a + bi) - (c + di).
     */

				var sub = function sub(base) {
					return function (a, b, c, d) {
						return [base(a, c), base(b, d)];
					};
				};

				exports.sub = sub;
			})(exports['kernel'] = {});
			/* js/src/cartesian/object */
			(function (exports) {

				/* js/src/cartesian/object/Complex.js */

				var Complex = function Complex(a, b) {

					this.real = a;
					this.img = b;
				};

				exports.Complex = Complex;

				/* js/src/cartesian/object/binary.js */

				var binary = function binary(kernel) {
					return function (_ref6, _ref7) {
						var a = _ref6.real;
						var b = _ref6.img;
						var c = _ref7.real;
						var d = _ref7.img;
						return fromarray(kernel(a, b, c, d));
					};
				};

				exports.binary = binary;

				/* js/src/cartesian/object/complex.js */

				var complex = function complex(a, b) {
					return new Complex(a, b);
				};

				exports.complex = complex;

				/* js/src/cartesian/object/fromarray.js */

				var fromarray = function fromarray(_ref8) {
					var _ref82 = _slicedToArray(_ref8, 2);

					var a = _ref82[0];
					var b = _ref82[1];
					return complex(a, b);
				};

				exports.fromarray = fromarray;

				/* js/src/cartesian/object/one.js */

				var one = function one(kernel) {
					return function () {
						return fromarray(kernel());
					};
				};

				exports.one = one;

				/* js/src/cartesian/object/parse.js */

				var parse = function parse(kernel) {
					return function (s, i, j) {
						return fromarray(kernel(s, i, j));
					};
				};

				exports.parse = parse;

				/* js/src/cartesian/object/stringify.js */

				var stringify = function stringify(kernel) {
					return function (_ref9) {
						var a = _ref9.real;
						var b = _ref9.img;
						return kernel(a, b);
					};
				};

				exports.stringify = stringify;

				/* js/src/cartesian/object/unary.js */

				var unary = function unary(kernel) {
					return function (_ref10) {
						var a = _ref10.real;
						var b = _ref10.img;
						return fromarray(kernel(a, b));
					};
				};

				exports.unary = unary;
			})(exports['object'] = {});
		})(exports['cartesian'] = {});
		/* js/src/polar */
		(function (exports) {

			/* js/src/polar/array */
			(function (exports) {

				/* js/src/polar/array/binary.js */

				var binary = function binary(kernel) {
					return function (_ref11, _ref12) {
						var _ref112 = _slicedToArray(_ref11, 2);

						var a = _ref112[0];
						var b = _ref112[1];

						var _ref122 = _slicedToArray(_ref12, 2);

						var c = _ref122[0];
						var d = _ref122[1];
						return kernel(a, b, c, d);
					};
				};

				exports.binary = binary;

				/* js/src/polar/array/img.js */

				var img = function img(kernel) {
					return function (_ref13) {
						var _ref132 = _slicedToArray(_ref13, 2);

						var a = _ref132[0];
						var b = _ref132[1];
						return kernel(a, b);
					};
				};

				exports.img = img;

				/* js/src/polar/array/real.js */

				var real = function real(kernel) {
					return function (_ref14) {
						var _ref142 = _slicedToArray(_ref14, 2);

						var a = _ref142[0];
						var b = _ref142[1];
						return kernel(a, b);
					};
				};

				exports.real = real;

				/* js/src/polar/array/unary.js */

				var unary = function unary(kernel) {
					return function (_ref15) {
						var _ref152 = _slicedToArray(_ref15, 2);

						var a = _ref152[0];
						var b = _ref152[1];
						return kernel(a, b);
					};
				};

				exports.unary = unary;
			})(exports['array'] = {});
			/* js/src/polar/kernel */
			(function (exports) {

				/* js/src/polar/kernel/conj.js */

				/**
     * Conjugate for polar representation
     */

				var conj = function conj(neg) {
					return function (a, b) {
						return [a, neg(b)];
					};
				};

				exports.conj = conj;

				/* js/src/polar/kernel/div.js */

				var div = function div(base, sub) {
					return function (a, b, c, d) {
						return [base(a, c), sub(b, d)];
					};
				};

				exports.div = div;

				/* js/src/polar/kernel/img.js */

				var img = function img(mul, sin) {
					return function (a, b) {
						return mul(a, sin(b));
					};
				};

				exports.img = img;

				/* js/src/polar/kernel/mul.js */

				var mul = function mul(base, add) {
					return function (a, b, c, d) {
						return [base(a, c), add(b, d)];
					};
				};

				exports.mul = mul;

				/* js/src/polar/kernel/real.js */

				var real = function real(mul, cos) {
					return function (a, b) {
						return mul(a, cos(b));
					};
				};

				exports.real = real;
			})(exports['kernel'] = {});
			/* js/src/polar/object */
			(function (exports) {

				/* js/src/polar/object/Complex.js */

				var Complex = function Complex(a, b) {

					this.rho = a;
					this.theta = b;
				};

				exports.Complex = Complex;

				/* js/src/polar/object/binary.js */

				var binary = function binary(kernel) {
					return function (_ref16, _ref17) {
						var a = _ref16.rho;
						var b = _ref16.theta;
						var c = _ref17.rho;
						var d = _ref17.theta;
						return fromarray(kernel(a, b, c, d));
					};
				};

				exports.binary = binary;

				/* js/src/polar/object/complex.js */

				var complex = function complex(a, b) {
					return new Complex(a, b);
				};

				exports.complex = complex;

				/* js/src/polar/object/fromarray.js */

				var fromarray = function fromarray(_ref18) {
					var _ref182 = _slicedToArray(_ref18, 2);

					var a = _ref182[0];
					var b = _ref182[1];
					return complex(a, b);
				};

				exports.fromarray = fromarray;

				/* js/src/polar/object/img.js */

				var img = function img(kernel) {
					return function (_ref19) {
						var a = _ref19.rho;
						var b = _ref19.theta;
						return kernel(a, b);
					};
				};

				exports.img = img;

				/* js/src/polar/object/real.js */

				var real = function real(kernel) {
					return function (_ref20) {
						var a = _ref20.rho;
						var b = _ref20.theta;
						return kernel(a, b);
					};
				};

				exports.real = real;

				/* js/src/polar/object/unary.js */

				var unary = function unary(kernel) {
					return function (_ref21) {
						var a = _ref21.rho;
						var b = _ref21.theta;
						return fromarray(kernel(a, b));
					};
				};

				exports.unary = unary;
			})(exports['object'] = {});
		})(exports['polar'] = {});
		return exports;
	};
	if (typeof exports === 'object') {
		definition(exports);
	} else if (typeof define === 'function' && define.amd) {
		define('aureooms-js-complex', [], function () {
			return definition({});
		});
	} else if (typeof window === 'object' && typeof window.document === 'object') {
		definition(window['complex'] = {});
	} else console.error('unable to detect type of module to define for aureooms-js-complex');
})();