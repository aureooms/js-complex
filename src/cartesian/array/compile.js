import core from './core' ;

export default function compile ( {

	$0 , $1 , root2n , iroot2n ,
	add , sub , mul , div ,
	imul ,
	div2 ,
	abs , arg ,
	con ,
	parse , stringify

} , symbol ) {

	return {

		"complex" : core.complex ,
		"$0" : $0 ,
		"$1" : $1 ,
		"root2n" : root2n ,
		"iroot2n" : iroot2n ,
		"add" : core.binary( add ) ,
		"sub" : core.binary( sub ) ,
		"mul" : core.binary( mul ) ,
		"imul" : core.binary( imul ) ,
		"div" : core.binary( div ) ,
		"div2" : core.unary( div2 ) ,
		"abs" : core.unary( abs ) ,
		"arg" : core.unary( arg ) ,
		"con" : core.unary( con ) ,
		"parse" : parse ,
		"stringify" : core.unary ( stringify )

	} ;

}

