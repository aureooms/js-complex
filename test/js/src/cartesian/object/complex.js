
var number = require("aureooms-js-number");

var random = require("aureooms-js-random");

var _ = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ).complex ;

var n = 100;

var range = Math.pow(2, 31);

test( "complex" , function ( ) {

for (var i = 0; i < n; ++i) {

	var a = random.randint(0, range);
	var b = random.randint(0, range);

	var tmp = _( a , b ) ;

	deepEqual( tmp , { real : a , img : b } , a + ", " + b ) ;

}

} ) ;
