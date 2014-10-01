

/**
 * Subtraction algorithm
 */

var __sub__ = function (base) {

	var sub = function (a, b, c, d) {
		var rea, img;

		rea = base(a, c);
		img = base(b, d);

		return [rea, img];
	};

	return sub;
};

exports.__sub__ = __sub__;
