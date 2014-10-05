
var __img__ = function (mul, sin) {

	var img = function (rho, theta) {
		return mul(rho, sin(theta));
	};

	return img;

};

exports.__img__ = __img__;