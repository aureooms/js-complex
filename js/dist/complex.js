(function(exports, undefined){

	'use strict';


/* js/src/cartesian */
/* js/src/cartesian/abs.js */


/**
 * Computes the absolute value (or modulus or magnitude) of the complex number a + bi.
 */

var __abs__ = function (sqrt, pow2, add) {

	var abs = function (a, b) {
		return sqrt(add(pow2(a), pow2(b)));
	};

	return abs;
};

exports.__abs__ = __abs__;

/* js/src/cartesian/add.js */


/**
 * Addition algorithm.
 * 
 * Returns the result of (a + bi) + (c + di).
 */

var __add__ = function (base) {

	var add = function (a, b, c, d) {
		var rea, img;

		rea = base(a, c);
		img = base(b, d);

		return [rea, img];
	};

	return add;
};

exports.__add__ = __add__;

/* js/src/cartesian/arg.js */


/**
 * Computes the argument of the complex number a + bi.
 */

var __arg__ = function (atan2) {

	var arg = function (a, b) {
		return atan2(b, a);
	};

	return arg;
};

exports.__arg__ = __arg__;

/* js/src/cartesian/conj.js */


/**
 * Conjugate for cartesian representation
 */

var __conj__ = function (neg) {

	var conj = function (a, b) {
		return [a, neg(b)];
	};

	return conj;
};

exports.__conj__ = __conj__;

/* js/src/cartesian/div.js */


/**
 * Division algorithm
 */

var __div__ = function (base, pow2, mul, add, sub) {

	var div = function (a, b, c, d) {
		var tmp, rea, img;

		tmp = add(pow2(c), pow2(d));

		rea = base(add(mul(a, c), mul(b, d)), tmp);
		img = base(sub(mul(b, c), mul(a, d)), tmp);

		return [rea, img];
	};

	return div;
};

exports.__div__ = __div__;

/* js/src/cartesian/mul.js */


/**
 * Multiplication algorithm
 */

var __mul__ = function (base, add, sub) {

	var mul = function (a, b, c, d) {
		var rea, img;

		rea = sub(base(a, c), base(b, d));
		img = add(base(a, d), base(b, c));

		return [rea, img];
	};

	return mul;
};

exports.__mul__ = __mul__;

/* js/src/cartesian/parse.js */


/**
 * Parse
 *
 * /!\ DOES NOT CURRENTLY KNOW WHAT
 *     WOULD BE THE BEST IMPLEMENTATION
 */

var __parse__ = function (base, zero, one, minusone, symbol) {

	var parse = function (s, i, j) {

		var c, ai, aj, bi, bj, dflt;

		if (i === j) {
			return [zero, zero];
		}

		ai = i;

		c = s[i];

		for (;;) {

			if (c === symbol) {
				if (ai === i) {
					return [zero, one];
				}
				else if (ai === i - 1) {
					if (s[ai] === '-') {
						return [zero, minusone];
					}
					else if (s[ai] === '+') {
						return [zero, one];
					}
					else {
						return [zero, base(s, ai, i)];
					}
				}
				else {
					return [zero, base(s, ai, i)];
				}
			}

			++i;

			if (i >= j) {
				return [base(s, ai, j), zero];
			}

			c = s[i];

			if ( c === '+' ) {
				dflt = one;
				aj = i;
				bi = i;
				break;
			}
			else if ( c === '-' ) {
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
					return [base(s, ai, aj), dflt];
				}
				else {
					return [base(s, ai, aj), base(s, bi, i)];
				}
			}

		}

	};

	return parse;
};

exports.__parse__ = __parse__;

/* js/src/cartesian/stringify.js */


/**
 * Stringify
 */

var __stringify__ = function (base, eq, gt, zero, one, minusone, symbol) {

	var stringify = function (a, b) {

		var out, azero, bzero;

		azero = eq(a, zero);

		bzero = eq(b, zero);

		if (azero && bzero) {
			return "0";
		}

		out = "";

		if (!azero) {

			out += base(a);

			if (gt(b, zero)) {
				out += "+";
			}

		}

		if (!bzero) {

			if (eq(b, minusone)) {
				out += "-";
			}
			else if (!eq(b, one)) {
				out += base(b);
			}

			out += symbol;
		}

		return out;

	};

	return stringify;
};

exports.__stringify__ = __stringify__;

/* js/src/cartesian/sub.js */


/**
 * Subtraction algorithm
 * 
 * Returns the result of (a + bi) - (c + di).
 */

var __sub__ = function (base) {

	var sub = function (a, b, c, d) {
		var rea, img;

		rea = base(a, c);
		img = base(b, d);

		return [rea, img];
	};

	return sub;
};

exports.__sub__ = __sub__;

/* js/src/polar */
/* js/src/polar/img.js */

var __img__ = function (mul, sin) {

	var img = function (rho, theta) {
		return mul(rho, sin(theta));
	};

	return img;

};

exports.__img__ = __img__;
/* js/src/polar/pconj.js */


/**
 * Conjugate for polar representation
 */

var __pconj__ = function (neg) {

	var pconj = function (a, b) {
		return [a, neg(b)];
	};

	return pconj;
};

exports.__pconj__ = __pconj__;

/* js/src/polar/pdiv.js */

var __pdiv__ = function (base, sub) {

	var pdiv = function (a, b, c, d) {
		return [base(a, c), sub(b, d)];
	};

	return pdiv;

};

exports.__pdiv__ = __pdiv__;
/* js/src/polar/pmul.js */

var __pmul__ = function (base, add) {

	var pmul = function (a, b, c, d) {
		return [base(a, c), add(b, d)];
	};

	return pmul;

};

exports.__pmul__ = __pmul__;
/* js/src/polar/rea.js */

var __rea__ = function (mul, cos) {

	var rea = function (rho, theta) {
		return mul(rho, cos(theta));
	};

	return rea;

};

exports.__rea__ = __rea__;
})(typeof exports === 'undefined' ? this['complex'] = {} : exports);
