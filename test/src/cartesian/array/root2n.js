import test from 'ava';
import { cartesian } from '../../../../src' ;

import * as number from "@aureooms/js-number" ;

import { randint } from "@aureooms/js-random" ;

const { root2n } = cartesian.array.compile( cartesian.kernel.compile( number ) ) ;

function macro ( t , l ) {

	t.deepEqual( root2n( l ) , [ Math.cos( 2 * Math.PI / Math.pow( 2 , l ) ) , Math.sin( 2 * Math.PI / Math.pow( 2 , l ) ) ] , l.toString() ) ;

}

macro.title = ( given , l ) => `root2n(${l})` ;

for ( let l  = 0 ; l < 128 ; ++l ) test( macro , l ) ;
