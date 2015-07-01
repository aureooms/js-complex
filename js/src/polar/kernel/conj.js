
/**
 * Conjugate for polar representation
 */

const conj = neg => ( a , b ) => [ a , neg( b ) ] ;

exports.conj = conj ;
