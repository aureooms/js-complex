"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/cartesian */
		(function (exports) {

			/* js/src/cartesian/array */
			(function (exports) {

				/* js/src/cartesian/array/$.js */

				var $ = function $(kernel) {
					return kernel;
				};

				exports.$ = $;

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

				/* js/src/cartesian/array/compile.js */

				var compile = function compile(_ref4, symbol) {
					var $0 = _ref4.$0;
					var $1 = _ref4.$1;
					var root2n = _ref4.root2n;
					var iroot2n = _ref4.iroot2n;
					var add = _ref4.add;
					var sub = _ref4.sub;
					var mul = _ref4.mul;
					var div = _ref4.div;
					var imul = _ref4.imul;
					var div2 = _ref4.div2;
					var abs = _ref4.abs;
					var arg = _ref4.arg;
					var con = _ref4.con;
					var parse = _ref4.parse;
					var stringify = _ref4.stringify;

					return {

						"complex": exports.complex,
						"$0": exports.$($0),
						"$1": exports.$($1),
						"root2n": exports.root2n(root2n),
						"iroot2n": exports.root2n(iroot2n),
						"add": exports.binary(add),
						"sub": exports.binary(sub),
						"mul": exports.binary(mul),
						"imul": exports.binary(imul),
						"div": exports.binary(div),
						"div2": exports.unary(div2),
						"abs": exports.unary(abs),
						"arg": exports.unary(arg),
						"con": exports.unary(con),
						"parse": exports.parse(parse),
						"stringify": exports.stringify(stringify)

					};
				};

				exports.compile = compile;

				/* js/src/cartesian/array/complex.js */

				var complex = function complex(a, b) {
					return [a, b];
				};

				exports.complex = complex;

				/* js/src/cartesian/array/parse.js */

				var parse = function parse(kernel) {
					return kernel;
				};

				exports.parse = parse;

				/* js/src/cartesian/array/root2n.js */

				var root2n = function root2n(kernel) {
					return kernel;
				};

				exports.root2n = root2n;

				/* js/src/cartesian/array/stringify.js */

				var stringify = function stringify(kernel) {
					return function (_ref5) {
						var _ref52 = _slicedToArray(_ref5, 2);

						var a = _ref52[0];
						var b = _ref52[1];
						return kernel(a, b);
					};
				};

				exports.stringify = stringify;

				/* js/src/cartesian/array/unary.js */

				var unary = function unary(kernel) {
					return function (_ref6) {
						var _ref62 = _slicedToArray(_ref6, 2);

						var a = _ref62[0];
						var b = _ref62[1];
						return kernel(a, b);
					};
				};

				exports.unary = unary;
			})(exports["array"] = {});
			/* js/src/cartesian/kernel */
			(function (exports) {

				/* js/src/cartesian/kernel/$0.js */

				var $0 = function $0(_$0) {
					return function () {
						return [_$0(), _$0()];
					};
				};

				exports.$0 = $0;

				/* js/src/cartesian/kernel/$1.js */

				var $1 = function $1($0, _$1) {
					return function () {
						return [_$1(), $0()];
					};
				};

				exports.$1 = $1;

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

				/* js/src/cartesian/kernel/compile.js */

				var compile = function compile(_ref7, symbol) {
					var add = _ref7.add;
					var sub = _ref7.sub;
					var mul = _ref7.mul;
					var div = _ref7.div;
					var div2 = _ref7.div2;
					var div2n = _ref7.div2n;
					var neg = _ref7.neg;
					var sqrt = _ref7.sqrt;
					var pow2 = _ref7.pow2;
					var PI = _ref7.PI;
					var cos = _ref7.cos;
					var sin = _ref7.sin;
					var atan2 = _ref7.atan2;
					var parse = _ref7.parse;
					var stringify = _ref7.stringify;
					var $0 = _ref7.$0;
					var $1 = _ref7.$1;
					var $_1 = _ref7.$_1;
					var eq0 = _ref7.eq0;
					var eq1 = _ref7.eq1;
					var eq_1 = _ref7.eq_1;
					var gt0 = _ref7.gt0;

					var _mul = exports.mul(mul, add, sub);

					return {

						"$0": exports.$0($0),
						"$1": exports.$1($0, $1),
						"root2n": exports.root2n(cos, sin, PI, div2n),
						"iroot2n": exports.iroot2n(cos, sin, PI, div2n, neg),
						"add": exports.add(add),
						"sub": exports.sub(sub),
						"mul": _mul,
						"imul": _mul,
						"div": exports.div(div, pow2, mul, add, sub),
						"div2": exports.div2(div2),
						"abs": exports.abs(sqrt, pow2, add),
						"arg": exports.arg(atan2),
						"con": exports.con(neg),
						"parse": exports.parse(parse, $0, $1, $_1, symbol),
						"stringify": exports.stringify(stringify, eq0, eq1, eq_1, gt0, symbol)

					};
				};

				exports.compile = compile;

				/* js/src/cartesian/kernel/con.js */

				/**
     * Conjugate for cartesian representation
     */

				var con = function con(neg) {
					return function (a, b) {
						return [a, neg(b)];
					};
				};

				exports.con = con;

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

				/* js/src/cartesian/kernel/div2.js */

				var div2 = function div2(base) {
					return function (a, b) {
						return [base(a), base(b)];
					};
				};

				exports.div2 = div2;

				/* js/src/cartesian/kernel/iroot2n.js */

				// l > 0
				var iroot2n = function iroot2n(cos, sin, pi, div2n, neg) {
					return function (l) {
						return [cos(div2n(pi, l - 1)), neg(sin(div2n(pi, l - 1)))];
					};
				};

				exports.iroot2n = iroot2n;

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

				var parse = function parse(base, $0, $1, $_1, symbol) {

					return function (s, i, j) {

						var aj = undefined,
						    bi = undefined,
						    dflt = undefined;

						if (i === j) {
							return [$0(), $0()];
						}

						var ai = i;

						var c = s[i];

						for (;;) {

							if (c === symbol) {
								if (ai === i) {
									return [$0(), $1()];
								} else if (ai === i - 1) {
									if (s[ai] === "-") {
										return [$0(), $_1()];
									} else if (s[ai] === "+") {
										return [$0(), $1()];
									} else {
										return [$0(), base(s.slice(ai, i))];
									}
								} else {
									return [$0(), base(s.slice(ai, i))];
								}
							}

							++i;

							if (i >= j) {
								return [base(s.slice(ai, j)), $0()];
							}

							c = s[i];

							if (c === "+") {
								dflt = $1;
								aj = i;
								bi = i;
								break;
							} else if (c === "-") {
								dflt = $_1;
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
									return [base(s.slice(ai, aj)), dflt()];
								} else {
									return [base(s.slice(ai, aj)), base(s.slice(bi, i))];
								}
							}
						}
					};
				};

				exports.parse = parse;

				/* js/src/cartesian/kernel/root2n.js */

				// l > 0
				var root2n = function root2n(cos, sin, pi, div2n) {
					return function (l) {
						return [cos(div2n(pi, l - 1)), sin(div2n(pi, l - 1))];
					};
				};

				exports.root2n = root2n;

				/* js/src/cartesian/kernel/stringify.js */

				/**
     * Stringify
     */

				var stringify = function stringify(base, eq0, eq1, eq_1, gt0, symbol) {

					return function (a, b) {

						var azero = eq0(a);

						var bzero = eq0(b);

						if (azero && bzero) {
							return "0";
						}

						var out = "";

						if (!azero) {

							out += base(a);

							if (gt0(b)) {
								out += "+";
							}
						}

						if (!bzero) {

							if (eq_1(b)) {
								out += "-";
							} else if (!eq1(b)) {
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
			})(exports["kernel"] = {});
			/* js/src/cartesian/object */
			(function (exports) {

				/* js/src/cartesian/object/$.js */

				var $ = function $(kernel) {
					return function () {
						return fromarray(kernel());
					};
				};

				exports.$ = $;

				/* js/src/cartesian/object/Complex.js */

				var Complex = function Complex(a, b) {

					this.real = a;
					this.img = b;
				};

				exports.Complex = Complex;

				/* js/src/cartesian/object/binary.js */

				var binary = function binary(kernel) {
					return function (_ref8, _ref9) {
						var a = _ref8.real;
						var b = _ref8.img;
						var c = _ref9.real;
						var d = _ref9.img;
						return fromarray(kernel(a, b, c, d));
					};
				};

				exports.binary = binary;

				/* js/src/cartesian/object/compile.js */

				var compile = function compile(_ref10, symbol) {
					var $0 = _ref10.$0;
					var $1 = _ref10.$1;
					var root2n = _ref10.root2n;
					var iroot2n = _ref10.iroot2n;
					var add = _ref10.add;
					var sub = _ref10.sub;
					var mul = _ref10.mul;
					var div = _ref10.div;
					var imul = _ref10.imul;
					var div2 = _ref10.div2;
					var abs = _ref10.abs;
					var arg = _ref10.arg;
					var con = _ref10.con;
					var parse = _ref10.parse;
					var stringify = _ref10.stringify;

					return {

						"complex": exports.complex,
						"$0": exports.$($0),
						"$1": exports.$($1),
						"root2n": exports.root2n(root2n),
						"iroot2n": exports.root2n(iroot2n),
						"add": exports.binary(add),
						"sub": exports.binary(sub),
						"mul": exports.binary(mul),
						"imul": exports.binary(imul),
						"div": exports.binary(div),
						"div2": exports.unary(div2),
						"abs": exports.unary(abs),
						"arg": exports.unary(arg),
						"con": exports.unary(con),
						"parse": exports.parse(parse),
						"stringify": exports.stringify(stringify)

					};
				};

				exports.compile = compile;

				/* js/src/cartesian/object/complex.js */

				var complex = function complex(a, b) {
					return new Complex(a, b);
				};

				exports.complex = complex;

				/* js/src/cartesian/object/fromarray.js */

				var fromarray = function fromarray(_ref11) {
					var _ref112 = _slicedToArray(_ref11, 2);

					var a = _ref112[0];
					var b = _ref112[1];
					return complex(a, b);
				};

				exports.fromarray = fromarray;

				/* js/src/cartesian/object/parse.js */

				var parse = function parse(kernel) {
					return function (s, i, j) {
						return fromarray(kernel(s, i, j));
					};
				};

				exports.parse = parse;

				/* js/src/cartesian/object/root2n.js */

				var root2n = function root2n(kernel) {
					return function (l) {
						return fromarray(kernel(l));
					};
				};

				exports.root2n = root2n;

				/* js/src/cartesian/object/stringify.js */

				var stringify = function stringify(kernel) {
					return function (_ref12) {
						var a = _ref12.real;
						var b = _ref12.img;
						return kernel(a, b);
					};
				};

				exports.stringify = stringify;

				/* js/src/cartesian/object/unary.js */

				var unary = function unary(kernel) {
					return function (_ref13) {
						var a = _ref13.real;
						var b = _ref13.img;
						return fromarray(kernel(a, b));
					};
				};

				exports.unary = unary;
			})(exports["object"] = {});
		})(exports["cartesian"] = {});
		/* js/src/polar */
		(function (exports) {

			/* js/src/polar/array */
			(function (exports) {

				/* js/src/polar/array/binary.js */

				var binary = function binary(kernel) {
					return function (_ref14, _ref15) {
						var _ref142 = _slicedToArray(_ref14, 2);

						var a = _ref142[0];
						var b = _ref142[1];

						var _ref152 = _slicedToArray(_ref15, 2);

						var c = _ref152[0];
						var d = _ref152[1];
						return kernel(a, b, c, d);
					};
				};

				exports.binary = binary;

				/* js/src/polar/array/compile.js */

				var compile = function compile(_ref16, symbol) {
					var mul = _ref16.mul;
					var div = _ref16.div;
					var real = _ref16.real;
					var img = _ref16.img;
					var con = _ref16.con;

					return {

						"complex": exports.complex,
						"mul": exports.binary(mul),
						"div": exports.binary(div),
						"real": exports.real(real),
						"img": exports.img(img),
						"con": exports.unary(con)

					};
				};

				exports.compile = compile;

				/* js/src/polar/array/complex.js */

				var complex = function complex(a, b) {
					return [a, b];
				};

				exports.complex = complex;

				/* js/src/polar/array/img.js */

				var img = function img(kernel) {
					return function (_ref17) {
						var _ref172 = _slicedToArray(_ref17, 2);

						var a = _ref172[0];
						var b = _ref172[1];
						return kernel(a, b);
					};
				};

				exports.img = img;

				/* js/src/polar/array/real.js */

				var real = function real(kernel) {
					return function (_ref18) {
						var _ref182 = _slicedToArray(_ref18, 2);

						var a = _ref182[0];
						var b = _ref182[1];
						return kernel(a, b);
					};
				};

				exports.real = real;

				/* js/src/polar/array/unary.js */

				var unary = function unary(kernel) {
					return function (_ref19) {
						var _ref192 = _slicedToArray(_ref19, 2);

						var a = _ref192[0];
						var b = _ref192[1];
						return kernel(a, b);
					};
				};

				exports.unary = unary;
			})(exports["array"] = {});
			/* js/src/polar/kernel */
			(function (exports) {

				/* js/src/polar/kernel/compile.js */

				var compile = function compile(_ref20, symbol) {
					var add = _ref20.add;
					var sub = _ref20.sub;
					var mul = _ref20.mul;
					var div = _ref20.div;
					var neg = _ref20.neg;
					var cos = _ref20.cos;
					var sin = _ref20.sin;

					return {

						"mul": exports.mul(mul, add),
						"div": exports.div(div, sub),
						"real": exports.real(mul, cos),
						"img": exports.img(mul, sin),
						"con": exports.con(neg)

					};
				};

				exports.compile = compile;

				/* js/src/polar/kernel/con.js */

				/**
     * Conjugate for polar representation
     */

				var con = function con(neg) {
					return function (a, b) {
						return [a, neg(b)];
					};
				};

				exports.con = con;

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
			})(exports["kernel"] = {});
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
					return function (_ref21, _ref22) {
						var a = _ref21.rho;
						var b = _ref21.theta;
						var c = _ref22.rho;
						var d = _ref22.theta;
						return fromarray(kernel(a, b, c, d));
					};
				};

				exports.binary = binary;

				/* js/src/polar/object/compile.js */

				var compile = function compile(_ref23, symbol) {
					var mul = _ref23.mul;
					var div = _ref23.div;
					var real = _ref23.real;
					var img = _ref23.img;
					var con = _ref23.con;

					return {

						"complex": exports.complex,
						"mul": exports.binary(mul),
						"div": exports.binary(div),
						"real": exports.real(real),
						"img": exports.img(img),
						"con": exports.unary(con)

					};
				};

				exports.compile = compile;

				/* js/src/polar/object/complex.js */

				var complex = function complex(a, b) {
					return new Complex(a, b);
				};

				exports.complex = complex;

				/* js/src/polar/object/fromarray.js */

				var fromarray = function fromarray(_ref24) {
					var _ref242 = _slicedToArray(_ref24, 2);

					var a = _ref242[0];
					var b = _ref242[1];
					return complex(a, b);
				};

				exports.fromarray = fromarray;

				/* js/src/polar/object/img.js */

				var img = function img(kernel) {
					return function (_ref25) {
						var a = _ref25.rho;
						var b = _ref25.theta;
						return kernel(a, b);
					};
				};

				exports.img = img;

				/* js/src/polar/object/real.js */

				var real = function real(kernel) {
					return function (_ref26) {
						var a = _ref26.rho;
						var b = _ref26.theta;
						return kernel(a, b);
					};
				};

				exports.real = real;

				/* js/src/polar/object/unary.js */

				var unary = function unary(kernel) {
					return function (_ref27) {
						var a = _ref27.rho;
						var b = _ref27.theta;
						return fromarray(kernel(a, b));
					};
				};

				exports.unary = unary;
			})(exports["object"] = {});
		})(exports["polar"] = {});
		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("@aureooms/js-complex", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["complex"] = {});
	} else console.error("unable to detect type of module to define for @aureooms/js-complex");
})();