
var number = require("@aureooms/js-number");

var $0 = complex.cartesian.array.compile( complex.cartesian.kernel.compile( number ) ).$0 ;

test( "$0" , function ( ) {

	deepEqual( $0( ) , [ 0 , 0 ] , "$0" ) ;

} ) ;
