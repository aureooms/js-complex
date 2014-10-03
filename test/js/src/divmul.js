
var util = require("util");

var format = util.format;

var operator = require("aureooms-js-operator");

var basemul = operator.mul;
var add = operator.add;
var sub = operator.sub;
var basediv = operator.truediv;
var pow2 = operator.pow2;

var mul = complex.__mul__(basemul, add, sub);
var div = complex.__div__(basediv, pow2, basemul, add, sub);

var algo = require("aureooms-js-algo");

var randint = algo.randint;

var tests = [];

var i, n, range, item;

n = 100;

range = Math.pow(2, 16);

for (i = 0; i < n; ++i) {
	item = [];
	item[0] = randint(0, range);
	item[1] = randint(0, range);
	item[2] = randint(0, range);
	item[3] = randint(0, range);
	item[4] = sub(basemul(item[0], item[2]), basemul(item[1], item[3]));
	item[5] = add(basemul(item[0], item[3]), basemul(item[1], item[2]));
	tests.push(item);
}


var one = function (item) {

	var a, b, c, d, e, f, x, z, tmp, rea, img;

	a = item[0];
	b = item[1];
	c = item[2];
	d = item[3];
	e = item[4];
	f = item[5];

	tmp = mul(a, b, c, d);

	rea = tmp[0];
	img = tmp[1];

	x = div(rea, img, a, b);
	z = div(rea, img, c, d);

	deepEqual(
		[rea, img], [e, f],
		format("(%d + %di) * (%d + %di) === (%d + %di)", a, b, c, d, e, f)
	);

	deepEqual(
		x, [c, d],
		format("(%d + %di) / (%d + %di) === (%d + %di)", rea, img, a, b, c, d)
	);

	deepEqual(
		z, [a, b],
		format("(%d + %di) / (%d + %di) === (%d + %di)", rea, img, c, d, a, b)
	);
};


test("mul & div", function () {
	tests.forEach(one);
});
