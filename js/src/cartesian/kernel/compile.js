
const compile = function ( {

	add , sub , mul , div ,
	neg ,
	sqrt , pow2 , atan2 ,
	parse , stringify ,
	zero , one , minusone ,
	eq0 , eq1 , eqm1 , gt0

} , symbol ) {

	return {

		"one" : exports.one( zero , one ) ,
		"add" : exports.add( add ) ,
		"sub" : exports.sub( sub ) ,
		"mul" : exports.mul( mul , add , sub ) ,
		"div" : exports.div( div , pow2 , mul , add , sub ) ,
		"abs" : exports.abs( sqrt , pow2 , add ) ,
		"arg" : exports.arg( atan2 ) ,
		"con" : exports.con( neg ) ,
		"parse" : exports.parse( base , zero , one , minusone , symbol ) ,
		"stringify" : exports.stringify ( base , eq0 , eq1 , eqm1 , gt0 , symbol )

	} ;

} ;

exports.compile = compile ;
