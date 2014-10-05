

var operator = require("aureooms-js-operator");

var base = function (x) { return x; };

var eq = operator.is;
var gt = operator.gt;
var zero = 0;
var one = 1;
var minusone = -1;
var symbol = "i";

var stringify = complex.__stringify__(base, eq, gt, zero, one, minusone, symbol);

var t = function (a, b, c) {
	deepEqual(stringify(a, b), c, c);
};

test("stringify", function () {

	t(0, 0, "0");

	t(0, 1, "i");
	t(0, -1, "-i");

	t(0, 2, "2i");
	t(0, -2, "-2i");

	t(1, 0, "1");
	t(-1, 0, "-1");

	t(1, 1, "1+i");
	t(-1, 1, "-1+i");

	t(1, -1, "1-i");
	t(-1, -1, "-1-i");

	t(1, 2, "1+2i");
	t(-1, 2, "-1+2i");

	t(1, -2, "1-2i");
	t(-1, -2, "-1-2i");

});