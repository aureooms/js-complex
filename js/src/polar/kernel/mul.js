
const mul = ( base , add ) => ( a , b , c , d ) => [ base( a , c ) , add( b , d ) ] ;

exports.mul = mul ;
