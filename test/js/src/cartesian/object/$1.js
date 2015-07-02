
var number = require("aureooms-js-number");

var $1 = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ).$1 ;
var _ = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ).complex ;

test( "$1" , function ( ) {

	deepEqual( $1( ) , _( 1 , 0 ) , "$1" ) ;

} ) ;
