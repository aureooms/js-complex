import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { randint } from "@aureooms/js-random" ;
import { cartesian } from '../../../../src' ;

const { mul , div , complex } = cartesian.object.compile( cartesian.kernel.compile( number ) ) ;

test( "mul + div " , t => {

	const n = 100;

	const range = Math.pow(2, 16);

	for (let i = 0; i < n; ++i) {
		const a = randint(0, range);
		const b = randint(0, range);
		const c = randint(0, range);
		const d = randint(0, range);
		const e = a * c - b * d ;
		const f = a * d + b * c ;

		const tmp = mul( complex( a, b), complex(c, d));

		const rea = tmp.real;
		const img = tmp.img;

		const x = div(complex(rea, img), complex(a, b));
		const z = div(complex(rea, img), complex(c, d));

		t.deepEqual(
			[rea, img], [e, f],
			`(${a} + ${b}) * (${c} + ${d}) === (${e} + ${f})`
		);

		t.deepEqual(
			x, complex(c, d),
			`(${rea} + ${img}i) / (${a} + ${b}i) === (${c} + ${d}i)`
		);

		t.deepEqual(
			z, complex(a, b),
			`(${rea} + ${img}i) / (${c} + ${d}i) === (${a} + ${b}i)`
		);
	}


});
