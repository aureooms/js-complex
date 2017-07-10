
/**
 * Subtraction algorithm
 *
 * Returns the result of (a + bi) - (c + di).
 */

export default base => ( a , b , c , d )  => [ base( a , c ) , base( b , d ) ] ;

