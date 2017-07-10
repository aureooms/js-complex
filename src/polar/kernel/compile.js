import core from './core' ;

export default function compile ( {

	add , sub , mul , div ,
	neg ,
	cos , sin

} , symbol ) {

	return {

		"mul" : core.mul( mul , add ) ,
		"div" : core.div( div , sub ) ,
		"real" : core.real( mul , cos ) ,
		"img" : core.img( mul , sin ) ,
		"con" : core.con( neg ) ,

	} ;

}

