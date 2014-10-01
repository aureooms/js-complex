

/**
 * Multiplication algorithm
 */

var __mul__ = function (base, add, sub) {

	var mul = function (a, b, c, d) {
		var rea, img;

		rea = sub(base(a, c), base(b, d));
		img = add(base(a, d), base(b, c));

		return [rea, img];
	};

	return mul;
};

exports.__mul__ = __mul__;
