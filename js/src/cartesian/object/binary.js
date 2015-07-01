
const binary = kernel => ( { real : a , img : b } , { real : c , img : d } ) => fromarray( kernel( a , b , c , d ) ) ;

exports.binary = binary ;
