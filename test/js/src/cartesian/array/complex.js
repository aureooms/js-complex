
var number = require("aureooms-js-number");

var random = require("aureooms-js-random");

var _complex = complex.cartesian.array.compile( complex.cartesian.kernel.compile( number ) ).complex ;

var n = 100;

var range = Math.pow(2, 31);

test( "complex" , function ( ) {

for (var i = 0; i < n; ++i) {

	var a = random.randint(0, range);
	var b = random.randint(0, range);

	var tmp = _complex( a , b ) ;

	deepEqual( tmp , [ a , b ] , a + ", " + b ) ;

}

} ) ;
