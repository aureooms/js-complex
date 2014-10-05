

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
