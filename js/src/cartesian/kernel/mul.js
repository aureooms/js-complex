
/**
 * Multiplication algorithm
 */

const mul = ( base , add , sub ) =>  ( a , b , c , d ) => [ sub( base( a , c ) , base( b , d ) ) ,  add( base( a , d ) , base( b , c ) ) ] ;

exports.mul = mul ;
