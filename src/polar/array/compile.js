import core from './core' ;

export default function compile ( {

	mul , div ,
	real , img ,
	con

} , symbol ) {

	return {

		"complex" : core.complex ,
		"mul" : core.binary( mul ) ,
		"div" : core.binary( div ) ,
		"real" : core.real( real ) ,
		"img" : core.img( img ) ,
		"con" : core.unary( con ) ,

	} ;

}

