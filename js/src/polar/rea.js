
var __rea__ = function (mul, cos) {

	var rea = function (rho, theta) {
		return mul(rho, cos(theta));
	};

	return rea;

};

exports.__rea__ = __rea__;