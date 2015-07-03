
const compile = function ( {

	add , sub , mul , div ,
	div2 , div2n ,
	neg ,
	sqrt , pow2 ,
	PI , cos , sin , atan2 ,
	parse , stringify ,
	$0 , $1 , $_1 ,
	eq0 , eq1 , eq_1 , gt0

} , symbol ) {

	const _mul = exports.mul( mul , add , sub ) ;

	return {

		"$0" : exports.$0( $0 ) ,
		"$1" : exports.$1( $0 , $1 ) ,
		"root2n" : exports.root2n( cos , sin , PI , div2n ) ,
		"iroot2n" : exports.iroot2n( cos , sin , PI , div2n , neg ) ,
		"add" : exports.add( add ) ,
		"sub" : exports.sub( sub ) ,
		"mul" : _mul ,
		"imul" : _mul ,
		"div" : exports.div( div , pow2 , mul , add , sub ) ,
		"div2" : exports.div2( div2 ) ,
		"abs" : exports.abs( sqrt , pow2 , add ) ,
		"arg" : exports.arg( atan2 ) ,
		"con" : exports.con( neg ) ,
		"parse" : exports.parse( parse , $0 , $1 , $_1 , symbol ) ,
		"stringify" : exports.stringify ( stringify , eq0 , eq1 , eq_1 , gt0 , symbol )

	} ;

} ;

exports.compile = compile ;
