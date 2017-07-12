import COMPLEX_DEFAULT_DISPLAY from './COMPLEX_DEFAULT_DISPLAY' ;
import CC from './CC' ;

export function $0 ( ) {
	return CC.$0() ;
}

export function $1 ( ) {
	return CC.$1() ;
}

export function parse ( object , base = undefined , is_negative = 0 ) {
	return CC.from( object , base , is_negative ) ;
}

export function stringify ( complex , display = COMPLEX_DEFAULT_DISPLAY ) {
	return complex.toString( display ) ;
}

export function add ( first , second ) {
	return first.add(second) ;
}

export function iadd ( first , second ) {
	return first.iadd(second) ;
}

export function sub ( first , second ) {
	return first.sub(second) ;
}

export function isub ( first , second ) {
	return first.isub(second) ;
}

export function mul ( first , second ) {
	return first.mul(second) ;
}

export function imul ( first , second ) {
	return first.imul(second) ;
}

export function pow ( first , second ) {
	return first.pow(second) ;
}

export function ipow ( first , second ) {
	return first.ipow(second) ;
}

export function div ( first , second ) {
	return first.div(second) ;
}

export function idiv ( first , second ) {
	return first.idiv(second) ;
}

export function mod ( first , second ) {
	return first.mod(second) ;
}

export function imod ( first , second ) {
	return first.imod(second) ;
}
