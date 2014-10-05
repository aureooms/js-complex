

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
