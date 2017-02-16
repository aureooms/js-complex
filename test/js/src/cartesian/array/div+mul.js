var format = require("util").format ;

var number = require("@aureooms/js-number");

var random = require("@aureooms/js-random");

var library = complex.cartesian.array.compile( complex.cartesian.kernel.compile( number ) ) ;
var mul = library.mul ;
var div = library.div ;

var n = 100;

var range = Math.pow(2, 16);


test( "mul + div " , function ( ) {

for (var i = 0; i < n; ++i) {
	var a = random.randint(0, range);
	var b = random.randint(0, range);
	var c = random.randint(0, range);
	var d = random.randint(0, range);
	var e = a * c - b * d ;
	var f = a * d + b * c ;

	var tmp = mul( [ a, b], [c, d]);

	var rea = tmp[0];
	var img = tmp[1];

	var x = div([rea, img], [a, b]);
	var z = div([rea, img], [c, d]);

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
}


});
