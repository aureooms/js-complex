
const compile = function ( {

	add , sub , mul , div ,
	neg ,
	sqrt , pow2 , atan2 ,
	parse , stringify ,
	$0 , $1 , $_1 ,
	eq0 , eq1 , eq_1 , gt0

} , symbol ) {

	return {

		"$1" : exports.$1( $0 , $1 ) ,
		"add" : exports.add( add ) ,
		"sub" : exports.sub( sub ) ,
		"mul" : exports.mul( mul , add , sub ) ,
		"div" : exports.div( div , pow2 , mul , add , sub ) ,
		"abs" : exports.abs( sqrt , pow2 , add ) ,
		"arg" : exports.arg( atan2 ) ,
		"con" : exports.con( neg ) ,
		"parse" : exports.parse( parse , $0 , $1 , $_1 , symbol ) ,
		"stringify" : exports.stringify ( stringify , eq0 , eq1 , eq_1 , gt0 , symbol )

	} ;

} ;

exports.compile = compile ;
