import test from 'ava';

import { cartesian } from '../../../../src' ;

import * as number from "@aureooms/js-number" ;

import { randint } from "@aureooms/js-random" ;

var _ = cartesian.object.compile( cartesian.kernel.compile( number ) ).complex ;

var n = 100;

var range = Math.pow(2, 31);

test( "complex" , t => {

for (var i = 0; i < n; ++i) {

	var a = randint(0, range);
	var b = randint(0, range);

	var tmp = _( a , b ) ;

	t.deepEqual( tmp.real , a , `${a}, ${b} .real` ) ;
	t.deepEqual( tmp.img , b , `${a}, ${b} .img` ) ;

}

} ) ;
