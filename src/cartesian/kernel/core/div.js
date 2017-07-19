
/**
 * Division algorithm
 */

export default ( div , pow2 , mul , add , sub ) => ( a , b , c , d ) => {

	const tmp = add( pow2( c ) , pow2( d ) ) ;

	const real = div( add( mul( a , c ) , mul( b , d ) ) , tmp ) ;
	const img  = div( sub( mul( b , c ) , mul( a , d ) ) , tmp ) ;

	return [ real , img ] ;

} ;
