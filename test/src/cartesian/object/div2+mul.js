import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { randint } from "@aureooms/js-random" ;
import { cartesian } from '../../../../src' ;

const { mul , div2 , complex } = cartesian.object.compile( cartesian.kernel.compile( number ) ) ;


test( "mul + div2 " , t => {

	const n = 100;

	const range = Math.pow(2, 16);

	for (let i = 0; i < n; ++i) {
		const a = randint(0, range);
		const b = randint(0, range);
		const c = 2;
		const d = 0;
		const e = a * c - b * d ;
		const f = a * d + b * c ;

		const tmp = mul( complex( a, b), complex(c, d));

		const rea = tmp.real;
		const img = tmp.img;

		const z = div2(complex(rea, img));

		t.deepEqual(
			[rea, img], [e, f],
			`(${a} + ${b}i) * (${c} + ${d}i) === (${e} + ${f})`
		);

		t.deepEqual(
			z, complex(a, b),
			`(${rea} + ${img}i) / (${c} + ${d}i) === (${a} + ${b})`
		);
	}

});
