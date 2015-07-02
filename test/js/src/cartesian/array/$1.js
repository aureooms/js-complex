
var number = require("aureooms-js-number");

var $1 = complex.cartesian.array.compile( complex.cartesian.kernel.compile( number ) ).$1 ;

test( "$1" , function ( ) {

	deepEqual( $1( ) , [ 1 , 0 ] , "$1" ) ;

} ) ;
