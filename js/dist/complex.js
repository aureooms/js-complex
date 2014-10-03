(function(exports, undefined){

	'use strict';


/* js/src/add.js */


/**
 * Addition algorithm
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

/* js/src/binary */
/* js/src/div.js */


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

/* js/src/mul.js */


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

/* js/src/norm.js */


/**
 * Norm
 */

var __norm__ = function (sqrt, pow2, add) {

	var norm = function (a, b) {
		return sqrt(add(pow2(a), pow2(b)));
	};

	return norm;
};

exports.__norm__ = __norm__;

/* js/src/parse.js */


/**
 * Parse
 *
 * /!\ DOES NOT CURRENTLY KNOW WHAT
 *     WOULD BE THE BEST IMPLEMENTATION
 */

var __parse__ = function (base, zero, symbol) {

	var parse = function (s, i, j) {

		var c, rea, img, ai, aj, bi, bj;

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
				else {
					return [zero, base(ai, i)];
				}
			}

			++i;

			if (i >= j) {
				return [base(ai, j), zero];
			}

			c = s[i];

			if ( c === '+' || c === '-') {
				aj = i;
				bi = i;
				break;
			}

		}


		for (;;) {

			++i;
			c = s[i];

			if (c === symbol) {
				if (bi === i) {
					return [base(ai, aj), one];
				}
				else {
					return [base(ai, aj), base(bi, i)];
				}
			}

		}

	};

	return parse;
};

exports.__parse__ = __parse__;

/* js/src/stringify.js */


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

/* js/src/sub.js */


/**
 * Subtraction algorithm
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

/* js/src/theta.js */


/**
 * Theta
 */

var __theta__ = function (atan, div) {

	var theta = function (a, b) {
		return atan(div(a, b));
	};

	return theta;
};

exports.__theta__ = __theta__;

/* js/src/unary */
})(typeof exports === 'undefined' ? this['complex'] = {} : exports);
