import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { randint } from "@aureooms/js-random" ;
import { cartesian } from '../../../../src' ;

const { sub } = cartesian.array.compile( cartesian.kernel.compile( number ) ) ;

function macro ( t , a , b , c , d ) {

	const e = a - c;
	const f = b - d;

	const [ real , img ] = sub( [ a , b ] , [ c , d ] );

	t.deepEqual(real, e, `${a} - ${c} === ${e}`);
	t.deepEqual(img, f, `${b} - ${d} === ${f}`);

}

macro.title = ( given , a , b , c , d ) => `sub([${a}, ${b}], [${c}, ${d}])` ;

const n = 100;

const range = Math.pow(2, 31);

for (let i = 0; i < n; ++i) {

	const a = randint(0, range);
	const b = randint(0, range);
	const c = randint(0, range);
	const d = randint(0, range);

	test( macro , a , b , c , d ) ;

}
