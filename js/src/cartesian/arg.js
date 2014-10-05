

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
