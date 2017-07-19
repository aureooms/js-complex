import test from 'ava' ;
import { complex } from '../../src' ;

function forop ( op , repr ) {

	const macro = function ( t , A , B , C ) {
		const a = complex.parse( A ) ;
		const b = complex.parse( B ) ;
		t.is( op( a , b ).toString( ) , C ) ;
	}

	macro.title = ( given, A, B, C ) => `(${A}) ${repr} (${B}) = ${C}` ;

	return macro ;

}

const add = forop( complex.add , '+' ) ;
const sub = forop( complex.sub , '-' ) ;
const mul = forop( complex.mul , '*' ) ;
const div = forop( complex.div , '/' ) ;

test( mul, '2+3j' , '1-7j' , '23-11j' ) ;

test( add, '2+3j' , '1-7j' , '3-4j' ) ;

test( sub, '2+3j' , '1-7j' , '1+10j' ) ;

test( div, '23-11j' , '1-7j' , '2+3j' ) ;
