
/**
 * Computes the absolute value (or modulus or magnitude) of the complex number a + bi.
 */

export default ( sqrt , pow2 , add ) => ( a , b )  => sqrt( add( pow2( a ) , pow2( b ) ) ) ;

