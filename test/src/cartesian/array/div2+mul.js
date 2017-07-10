import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { randint } from "@aureooms/js-random" ;
import { cartesian } from '../../../../src' ;

const { mul , div2 } = cartesian.array.compile( cartesian.kernel.compile( number ) ) ;

test( "mul + div2 " , t => {

	const n = 100;

	const range = Math.pow(2, 16);

	for (let i = 0; i < n; ++i) {
		let a = randint(0, range);
		let b = randint(0, range);
		let c = 2;
		let d = 0;
		let e = a * c - b * d ;
		let f = a * d + b * c ;

		let tmp = mul( [ a, b], [c, d]);

		let rea = tmp[0];
		let img = tmp[1];

		let z = div2([rea, img]);

		t.deepEqual(
			[rea, img], [e, f],
			`(${a} + ${b}i) * (${c} + ${d}i) === (${e} + ${f}i)`
		);

		t.deepEqual(
			z, [a, b],
			`(${rea} + ${img}i) / (${c} + ${d}i) === (${a} + ${b}i)`
		);
	}

});
