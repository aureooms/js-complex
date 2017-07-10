import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { randint } from "@aureooms/js-random" ;
import { cartesian } from '../../../../src' ;

const { complex } = cartesian.array.compile( cartesian.kernel.compile( number ) ) ;

const n = 100;

const range = Math.pow(2, 31);

test( "complex" , t => {

	for (let i = 0; i < n; ++i) {

		const a = randint(0, range);
		const b = randint(0, range);

		const tmp = complex( a , b ) ;

		t.deepEqual( tmp , [ a , b ] , a + ", " + b ) ;

	}

} ) ;
