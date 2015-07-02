
// l > 0
const iroot2n = ( cos , sin , pi , div2n , neg ) => l => [ cos( div2n( pi , l - 1 ) ) , neg( sin( div2n( pi , l - 1 ) ) ) ] ;

exports.iroot2n = iroot2n ;


