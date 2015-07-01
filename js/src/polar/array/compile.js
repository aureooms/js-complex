
const compile = function ( {

	mul , div ,
	real , img ,
	con

} , symbol ) {

	return {

		"complex" : exports.complex ,
		"mul" : exports.binary( mul ) ,
		"div" : exports.binary( div ) ,
		"real" : exports.real( real ) ,
		"img" : exports.img( img ) ,
		"con" : exports.unary( con ) ,

	} ;

} ;

exports.compile = compile ;
