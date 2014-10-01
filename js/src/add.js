

/**
 * Addition algorithm
 */

var __add__ = function (base) {

	var add = function (a, b, c, d) {
		var rea, img;

		rea = base(a, c);
		img = base(b, d);

		return [rea, img];
	};

	return add;
};

exports.__add__ = __add__;
