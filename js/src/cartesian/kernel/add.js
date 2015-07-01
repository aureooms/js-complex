
/**
 * Addition algorithm.
 *
 * Returns the result of (a + bi) + (c + di).
 */

const add = base => ( a , b , c , d ) => [ base( a , c ) , base( b , d ) ] ;

exports.add = add ;
