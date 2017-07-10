import test from 'ava';
import * as number from "@aureooms/js-number" ;
import { cartesian } from '../../../../src' ;
const { $0 , complex }  = cartesian.object.compile( cartesian.kernel.compile( number ) ) ;

test( "$0" , t => t.deepEqual( $0( ) , complex( 0 , 0 ) ) ) ;
