
const compile = function ( {

	add , sub , mul , div ,
	neg ,
	cos , sin

} , symbol ) {

	return {

		"mul" : exports.mul( mul , add ) ,
		"div" : exports.div( div , sub ) ,
		"real" : exports.real( mul , cos ) ,
		"img" : exports.img( mul , sin ) ,
		"con" : exports.con( neg ) ,

	} ;

} ;

exports.compile = compile ;
