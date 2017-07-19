
/**
 * Multiplication algorithm
 */

export default ( mul , add , sub ) =>  ( a , b , c , d )  => [ sub( mul( a , c ) , mul( b , d ) ) ,  add( mul( a , d ) , mul( b , c ) ) ] ;

