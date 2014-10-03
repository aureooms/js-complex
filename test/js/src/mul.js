
var util = require("util");

var format = util.format;

var operator = require("aureooms-js-operator");

var base = operator.mul;
var add = operator.add;
var sub = operator.sub;

var mul = complex.__mul__(base, add, sub);

var algo = require("aureooms-js-algo");

var randint = algo.randint;

var tests = [];

var i, n, range, item;

n = 100;

range = Math.pow(2, 31);

for (i = 0; i < n; ++i) {
	item = [];
	item[0] = randint(0, range);
	item[1] = randint(0, range);
	item[2] = randint(0, range);
	item[3] = randint(0, range);
	item[4] = sub(base(item[0], item[2]), base(item[1], item[3]));
	item[5] = add(base(item[0], item[3]), base(item[1], item[2]));
	tests.push(item);
}


var one = function (item) {

	var a, b, c, d, e, f, tmp, rea, img;

	a = item[0];
	b = item[1];
	c = item[2];
	d = item[3];
	e = item[4];
	f = item[5];

	tmp = mul(a, b, c, d);

	rea = tmp[0];
	img = tmp[1];

	deepEqual(rea, e, format("%d * %d === %d", a, c, e));
	deepEqual(img, f, format("%d * %d === %d", b, d, f));
};


test("mul", function () {
	tests.forEach(one);
});
