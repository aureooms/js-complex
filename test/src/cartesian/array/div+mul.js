import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { randint } from "@aureooms/js-random" ;
import { cartesian } from '../../../../src' ;

const { mul , div } = cartesian.array.compile( cartesian.kernel.compile( number ) ) ;

const n = 100;

const range = Math.pow(2, 16);

test( "mul + div" , t => {

	for (let i = 0; i < n; ++i) {
		let a = randint(0, range);
		let b = randint(0, range);
		let c = randint(0, range);
		let d = randint(0, range);
		let e = a * c - b * d ;
		let f = a * d + b * c ;

		let [ rea , img ] = mul( [ a, b], [c, d]);

		let x = div([rea, img], [a, b]);
		let z = div([rea, img], [c, d]);

		t.deepEqual(
			[rea, img], [e, f],
			`(${a} + ${b}i) * (${c} + ${d}i) === (${e} + ${f}i)`
		);

		t.deepEqual(
			x, [c, d],
			`(${rea} + ${img}i) / (${a} + ${b}i) === (${c} + ${d}i)`
		);

		t.deepEqual(
			z, [a, b],
			`(${rea} + ${img}i) / (${c} + ${d}i) === (${a} + ${b}i)`
		);
	}

});
