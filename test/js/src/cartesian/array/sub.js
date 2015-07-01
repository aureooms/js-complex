
var format = require("util").format ;

var number = require("aureooms-js-number");

var random = require("aureooms-js-random");

var sub = complex.cartesian.array.compile( complex.cartesian.kernel.compile( number ) ).sub ;

var n = 100;

var range = Math.pow(2, 31);

test( "sub" , function ( ) {

for (var i = 0; i < n; ++i) {

	var a = random.randint(0, range);
	var b = random.randint(0, range);
	var c = random.randint(0, range);
	var d = random.randint(0, range);
	var e = a - c;
	var f = b - d;

	var tmp = sub( [ a , b ] , [ c , d ] );

	var real = tmp[0];
	var img = tmp[1];

	deepEqual(real, e, format("%d - %d === %d", a, c, e));
	deepEqual(img, f, format("%d - %d === %d", b, d, f));
}

} ) ;
