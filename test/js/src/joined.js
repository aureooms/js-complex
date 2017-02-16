
var format = require("util").format ;

var algo = require("@aureooms/js-algo");
var number = require("@aureooms/js-number");
var random = require("@aureooms/js-random");

var cartesian = complex.cartesian.array.compile( complex.cartesian.kernel.compile( number ) ) ;
var polar = complex.polar.array.compile( complex.polar.kernel.compile( number ) ) ;

var aeq = algo.__absepsilon__(0.0001);

var aeq2 = function (a, b) {
	return aeq(a[0], b[0]) === 0 && aeq(a[1], b[1]) === 0;
};

var tests = [];

var i, n, rangebeg, rangeend, item;

n = 100;

rangebeg = -Math.pow(2, 16);
rangeend = Math.pow(2, 16);

for (i = 0; i < n; ++i) {
	item = [];
	item[0] = random.randint(rangebeg, rangeend);
	item[1] = random.randint(rangebeg, rangeend);
	item[2] = item[0];
	item[3] = -item[1];
	item[4] = cartesian.abs( [ item[0], item[1] ] );
	item[5] = cartesian.arg( [ item[0], item[1] ] );
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

	tmp = cartesian.con( [ a, b ]);

	rea1 = tmp[0];
	img1 = tmp[1];

	tmp = polar.con( [ r, t ]);

	rho1 = tmp[0];
	the1 = tmp[1];

	deepEqual([rea1, img1], [c, d], format("conj(%s) === %s", [rea1, img1], [c, d]));
	deepEqual([rho1, the1], [s, u], format("pconj(%s) === %s", [rho1, the1], [s, u]));

	tmp = cartesian.mul( [ a , b ] , [ rea1 , img1 ]);

	rea2 = tmp[0];
	img2 = tmp[1];

	tmp = polar.mul( [ r, t ], [ rho1, the1 ]);

	rho2 = tmp[0];
	the2 = tmp[1];

	deepEqual(img2, 0, "multiplying conjugates results in a non-complex number (cartesian)");
	deepEqual(the2, 0, "multiplying conjugates results in a non-complex number (polar)");

	ok(aeq(rea2, rho2) === 0, "square of absolute value equals real component of conjugates product");

	ok(aeq(polar.real( [ rho2, the2 ]), rea2) === 0, "retrieve real part from polar notation (product)");
	ok(aeq(polar.img( [ rho2, the2 ] ), img2) === 0, "retrieve imaginary part from polar notation (product)");

	ok(aeq(polar.real([rho1, the1]), rea1) === 0, "retrieve real part from polar notation (conjugate)");
	ok(aeq(polar.img([rho1, the1]), img1) === 0, "retrieve imaginary part from polar notation (conjugate)");

	ok(aeq2(polar.div([rho2, the2], [r, t]), [rho1, the1]), "polar.div 1");
	ok(aeq2(polar.div([rho2, the2], [rho1, the1]), [r, t]), "polar.div 2");

};


test("joined", function () {
	tests.forEach(one);
});
