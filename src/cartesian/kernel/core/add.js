
/**
 * Addition algorithm.
 *
 * Returns the result of (a + bi) + (c + di).
 */

export default add => ( a , b , c , d )  => [ add( a , c ) , add( b , d ) ] ;

