
const div = ( base , sub ) => ( a , b , c , d ) => [ base( a , c ) , sub( b , d ) ] ;

exports.div = div ;
