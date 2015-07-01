
const parse = kernel => ( s , i , j ) => fromarray( kernel( s , i , j ) ) ;

exports.parse = parse;
