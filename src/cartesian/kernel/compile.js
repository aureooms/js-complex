import core from './core' ;

export default function compile ( {

	add , sub , mul , div ,
	div2 , div2n ,
	neg ,
	sqrt , pow2 , exp ,
	loge ,
	PI , cos , sin , atan2 ,
	parse , stringify ,
	$0 , $1 , $_1 ,
	eq0 , eq1 , eq_1 , gt0

} , symbol ) {

	const _mul = core.mul( mul , add , sub ) ;
	const _exp = core.exp( exp , cos , sin , mul ) ;
	const _abs = core.abs( sqrt , pow2 , add ) ;
	const _arg = core.arg( atan2 ) ;

	return {

		"$0" : core.$0( $0 ) ,
		"$1" : core.$1( $0 , $1 ) ,
		"root2n" : core.root2n( cos , sin , PI , div2n ) ,
		"iroot2n" : core.iroot2n( cos , sin , PI , div2n , neg ) ,
		"add" : core.add( add ) ,
		"sub" : core.sub( sub ) ,
		"mul" : _mul ,
		"imul" : _mul ,
		"div" : core.div( div , pow2 , mul , add , sub ) ,
		"div2" : core.div2( div2 ) ,
		"abs" : _abs ,
		"arg" : _arg ,
		"con" : core.con( neg ) ,
		"parse" : core.parse( parse , $0 , $1 , $_1 , symbol ) ,
		"stringify" : core.stringify ( stringify , eq0 , eq1 , eq_1 , gt0 , symbol ) ,
		"exp" : _exp ,
		"pow" : core.pow( _exp , _abs , _arg , loge , mul , sub , add ) ,

	} ;

}

