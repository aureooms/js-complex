
const unary = kernel => ( { real : a , img : b } ) => fromarray( kernel( a , b ) ) ;

exports.unary = unary ;
