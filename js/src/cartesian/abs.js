

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
