
/**
 * Conjugate for cartesian representation
 */

const conj = neg => ( a , b ) => [ a , neg( b ) ] ;

exports.conj = conj ;
