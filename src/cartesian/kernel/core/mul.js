
/**
 * Multiplication algorithm
 */

export default ( base , add , sub ) =>  ( a , b , c , d )  => [ sub( base( a , c ) , base( b , d ) ) ,  add( base( a , d ) , base( b , c ) ) ] ;

