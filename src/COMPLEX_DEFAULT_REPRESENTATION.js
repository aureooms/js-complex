import COMPLEX_DEFAULT_DISPLAY from './COMPLEX_DEFAULT_DISPLAY' ;

/*
 * Biggest power of DEFAULT_DISPLAY whose square holds in a single double
 * with full precision. For working correctly with multiplication algorithms
 * and for fast base DEFAULT_DISPLAY printing. On older machines with no
 * native doubles, it might be worth to only use ints.
 */
export default COMPLEX_DEFAULT_DISPLAY ;
