
/**
 * Division algorithm
 */

export default ( base , pow2 , mul , add , sub )  => function ( a , b , c , d ) {

	const tmp = add( pow2( c ) , pow2( d ) ) ;

	const real = base( add( mul( a , c ) , mul( b , d ) ) , tmp ) ;
	const img  = base( sub( mul( b , c ) , mul( a , d ) ) , tmp ) ;

	return [ real , img ] ;

}


