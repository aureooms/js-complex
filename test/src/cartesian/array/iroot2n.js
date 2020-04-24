import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { randint } from "@aureooms/js-random" ;
import { cartesian } from '../../../../src' ;

const { iroot2n } = cartesian.array.compile( cartesian.kernel.compile( number ) ) ;


test( "iroot2n" , t => {

	const n = 100;

	for (let i = 0; i < n; ++i) {

		let l = randint( 1 , 128 ) ;

		t.deepEqual( iroot2n( l ) , [ Math.cos( 2 * Math.PI / Math.pow( 2 , l ) ) , -Math.sin( 2 * Math.PI / Math.pow( 2 , l ) ) ] , l.toString() ) ;

	}

} ) ;
