

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
