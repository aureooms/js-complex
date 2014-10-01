

/**
 * Norm
 */

var __norm__ = function (args1) {

	var norm = function (a, b) {
		return sqrt(add(sqr(a), sqr(b)));
	};

	return norm;
};

exports.__norm__ = __norm__;
