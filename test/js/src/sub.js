
var util = require("util");

var format = util.format;

var operator = require("aureooms-js-operator");

var base = operator.sub;

var sub = complex.__sub__(base);

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
	item[4] = item[0] - item[2];
	item[5] = item[1] - item[3];
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

	tmp = sub(a, b, c, d);

	rea = tmp[0];
	img = tmp[1];

	deepEqual(rea, e, format("%d - %d === %d", a, c, e));
	deepEqual(img, f, format("%d - %d === %d", b, d, f));
};


test("sub", function () {
	tests.forEach(one);
});
