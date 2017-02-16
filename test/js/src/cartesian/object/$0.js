
var number = require("@aureooms/js-number");

var $0 = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ).$0 ;
var _ = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ).complex ;

test( "$0" , function ( ) {

	deepEqual( $0( ) , _( 0 , 0 ) , "$0" ) ;

} ) ;
