
var __pmul__ = function (base, add) {

	var pmul = function (a, b, c, d) {
		return [base(a, c), add(b, d)];
	};

	return pmul;

};

exports.__pmul__ = __pmul__;