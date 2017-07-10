import test from 'ava';
import { cartesian } from '../../../../src';

import * as number from "@aureooms/js-number" ;

var $1 = cartesian.object.compile( cartesian.kernel.compile( number ) ).$1 ;
var _ = cartesian.object.compile( cartesian.kernel.compile( number ) ).complex ;

test( "$1" , t => {

	t.deepEqual( $1( ) , _( 1 , 0 ) , "$1" ) ;

} ) ;
