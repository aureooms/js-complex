
var util = require("util");

var format = util.format;

var operator = require("aureooms-js-operator");

var neg = operator.neg;
var sqrt = operator.sqrt;
var pow2 = operator.pow2;
var add = operator.add;
var basemul = operator.mul;
var basediv = operator.truediv;
var sub = operator.sub;

var conj = complex.__conj__(neg);
var pconj = complex.__pconj__(neg);

var atan2 = Math.atan2;
var cos = Math.cos;
var sin = Math.sin;
var arg = complex.__arg__(atan2);
var abs = complex.__abs__(sqrt, pow2, add);
var mul = complex.__mul__(basemul, add, sub);
var pmul = complex.__pmul__(basemul, add);
var pdiv = complex.__pdiv__(basediv, sub);
var rea = complex.__rea__(basemul, cos);
var img = complex.__img__(basemul, sin);
var __aeq__ = function (e) {
	return function (a, b) {
		return a >= b - e && a <= b + e;
	};
};

var aeq = __aeq__(0.0001);

var aeq2 = function (a, b) {
	return aeq(a[0], b[0]) && aeq(a[1], b[1]);
};


var algo = require("aureooms-js-algo");

var randint = algo.randint;

var tests = [];

var i, n, rangebeg, rangeend, item;

n = 100;

rangebeg = -Math.pow(2, 16);
rangeend = Math.pow(2, 16);

for (i = 0; i < n; ++i) {
	item = [];
	item[0] = randint(rangebeg, rangeend);
	item[1] = randint(rangebeg, rangeend);
	item[2] = item[0];
	item[3] = -item[1];
	item[4] = abs(item[0], item[1]);
	item[5] = arg(item[0], item[1]);
	item[6] = item[4];
	item[7] = -item[5];
	tests.push(item);
}


var one = function (item) {

	var a, b, c, d, r, t, s, u, tmp, rea1, img1, rho1, the1, rea2, img2, rho2, the2;

	a = item[0];
	b = item[1];
	c = item[2];
	d = item[3];
	r = item[4];
	t = item[5];
	s = item[6];
	u = item[7];

	tmp = conj(a, b);

	rea1 = tmp[0];
	img1 = tmp[1];

	tmp = pconj(r, t);

	rho1 = tmp[0];
	the1 = tmp[1];

	deepEqual([rea1, img1], [c, d], format("conj(%s) === %s", [rea1, img1], [c, d]));
	deepEqual([rho1, the1], [s, u], format("pconj(%s) === %s", [rho1, the1], [s, u]));

	tmp = mul(a, b, rea1, img1);

	rea2 = tmp[0];
	img2 = tmp[1];

	tmp = pmul(r, t, rho1, the1);

	rho2 = tmp[0];
	the2 = tmp[1];

	deepEqual(img2, 0, "multiplying conjugates results in a non-complex number (cartesian)");
	deepEqual(the2, 0, "multiplying conjugates results in a non-complex number (polar)");

	ok(aeq(rea2, rho2), "square of absolute value equals real component of conjugates product");

	ok(aeq(rea(rho2, the2), rea2), "retrieve real part from polar notation (product)");
	ok(aeq(img(rho2, the2), img2), "retrieve imaginary part from polar notation (product)");

	ok(aeq(rea(rho1, the1), rea1), "retrieve real part from polar notation (conjugate)");
	ok(aeq(img(rho1, the1), img1), "retrieve imaginary part from polar notation (conjugate)");

	ok(aeq2(pdiv(rho2, the2, r, t), [rho1, the1]), "pdiv 1");
	ok(aeq2(pdiv(rho2, the2, rho1, the1), [r, t]), "pdiv 2");

};


test("add", function () {
	tests.forEach(one);
});
