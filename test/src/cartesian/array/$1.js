import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { cartesian } from '../../../../src' ;

const { $1 } = cartesian.array.compile( cartesian.kernel.compile( number ) ) ;

test( "$1" , t => t.deepEqual( $1( ) , [ 1 , 0 ] ) ) ;
