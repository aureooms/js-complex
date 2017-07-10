import test from 'ava';
import { cartesian } from '../../../../src' ;

import * as number from "@aureooms/js-number" ;

import { randint } from "@aureooms/js-random" ;

var iroot2n = cartesian.object.compile( cartesian.kernel.compile( number ) ).iroot2n ;
var _ = cartesian.object.compile( cartesian.kernel.compile( number ) ).complex ;

var n = 100;

test( "iroot2n" , t => {

for (var i = 0; i < n; ++i) {

	var l = randint( 1 , 128 ) ;

	t.deepEqual( iroot2n( l ) , _( Math.cos( 2 * Math.PI / Math.pow( 2 , l ) ) , -Math.sin( 2 * Math.PI / Math.pow( 2 , l ) ) ) , l ) ;

}

} ) ;
