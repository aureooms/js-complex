var format = require("util").format ;

var number = require("aureooms-js-number");

var random = require("aureooms-js-random");

var library = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ) ;
var mul = library.mul ;
var div2 = library.div2 ;
var _ = library.complex ;

var n = 100;

var range = Math.pow(2, 16);


test( "mul + div2 " , function ( ) {

for (var i = 0; i < n; ++i) {
	var a = random.randint(0, range);
	var b = random.randint(0, range);
	var c = 2;
	var d = 0;
	var e = a * c - b * d ;
	var f = a * d + b * c ;

	var tmp = mul( _( a, b), _(c, d));

	var rea = tmp.real;
	var img = tmp.img;

	var z = div2(_(rea, img));

	deepEqual(
		[rea, img], [e, f],
		format("(%d + %di) * (%d + %di) === (%d + %di)", a, b, c, d, e, f)
	);

	deepEqual(
		z, _(a, b),
		format("(%d + %di) / (%d + %di) === (%d + %di)", rea, img, c, d, a, b)
	);
}


});
