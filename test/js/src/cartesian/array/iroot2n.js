
var number = require("aureooms-js-number");

var random = require("aureooms-js-random");

var iroot2n = complex.cartesian.array.compile( complex.cartesian.kernel.compile( number ) ).iroot2n ;

var n = 100;

test( "iroot2n" , function ( ) {

for (var i = 0; i < n; ++i) {

	var l = random.randint( 1 , 128 ) ;

	deepEqual( iroot2n( l ) , [ Math.cos( 2 * Math.PI / Math.pow( 2 , l ) ) , -Math.sin( 2 * Math.PI / Math.pow( 2 , l ) ) ] , l ) ;

}

} ) ;
