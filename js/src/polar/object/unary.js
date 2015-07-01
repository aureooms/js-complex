
const unary = kernel => ( { rho : a , theta : b } ) => fromarray( kernel( a , b ) ) ;

exports.unary = unary ;
