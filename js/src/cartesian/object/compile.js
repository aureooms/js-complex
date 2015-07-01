
const compile = function ( {

	$1 ,
	add , sub , mul , div ,
	abs , arg ,
	con ,
	parse , stringify

} , symbol ) {

	return {

		"complex" : exports.complex ,
		"$1" : exports.$1( $1 ) ,
		"add" : exports.binary( add ) ,
		"sub" : exports.binary( sub ) ,
		"mul" : exports.binary( mul ) ,
		"div" : exports.binary( div ) ,
		"abs" : exports.unary( abs ) ,
		"arg" : exports.unary( arg ) ,
		"con" : exports.unary( con ) ,
		"parse" : exports.parse( parse ) ,
		"stringify" : exports.stringify ( stringify )

	} ;

} ;

exports.compile = compile ;
