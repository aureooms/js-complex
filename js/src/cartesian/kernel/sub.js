
/**
 * Subtraction algorithm
 *
 * Returns the result of (a + bi) - (c + di).
 */

const sub = base => ( a , b , c , d ) => [ base( a , c ) , base( b , d ) ] ;

exports.sub = sub ;
