import test from 'ava';
import { cartesian } from '../../../../src' ;

import * as number from '@aureooms/js-number' ;

const symbol = 'i' ;

const { parse } = cartesian.array.compile( cartesian.kernel.compile( number , symbol ) ) ;

function macro ( t , a , b , c ) {
	t.deepEqual(parse(c, 0, c.length), [a, b], c);
}

macro.title = ( given , a , b , c ) => `parse(${c})` ;

test(macro, 0,   0, "");
test(macro, 0,   0, "0");

test(macro, 0,   1, "i");
test(macro, 0,   1, "+i");
test(macro, 0,  -1, "-i");

test(macro, 0,   2, "2i");
test(macro, 0,  -2, "-2i");

test(macro,  1,  0, "1");
test(macro, -1,  0, "-1");

test(macro,  1,  1, "1+i");
test(macro, -1,  1, "-1+i");

test(macro,  1, -1, "1-i");
test(macro, -1, -1, "-1-i");

test(macro,  1,  2, "1+2i");
test(macro, -1,  2, "-1+2i");

test(macro,  1, -2, "1-2i");
test(macro, -1, -2, "-1-2i");
