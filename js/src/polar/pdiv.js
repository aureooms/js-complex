
var __pdiv__ = function (base, sub) {

	var pdiv = function (a, b, c, d) {
		return [base(a, c), sub(b, d)];
	};

	return pdiv;

};

exports.__pdiv__ = __pdiv__;