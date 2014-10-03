

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
