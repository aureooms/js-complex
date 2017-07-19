import * as number from '@aureooms/js-number' ;

import compile from './cartesian/kernel/compile' ;

const model = number ;
const symbol = 'j' ;

export default {
	type : 'cartesian' , // cartesian or polar
	model ,
	symbol ,
	kernel : compile( model , symbol ) ,
} ;
