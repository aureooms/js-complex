

/**
 * Division algorithm
 */

var __div__ = function (base, pow2, mul, add, sub) {

	var div = function (a, b, c, d) {
		var tmp, rea, img;

		tmp = add(pow2(c), pow2(d));

		rea = base(add(mul(a, c), mul(b, d)), tmp);
		img = base(sub(mul(b, c), mul(a, d)), tmp);

		return [rea, img];
	};

	return div;
};

exports.__div__ = __div__;
